/** Provides an interface to platform specific global keyboard functionality. */
define(function(require, exports, module) {
    var dr = require('$LIB/dr/dr.js'),
        JS = require('$LIB/jsclass.js'),
        globalScope = require('$SPRITE/global.js'),
        sprite = require('./sprite.js');
    
   module.exports = sprite.GlobalKeys = new JS.Class('sprite.GlobalKeys', {
        include: [
            require('$SPRITE/events/PlatformObservable.js'),
            require('$SPRITE/events/KeyObservable.js')
        ],
        
        
        // Class Methods and Attributes ////////////////////////////////////////////
        extend: {
            KEYCODE_SHIFT:16,
            KEYCODE_CONTROL:17,
            KEYCODE_ALT:18,
            KEYCODE_COMMAND:91,
            KEYCODE_RIGHT_COMMAND:93
        },
        
        
        // Constructor /////////////////////////////////////////////////////////////
        /** The standard JSClass initializer function. Subclasses should not
            override this function.
            @param attrs:object A map of attribute names and values.
            @returns void */
        initialize: function(view, attrs) {
            this.view = view;
            this.platformObject = globalScope.document;
            
            this.__keysDown = {};
        },
        
        
        // Methods /////////////////////////////////////////////////////////////////
        /** Tests if a key is currently pressed down or not.
            @param keyCode:number the key to test.
            @returns true if the key is down, false otherwise. */
        isKeyDown: function(keyCode) {return !!this.__keysDown[keyCode];},
        
        /** Tests if the 'shift' key is down. */
        isShiftKeyDown: function() {return this.isKeyDown(sprite.GlobalKeys.KEYCODE_SHIFT);},
        
        /** Tests if the 'control' key is down. */
        isControlKeyDown: function() {return this.isKeyDown(sprite.GlobalKeys.KEYCODE_CONTROL);},
        
        /** Tests if the 'alt' key is down. */
        isAltKeyDown: function() {return this.isKeyDown(sprite.GlobalKeys.KEYCODE_ALT);},
        
        /** Tests if the 'command' key is down. */
        isCommandKeyDown: function() {
            return this.isKeyDown(sprite.GlobalKeys.KEYCODE_COMMAND) || this.isKeyDown(sprite.GlobalKeys.KEYCODE_RIGHT_COMMAND);
        },
        
        /** Tests if the platform specific "accelerator" key is down. */
        isAcceleratorKeyDown: function() {
            return this.isControlKeyDown();
        },
        
        /** @private */
        handleFocusChange: function(focused) {
            var view = this.view;
            if (focused) {
                this.__unlistenToDocument();
                
                view.listenToPlatform(focused, 'onkeydown', '__handleKeyDown');
                view.listenToPlatform(focused, 'onkeypress', '__handleKeyPress');
                view.listenToPlatform(focused, 'onkeyup', '__handleKeyUp');
            } else {
                var prevFocused = sprite.focus.prevFocusedView;
                if (prevFocused) {
                    view.stopListeningToPlatform(prevFocused, 'onkeydown', '__handleKeyDown');
                    view.stopListeningToPlatform(prevFocused, 'onkeypress', '__handleKeyPress');
                    view.stopListeningToPlatform(prevFocused, 'onkeyup', '__handleKeyUp');
                }
                
                this.__listenToDocument();
            }
        },
        
        /** @private */
        __listenToDocument: function() {
            var view = this.view;
            view.listenToPlatform(view, 'onkeydown', '__handleKeyDown');
            view.listenToPlatform(view, 'onkeypress', '__handleKeyPress');
            view.listenToPlatform(view, 'onkeyup', '__handleKeyUp');
        },
        
        /** @private */
        __unlistenToDocument: function() {
            var view = this.view;
            view.stopListeningToPlatform(view, 'onkeydown', '__handleKeyDown');
            view.stopListeningToPlatform(view, 'onkeypress', '__handleKeyPress');
            view.stopListeningToPlatform(view, 'onkeyup', '__handleKeyUp');
        },
        
        /** @private */
        __handleKeyDown: function(platformEvent) {
            var keyCode = sprite.KeyObservable.getKeyCodeFromEvent(platformEvent);
            if (this.__shouldPreventDefault(keyCode, platformEvent.target)) sprite.preventDefault(platformEvent);
            
            // Keyup events do not fire when command key is down so fire a keyup
            // event immediately. Not an issue for other meta keys: shift, ctrl 
            // and option.
            var GK = sprite.GlobalKeys;
            if (this.isCommandKeyDown() && keyCode !== GK.KEYCODE_SHIFT && keyCode !== GK.KEYCODE_CONTROL && keyCode !== GK.KEYCODE_ALT) {
                this.view.sendEvent('onkeydown', keyCode);
                this.view.sendEvent('onkeyup', keyCode);
            } else {
                this.__keysDown[keyCode] = true;
                
                // Check for 'tab' key and do focus traversal.
                if (keyCode === 9) {
                    var ift = this.view.ignoreFocusTrap(), gf = dr.global.focus;
                    if (this.isShiftKeyDown()) {
                        gf.prev(ift);
                    } else {
                        gf.next(ift);
                    }
                }
                
                this.view.sendEvent('onkeydown', keyCode);
            }
        },
        
        /** @private */
        __handleKeyPress: function(platformEvent) {
            var keyCode = sprite.KeyObservable.getKeyCodeFromEvent(platformEvent);
            this.view.sendEvent('onkeypress', keyCode);
        },
        
        /** @private */
        __handleKeyUp: function(platformEvent) {
            var keyCode = sprite.KeyObservable.getKeyCodeFromEvent(platformEvent);
            if (this.__shouldPreventDefault(keyCode, platformEvent.target)) sprite.preventDefault(platformEvent);
            this.__keysDown[keyCode] = false;
            this.view.sendEvent('onkeyup', keyCode);
        },
        
        /** @private */
        __shouldPreventDefault: function(keyCode, targetElem) {
            switch (keyCode) {
                case 8: // Backspace
                    // Catch backspace since it navigates the history. Allow it to
                    // go through for text input elements though.
                    var nodeName = targetElem.nodeName;
                    if (nodeName === 'TEXTAREA' || 
                        (nodeName === 'INPUT' && (targetElem.type === 'text' || targetElem.type === 'password')) ||
                        (nodeName === 'DIV' && targetElem.contentEditable === 'true' && targetElem.firstChild)
                    ) return false;
                    
                    return true;
                    
                case 9: // Tab
                    // Tab navigation is handled by the framework.
                    return true;
            }
            return false;
        }
    });
});
