/** Generates Key Events and passes them on to one or more event observers.
    Requires dr.DomObservable as a callSuper mixin. */
define(function(require, exports, module) {
    var dr = require('$LIB/dr/dr.js'),
        JS = require('$LIB/jsclass.js'),
        sprite = require('$SPRITE/sprite.js');
    require('./PlatformObservable.js');
    
    module.exports = sprite.KeyObservable = new JS.Module('sprite.KeyObservable', {
        // Class Methods and Attributes ////////////////////////////////////////////
        extend: {
            /** A map of supported key event types. */
            EVENT_TYPES:{
                onkeypress:true,
                onkeydown:true,
                onkeyup:true
            },
            
            /** Gets the key code from the provided key event.
                @param platformEvent:event
                @returns number The keycode from the event. */
            getKeyCodeFromEvent: function(platformEvent) {
                return platformEvent.keyCode || platformEvent.charCode;
            }
        },	
        
        
        // Methods /////////////////////////////////////////////////////////////////
        /** @overrides dr.sprite.PlatformObservable */
        createPlatformMethodRef: function(platformObserver, methodName, type) {
            return this.createStandardPlatformMethodRef(platformObserver, methodName, type, sprite.KeyObservable) || 
                this.callSuper(platformObserver, methodName, type);
        }
    });
});
