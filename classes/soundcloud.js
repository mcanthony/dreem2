/*
 The MIT License (see LICENSE)
 Copyright (C) 2014-2015 Teem2 LLC
*/
define(function(require, exports, module){
	var node = require("$CLASSES/teem_node")

	return node.extend("soundcloud", function(){
		this.__attribute('init', 'event')
		this.loadUrl = function(){
			
		}
	})
})