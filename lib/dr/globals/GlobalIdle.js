/** Provides idle events. Registered with dr.global as 'idle'.
    
    Events:
        onidle:object Fired when a browser idle event occurs. The event value is
            an object containing:
                delta: The time in millis since the last idle evnet.
                time: The time in millis of this idle event.
    
    Private Attributes:
        __running:boolean Indicates if onidle events are currently being fired
            or not.
*/
define(function(require, exports, module) {
    var dr = require('$LIB/dr/dr.js'),
        JS = require('$LIB/jsclass.js'),
        GlobalRegistry = require('./Global.js'),
        GlobalIdleSprite = require('$SPRITE/GlobalIdle.js');
    require('$LIB/dr/events/Observer.js');
    require('$LIB/dr/Eventable.js');
    
    module.exports = new JS.Singleton('GlobalIdle', {
        include: [
            require('$LIB/dr/SpriteBacked.js'),
            require('$LIB/dr/events/Observable.js')
        ],
        
        
        // Constructor /////////////////////////////////////////////////////////////
        initialize: function() {
            this.__running = false;
            this.set_sprite(this.createSprite());
            
            // Store in dr namespace for backwards compatibility with dreem
            if (dr.idle) {
                dr.dumpStack('dr.idle already set.');
            } else {
                dr.idle = this;
            }
            
            GlobalRegistry.register('idle', this);
        },
        
        createSprite: function(attrs) {
            return new GlobalIdleSprite(this);
        },
        
        
        // Methods /////////////////////////////////////////////////////////////////
        /** @overrides dr.Observable */
        attachObserver: function(observer, methodName, type) {
            var retval = this.callSuper(observer, methodName, type);
            
            // Start firing onidle events
            if (!this.__running && this.hasObservers('onidle')) {
                this.__running = true;
                this.sprite.start();
            }
            
            return retval;
        },
        
        /** @overrides dr.Observable */
        detachObserver: function(observer, methodName, type) {
            var retval = this.callSuper(observer, methodName, type);
            
            // Stop firing onidle events
            if (this.__running && !this.hasObservers('onidle')) {
                this.sprite.stop();
                this.__running = false;
            }
            
            return retval;
        },
        
        /** Invokes the provided callback function once on the next idle event.
            @param callback:function/string The function to call or a path
                to a function to call relative to the provided scope.
            @param scope:object (optional) If provided this scope will be
                bound to the callback function.
            @returns void */
        callOnIdle: function(callback, scope) {
            if (callback) {
                if (scope) {
                    if (typeof callback === 'string') {
                        callback = dr.resolveName(callback, scope);
                    }
                    if (typeof callback === 'function') {
                        callback = callback.bind(scope);
                    } else {
                        dr.dumpStack('callOnIdle: Provided callback was not a function or a string that resolves to a function.');
                        return;
                    }
                }
                
                var observer = new dr.Eventable({}, [{
                    invoke: function(event) {
                            try {
                                callback(event.time, event.delta);
                            } catch (e) {
                                dr.dumpStack(e);
                            } finally {
                                this.destroy();
                            }
                        }
                    }]);
                observer.listenTo(this, 'onidle', 'invoke', true);
            }
        }
    });
});
