/*
 The MIT License (see LICENSE)
 Copyright (C) 2014-2015 Teem2 LLC
*/

/**
 * @class NodeWebSocket {Internal}
 * Clean and simple websocket implementation for node
 */

define(function(require, exports, module){
	module.exports = NodeWebSocket
	var crypto = require('crypto')
	var url = require('url')
	var http = require('http')
	/** 
	  * @constructor 
	  * @param {Request} req The node request object to construct from
	  * @param {Socket} socket The socket object to connect to
	  */

	function NodeWebSocket(req, socket){
		if(typeof req == 'string'){
			this.initClient(req)
		}
		else{
			this.initServer(req, socket)
		}
	}

	body.call(NodeWebSocket.prototype)

	function body(){

		this.initClient = function(server_url){

			this.url = url.parse(server_url)
			// ok lets connect to a server
			var host = this.url.hostname + ':' + this.url.port
			// begin handshake
			var key = new Buffer(13 + '-' + Date.now()).toString('base64');
			var shasum = crypto.createHash('sha1');
			shasum.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');
			this.expectedServerKey = shasum.digest('base64');

			var origin =  host + this.url.path
			var opt = {
				port: this.url.port,
				host: this.url.hostname,
				path: this.url.path,
				headers: {
					'connection': 'Upgrade',
					'upgrade': 'websocket',
					'pragma':'no-cache',
					'host': host,
					'origin': 'http://' + origin,
					'sec-websocket-version': 13,
					'sec-websocket-key': key,
				}
			}
			var req = http.request(opt)

			req.on('error', function(err){
				console.log("WebSocket client " + err)
				if(this.onError) this.onError(err)
			}.bind(this))

			req.once('response', function(){
				console.log('WebSocket unexpected response')
			}.bind(this))

			req.once('upgrade', function(res, socket, upgradehead){
				if(res.headers['sec-websocket-accept'] != this.expectedServerKey){
					console.log('WebSocket unexpected server key')
				}
				this.socket = socket
				this.initState()
				if(this.onConnect) this.onConnect()
			}.bind(this))

			req.end()
		}

		this.initServer = function(req, socket){
			var version = req.headers['sec-websocket-version']
			if(version != 13){
				console.log("Incompatible websocket version requested (need 13) " + version)
				return socket.destroy()
			}

			this.socket = socket
			
		 	// calc key
			var key = req.headers['sec-websocket-key']
			var sha1 = crypto.createHash('sha1');
			sha1.update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
			var ack = 'HTTP/1.1 101 Switching Protocols\r\n'+
				'Upgrade: websocket\r\n'+
				'Connection: Upgrade\r\n'+
				'Sec-WebSocket-Accept: ' + sha1.digest('base64') +'\r\n\r\n'

			this.socket.write(ack)
			this.is_server = true
			this.initState()
			this.first_queue = []
		}

		this.initState = function(){

			this.max = 100000000 // maximum receive buffer size (10 megs)
			this.header = new Buffer(14) // header
			this.output = new Buffer(10000) // output
			this.state = this.opcode // start in the opcode state
			this.expected = 1 // the bytes expected for the next state
			this.written = 0 // how much we have written in the output buffers
			this.read = 0 // the bytes we've read
			this.input = 0 // the input buffer received from the socket
			this.maskoff = 0 // the offset in the mask
			this.maskcount = 0 // mask counter
			this.paylen = 0 // payload length
			this.readyState = 1
			// 10 second ping frames
			this.pingframe = new Buffer(2)
			this.pingframe[0] = 9 | 128
			this.pingframe[1] = 0

			this.pongframe = new Buffer(2)
			this.pongframe[0] = 10 | 128
			this.pongframe[1] = 0

			if(this.is_server){
				this.ping_interval = setInterval(function(){
					if(!this.socket) clearInterval(this.ping_interval)
					else this.socket.write(this.pingframe)
				}.bind(this), 10000)
			}

			// Main socket data loop, uses state function to parse
			this.socket.on('data', function(data){
				this.input = data
				this.read = 0
				while(this.state());
			}.bind(this))

			this.socket.on('close', function(){
				this.close()
			}.bind(this))
		}

		/** 
		  * @event onMessage 
		  * @param {String} message The incoming message
		  */
		this.onMessage = function(message){
		}

		/** 
		  * @event onClose
		  */
		this.onClose = function(){
		}

		/** 
		  * @event onError
		  * @param {String} error The error
		  */
		this.onError = function(error){
		}

		this.error = function(t){
			console.log("Error on websocket " + t)
			this.onError(t)
			this.close()
		}

		/** 
		  * @method send
		  * Send message on socket
		  * @param {String|Buffer} data Data to send
		  */
		this.send = function(data){
			if(this.first_queue){
				// put a tiny gap between a server connect and first data send
				if(!this.first_queue.length){
					setTimeout(function(){
						var q = this.first_queue
						this.first_queue = undefined
						for(var i = 0;i < q.length;i++){
							this.send(q[i])
						}
					}.bind(this),10)
				}
				this.first_queue.push(data)
				return
			}
			if(typeof data !== 'string' && !(data instanceof Buffer)) data = JSON.stringify(data)
			if(!this.socket) return
			var head
			var buf = new Buffer(data)
			if(buf.length < 126){
				head = new Buffer(2)
				head[1] = buf.length
			} 
			else if (buf.length<=65535){
				head = new Buffer(4)
				head[1] = 126
				head.writeUInt16BE(buf.length, 2)
			} 
			else {
				head = new Buffer(10)
				head[1] = 127
				head[2] = head[3] = head[4] = head[5] = 0
				head.writeUInt32BE(buf.length, 6)
			}
			head[0] = 128 | 1
			this.socket.write(head)
			this.socket.write(buf)
		}

		/** 
		  * @method close
		  * Close socket
		  */
		this.close = function(){
			if(this.socket){
				this.onClose()
				this.socket.destroy()
				clearInterval(this.ping_interval)
				this.readyState = 3
			}
			this.socket = undefined
		}

		/* Internal head state */
		this.head = function(){
			var se = this.expected
			while(this.expected > 0 && this.read < this.input.length && this.written < this.header.length){
				this.header[this.written++] = this.input[this.read++], this.expected--
			}
			if(this.written > this.header.length) return this.err("unexpected data in header"+ se + s.toString())
			return this.expected != 0
		}

		/* Internal data state */
		this.data = function(){
			if(this.masked){
				while(this.expected > 0 && this.read < this.input.length){
					this.output[this.written++] = this.input[this.read++] ^ this.header[this.maskoff + (this.maskcount++&3)]
					this.expected--
				}
			}
			else{
				while(this.expected > 0 && this.read < this.input.length){
					this.output[this.written++] = this.input[this.read++]
					this.expected--
				}
			}

			if(this.expected) return false
			this.onMessage(this.output.toString('utf8', this.masked?0:2, this.written))
			this.expected = 1
			this.written = 0
			this.state = this.opcode
			return true
		}

		/* Internal mask state*/
		this.mask = function(){
			if(this.head()) return false
			if(!this.paylen){
				this.expected = 1
				this.written = 0
				this.state = this.opcode
				return true
			}
			this.maskoff = this.written - 4
			this.written = this.maskcount = 0
			this.expected = this.paylen
			if(this.paylen > this.max) return this.error("buffer size request too large " + l + " > " + max)
			if(this.paylen > this.output.length) this.output = new Buffer(this.paylen)
			this.state = this.data
			return true
		}

		/* Internal len8 state*/
		this.len8 = function(){
			if(this.head()) return false
			this.paylen = this.header.readUInt32BE(this.written - 4)
			this.expected = 4
			this.state = this.mask
			return true
		}

		/* Internal len2 state*/
		this.len2 = function(){
			if(this.head()) return 
			this.paylen = this.header.readUInt16BE(this.written - 2)
			this.expected = 4
			this.state = this.mask
			return true
		}

		/* Internal len1 state*/
		this.len1 = function(){
			if(this.head()) return false
			// we get plain data back
			if(!(this.header[this.written  - 1] & 128)){
				this.masked = false
				this.state = this.data
				this.expected = this.header[this.written  - 1]
				return true
			}
			else{
				this.masked = true
			}
			var type = this.header[this.written - 1] & 127
			if(type < 126){
				this.paylen = type
				this.expected = 4
				this.state = this.mask
			}
			else if(type == 126){
				this.expected = 2
				this.state = this.len2
			}
			else if(type == 127){
				this.expected = 8
				this.state = this.len8
			}
			return true
		}

		/* Internal pong state*/
		this.ping = function(){
			if(this.head()) return false
			if(this.header[this.written - 1] & 128){
				this.expected = 4
				this.paylen = 0
				this.state = this.mask
				return true
			}
			this.expected = 1
			this.written = 0 
			this.state = this.opcode
			this.socket.write(this.pongframe)
			return true
		}


		/* Internal pong state*/
		this.pong = function(){
			if(this.head()) return false
			if(this.header[this.written - 1] & 128){
				this.expected = 4
				this.paylen = 0
				this.state = this.mask
				return true
			}
			this.expected = 1
			this.written = 0 
			this.state = this.opcode
			return true
		}

		this.opcode = function(){
			if(this.head()) return
			var frame = this.header[0] & 128
			var type = this.header[0] & 15
			if(type == 1){
				if(!frame) return this.error("only final frames supported")
				this.expected = 1
				this.state = this.len1
				return true
			}
			if(type == 8) return this.close()
			if(type == 9){// ping frame
				this.expected = 1
				this.state = this.ping
				return true
			}
			if(type == 10){
				this.expected = 1
				this.state = this.pong
				return true
			}
			return this.error("opcode not supported " + type)
		}
	}
})