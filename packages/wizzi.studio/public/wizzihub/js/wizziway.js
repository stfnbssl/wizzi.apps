/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: json:/index.js.ittf
    utc time: Wed, 24 Jan 2024 04:55:54 GMT
*/
'use strict';
(function(window) {

    window.utils = window.utils || {};
    const Underscore = {
        isArray: function(val) {
            return Array.isArray ? Array.isArray(val) : toString.call(val) === '[object Array]';
        }, 
        isObject: function(val) {
            return val != null && typeof val === 'object' && Array.isArray(val) === false;
        }, 
        
        // https://github.com/esamattis/underscore.string/blob/master/helper/makeString.js
        makeString: function(object) {
            if (object == null) {
                return '';
            }
            return '' + object;
        }, 
        
        // https://github.com/esamattis/underscore.string/blob/master/helper/capitalize.js
        capitalize: function(str, lowercaseRest) {
            str = Underscore.makeString(str);
            var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
            return str.charAt(0).toUpperCase() + remainingChars;
        }, 
        
        // https://underscorejs.org/docs/modules/debounce.html
        debounce: function(func, wait, immediate) {
            var timeout,
                previous,
                args,
                result,
                context;
            var later = function() {
                var passed = Underscore.now() - previous;
                if (wait > passed) {
                    timeout = setTimeout(later, wait - passed);
                }
                else {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                    if (!timeout) {
                        context = null;
                    }
                }
            };
            var debounced = Underscore.restArguments(function(_args) {
                context = this;
                args = _args;
                previous = Underscore.now();
                if (!timeout) {
                    timeout = setTimeout(later, wait);
                    if (immediate) {
                        result = func.apply(context, args);
                    }
                }
                return result;
            });
            debounced.cancel = function() {
                clearTimeout(timeout);
                context = null;
            }
            ;
            return debounced;
        }, 
        now: Date.now || function() {
            return new Date().getTime();
        }, 
        restArguments: function(func, startIndex) {
            startIndex = startIndex == null ? func.length - 1 : +startIndex;
            return function() {
                    var length = Math.max(arguments.length - startIndex, 0),
                        rest = Array(length),
                        index = 0;
                    for (; index < length; index++) {
                        rest[index] = arguments[index + startIndex];
                    }
                    switch (startIndex) {
                        case 0: {
                            return func.call(this, rest);
                        }
                        case 1: {
                            return func.call(this, arguments[0], rest);
                        }
                        case 2: {
                            return func.call(this, arguments[0], arguments[1], rest);
                        }
                    }
                    var args = Array(startIndex + 1);
                    for (; index < startIndex; index++) {
                        args[index] = arguments[index];
                    }
                    args[startIndex] = rest;
                    return func.apply(this, args);
                };
        }
     };
    window.utils.Underscore = Underscore;
})(window)
;
(function(window) {

    window.utils = window.utils || {};
    function Cache(name) {
        this.name = name;
        this.cache = {};
    }
    Cache.prototype.set = function(key, value) {
        this.cache[key] = value;
    }
    ;
    Cache.prototype.get = function(key, value) {
        return this.cache[key];
    }
    ;
    Cache.prototype.memoize = function(fn) {
        var self = this;
        return function() {
                var keyparts = [];
                var i, i_items=arguments, i_len=arguments.length, arg;
                for (i=0; i<i_len; i++) {
                    arg = arguments[i];
                    keyparts.push(arg ? arg.toString() : '')
                }
                var key = keyparts.join('_');
                if (!(key in self.cache)) {
                    self.set(key, fn.apply(this, arguments))
                    console.log('key ', key, 'retrieved by function and set in cache', self.name, __filename);
                }
                else {
                    console.log('key ', key, 'returned from cache', self.name, __filename);
                }
                return self.get(key);
            };
    }
    ;
    Cache.prototype.memoizePromise = function(fnName, fn) {
        var self = this;
        return function() {
                return new Promise((resolve, reject) => {
                    
                        var keyparts = [fnName];
                        var i, i_items=arguments, i_len=arguments.length, arg;
                        for (i=0; i<i_len; i++) {
                            arg = arguments[i];
                            keyparts.push(arg ? arg.toString() : '')
                        }
                        var key = keyparts.join('_');
                        if (!(key in self.cache)) {
                            fn.apply(this, arguments).then((result) => {
                            
                                self.set(key, result)
                                console.log('key ', key, 'retrieved by function and set in cache', self.name, __filename);
                                return resolve(result);
                            }
                            ).catch((err) => {
                            
                                return reject(err);
                            }
                            )
                        }
                        else {
                            console.log('key ', key, 'returned from cache', self.name, __filename);
                            return resolve(self.get(key));
                        }
                    }
                    );
            };
    }
    ;
    window.utils.Cache = Cache;
})(window)
;
(function(window) {

    window.styles = window.styles || {};
    const gray = {
        '000': '#FDFDFE', 
        100: '#F8F8FA', 
        200: '#F0F1F2', 
        300: '#E1E4E8', 
        400: '#D1D5DA', 
        500: '#B7BBBF', 
        600: '#6C737C', 
        700: '#596068', 
        800: '#464D55', 
        900: '#30363C', 
        1000: '#25292E'
     };
    const green = {
        '000': '#f0fff4', 
        100: '#dcffe4', 
        200: '#bef5cb', 
        300: '#85e89d', 
        400: '#34d058', 
        500: '#28a745', 
        600: '#22863a', 
        700: '#176f2c', 
        800: '#165c26', 
        900: '#144620'
     };
    const red = {
        '000': '#ffeef0', 
        100: '#ffdce0', 
        200: '#fdaeb7', 
        300: '#f97583', 
        400: '#ea4a5a', 
        500: '#d73a49', 
        600: '#cb2431', 
        700: '#b31d28', 
        800: '#9e1c23', 
        900: '#86181d'
     };
    const yellow = {
        '000': '#fffdef', 
        100: '#fffbdd', 
        200: '#fff5b1', 
        300: '#ffea7f', 
        400: '#ffdf5d', 
        500: '#ffd33d', 
        600: '#f9c513', 
        700: '#dbab09', 
        800: '#b08800', 
        900: '#735c0f'
     };
    const blue = {
        '000': '#f1f8ff', 
        100: '#dbedff', 
        200: '#c8e1ff', 
        300: '#79b8ff', 
        400: '#2188ff', 
        500: '#0366d6', 
        600: '#005cc5', 
        700: '#044289', 
        800: '#032f62', 
        900: '#05264c'
     };
    const purple = {
        '000': '#f5f0ff', 
        100: '#e6dcfd', 
        200: '#d1bcf9', 
        300: '#b392f0', 
        400: '#8a63d2', 
        500: '#6f42c1', 
        600: '#5a32a3', 
        700: '#4c2889', 
        800: '#3a1d6e', 
        900: '#29134e'
     };
    const orange = {
        '000': '#fff8f2', 
        100: '#ffebda', 
        200: '#ffd1ac', 
        300: '#ffab70', 
        400: '#fb8532', 
        500: '#f66a0a', 
        600: '#e36209', 
        700: '#d15704', 
        800: '#c24e00', 
        900: '#a04100'
     };
    const pink = {
        '000': '#ffeef8', 
        100: '#fedbf0', 
        200: '#f9b3dd', 
        300: '#f692ce', 
        400: '#ec6cb9', 
        500: '#ea4aaa', 
        600: '#d03592', 
        700: '#b93a86', 
        800: '#99306f', 
        900: '#6d224f'
     };
    const primary = {
        100: '#EDE9FF', 
        200: '#D2CAFD', 
        300: '#A89AF9', 
        400: '#7F6DF3', 
        500: '#4630EB', 
        600: '#3423CA', 
        700: '#2518A9', 
        800: '#190F88', 
        900: '#100970', 
        1000: '#161856'
     };
    const baseColors = {
        blue, 
        gray, 
        green, 
        orange, 
        pink, 
        primary, 
        red, 
        yellow, 
        black: '#001020', 
        white: '#ffffff', 
        beige: '#F7F6F3', 
        navy: '#1A1A35', 
        lila: '#A3A1F7'
     };
    const Colors = {
        ...baseColors, 
        semantic: {
            border: baseColors.gray[300], 
            background: baseColors.gray['000'], 
            success: baseColors.green[500], 
            error: baseColors.red[500], 
            warning: baseColors.yellow[700], 
            link: baseColors.primary[500], 
            text: baseColors.black, 
            dark: {
                border: baseColors.gray[800], 
                background: baseColors.gray[1000], 
                success: baseColors.green[300], 
                error: baseColors.red[300], 
                warning: baseColors.yellow[300], 
                link: baseColors.primary[300], 
                text: baseColors.gray[100]
             }
         }
     };
    window.styles.Colors = Colors;
})(window)
;
(function(window) {

    window.styles = window.styles || {};
    const Shadows = {
        popover: 'var(theme-shadows-popover)', 
        small: 'var(theme-shadows-small)', 
        medium: 'var(theme-shadows-medium)', 
        large: 'var(theme-shadows-large)', 
        input: 'var(theme-shadows-input)', 
        button: 'var(theme-shadows-button)', 
        test: 'var(theme-shadows-small)'
     };
    window.styles.Shadows = Shadows;
})(window)
;
(function(window) {

    window.styles = window.styles || {};
    function computeStyleData(styleData) {
        if (styleData && styleData.colors && styleData.shadows) {
            return styleData;
        }
        console.log('computeStyleData.styles.Colors', styles.Colors, __filename);
        console.log('computeStyleData.styles.Shadows', styles.Shadows, __filename);
        return {
                Colors: styles.Colors, 
                Shadows: styles.Shadows
             };
    }
    window.styles.computeStyleData = computeStyleData;
})(window)
;
// taken from https://github.com/expo/snack/blob/main/website/src/client/components/ThemeProvider.tsx
// modified by Stefano Bassoli
(function(window) {

    window.styles = window.styles || {};
    function ThemeProvider(styleData) {
        styleData = styles.computeStyleData(styleData);
        var colors = styleData.Colors;
        var shadows = styleData.Shadows;
        this.lightColors = {
            primary: colors.primary[500], 
            secondary: colors.black, 
            error: colors.semantic.error, 
            warning: colors.semantic.warning, 
            success: colors.semantic.success, 
            'primary-text': colors.white, 
            'secondary-text': colors.white, 
            'error-text': colors.white, 
            'warning-text': colors.white, 
            'success-text': colors.white, 
            text: colors.gray[900], 
            soft: colors.gray[500], 
            'soft-text': colors.white, 
            
            // semantic.background offered too little contrast with content
            
            // background: colors.semantic.background,
            background: '#F9F9F9', 
            content: colors.white, 
            hover: colors.gray[100], 
            disabled: colors.gray[300], 
            selected: colors.primary[500], 
            'selected-text': colors.white, 
            border: colors.semantic.border
         };
        
        
        // Use custom colors for dark theme which are not
        
        // so saturated and blue-ish
        
        // const darkGray = colors.gray;
        this.lightShadows = {
            popover: shadows.popover, 
            small: shadows.small
         };
        
        // Use custom colors for dark theme which are not
        // so saturated and blue-ish
        // const darkGray = colors.gray;
        const darkGray = {
            100: '#F5F5F5', 
            200: '#EBEBEB', 
            250: '#DDDDDD', 
            300: '#CFCFCF', 
            400: '#B0B0B0', 
            500: '#8F8F8F', 
            600: '#5C5C5C', 
            700: '#3B3B3B', 
            800: '#2F2F2F', 
            900: '#212121'
         };
        
        this.darkColors = {
            primary: colors.primary[400], 
            secondary: colors.white, 
            error: colors.red[500], 
            warning: colors.yellow[500], 
            success: colors.green[600], 
            'primary-text': colors.white, 
            'secondary-text': colors.black, 
            'error-text': colors.white, 
            'warning-text': colors.white, 
            'success-text': colors.white, 
            text: darkGray[200], 
            soft: darkGray[500], 
            'soft-text': colors.black, 
            background: darkGray[900], 
            content: darkGray[800], 
            hover: darkGray[700], 
            disabled: darkGray[600], 
            selected: colors.white, 
            'selected-text': darkGray[800], 
            border: darkGray[700]
         };
        
        this.darkShadows = {
            popover: shadows.popover, 
            small: 'none'
         };
    }
    ThemeProvider.prototype.c = function(color, theme) {
        if (theme) {
            const colors = theme === 'dark' ? this.darkColors : this.lightColors;
            return colors[color];
        }
        else {
            return `var(--color-${color})`;
        }
    }
    ;
    ThemeProvider.prototype.s = function(shadow, theme) {
        if (theme) {
            const shadows = theme === 'dark' ? this.darkShadows : this.lightShadows;
            return shadows[shadow];
        }
        else {
            return `var(--shadow-${shadow})`;
        }
    }
    ;
    window.styles.ThemeProvider = ThemeProvider;
})(window)
;
(function(window) {

    window.styles = window.styles || {};
    const InjectCss = styles.InjectCss || {};
    InjectCss.addLink = function(href) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = href;
        link.type = "text/css";
        head.appendChild(link);
    }
    ;
    InjectCss.addText = function(cssObj) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        var aCss = [];
        for (var krule in cssObj) {
            var ruleObj = cssObj[krule];
            var aRule = [];
            for (var kstyle in ruleObj) {
                if (typeof ruleObj[kstyle] === 'object') {
                    var aRule2 = [];
                    for (var kstyle2 in ruleObj[kstyle]) {
                        aRule2.push(kstyle2 + ': ' + ruleObj[kstyle][kstyle2])
                    }
                    aRule.push(kstyle + ' { ' + aRule2.join(';\n') + ' } ')
                }
                else {
                    aRule.push(kstyle + ': ' + ruleObj[kstyle])
                }
            }
            aCss.push(krule + ' { ' + aRule.join(';\n') + ' } ')
        }
        var css = aCss.join('\n');
        // IE8 and below.
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        }
        else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
    ;
    window.styles.InjectCss = InjectCss;
})(window)
;
/**
    // global NodeList
*/
(function(window) {

    
    // Get element(s) by CSS selector:
    window.qs = function(selector, scope) {
        return (scope || document).querySelector(selector);
    }
    ;
    
    // addEventListener wrapper:
    window.qsa = function(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    }
    ;
    
    // addEventListener wrapper:
    
    // Attach a handler to event for all elements that match the selector,
    
    // now or in the future, based on a root element
    window.$on = function(target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    }
    ;
    
    // Attach a handler to event for all elements that match the selector,
    
    // now or in the future, based on a root element
    
    // Find the element's parent with the given tag name:
    
    // $parent(qs('a'), 'div');
    window.$delegate = function(target, selector, type, handler) {
        function dispatchEvent(event) {
            var targetElement = event.target;
            var potentialElements = window.qsa(selector, target);
            var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;
            if (hasMatch) {
                handler.call(targetElement, event);
            }
            // https://developer.mozilla.org/en-US/docs/Web/Events/blur
        }
        // https://developer.mozilla.org/en-US/docs/Web/Events/blur
        var useCapture = type === 'blur' || type === 'focus';
        window.$on(target, type, dispatchEvent, useCapture);
    }
    ;
    
    // Find the element's parent with the given tag name:
    
    // $parent(qs('a'), 'div');
    
    // Allow for looping on nodes by chaining:
    
    // qsa('.foo').forEach(function () {})
    window.$parent = function(element, tagName) {
        if (!element.parentNode) {
            return ;
        }
        if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
            return element.parentNode;
        }
        return window.$parent(element.parentNode, tagName);
    }
    ;
    
    // Allow for looping on nodes by chaining:
    
    // qsa('.foo').forEach(function () {})
    NodeList.prototype.forEach = Array.prototype.forEach;
})(window)
;
(function(window) {

    window.mvc = window.mvc || {};
    function LocalCollectionStore(name, callback) {
        callback = callback || function() {
        };
        this._dbName = name;
        if (!localStorage.getItem(name)) {
            var items = [];
            localStorage.setItem(name, JSON.stringify(items));
        }
        callback.call(this, JSON.parse(localStorage.getItem(name)));
        /**
            
             Creates a new client side local storage object and will create an empty
             collection if no collection already exists.
            
             @param {string} name The name of our DB we want to use
             @param {function} callback Our local storage DB uses callbacks
            
        */
    }
    
    /**
        * 
        * Finds items based on a query given as a JS object
        * 
        * @param {object} query The query to match against (i.e. {foo: 'bar'})
        * @param {function} callback	 The callback to fire when the query has
        * completed running
        * 
        * @example
        * db.find({foo: 'bar', hello: 'world'}, function (data) {
        * // data will return any items that have foo: bar and
        * // hello: world in their properties
        * });
        * 
    */
    LocalCollectionStore.prototype.find = function(query, callback) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalCollectionStore.find.');
        }
        var items = JSON.parse(localStorage.getItem(this._dbName) || '[]');
        callback.call(this, items.filter(function(item) {
            for (var q in query) {
                if (query[q] !== item[q]) {
                    return false;
                }
            }
            return true;
        }))
    }
    ;
    
    /**
        * 
        * Will retrieve all data from the collection
        * 
        * @param {function} callback The callback to fire upon retrieving data
        * 
    */
    LocalCollectionStore.prototype.findAll = function(callback) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalCollectionStore.findAll.');
        }
        callback.call(this, JSON.parse(localStorage.getItem(this._dbName) || '[]'));
    }
    ;
    
    /**
        * 
        * Will save the given data to the DB. If no item exists it will create a new
        * item, otherwise it'll simply update an existing item's properties
        * 
        * @param {object} updateData The data to save back into the DB
        * @param {function} callback The callback to fire after saving
        * @param {number} id An optional param to enter an ID of an item to update
        * 
    */
    LocalCollectionStore.prototype.save = function(updateData, id, callback) {
        callback = callback || function() {
        };
        var items = JSON.parse(localStorage.getItem(this._dbName) || '[]');
        
        // If an ID was actually given, find the item and update each property
        if (id) {
            console.log('LocalCollectionStore.prototype.save', id, __filename);
            var matched = false;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    matched = true;
                    console.log('LocalCollectionStore.prototype.save', 'matched', id, __filename);
                    for (var key in updateData) {
                        items[i][key] = updateData[key];
                    }
                    break;
                }
            }
            if (!matched) {
                
                // Generate an ID
                updateData.id = id;
                items.push(updateData);
            }
            localStorage.setItem(this._dbName, JSON.stringify(items));
            callback.call(this, items);
        }
        else {
            
            // Generate an ID
            updateData.id = new Date().getTime();
            items.push(updateData);
            localStorage.setItem(this._dbName, JSON.stringify(items));
            callback.call(this, [
                updateData
            ])
        }
    }
    ;
    
    /**
        * 
        * Will remove an item from the LocalCollectionStore based on its ID
        * 
        * @param {number} id The ID of the item you want to remove
        * @param {function} callback The callback to fire after saving
        * 
    */
    LocalCollectionStore.prototype.remove = function(id, callback) {
        callback = callback || function() {
        };
        var items = JSON.parse(localStorage.getItem(this._dbName) || '[]');
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this._dbName, JSON.stringify(items));
        callback.call(this, items);
    }
    ;
    
    /**
        * 
        * Will drop all storage and start fresh
        * 
        * @param {function} callback The callback to fire after dropping the data
        * 
    */
    LocalCollectionStore.prototype.drop = function(callback) {
        callback = callback || function() {
        };
        var items = [];
        localStorage.setItem(this._dbName, JSON.stringify(items));
        callback.call(this, items);
    }
    ;
    
    /**
        * 
        * Will replace the entire items collection
        * 
        * @param {array} [items] new items collection
        * @param {function} callback The callback to fire after replacing the data
        * 
    */
    LocalCollectionStore.prototype.replace = function(items, callback) {
        callback = callback || function() {
        };
        localStorage.setItem(this._dbName, JSON.stringify(items));
        callback.call(this, items);
    }
    ;
    window.mvc.LocalCollectionStore = LocalCollectionStore;
})(window)
;
(function(window) {

    window.mvc = window.mvc || {};
    function LocalObjectStore(name, callback) {
        callback = callback || function() {
        };
        this._dbName = name;
        this.itemColl = new mvc.LocalCollectionStore(name + '_objColl');
        if (!localStorage.getItem(name)) {
            var itemObj = {};
            localStorage.setItem(name, JSON.stringify(itemObj));
        }
        callback.call(this, JSON.parse(localStorage.getItem(name)));
        /**
            
             Creates a new client side local storage object plus collection
             and will create an empty object and collection if no one already exist.
            
             @param {string} name The name of our DB we want to use
             @param {function} callback Our local storage DB uses callbacks
            
        */
    }
    
    /**
        * 
        * Set an object property value
        * 
        * @param {string} name The property name
        * @param {string} value The property value
        * @return {object} Returns the entire saved object
        * 
    */
    LocalObjectStore.prototype.setValue = function(name, value) {
        var itemObj = JSON.parse(localStorage.getItem(this._dbName) || '{}');
        itemObj[name] = value;
        localStorage.setItem(this._dbName, JSON.stringify(itemObj));
        return itemObj;
    }
    ;
    
    /**
        * 
        * Get an object property value
        * 
        * @param {string} [name] The property name
        * @param {string} [defaultValue] Optional.
        * -               The value to set if the value of name is missing
        * @return {any} The property value or defaultValue or null
        * 
    */
    LocalObjectStore.prototype.getValue = function(name, defaultValue) {
        var itemObj = JSON.parse(localStorage.getItem(this._dbName) || '{}');
        console.log('LocalObjectStore.getValue', name, defaultValue, name in itemObj, itemObj, __filename);
        if (name in itemObj) {
            console.log('LocalObjectStore.getValue.return', itemObj[name], __filename);
            return itemObj[name];
        }
        else if (typeof(defaultValue) != 'undefined') {
            console.log('LocalObjectStore.getValue.return', defaultValue, __filename);
            return defaultValue;
        }
        else {
            console.log('LocalObjectStore.getValue.return', null, __filename);
            return null;
        }
    }
    ;
    
    /**
        * 
        * Finds object items based on a query given as a JS object
        * 
        * @param {object} query The query to match against (i.e. {foo: 'bar'})
        * @param {function} callback	 The callback to fire when the query has
        * completed running
        * 
        * @example
        * db.find({foo: 'bar', hello: 'world'}, function (data) {
        * // data will return any items that have foo: bar and
        * // hello: world in their properties
        * });
        * 
    */
    LocalObjectStore.prototype.find = function(query, callback) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalObjectStore.find.');
        }
        this.itemColl.find(query, callback)
    }
    ;
    
    /**
        * 
        * Will retrieve all data from the object items collection
        * 
        * @param {function} callback The callback to fire upon retrieving data
        * 
    */
    LocalObjectStore.prototype.findAll = function(callback) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: LocalObjectStore.findAll.');
        }
        this.itemColl.findAll(callback)
    }
    ;
    
    /**
        * 
        * Will save the given data to the object items. If no item exists it will create a new
        * item, otherwise it'll simply update an existing item's properties
        * 
        * @param {object} updateData The data to save back into the DB
        * @param {function} callback The callback to fire after saving
        * @param {number} id An optional param to enter an ID of an item to update
        * 
    */
    LocalObjectStore.prototype.save = function(updateData, id, callback) {
        callback = callback || function() {
        };
        console.log('LocalObjectStore.prototype.save', id, updateData, __filename);
        this.itemColl.save(updateData, id, callback)
    }
    ;
    
    /**
        * 
        * Will remove an item from the object items
        * 
        * @param {number} id The ID of the item you want to remove
        * @param {function} callback The callback to fire after saving
        * 
    */
    LocalObjectStore.prototype.remove = function(id, callback) {
        callback = callback || function() {
        };
        this.itemColl.drop(id, callback)
    }
    ;
    
    /**
        * 
        * Will drop all object items
        * 
        * @param {function} callback The callback to fire after dropping the data
        * 
    */
    LocalObjectStore.prototype.drop = function(callback) {
        callback = callback || function() {
        };
        this.itemColl.drop(callback)
    }
    ;
    
    /**
        * 
        * Will replace the entire items collection
        * 
        * @param {array} [items] new items collection
        * @param {function} callback The callback to fire after replacing the data
        * 
    */
    LocalObjectStore.prototype.replace = function(callback) {
        callback = callback || function() {
        };
        this.itemColl.replace(callback)
    }
    ;
    window.mvc.LocalObjectStore = LocalObjectStore;
})(window)
;
if (!window.utils || !window.utils.Underscore) {
    throw new Error('The api "Form" requires the object "utils.Underscore". You must include it.');
}
(function(window, _) {

    window.mvc = window.mvc || {};
    const Form = mvc.Form || {};
    function buildForm(ctx) {
        var __html = [];
        var temp = [];
        var i, i_items=ctx.controls, i_len=ctx.controls.length, item;
        for (i=0; i<i_len; i++) {
            item = ctx.controls[i];
            item.__form = ctx;
            mvc.Control.build(temp, item)
        }
        __html.push('<div class="' + "form-card" + '">');
        if (ctx.title) {
            __html.push('<div class="' + "form-title" + '">');
            __html.push( ctx.title );
            __html.push('</div>');
        }
        __html.push('<div class="' + "m-b-s" + '" id="' + ctx.id  + "-message-warning" + '">');
        __html.push('</div>');
        __html.push('<div class="' + "m-b-s" + '" id="' + ctx.id  + "-message-success" + '">');
        __html.push('</div>');
        __html.push('<form method="' + "post" + '" id="' + ctx.id + '">');
        __html.push('<div>');
        __html.push( temp.join('') );
        __html.push('</div>');
        __html.push('<div class="' + "form-submit" + '">');
        __html.push('<input class="' + "submit" + '" type="' + "submit" + '" value="' + "Submit" + '" id="' + "submit" + '" name="' + "submit" + '">');
        __html.push('</input>');
        __html.push('<input class="' + "submit" + '" type="' + "submit" + '" value="' + "Reset" + '" id="' + "reset" + '" name="' + "reset" + '">');
        __html.push('</input>');
        __html.push('</div>');
        __html.push('</form>');
        __html.push('</div>');
        return __html.join('');
    }
    Form.setup = function($, container, model, originalValues, handlers) {
        if (!model || !_.isObject(model)) {
            throw new Error('The "model" parameter is required and must be an object. Function mvc.Form.setup.');
        }
        if (!originalValues || !_.isObject(originalValues)) {
            throw new Error('The "originalValues" parameter is required and must be an object. Function mvc.Form.setup.');
        }
        if (!handlers || !_.isObject(handlers)) {
            throw new Error('The "handlers" parameter is required and must be an object. Function mvc.Form.setup.');
        }
        var container = container.nodeName ? container : $(container);
        if (!container || !container.nodeName) {
            throw new Error('Container element for ' + model.title + 'form not found: ' + container);
        }
        container.innerHTML = buildForm(model)
        ;
        var formValues = Object.assign({}, originalValues);
        var currentValues = Object.assign({}, originalValues);
        var context = {
            originalValues: formValues, 
            currentValues: currentValues, 
            onChange: function(id, value) {
                currentValues[id] = value;
                console.log('Changed currentValues', currentValues, __filename);
                if (handlers.onChange) {
                    handlers.onChange(id, value, currentValues)
                }
            }, 
            onSubmit: function(id, value) {
                if (id) {
                    currentValues[id] = value;
                }
                console.log('Submit currentValues', currentValues, __filename);
                if (handlers.onSubmit) {
                    handlers.onSubmit(currentValues)
                }
            }
         };
        Form.start($, model, context)
        Form.start_validation($, model)
    }
    ;
    Form.start = function($, model, context) {
        if (!model || !_.isObject(model)) {
            throw new Error('The "model" parameter is required and must be an object. Function mvc.Form.start.');
        }
        if (!context || !_.isObject(context)) {
            throw new Error('The "context" parameter is required and must be an object. Function mvc.Form.start.');
        }
        var i, i_items=model.controls, i_len=model.controls.length, item;
        for (i=0; i<i_len; i++) {
            item = model.controls[i];
            item.__form = model;
            mvc.Control.start($, item, context)
        }
        if (context.onSubmit) {
            var el = $('#' + model.id);
            $on(el, 'submit', (event) => {
            
                event.preventDefault();
                const invalids = [];
                var i, i_items=model.controls, i_len=model.controls.length, item;
                for (i=0; i<i_len; i++) {
                    item = model.controls[i];
                    mvc.Control.validate(item, model.validation_rules, context, invalids)
                }
                if (invalids.length == 0) {
                    console.log("model submitted", model.id, __filename);
                    context.onSubmit();
                }
                else {
                    console.log('invalid forms', invalids, __filename);
                }
            }
            )
        }
    }
    ;
    Form.start_validation = function($, model) {
        if (!model || !_.isObject(model)) {
            throw new Error('The "model" parameter is required and must be an object. Function mvc.Form.start_validation.');
        }
        var rules = {};
        var i, i_items=model.controls, i_len=model.controls.length, item;
        for (i=0; i<i_len; i++) {
            item = model.controls[i];
            mvc.Control.start_validation($, item, rules)
        }
        model.validation_rules = rules;
    }
    ;
    Form.dispose = function($, container, model) {
        var i, i_items=model.controls, i_len=model.controls.length, item;
        for (i=0; i<i_len; i++) {
            item = model.controls[i];
            mvc.Control.dispose($, item)
        }
        var container = container.nodeName ? container : $(container);
        container.innerHTML = '';
    }
    ;
    window.mvc.Form = Form;
})(window, utils.Underscore)
;
if (!window.utils || !window.utils.Underscore) {
    throw new Error('The api "Control" requires the object "utils.Underscore". You must include it.');
}
(function(window, _) {

    window.mvc = window.mvc || {};
    const Control = mvc.Control || {};
    Control.disposables = {};
    Control.build = function(__html, ctx) {
        if (!__html || !_.isArray(__html)) {
            throw new Error('The "__html" parameter is required and must be an array. Function mvc.Control.build.');
        }
        if (!ctx || !_.isObject(ctx)) {
            throw new Error('The "ctx" parameter is required and must be an object. Function mvc.Control.build.');
        }
        let options = [];
        if (ctx.type == 'group') {
            var direction = ctx.direction || 'row';
            var i, i_items=ctx.controls, i_len=ctx.controls.length, item;
            for (i=0; i<i_len; i++) {
                item = ctx.controls[i];
                item.__form = ctx.__form;
                var aOptions = [];
                Control.build(aOptions, item)
                options.push(aOptions.join('\n'))
            }
            __html.push('<div class="' + "control-group grid-" +  direction  + "-" +  ctx.controls.length  + '">');
            __html.push( options.join('\n') );
            __html.push('</div>');
            return ;
        }
        else if (ctx.type == 'select') {
            var i, i_items=ctx.options, i_len=ctx.options.length, item;
            for (i=0; i<i_len; i++) {
                item = ctx.options[i];
                var aOptions = [];
                select_option(aOptions, item)
                options.push(aOptions.join(''))
            }
        }
        else if (ctx.type == 'radio') {
            var i, i_items=ctx.options, i_len=ctx.options.length, item;
            for (i=0; i<i_len; i++) {
                item = ctx.options[i];
                var aOptions = [];
                radio_option(aOptions, ctx, item)
                options.push(aOptions.join(''))
            }
        }
        __html.push('<div class="' + "single-control row row-space" + '">');
        __html.push('<label class="' + "control-label " +  (ctx.required ? 'required' : '')  + '" for="' + ctx.id + '">');
        __html.push( ctx.label );
        __html.push('</label>');
        __html.push('<div class="' + "input-group" + '">');
        if (ctx.type == 'static') {
            __html.push('<div class="' + "form-control-static" + '" id="' + ctx.__form.id + '-' +  ctx.id + '">');
            __html.push('</div>');
        }
        else if (ctx.type == 'text') {
            __html.push('<input class="' + "input--style-2" + '" type="' + "text" + '" placeholder="' + ctx.label + '" name="' + ctx.id + '">');
            __html.push('</input>');
        }
        else if (ctx.type == 'select') {
            __html.push('<div class="' + "rs-select2 js-select-simple select--no-search" + '">');
            __html.push('<select name="' + ctx.id + '">');
            __html.push( options.join('\n') );
            __html.push('</select>');
            __html.push('</div>');
        }
        else if (ctx.type == 'date') {
            __html.push('<div class="' + "form-container" + '">');
            __html.push('<div class="' + "form" + '">');
            __html.push('<i class="' + "far fa-calendar-alt" + '">');
            __html.push('</i>');
            __html.push('<input class="' + "date-input" + '" type="' + "text" + '" placeholder="' + "Pick a date" + '" name="' + ctx.id + '">');
            __html.push('</input>');
            __html.push('</div>');
            __html.push('</div>');
        }
        else if (ctx.type == 'checkbox') {
            __html.push('<div class="' + "checkbox-item" + '">');
            __html.push('<input class="' + "input--style-2" + '" type="' + "checkbox" + '" placeholder="' + ctx.label + '" name="' + ctx.id + '">');
            __html.push('</input>');
            __html.push('</div>');
        }
        else if (ctx.type == 'radio') {
            __html.push('<div class="' + "radio-group" + '">');
            __html.push( options.join('\n') );
            __html.push('</div>');
        }
        else if (ctx.type == 'slider') {
            __html.push('<div class="' + "slider-group ui-slider ui-slider-horizontal" + '">');
            __html.push('<div class="' + "slider-item" + '" id="' + ctx.id + '">');
            __html.push('</div>');
            __html.push('<span class="' + "donate-value" + '" id="' + "value-lower" + '">');
            __html.push('</span>');
            __html.push('</div>');
        }
        else if (ctx.type == 'range-slider') {
            __html.push('<div class="' + "slider" + '" id="' + ctx.id + '" se-min="' + (ctx.min || 0) + '" se-step="' + (ctx.step || 1) + '" se-min-value="' + (ctx.minValue || 50) + '" se-max-value="' + (ctx.maxValue || 50) + '" se-max="' + (ctx.max || 100) + '">');
            __html.push('<div class="' + "slider-touch-left" + '">');
            __html.push('<span>');
            __html.push('</span>');
            __html.push('</div>');
            __html.push('<div class="' + "slider-touch-right" + '">');
            __html.push('<span>');
            __html.push('</span>');
            __html.push('</div>');
            __html.push('<div class="' + "slider-line" + '">');
            __html.push('<span>');
            __html.push('</span>');
            __html.push('</div>');
            __html.push('</div>');
        }
        else if (ctx.type == 'code') {
            __html.push('<div id="' + ctx.id + '">');
            __html.push('</div>');
        }
        else if (ctx.type == 'ittf-editor') {
            __html.push('<div id="' + ctx.id + '" style="' + "height:" +  (ctx.height || '400')  + "px;width:100%;" + '">');
            __html.push('</div>');
        }
        __html.push('</div>');
        __html.push('<label class="' + "control-error" + '" id="' + ctx.id  + "-error" + '" for="' + ctx.id + '">');
        __html.push("&nbsp;");
        __html.push('</label>');
        __html.push('</div>');
    }
    function select_option(__html, ctx) {
        __html.push('<option');
        __html.push(' value="' + ctx.value + '"');
        if (ctx.selected) {
            __html.push(' selected="selected"');
        }
        __html.push('>');
        __html.push(ctx.label);
        __html.push('</option>');
    }
    function radio_option(__html, radio, ctx) {
        __html.push('<div class="' + "radio-item" + '">');
        __html.push('<input type="' + "radio" + '" name="' + radio.id + '" id="' + ctx.id + '" value="' + ctx.value + '" checked>');
        __html.push('</input>');
        __html.push('<label for="' + ctx.id + '">');
        __html.push( ctx.label );
        __html.push('</label>');
        __html.push('<span class="' + "check" + '">');
        __html.push('</span>');
        __html.push('</div>');
    }
    ;
    Control.start = function($, item, context) {
        if (!item || !_.isObject(item)) {
            throw new Error('The "item" parameter is required and must be an object. Function mvc.Control.start.');
        }
        if (!context || !_.isObject(context)) {
            throw new Error('The "context" parameter is required and must be an object. Function mvc.Control.start.');
        }
        if (item.type == 'group') {
            var i, i_items=item.controls, i_len=item.controls.length, child;
            for (i=0; i<i_len; i++) {
                child = item.controls[i];
                child.__form = item.__form;
                Control.start($, child, context)
            }
            return ;
        }
        else if (item.type == 'static') {
            try {
                var el = $('#' + item.__form.id + '-' + item.id);
                el.innerHTML = context.originalValues[item.id];
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'text') {
            try {
                var el = $('input[name="' + item.id + '"]');
                if (typeof context.originalValues[item.id] != "undefined") {
                    el.value = context.originalValues[item.id];
                }
                if (context.onChange) {
                    $on(el, 'change', (event) => {
                    
                        console.log("value changed", el, __filename);
                        context.onChange(item.id, el.value)
                    }
                    )
                }
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'select') {
            try {
                var selectBox = $('select[name="' + item.id + '"]');
                if (item.isSearcheable) {
                    controls.NiceSelect.bind(selectBox, {searchable: true});
                }
                else {
                    controls.NiceSelect.bind(selectBox);
                }
                var el = $('select[name="' + item.id + '"]');
                if (typeof context.originalValues[item.id] != "undefined") {
                    el.value = context.originalValues[item.id];
                }
                if (context.onChange) {
                    $on(el, 'change', (event) => {
                    
                        console.log("value changed", el, __filename);
                        context.onChange(item.id, el.value)
                    }
                    )
                }
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'checkbox') {
            try {
                var el = $('input[name="' + item.id + '"]');
                if (typeof context.originalValues[item.id] != "undefined") {
                    el.checked = context.originalValues[item.id];
                }
                if (context.onChange) {
                    $on(el, 'change', event => 
                    
                        context.onChange(item.id, el.checked)
                    )
                }
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'radio') {
            try {
                // original value set in build
                var els = document.querySelectorAll('input[type=radio][name="' + item.id + '"]');
                els.forEach((el) => {
                
                    if (context.onChange) {
                        $on(el, 'change', event => 
                        
                            context.onChange(item.id, el.value)
                        )
                    }
                }
                )
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'date') {
            try {
                var el = $('input[name="' + item.id + '"]');
                if (typeof context.originalValues[item.id] != "undefined") {
                    el.value = context.originalValues[item.id];
                }
                if (context.onChange) {
                    $on(el, 'change', event => 
                    
                        context.onChange(item.id, el.value)
                    )
                    var dateControl = new controls.CodepenDatePicker(".date-input");
                }
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'slider') {
            try {
                noUiSlider.create($('#' + item.id)[0], {
                    start: [
                        item.start
                    ], 
                    step: item.step, 
                    connect: [
                        true, 
                        false
                    ], 
                    tooltips: [
                        true
                    ], 
                    range: {
                        'min': item.range.min, 
                        'max': item.range.max
                     }, 
                    format: wNumb({
                        decimals: 0, 
                        thousand: ',', 
                        prefix: '$ '
                     })
                 })
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        
        // original value set in build
        
        // call reset if needed
        
        // newRangeSlider.reset();
        else if (item.type == 'range-slider') {
            if (context.onChange) {
                try {
                    var newRangeSlider = new controls.RangeSlider(item.id);
                    newRangeSlider.onChange = function(min, max) {
                        context.onChange(item.id, min + ';' + max)
                    }
                    ;
                    newRangeSlider.didChanged = function(min, max) {
                        context.onChange(item.id, min + ';' + max)
                    }
                    ;
                } 
                catch (err) {
                    console.log(err, __filename);
                } 
            }
        }
        else if (item.type == 'code') {
            try {
                var editor = CodeMirror($('#' + item.id)[0], {
                    mode: "text/html", 
                    theme: "dracula", 
                    lineWrapping: false, 
                    lineNumbers: true, 
                    styleActiveLine: true, 
                    matchBrackets: true, 
                    viewportMargin: Infinity, 
                    extraKeys: {
                        "Ctrl-Space": "autocomplete"
                     }, 
                    value: "<!doctype html>\n<html>\n  " + $('#' + item.id)[0].innerHTML + "\n</html>"
                 });
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
        else if (item.type == 'ittf-editor') {
            try {
                editors.MonacoEditor.setup(function() {
                    var monacoEditor = new editors.MonacoEditor();
                    monacoEditor.setProps({
                        container: item.id, 
                        files: {
                            ['file.ittf']: {
                                type: 'CODE', 
                                contents: context.originalValues[item.id] || ''
                             }
                         }, 
                        selectedFileName: 'file.ittf', 
                        autoFocus: true, 
                        automaticLayout: true, 
                        updateFiles: (data) => {
                        
                            if (context.onChange) {
                                console.log('monacoEditor.updateFiles.data', data(), __filename);
                                context.onChange(item.id, data()['file.ittf'].contents)
                            }
                        }
                        , 
                        readOnly: false
                     })
                    Control.disposables[item.id] = [
                        monacoEditor
                    ];
                    monacoEditor.render();
                })
            } 
            catch (err) {
                console.log(err, __filename);
            } 
        }
    }
    ;
    Control.start_validation = function($, item, rules) {
        if (!item || !_.isObject(item)) {
            throw new Error('The "item" parameter is required and must be an object. Function mvc.Control.start_validation.');
        }
        if (!rules || !_.isObject(rules)) {
            throw new Error('The "rules" parameter is required and must be an object. Function mvc.Control.start_validation.');
        }
        if (item.type == 'group') {
            var i, i_items=item.controls, i_len=item.controls.length, child;
            for (i=0; i<i_len; i++) {
                child = item.controls[i];
                Control.start_validation($, child, rules)
            }
            return ;
        }
        var errorEl = item.required || item.validate ? $('#' + item.id + '-error') : null;
        if (item.required) {
            rules[item.id] = rules[item.id] || [];
            rules[item.id].push({
                kind: "required", 
                $error: errorEl
             })
        }
        if (item.validate) {
            rules[item.id] = rules[item.id] || [];
            rules[item.id].push({
                kind: "function", 
                validate: item.validate, 
                $error: errorEl
             })
        }
    }
    ;
    Control.validate = function(item, formRules, context, invalids) {
        if (item.type == 'group') {
            var i, i_items=item.controls, i_len=item.controls.length, child;
            for (i=0; i<i_len; i++) {
                child = item.controls[i];
                Control.validate(child, formRules, context, invalids)
            }
            return ;
        }
        var rules = formRules[item.id];
        console.log(item.id, 'rules', rules, __filename);
        if (rules && rules.length > 0) {
            const value = context.currentValues[item.id];
            var i, i_items=rules, i_len=rules.length, rule;
            for (i=0; i<i_len; i++) {
                rule = rules[i];
                if (rule.kind == 'required') {
                    if (typeof value == 'undefined' || value == 'null' || value.length == 0) {
                        invalids.push(item)
                        rule.$error.innerHTML = 'Please enter the ' + item.label + ' value.';
                    }
                }
                else {
                    rule.$error.innerHTML = '&nbsp;';
                }
            }
        }
    }
    ;
    Control.dispose = function($, item) {
        const dispArray = Control.disposables[item.id];
        if (dispArray) {
            var i, i_items=dispArray, i_len=dispArray.length, disp;
            for (i=0; i<i_len; i++) {
                disp = dispArray[i];
                disp.dispose();
            }
        }
    }
    ;
    window.mvc.Control = Control;
})(window, utils.Underscore)
;
(function(window) {

    window.api = window.api || {};
    const Fetch = {};
    Fetch.get = function(url) {
        return new Promise((resolve, reject) => {
            
                var req = new XMLHttpRequest();
                req.overrideMimeType("application/json");
                req.open('GET', url, true);
                req.onload = function() {
                    var jsonResponse = JSON.parse(req.responseText);
                    resolve(jsonResponse)
                }
                ;
                req.send(null);
            }
            );
    }
    ;
    Fetch.put = function(data) {
        return new Promise((resolve, reject) => {
            
                console.log('Fetch.put', 'url', data.url, 'body', data.body, __filename);
                var req = new XMLHttpRequest();
                req.open('PUT', data.url, true);
                req.setRequestHeader('Content-type','application/json; charset=utf-8');
                req.onload = function() {
                    var jsonResponse = JSON.parse(req.responseText);
                    resolve(jsonResponse)
                }
                ;
                var json = JSON.stringify(data.body);
                req.send(json);
            }
            );
    }
    ;
    Fetch.post = function(data) {
        return new Promise((resolve, reject) => {
            
                console.log('Fetch.post', 'url', data.url, 'body', data.body, __filename);
                var req = new XMLHttpRequest();
                req.open('POST', data.url, true);
                req.setRequestHeader('Content-type','application/json; charset=utf-8');
                req.onload = function() {
                    var jsonResponse = JSON.parse(req.responseText);
                    resolve(jsonResponse)
                }
                ;
                var json = JSON.stringify(data.body);
                req.send(json);
            }
            );
    }
    ;
    Fetch.delete = function(url) {
        return new Promise((resolve, reject) => {
            
                console.log('Fetch.delete', 'url', url, __filename);
                var req = new XMLHttpRequest();
                req.open('DELETE', url, true);
                req.setRequestHeader('Content-type','application/json; charset=utf-8');
                req.onload = function() {
                    var jsonResponse = JSON.parse(req.responseText);
                    resolve(jsonResponse)
                }
                ;
                req.send(null);
            }
            );
    }
    ;
    window.api.Fetch = Fetch;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    Wizzi.cache = new utils.Cache('Wizzi');
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    
    /**
        * 
        * Fetches an ArtifactProduction collection or item
        * 
        * @param {string} owner The owner of the production
        * @param {string} name Optional. The name of the production,
        * -                              if null returns all owner's productions
        * 
    */
    Wizzi.getArtifact = Wizzi.cache.memoizePromise('Artifact', function(owner, name) {
        let url = '/api/v1/production/artifact/' + encodeURIComponent(owner);
        if (name && name.length > 0) {
            url += '/' + name;
        }
        return new Promise((resolve, reject) => 
            
                api.Fetch.get(url).then((response) => {
                
                    console.log('getArtifactList.response', response);
                    return resolve(response);
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getArtifact.error', err);
                    return reject(err);
                }
                )
            
            );
    })
    ;
    
    /**
        * 
        * Updates a ArtifactProduction item
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.putArtifact = function(id, packiFiles, options) {
        console.log('Wizzi.putArtifact', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/artifact/' + encodeURIComponent(id), 
                    body: {
                        packiFiles, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putArtifact.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putArtifact.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Updates a ArtifactProduction applying a diff object
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
        * 
    */
    Wizzi.putArtifactPackiDiffs = function(id, packiDiffs, options) {
        console.log('Wizzi.putArtifactPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/artifact/packidiffs/' + encodeURIComponent(id), 
                    body: {
                        packiDiffs, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putArtifactPackiDiffs.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putArtifactPackiDiffs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Creates a new ArtifactProduction item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.createArtifact = function(owner, name, packiFiles, options) {
        options = options || {};
        console.log('Wizzi.createArtifact', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        const {
            description, 
            wizziSchema, 
            mainIttf, 
            ...rest
         } = options;
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/artifact/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        description, 
                        wizziSchema, 
                        mainIttf, 
                        packiFiles, 
                        options: rest
                     }
                 }).then((response) => {
                
                    console.log('createArtifact.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'createArtifact.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    
    /**
        * 
        * Fetches an PackageProduction collection or item
        * 
        * @param {string} owner The owner of the production
        * @param {string} name Optional. The name of the production,
        * -                              if null returns all owner's productions
        * 
    */
    Wizzi.getPackage = Wizzi.cache.memoizePromise('Package', function(owner, name) {
        let url = '/api/v1/production/package/' + encodeURIComponent(owner);
        if (name && name.length > 0) {
            url += '/' + name;
        }
        return new Promise((resolve, reject) => 
            
                api.Fetch.get(url).then((response) => {
                
                    console.log('getPackageList.response', response);
                    return resolve(response);
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getPackage.error', err);
                    return reject(err);
                }
                )
            
            );
    })
    ;
    
    /**
        * 
        * Updates a PackageProduction item
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.putPackage = function(id, packiFiles, options) {
        console.log('Wizzi.putPackage', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/package/' + encodeURIComponent(id), 
                    body: {
                        packiFiles, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putPackage.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putPackage.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Updates a PackageProduction applying a diff object
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
        * 
    */
    Wizzi.putPackagePackiDiffs = function(id, packiDiffs, options) {
        console.log('Wizzi.putPackagePackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/package/packidiffs/' + encodeURIComponent(id), 
                    body: {
                        packiDiffs, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putPackagePackiDiffs.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putPackagePackiDiffs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Creates a new PackageProduction item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.createPackage = function(owner, name, packiFiles, options) {
        options = options || {};
        console.log('Wizzi.createPackage', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        const {
            description, 
            ...rest
         } = options;
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/package/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        description, 
                        packiFiles, 
                        options: rest
                     }
                 }).then((response) => {
                
                    console.log('createPackage.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'createPackage.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    
    /**
        * 
        * Fetches an PluginProduction collection or item
        * 
        * @param {string} owner The owner of the production
        * @param {string} name Optional. The name of the production,
        * -                              if null returns all owner's productions
        * 
    */
    Wizzi.getPlugin = Wizzi.cache.memoizePromise('Plugin', function(owner, name) {
        let url = '/api/v1/production/plugin/' + encodeURIComponent(owner);
        if (name && name.length > 0) {
            url += '/' + name;
        }
        return new Promise((resolve, reject) => 
            
                api.Fetch.get(url).then((response) => {
                
                    console.log('getPluginList.response', response);
                    return resolve(response);
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getPlugin.error', err);
                    return reject(err);
                }
                )
            
            );
    })
    ;
    
    /**
        * 
        * Updates a PluginProduction item
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.putPlugin = function(id, packiFiles, options) {
        console.log('Wizzi.putPlugin', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/plugin/' + encodeURIComponent(id), 
                    body: {
                        packiFiles, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putPlugin.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putPlugin.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Updates a PluginProduction applying a diff object
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
        * 
    */
    Wizzi.putPluginPackiDiffs = function(id, packiDiffs, options) {
        console.log('Wizzi.putPluginPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/plugin/packidiffs/' + encodeURIComponent(id), 
                    body: {
                        packiDiffs, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putPluginPackiDiffs.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putPluginPackiDiffs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Creates a new PluginProduction item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.createPlugin = function(owner, name, packiFiles, options) {
        options = options || {};
        console.log('Wizzi.createPlugin', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        const {
            description, 
            ...rest
         } = options;
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/plugin/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        description, 
                        packiFiles, 
                        options: rest
                     }
                 }).then((response) => {
                
                    console.log('createPlugin.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'createPlugin.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    
    /**
        * 
        * Fetches an MetaProduction collection or item
        * 
        * @param {string} owner The owner of the production
        * @param {string} name Optional. The name of the production,
        * -                              if null returns all owner's productions
        * 
    */
    Wizzi.getMeta = Wizzi.cache.memoizePromise('Meta', function(owner, name) {
        let url = '/api/v1/production/meta/' + encodeURIComponent(owner);
        if (name && name.length > 0) {
            url += '/' + name;
        }
        return new Promise((resolve, reject) => 
            
                api.Fetch.get(url).then((response) => {
                
                    console.log('getMetaList.response', response);
                    return resolve(response);
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getMeta.error', err);
                    return reject(err);
                }
                )
            
            );
    })
    ;
    
    /**
        * 
        * Updates a MetaProduction item
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.putMeta = function(id, packiFiles, options) {
        console.log('Wizzi.putMeta', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/meta/' + encodeURIComponent(id), 
                    body: {
                        packiFiles, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putMeta.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putMeta.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Updates a MetaProduction applying a diff object
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
        * 
    */
    Wizzi.putMetaPackiDiffs = function(id, packiDiffs, options) {
        console.log('Wizzi.putMetaPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/meta/packidiffs/' + encodeURIComponent(id), 
                    body: {
                        packiDiffs, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putMetaPackiDiffs.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putMetaPackiDiffs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Creates a new MetaProduction item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.createMeta = function(owner, name, packiFiles, options) {
        options = options || {};
        console.log('Wizzi.createMeta', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        const {
            description, 
            ...rest
         } = options;
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/meta/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        description, 
                        packiFiles, 
                        options: rest
                     }
                 }).then((response) => {
                
                    console.log('createMeta.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'createMeta.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    
    /**
        * 
        * Fetches an TfolderProduction collection or item
        * 
        * @param {string} owner The owner of the production
        * @param {string} name Optional. The name of the production,
        * -                              if null returns all owner's productions
        * 
    */
    Wizzi.getTfolder = Wizzi.cache.memoizePromise('Tfolder', function(owner, name) {
        let url = '/api/v1/production/tfolder/' + encodeURIComponent(owner);
        if (name && name.length > 0) {
            url += '/' + name;
        }
        return new Promise((resolve, reject) => 
            
                api.Fetch.get(url).then((response) => {
                
                    console.log('getTfolderList.response', response);
                    return resolve(response);
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'getTfolder.error', err);
                    return reject(err);
                }
                )
            
            );
    })
    ;
    
    /**
        * 
        * Updates a TfolderProduction item
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.putTfolder = function(id, packiFiles, options) {
        console.log('Wizzi.putTfolder', 'id', id, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/tfolder/' + encodeURIComponent(id), 
                    body: {
                        packiFiles, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putTfolder.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putTfolder.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Updates a TfolderProduction applying a diff object
        * 
        * @param {string} id The id of the production item
        * @param {PackiFiles} packiDiffs. A diff object, contains insert, deletes and updates.
        * 
    */
    Wizzi.putTfolderPackiDiffs = function(id, packiDiffs, options) {
        console.log('Wizzi.putTfolderPackiDiffs', 'id', id, 'packiDiffs', Object.keys(packiDiffs), 'options', options, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/tfolder/packidiffs/' + encodeURIComponent(id), 
                    body: {
                        packiDiffs, 
                        options
                     }
                 }).then((response) => {
                
                    console.log('putTfolderPackiDiffs.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'putTfolderPackiDiffs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Creates a new TfolderProduction item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {PackiFiles} packiFiles. A PackiFiles object, contains all the production's files.
        * 
    */
    Wizzi.createTfolder = function(owner, name, packiFiles, options) {
        options = options || {};
        console.log('Wizzi.createTfolder', 'owner', owner, 'name', name, 'packiFiles', Object.keys(packiFiles), 'options', options, __filename);
        const {
            description, 
            ...rest
         } = options;
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/production/tfolder/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        description, 
                        packiFiles, 
                        options: rest
                     }
                 }).then((response) => {
                
                    console.log('createTfolder.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'createTfolder.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    
    /**
        * 
        * Creates a new CdnResource item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {string} [contents] The contents of the resource
        * 
    */
    Wizzi.createCdnResource = function(owner, name, contents) {
        console.log('Wizzi.createCdnResource', 'owner', owner, 'name', name, 'contents', contents, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.post({
                    url: '/api/v1/cdn/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        contents
                     }
                 }).then((response) => {
                
                    console.log('createCdnResource.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'createCdnResource.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Updates a CdnResource item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * @param {string} [contents] The contents of the resource
        * 
    */
    Wizzi.updateCdnResource = function(name, type) {
        console.log('Wizzi.updateCdnResource', 'owner', owner, 'name', name, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.put({
                    url: '/api/v1/cdn/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        contents
                     }
                 }).then((response) => {
                
                    console.log('updateCdnResource.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'updateCdnResource.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    
    /**
        * 
        * Deletes a CdnResource item
        * 
        * @param {string} [owner] The owner of the production item
        * @param {string} [name] The name of the production item
        * 
    */
    Wizzi.deleteCdnResource = function(name, type) {
        console.log('Wizzi.deleteCdnResource', 'owner', owner, 'name', name, __filename);
        return new Promise((resolve, reject) => 
            
                api.Fetch.delete({
                    url: '/api/v1/cdn/' + encodeURIComponent(owner) + '/' + encodeURIComponent(name), 
                    body: {
                        contents
                     }
                 }).then((response) => {
                
                    console.log('putResource.response', response);
                    resolve(response)
                }
                ).catch((err) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'deleteCdnResource.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    ;
    window.api.Wizzi = Wizzi;
})(window)
;
(function(window) {

    window.api = window.api || {};
    const Wizzi = api.Wizzi || {};
    class PackiManager {
        constructor(packiFiles) {
            this.packiFiles = packiFiles || {};
            this.dmp = new diff_match_patch();
        }
        getFileContent(filePath) {
            const file = this.packiFiles[filePath];
            return file ? file.contents : null;
        }
        putFile(filePath, type, contents) {
            this.packiFiles[filePath] = {
                type: type, 
                contents: contents
             };
        }
        putCodeFile(filePath, contents) {
            this.putFile(filePath, 'CODE', contents)
        }
        deleteFile(filePath) {
            delete this.packiFiles[filePath]
        }
        getFileDiffs(filePath, newContent) {
            const diffs = this._diffLineMode(this.packiFiles[filePath].contents, newContent);
            return diffs;
        }
        applyFileDiffs(filePath, diffs) {
            const textToPatch = this.packiFiles[filePath].contents;
            const patches = this.dmp.patch_make(textToPatch, diffs);
            const [patchedText, results] = this.dmp.patch_apply(patches, textToPatch);
            this.packiFiles[filePath].contents = patchedText;
        }
        getPackiFilesDiffs(packiFiles) {
            const matches = {};
            var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, key;
            for (i=0; i<i_len; i++) {
                key = Object.keys(packiFiles)[i];
                if (this.packiFiles[key]) {
                    matches[key] = {
                        d: 0, 
                        diffs: this._diffLineMode(this.packiFiles[key].contents, packiFiles[key].contents)
                     };
                }
                else {
                    matches[key] = {
                        d: 1, 
                        type: packiFiles[key].type, 
                        contents: packiFiles[key].contents
                     };
                }
            }
            var i, i_items=Object.keys(this.packiFiles), i_len=Object.keys(this.packiFiles).length, key;
            for (i=0; i<i_len; i++) {
                key = Object.keys(this.packiFiles)[i];
                if (!packiFiles[key]) {
                    matches[key] = {
                        d: -1
                     };
                }
            }
            return matches;
        }
        applyPatch(packiDiffs) {
            const patchedFiles = {};
            var i, i_items=Object.keys(packiDiffs), i_len=Object.keys(packiDiffs).length, key;
            for (i=0; i<i_len; i++) {
                key = Object.keys(packiDiffs)[i];
                if (packiDiffs[key].d == 1) {
                    patchedFiles[key] = {
                        type: packiDiffs[key].type, 
                        contents: packiDiffs[key].contents
                     };
                }
                else if (packiDiffs[key].d == 0) {
                    const textToPatch = this.packiFiles[key].contents;
                    const patches = this.dmp.patch_make(textToPatch, packiDiffs[key].diffs);
                    console.log('applyPatch.key.patches', key, patches, __filename);
                    const [patchedText, results] = this.dmp.patch_apply(patches, textToPatch);
                    patchedFiles[key] = {
                        type: this.packiFiles[key].type, 
                        contents: patchedText
                     };
                }
            }
            this.packiFiles = patchedFiles;
        }
        equals(packiFiles) {
            const matches = {};
            var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, key;
            for (i=0; i<i_len; i++) {
                key = Object.keys(packiFiles)[i];
                if (this.packiFiles[key]) {
                    if (this.packiFiles[key].type != packiFiles[key].type) {
                        return false;
                    }
                    if (this.packiFiles[key].contents != packiFiles[key].contents) {
                        return false;
                    }
                    matches[key] = {};
                }
                else {
                    return false;
                }
            }
            var i, i_items=Object.keys(this.packiFiles), i_len=Object.keys(this.packiFiles).length, key;
            for (i=0; i<i_len; i++) {
                key = Object.keys(this.packiFiles)[i];
                if (!packiFiles[key]) {
                    return false;
                }
            }
            return true;
        }
        _diffLineMode(text1, text2) {
            var a = this.dmp.diff_linesToChars_(text1, text2);
            var lineText1 = a.chars1;
            var lineText2 = a.chars2;
            var lineArray = a.lineArray;
            var diffs = this.dmp.diff_main(lineText1, lineText2, false);
            this.dmp.diff_charsToLines_(diffs, lineArray);
            return diffs;
        }
    }
    Wizzi.PackiManager = PackiManager;
    window.api.Wizzi = Wizzi;
})(window)
;
// export * from 'monaco-editor-core';
(function(window) {

    window.editors = window.editors || {};
    const MonacoIttfLanguage = {
        defaultToken: 'invalid', 
        tokenizer: {
            root: [
                {
                    include: '@whitespace'
                 }, 
                {
                    include: '@include'
                 }, 
                {
                    include: '@ittfCommand'
                 }, 
                {
                    include: '@mix'
                 }, 
                {
                    include: '@nodeName'
                 }
            ], 
            whitespace: [
                [
                    /[ \t]+/, 
                    'white'
                ], 
                [
                    /\$\$.*$/, 
                    'comment'
                ], 
                [
                    /(\$\*)/, 
                    {
                        token: 'comment', 
                        next: 'comment'
                     }
                ]
            ], 
            comment: [
                [
                    /[^\$\*]+/, 
                    'comment'
                ], 
                [
                    /\*\$/, 
                    'comment', 
                    '@pop'
                ], 
                [
                    /[\$\*]/, 
                    'comment'
                ]
            ], 
            include: [
                [
                    /(\$include)/, 
                    {
                        token: 'mix', 
                        next: 'includeValue'
                     }
                ]
            ], 
            includeValue: [
                [
                    /.*$/, 
                    'mix-value', 
                    '@pop'
                ]
            ], 
            mix: [
                [
                    /([^($\s]+)(?:\()/, 
                    {
                        cases: {
                            '@eos': 'mix', 
                            '@default': {
                                token: 'mix', 
                                next: 'mixValue'
                             }
                         }
                     }
                ]
            ], 
            ittfCommand: [
                [
                    /\$[a-z]+$/, 
                    'ittf-command'
                ], 
                [
                    /\$[a-z]+/, 
                    {
                        token: 'ittf-command', 
                        next: 'scriptLine'
                     }
                ], 
                [
                    /\$[ ]/, 
                    {
                        token: 'interpolation', 
                        next: 'scriptLine'
                     }
                ], 
                [
                    /(\$global|\$)$/, 
                    {
                        token: 'interpolation', 
                        next: 'scriptMultiLine'
                     }
                ]
            ], 
            nodeName: [
                [
                    /([^($\s]+)/, 
                    {
                        cases: {
                            '@eos': 'node-name', 
                            '@default': {
                                token: 'node-name', 
                                next: 'nodeValue'
                             }
                         }
                     }
                ]
            ], 
            nodeValue: [
                [
                    /[^\$]+$/, 
                    {
                        token: 'node-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /[^\$]+/, 
                    {
                        token: 'node-value'
                     }
                ], 
                [
                    /(\${)([^}]*)(})/, 
                    {
                        cases: {
                            '@eos': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                {
                                    token: 'interpolation.delimiter', 
                                    next: '@popall'
                                 }
                            ], 
                            '@default': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                'interpolation.delimiter'
                            ]
                         }
                     }
                ], 
                
                // [ /.*$/, { token: 'node-value', next: '@pop' } ]
                [
                    /\$$/, 
                    {
                        token: 'node-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /\$/, 
                    'node-value'
                ]
            ], 
            mixValue: [
                [
                    /\)/, 
                    {
                        token: 'mix', 
                        next: '@popall'
                     }
                ], 
                [
                    /[^\$|\)]+$/, 
                    {
                        token: 'mix-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /[^\$|\)]+/, 
                    {
                        token: 'mix-value'
                     }
                ], 
                [
                    /(\${)([^}]*)(})/, 
                    {
                        cases: {
                            '@eos': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                {
                                    token: 'interpolation.delimiter', 
                                    next: '@popall'
                                 }
                            ], 
                            '@default': [
                                'interpolation.delimiter', 
                                'interpolation', 
                                'interpolation.delimiter'
                            ]
                         }
                     }
                ], 
                [
                    /\$$/, 
                    {
                        token: 'mix-value', 
                        next: '@popall'
                     }
                ], 
                [
                    /\$/, 
                    'mix-value'
                ]
            ], 
            scriptLine: [
                [
                    /.*$/, 
                    'interpolation', 
                    '@pop'
                ]
            ], 
            scriptMultiLine: [
                [
                    /[^\/\/\.]+/, 
                    'interpolation'
                ], 
                [
                    /\/\/\.$/, 
                    'interpolation', 
                    '@pop'
                ]
            ]
         }
     };
    window.editors.MonacoIttfLanguage = MonacoIttfLanguage;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    function MonacoColorsDark(styleData) {
        styleData = styles.computeStyleData(styleData);
        var tp = new styles.ThemeProvider(styleData);
        this.syntax = {
            text: '#d9d7ce', 
            variable: '#d9d7ce', 
            invalid: '#ff3333', 
            constant: '#ff9d45', 
            comment: '#5c6773', 
            regexp: '#95e6cb', 
            annotation: '#5ccfe6', 
            tag: '#80d4ff', 
            number: '#ff9d45', 
            string: '#bae67e', 
            property: '#5ccfe6', 
            value: '#bae67e', 
            keyword: '#ffae57', 
            operator: '#778899', 
            predefined: '#ff00ff'
         };
        this.ui = {
            background: tp.c('background', 'dark'), 
            text: '#d9d7ce', 
            selection: '#aaaaaa', 
            indent: {
                active: '#393b41', 
                inactive: '#494b51'
             }
         };
    }
    window.editors.MonacoColorsDark = MonacoColorsDark;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    function MonacoColorsLight(styleData) {
        styleData = styles.computeStyleData(styleData);
        var tp = new styles.ThemeProvider(styleData);
        this.syntax = {
            text: '#5c6773', 
            variable: '#5c6773', 
            invalid: '#ff3333', 
            constant: '#f08c36', 
            comment: '#abb0b6', 
            regexp: '#4dbf99', 
            annotation: '#41a6d9', 
            tag: '#e7c547', 
            number: '#f08c36', 
            string: '#86b300', 
            property: '#41a6d9', 
            value: '#0451a5', 
            keyword: '#f2590c', 
            operator: '#778899', 
            predefined: '#FF00FF'
         };
        this.ui = {
            background: tp.c('background', 'light'), 
            text: '#5c6773', 
            selection: '#cccccc', 
            indent: {
                active: '#e0e0e0', 
                inactive: '#ecebec'
             }
         };
    }
    window.editors.MonacoColorsLight = MonacoColorsLight;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    const MonacoIttfDarkTheme = {
        base: 'vs-dark', 
        inherit: false, 
        rules: [
            {
                token: 'node-name', 
                foreground: '57e34d'
             }, 
            {
                token: 'node-value', 
                foreground: '40d1f5'
             }, 
            {
                token: 'ittf-command', 
                foreground: 'ffa500'
             }, 
            {
                token: 'mix', 
                foreground: 'ff0000'
             }, 
            {
                token: 'mix-value', 
                foreground: 'ffffff'
             }, 
            {
                token: 'comment', 
                foreground: 'ababab'
             }, 
            {
                token: 'interpolation.delimiter', 
                foreground: 'ff0000'
             }, 
            {
                token: 'interpolation', 
                foreground: 'ffff00'
             }, 
            {
                token: 'invalid', 
                foreground: 'ff00ff'
             }
        ], 
        colors: {
            
         }
     };
    window.editors.MonacoIttfDarkTheme = MonacoIttfDarkTheme;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    const MonacoIttfLightTheme = {
        base: 'vs', 
        inherit: false, 
        rules: [
            {
                token: 'node-name', 
                foreground: '0000ff'
             }, 
            {
                token: 'node-value', 
                foreground: '000000'
             }, 
            {
                token: 'ittf-command', 
                foreground: 'ffa500'
             }, 
            {
                token: 'mix', 
                foreground: 'ff0000'
             }, 
            {
                token: 'mix-value', 
                foreground: '4f548f'
             }, 
            {
                token: 'comment', 
                foreground: 'ababab'
             }, 
            {
                token: 'invalid', 
                foreground: 'ff00ff'
             }, 
            {
                token: 'interpolation.delimiter', 
                foreground: 'ff0000'
             }, 
            {
                token: 'interpolation', 
                foreground: '54db4b'
             }
        ], 
        colors: {
            
         }
     };
    window.editors.MonacoIttfLightTheme = MonacoIttfLightTheme;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    function MonacoOverrides(styleData) {
        this.styleData = styles.computeStyleData(styleData);
    }
    MonacoOverrides.prototype.getCss = function() {
        const css = String.raw;
        var tp = new styles.ThemeProvider(this.styleData);
        var darkColors = new editors.MonacoColorsDark(styleData);
        var lightColors = new editors.MonacoColorsLight(styleData);
        var monacoTheme = new editors.MonacoTheme(styleData);
        var light = monacoTheme.light();
        var dark = monacoTheme.dark();
        return css`
  /* Common overrides */
  .packi-monaco-editor .monaco-editor .line-numbers {
    color: currentColor;
    opacity: 0.5;
  }

  /* Context menu overrides */
  .packi-monaco-editor .context-view.monaco-menu-container {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: transparent;
    box-shadow: none;
    border: none;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar {
    padding: 4px;
    border-radius: 3px;
    border-style: solid;
    box-shadow: ${tp.s('popover')} !important;
    background-color: ${tp.c('content')} !important;
    color: ${tp.c('text')} !important;
    border-color: transparent !important;
  }

  .packi-monaco-editor.theme-light .monaco-menu .monaco-action-bar {
    border-width: 0;
  }

  .packi-monaco-editor.theme-dark .monaco-menu .monaco-action-bar {
    border-width: 1px;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-label,
  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-label:focus {
    font-size: 14px;
    line-height: 1;
    color: inherit;
    border: 0;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-menu-item,
  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-menu-item:focus {
    color: inherit !important;
    text-shadow: none !important;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item.disabled .action-menu-item {
    pointer-events: none;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item.focused:not(.disabled),
  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item:hover:not(.disabled) {
    border-radius: 2px;
    background-color: ${tp.c('primary')} !important;
    color: white !important;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-item .action-menu-item {
    background-color: transparent !important;
    color: inherit !important;
  }

  .packi-monaco-editor
    .monaco-menu
    .monaco-action-bar
    .action-item
    .action-menu-item:focus:not(.disabled)
    .action-label,
  .packi-monaco-editor
    .monaco-menu
    .monaco-action-bar
    .action-item:hover:not(.disabled)
    .action-label {
    color: inherit;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .keybinding {
    color: inherit;
    font-size: 85%;
    font-family: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    line-height: 18px;
    opacity: 0.5;
    margin-left: 8px;
  }

  .packi-monaco-editor .monaco-menu .monaco-action-bar .keybinding,
  .packi-monaco-editor .monaco-menu .monaco-action-bar .action-label:not(.separator) {
    padding: 8px 12px;
  }

  .packi-monaco-editor .monaco-action-bar .action-label.separator {
    border-bottom-color: currentColor;
    opacity: 0.1;
  }

  /* Light theme overrides */
  .packi-monaco-editor.theme-light .JsxText {
    color: ${light.colors['editor.foreground']};
  }

  .packi-monaco-editor.theme-light .JsxSelfClosingElement,
  .packi-monaco-editor.theme-light .JsxOpeningElement,
  .packi-monaco-editor.theme-light .JsxClosingElement,
  .packi-monaco-editor.theme-light .tagName-of-JsxOpeningElement,
  .packi-monaco-editor.theme-light .tagName-of-JsxClosingElement,
  .packi-monaco-editor.theme-light .tagName-of-JsxSelfClosingElement {
    color: ${lightColors.syntax.property};
  }

  .packi-monaco-editor.theme-light .name-of-JsxAttribute {
    color: ${lightColors.syntax.number};
  }

  .packi-monaco-editor.theme-light .name-of-PropertyAssignment {
    color: ${lightColors.syntax.string};
  }

  .packi-monaco-editor.theme-light .name-of-PropertyAccessExpression {
    color: ${lightColors.syntax.constant};
  }

  /* Dark theme overrides */
  .packi-monaco-editor.theme-dark .JsxText {
    color: ${dark.colors['editor.foreground']};
  }

  .packi-monaco-editor.theme-dark .JsxSelfClosingElement,
  .packi-monaco-editor.theme-dark .JsxOpeningElement,
  .packi-monaco-editor.theme-dark .JsxClosingElement,
  .packi-monaco-editor.theme-dark .tagName-of-JsxOpeningElement,
  .packi-monaco-editor.theme-dark .tagName-of-JsxClosingElement,
  .packi-monaco-editor.theme-dark .tagName-of-JsxSelfClosingElement {
    color: ${darkColors.syntax.property};
  }

  .packi-monaco-editor.theme-dark .name-of-JsxAttribute {
    color: ${darkColors.syntax.number};
  }

  .packi-monaco-editor.theme-dark .name-of-PropertyAssignment {
    color: ${darkColors.syntax.string};
  }

  .packi-monaco-editor.theme-dark .name-of-PropertyAccessExpression {
    color: ${darkColors.syntax.constant};
  }

  .packi-monaco-vim-statusbar {
    font-family: ${'var(--font-monospace)'};
    font-size: 12px;
    padding: 0 16px;
    height: 24px;
    line-height: 24px;
    border-top: 1px solid ${tp.c('border')};
  }

  .packi-monaco-vim-statusbar input {
    font-family: ${'var(--font-monospace)'};
    height: 100%;
    outline: 0;
    border: 0;
    background: transparent;
  }
`;
    }
    ;
    window.editors.MonacoOverrides = MonacoOverrides;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    const s1 = color => 
    
        color.substr(1)
    ;
    const theme = ({ui, syntax}, base) => ({
            base, 
            inherit: true, 
            rules: [
                {
                    token: '', 
                    foreground: s1(syntax.text)
                 }, 
                {
                    token: 'invalid', 
                    foreground: s1(syntax.invalid)
                 }, 
                {
                    token: 'emphasis', 
                    fontStyle: 'italic'
                 }, 
                {
                    token: 'strong', 
                    fontStyle: 'bold'
                 }, 
                {
                    token: 'variable', 
                    foreground: s1(syntax.variable)
                 }, 
                {
                    token: 'variable.predefined', 
                    foreground: s1(syntax.variable)
                 }, 
                {
                    token: 'constant', 
                    foreground: s1(syntax.constant)
                 }, 
                {
                    token: 'comment', 
                    foreground: s1(syntax.comment), 
                    fontStyle: 'italic'
                 }, 
                {
                    token: 'number', 
                    foreground: s1(syntax.number)
                 }, 
                {
                    token: 'number.hex', 
                    foreground: s1(syntax.number)
                 }, 
                {
                    token: 'regexp', 
                    foreground: s1(syntax.regexp)
                 }, 
                {
                    token: 'annotation', 
                    foreground: s1(syntax.annotation)
                 }, 
                {
                    token: 'type', 
                    foreground: s1(syntax.annotation)
                 }, 
                {
                    token: 'delimiter', 
                    foreground: s1(syntax.text)
                 }, 
                {
                    token: 'delimiter.html', 
                    foreground: s1(syntax.text)
                 }, 
                {
                    token: 'delimiter.xml', 
                    foreground: s1(syntax.text)
                 }, 
                {
                    token: 'tag', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'tag.id.jade', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'tag.class.jade', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'meta.scss', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'metatag', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'metatag.content.html', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'metatag.html', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'metatag.xml', 
                    foreground: s1(syntax.tag)
                 }, 
                {
                    token: 'metatag.php', 
                    fontStyle: 'bold'
                 }, 
                {
                    token: 'key', 
                    foreground: s1(syntax.property)
                 }, 
                {
                    token: 'string.key.json', 
                    foreground: s1(syntax.property)
                 }, 
                {
                    token: 'string.value.json', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'attribute.name', 
                    foreground: s1(syntax.constant)
                 }, 
                {
                    token: 'attribute.value', 
                    foreground: s1(syntax.property)
                 }, 
                {
                    token: 'attribute.value.number', 
                    foreground: s1(syntax.number)
                 }, 
                {
                    token: 'attribute.value.unit', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'attribute.value.html', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'attribute.value.xml', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'string', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'string.html', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'string.sql', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'string.yaml', 
                    foreground: s1(syntax.string)
                 }, 
                {
                    token: 'keyword', 
                    foreground: s1(syntax.keyword)
                 }, 
                {
                    token: 'keyword.json', 
                    foreground: s1(syntax.keyword)
                 }, 
                {
                    token: 'keyword.flow', 
                    foreground: s1(syntax.keyword)
                 }, 
                {
                    token: 'keyword.flow.scss', 
                    foreground: s1(syntax.keyword)
                 }, 
                {
                    token: 'operator.scss', 
                    foreground: s1(syntax.operator)
                 }, 
                {
                    token: 'operator.sql', 
                    foreground: s1(syntax.operator)
                 }, 
                {
                    token: 'operator.swift', 
                    foreground: s1(syntax.operator)
                 }, 
                {
                    token: 'predefined.sql', 
                    foreground: s1(syntax.predefined)
                 }
            ], 
            colors: {
                'editor.background': ui.background, 
                'editor.foreground': ui.text, 
                'editorIndentGuide.background': ui.indent.inactive, 
                'editorIndentGuide.activeBackground': ui.indent.active, 
                'editorOverviewRuler.border': ui.background
             }
         });
    function MonacoTheme(styleData) {
        styleData = styles.computeStyleData(styleData);
        this.darkColors = new editors.MonacoColorsDark(styleData);
        this.lightColors = new editors.MonacoColorsLight(styleData);
    }
    MonacoTheme.prototype.light = function() {
        return theme(this.lightColors, 'vs');
    }
    ;
    MonacoTheme.prototype.dark = function() {
        return theme(this.darkColors, 'vs-dark');
    }
    ;
    window.editors.MonacoTheme = MonacoTheme;
})(window)
;
(function(window) {

    window.editors = window.editors || {};
    var setupExecuted = false;
    // Store editor states such as cursor position, selection and scroll position for each model
    const editorStates = new Map();
    const findModel = path => 
    
        monaco.editor.getModels().find(model => 
        
            model.uri.path === (`/${path}`)
        )
    ;
    function MonacoEditor(styleData) {
        this.styleData = styles.computeStyleData(styleData);
        this.overrides = new editors.MonacoOverrides(this.styleData);
        this._disposables = [];
        this._editor = null;
        this.props = {
            lineNumbers: 'on', 
            wordWrap: 'on', 
            scrollBeyondLastLine: false, 
            minimap: {
                enabled: false
             }, 
            fontFamily: 'var(--font-monospace)', 
            fontLigatures: true
         };
        this._handleResize = () => 
        
            _.debounce(() => 
            
                this._editor?.layout?.()
            , 50, {
                leading: true, 
                trailing: true
             })
        ;
        this._handleEditFile = (_event) => {
        
            const model = this._editor?.getModel?.();
            if (model) {
                const value = model.getValue();
                if (value !== this.props.files[this.props.selectedFileName]?.contents) {
                    this.props.updateFiles(() => ({
                            [this.props.selectedFileName]: {
                                type: 'CODE', 
                                contents: value
                             }
                         }))
                }
            }
        }
        ;
    }
    MonacoEditor.setup = function(styleData, callback) {
        if (typeof callback == 'undefined') {
            callback = styleData;
            styleData = null;
        }
        if (setupExecuted) {
            return callback();
        }
        require.config({
            paths: {
                'vs': 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.20.0/min/vs'
             }
         })
        require([
            'vs/editor/editor.main'
        ], function() {
            MonacoEditor.register();
            setupExecuted = true;
            return callback();
        })
    }
    ;
    MonacoEditor.register = function() {
        const monacoTheme = new editors.MonacoTheme(this.styleData);
        const ittfLightTheme = editors.MonacoIttfLightTheme;
        const ittfDarkTheme = editors.MonacoIttfDarkTheme;
        const light = monacoTheme.light();
        const dark = monacoTheme.dark();
        console.log('ittfLightTheme', ittfLightTheme);
        console.log('ittfDarkTheme', ittfDarkTheme);
        console.log('light', light);
        console.log('dark', dark);
        monaco.languages.register({
            id: 'ittf'
         })
        monaco.languages.setMonarchTokensProvider('ittf', editors.MonacoIttfLanguage);
        monaco.editor.defineTheme('ittfLight', editors.MonacoIttfLightTheme);
        monaco.editor.defineTheme('ittfDark', editors.MonacoIttfDarkTheme);
        monaco.editor.defineTheme('light', monacoTheme.light());
        monaco.editor.defineTheme('dark', monacoTheme.dark());
    }
    ;
    MonacoEditor.prototype.setProps = function(props) {
        const prevProps = Object.assign({}, this.props);
        this.props = Object.assign({}, this.props, props)
        ;
        this.componentDidUpdate(prevProps)
    }
    ;
    MonacoEditor.prototype.getEditorTheme = function(theme, filePath) {
        if (filePath.endsWith('.ittf')) {
            return theme == 'ligth' ? 'ittfLight' : 'ittfDark';
        }
        else {
            return theme;
        }
    }
    ;
    MonacoEditor.prototype.componentDidMount = function() {
        const {
            files, 
            selectedFileName, 
            autoFocus, 
            updateFiles, 
            onSelectFile, 
            readOnly, 
            ...rest
         } = this.props;
        const options = {
            ...rest, 
            theme: this.getEditorTheme(rest.theme, selectedFileName), 
            readOnly: readOnly
         };
        const editor = monaco.editor.create(this.$container, {
            ...options, 
            model: null
         });
        this._editor = editor;
        const codeEditorService = editor._codeEditorService;
        const openEditorBase = codeEditorService.openCodeEditor.bind(codeEditorService);
        
        // The methods provided by the service are on it's prototype
        
        // So spreading this object doesn't work, we must mutate it
        codeEditorService.openCodeEditor = async (input, source) => {
        
            const result = await openEditorBase(input, source);
            const {
                resource, 
                options
             } = input;
            // Remove the leading slash added by the Uri
            this.props.onSelectFile(resource.path.replace(/^\//, ''));
            editor.setSelection(options.selection);
            editor.revealLine(options.selection.startLineNumber);
            return result;
        }
        ;
        this._disposables.push(editor)
        this._disposables.push(editor.onDidChangeModelContent(this._handleEditFile))
        this._openFile(selectedFileName, files[selectedFileName]?.contents, autoFocus)
        for (const path in files) {
            const file = files[path];
            if (file.type === 'CODE') {
                this._initializeFile(path, file.contents);
            }
            // Load all the files so the editor can provide proper intellisense
        }
    }
    ;
    MonacoEditor.prototype.componentDidUpdate = function(prevProps) {
        const {
            container, 
            selectedFileName, 
            files, 
            autoFocus, 
            theme, 
            updateFiles, 
            onSelectFile, 
            ...rest
         } = this.props;
        if (this._editor == null) {
            this.$container = document.getElementById(container);
            this.componentDidMount();
        }
        const options = {
            ...rest, 
            theme: this.getEditorTheme(theme, selectedFileName)
         };
        if (this._editor) {
            this._editor.updateOptions(options);
            const model = this._editor.getModel();
            const value = files[selectedFileName]?.contents;
            if (selectedFileName !== prevProps.selectedFileName) {
                // Save the editor state for the previous file so we can restore it when it's re-opened
                editorStates.set(prevProps.selectedFileName, this._editor.saveViewState());
                this._openFile(selectedFileName, value, autoFocus);
            }
            else {
                if (model && value !== model.getValue()) {
                    // @ts-ignore
                    this._editor.executeEdits(null, [
                        {
                            range: model.getFullModelRange(), 
                            text: value
                         }
                    ])
                }
            }
        }
        if (theme !== prevProps.theme || selectedFileName !== prevProps.selectedFileName) {
            monaco.editor.setTheme(this.getEditorTheme(theme, selectedFileName))
        }
        if (prevProps.files !== this.props.files) {
            for (const path in this.props.files) {
                const file = this.props.files[path];
                if (file.type === 'CODE' && (!prevProps.files || file.contents !== prevProps.files[path]?.contents) && path !== selectedFileName) {
                    this._initializeFile(path, file.contents);
                }
            }
        }
    }
    ;
    MonacoEditor.prototype.dispose = function() {
        this._disposables.forEach(d => 
        
            d.dispose()
        )
    }
    ;
    MonacoEditor.prototype._initializeFile = function(path, value) {
        let model = findModel(path);
        if (model && !model.isDisposed()) {
            // If a model exists, we need to update it's value
            // This is needed because the content for the file might have been modified externally
            // Use `pushEditOperations` instead of `setValue` or `applyEdits` to preserve undo stack
            // @ts-ignore
            model.pushEditOperations([], [
                {
                    range: model.getFullModelRange(), 
                    text: value
                 }
            ])
        }
        else {
            if (path.endsWith('.ittf')) {
                model = monaco.editor.createModel(value, 'ittf', monaco.Uri.from({
                    scheme: 'file', 
                    path
                 }))
                ;
            }
            else {
                model = monaco.editor.createModel(value, undefined, monaco.Uri.from({
                    scheme: 'file', 
                    path
                 }))
                ;
            }
            model.updateOptions({
                tabSize: 4, 
                insertSpaces: true
             })
        }
    }
    ;
    MonacoEditor.prototype._openFile = function(path, value, focus) {
        console.log('PackiMonacoEditor', '_openFile', path, value);
        this._initializeFile(path, value);
        const model = findModel(path);
        if (this._editor && model) {
            this._editor.setModel(model);
            // Restore the editor state for the file
            const editorState = editorStates.get(path);
            if (editorState) {
                this._editor.restoreViewState(editorState);
            }
            if (focus) {
                this._editor.focus();
            }
        }
    }
    ;
    MonacoEditor.prototype.render = function(container) {
        if (this._editor == null) {
            this.$container = document.getElementById(container);
            this.componentDidMount();
        }
    }
    ;
    window.editors.MonacoEditor = MonacoEditor;
})(window)
;
(function(window) {

    window.controls = window.controls || {};
    function triggerClick(el) {
        var event = document.createEvent("MouseEvents");
        event.initEvent("click", true, false);
        el.dispatchEvent(event);
        // utility functions
    }
    function triggerChange(el) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, false);
        el.dispatchEvent(event);
    }
    function triggerFocusIn(el) {
        var event = document.createEvent("FocusEvent");
        event.initEvent("focusin", true, false);
        el.dispatchEvent(event);
    }
    function triggerFocusOut(el) {
        var event = document.createEvent("FocusEvent");
        event.initEvent("focusout", true, false);
        el.dispatchEvent(event);
    }
    function attr(el, key) {
        return el.getAttribute(key);
    }
    function data(el, key) {
        return el.getAttribute("data-" + key);
    }
    function hasClass(el, className) {
        if (el) {
            return el.classList.contains(className);
        }
        else {
            return false;
        }
    }
    function addClass(el, className) {
        if (el) {
            return el.classList.add(className);
        }
    }
    function removeClass(el, className) {
        if (el) {
            return el.classList.remove(className);
        }
    }
    var defaultOptions = {
        data: null, 
        searchable: false
     };
    function NiceSelect(element, options) {
        this.el = element;
        this.config = Object.assign({}, defaultOptions, options || {})
        ;
        this.data = this.config.data;
        this.selectedOptions = [];
        this.placeholder = attr(this.el, "placeholder") || this.config.placeholder || "Select an option";
        this.dropdown = null;
        this.multiple = attr(this.el, "multiple");
        this.disabled = attr(this.el, "disabled");
        this.create();
    }
    NiceSelect.prototype.create = function() {
        this.el.style.display = "none";
        if (this.data) {
            this.processData(this.data);
        }
        else {
            this.extractData();
        }
        this.renderDropdown();
        this.bindEvent();
    }
    ;
    NiceSelect.prototype.processData = function(data) {
        var options = [];
        data.forEach(item => 
        
            options.push({
                data: item, 
                attributes: {
                    selected: false, 
                    disabled: false, 
                    optgroup: item.value == 'optgroup'
                 }
             })
        )
        this.options = options;
    }
    ;
    NiceSelect.prototype.extractData = function() {
        var options = this.el.querySelectorAll("option,optgroup");
        var data = [];
        var allOptions = [];
        var selectedOptions = [];
        options.forEach((item) => {
        
            if (item.tagName == 'OPTGROUP') {
                var itemData = {
                    text: item.label, 
                    value: 'optgroup'
                 };
            }
            else {
                var itemData = {
                    text: item.innerText, 
                    value: item.value
                 };
            }
            var attributes = {
                selected: item.getAttribute("selected") != null, 
                disabled: item.getAttribute("disabled") != null, 
                optgroup: item.tagName == 'OPTGROUP'
             };
            data.push(itemData);
            allOptions.push({
                data: itemData, 
                attributes
             })
        }
        )
        this.data = data;
        this.options = allOptions;
        this.options.forEach(function(item) {
            if (item.attributes.selected) {
                selectedOptions.push(item);
            }
        })
        this.selectedOptions = selectedOptions;
    }
    ;
    NiceSelect.prototype.renderDropdown = function() {
        var classes = [
            "nice-select", 
            attr(this.el, "class") || "", 
            this.disabled ? "disabled" : "", 
            this.multiple ? "has-multiple" : ""
        ];
        let searchHtml = `<div class="nice-select-search-box">
<input type="text" class="nice-select-search" placeholder="Search..."/>
</div>`;
        var html = `<div class="${classes.join(" ")}" tabindex="${
        this.disabled
         ? null
         : 0}
        ">
  <span class="${
        this.multiple
         ? "multiple-options"
         : "current"}
        "></span>
  <div class="nice-select-dropdown">
  ${
        this.config.searchable
         ? searchHtml
         : ""}
        
  <ul class="list"></ul>
  </div></div>
`;
        this.el.insertAdjacentHTML("afterend", html);
        this.dropdown = this.el.nextElementSibling;
        this._renderSelectedItems();
        this._renderItems();
    }
    ;
    NiceSelect.prototype._renderSelectedItems = function() {
        if (this.multiple) {
            var selectedHtml = "";
            if (window.getComputedStyle(this.dropdown).width == 'auto' || this.selectedOptions.length < 2) {
                this.selectedOptions.forEach(function(item) {
                    selectedHtml += `<span class="current">${item.data.text}</span>`;
                })
                selectedHtml = selectedHtml == "" ? this.placeholder : selectedHtml;
            }
            else {
                selectedHtml = this.selectedOptions.length + ' selected';
            }
            this.dropdown.querySelector(".multiple-options").innerHTML = selectedHtml;
        }
        else {
            var html = this.selectedOptions.length > 0 ? this.selectedOptions[0].data.text : this.placeholder;
            this.dropdown.querySelector(".current").innerHTML = html;
        }
    }
    ;
    NiceSelect.prototype._renderItems = function() {
        var ul = this.dropdown.querySelector("ul");
        this.options.forEach(item => 
        
            ul.appendChild(this._renderItem(item))
        )
    }
    ;
    NiceSelect.prototype._renderItem = function(option) {
        var el = document.createElement("li");
        el.innerHTML = option.data.text;
        if (option.attributes.optgroup) {
            el.classList.add('optgroup');
        }
        else {
            el.setAttribute("data-value", option.data.value);
            var classList = [
                "option", 
                option.attributes.selected ? "selected" : null, 
                option.attributes.disabled ? "disabled" : null
            ];
            el.addEventListener("click", this._onItemClicked.bind(this, option));
            el.classList.add(...classList);
        }
        option.element = el;
        return el;
    }
    ;
    NiceSelect.prototype.update = function() {
        this.extractData();
        if (this.dropdown) {
            var open = hasClass(this.dropdown, "open");
            this.dropdown.parentNode.removeChild(this.dropdown);
            this.create();
            if (open) {
                triggerClick(this.dropdown);
            }
        }
    }
    ;
    NiceSelect.prototype.disable = function() {
        if (!this.disabled) {
            this.disabled = true;
            addClass(this.dropdown, "disabled");
        }
    }
    ;
    NiceSelect.prototype.enable = function() {
        if (this.disabled) {
            this.disabled = false;
            removeClass(this.dropdown, "disabled");
        }
    }
    ;
    NiceSelect.prototype.clear = function() {
        this.selectedOptions = [];
        this._renderSelectedItems();
        this.updateSelectValue();
        triggerChange(this.el);
    }
    ;
    NiceSelect.prototype.destroy = function() {
        if (this.dropdown) {
            this.dropdown.parentNode.removeChild(this.dropdown);
            this.el.style.display = "";
        }
    }
    ;
    NiceSelect.prototype.bindEvent = function() {
        var $this = this;
        this.dropdown.addEventListener("click", this._onClicked.bind(this));
        this.dropdown.addEventListener("keydown", this._onKeyPressed.bind(this));
        this.dropdown.addEventListener("focusin", triggerFocusIn.bind(this, this.el));
        this.dropdown.addEventListener("focusout", triggerFocusOut.bind(this, this.el));
        window.addEventListener("click", this._onClickedOutside.bind(this));
        if (this.config.searchable) {
            this._bindSearchEvent();
        }
    }
    ;
    NiceSelect.prototype._bindSearchEvent = function() {
        var searchBox = this.dropdown.querySelector(".nice-select-search");
        if (searchBox) {
            searchBox.addEventListener("click", function(e) {
                e.stopPropagation();
                return false;
            })
        }
        searchBox.addEventListener("input", this._onSearchChanged.bind(this));
    }
    ;
    NiceSelect.prototype._onClicked = function(e) {
        if (this.multiple) {
            this.dropdown.classList.add("open");
        }
        else {
            this.dropdown.classList.toggle("open");
        }
        if (this.dropdown.classList.contains("open")) {
            var search = this.dropdown.querySelector(".nice-select-search");
            if (search) {
                search.value = "";
                search.focus();
            }
            var t = this.dropdown.querySelector(".focus");
            removeClass(t, "focus");
            t = this.dropdown.querySelector(".selected");
            addClass(t, "focus");
            this.dropdown.querySelectorAll("ul li").forEach(function(item) {
                item.style.display = "";
            })
        }
        else {
            this.dropdown.focus();
        }
    }
    ;
    NiceSelect.prototype._onItemClicked = function(option, e) {
        var optionEl = e.target;
        if (!hasClass(optionEl, "disabled")) {
            if (this.multiple) {
                if (hasClass(optionEl, "selected")) {
                    removeClass(optionEl, "selected");
                    this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
                    this.el.querySelector('option[value="' + optionEl.dataset.value + '"]').selected = false;
                }
                else {
                    addClass(optionEl, "selected");
                    this.selectedOptions.push(option);
                }
            }
            else {
                this.selectedOptions.forEach(function(item) {
                    removeClass(item.element, "selected");
                })
                addClass(optionEl, "selected");
                this.selectedOptions = [
                    option
                ];
            }
            this._renderSelectedItems();
            this.updateSelectValue();
        }
    }
    ;
    NiceSelect.prototype.updateSelectValue = function() {
        if (this.multiple) {
            var select = this.el;
            this.selectedOptions.forEach(function(item) {
                var el = select.querySelector('option[value="' + item.data.value + '"]');
                if (el) {
                    el.setAttribute("selected", true);
                }
            })
        }
        else {
            if (this.selectedOptions.length > 0) {
                this.el.value = this.selectedOptions[0].data.value;
            }
        }
        triggerChange(this.el);
    }
    ;
    NiceSelect.prototype._onClickedOutside = function(e) {
        if (!this.dropdown.contains(e.target)) {
            this.dropdown.classList.remove("open");
        }
    }
    ;
    NiceSelect.prototype._onKeyPressed = function(e) {
        // Keyboard events
        var focusedOption = this.dropdown.querySelector(".focus");
        // Space or Enter
        var open = this.dropdown.classList.contains("open");
        if (e.keyCode == 32 || e.keyCode == 13) {
            if (open) {
                triggerClick(focusedOption);
            }
            else {
                triggerClick(this.dropdown);
            }
        }
        else {
            if (e.keyCode == 40) {
                if (!open) {
                    triggerClick(this.dropdown);
                }
                else {
                    var next = this._findNext(focusedOption);
                    if (next) {
                        var t = this.dropdown.querySelector(".focus");
                        removeClass(t, "focus");
                        addClass(next, "focus");
                    }
                }
                e.preventDefault();
            }
            else {
                if (e.keyCode == 38) {
                    if (!open) {
                        triggerClick(this.dropdown);
                    }
                    else {
                        var prev = this._findPrev(focusedOption);
                        if (prev) {
                            var t = this.dropdown.querySelector(".focus");
                            removeClass(t, "focus");
                            addClass(prev, "focus");
                        }
                    }
                    e.preventDefault();
                }
                else {
                    if (e.keyCode == 27 && open) {
                        triggerClick(this.dropdown);
                    }
                }
            }
        }
        return false;
    }
    ;
    NiceSelect.prototype._findNext = function(el) {
        if (el) {
            el = el.nextElementSibling;
        }
        else {
            el = this.dropdown.querySelector(".list .option");
        }
        while (el) {
            if (!hasClass(el, "disabled") && el.style.display != "none") {
                return el;
            }
            el = el.nextElementSibling;
        }
        return null;
    }
    ;
    NiceSelect.prototype._findPrev = function(el) {
        if (el) {
            el = el.previousElementSibling;
        }
        else {
            el = this.dropdown.querySelector(".list .option:last-child");
        }
        while (el) {
            if (!hasClass(el, "disabled") && el.style.display != "none") {
                return el;
            }
            el = el.previousElementSibling;
        }
        return null;
    }
    ;
    NiceSelect.prototype._onSearchChanged = function(e) {
        var open = this.dropdown.classList.contains("open");
        var text = e.target.value;
        text = text.toLowerCase();
        if (text == "") {
            this.options.forEach(function(item) {
                item.element.style.display = "";
            })
        }
        else {
            if (open) {
                var matchReg = new RegExp(text);
                this.options.forEach(function(item) {
                    var optionText = item.data.text.toLowerCase();
                    var matched = matchReg.test(optionText);
                    item.element.style.display = matched ? "" : "none";
                })
            }
        }
        this.dropdown.querySelectorAll(".focus").forEach(function(item) {
            removeClass(item, "focus");
        })
        var firstEl = this._findNext(null);
        addClass(firstEl, "focus");
    }
    ;
    NiceSelect.bind = function(el, options) {
        return new NiceSelect(el, options);
    }
    ;
    window.controls.NiceSelect = NiceSelect;
})(window)
;
// from https://codepen.io/zebresel/pen/xGLYOM
(function(window) {

    window.controls = window.controls || {};
    const RangeSlider = function(id) {
        var self = this;
        // retrieve touch button
        var startX = 0,
            x = 0;
        // retrieve touch button
        var slider = document.getElementById(id);
        var touchLeft = slider.querySelector('.slider-touch-left');
        var touchRight = slider.querySelector('.slider-touch-right');
        // get some properties
        var lineSpan = slider.querySelector('.slider-line span');
        // get some properties
        var min = parseFloat(slider.getAttribute('se-min'));
        // retrieve default values
        var max = parseFloat(slider.getAttribute('se-max'));
        // retrieve default values
        var defaultMinValue = min;
        if (slider.hasAttribute('se-min-value')) {
            defaultMinValue = parseFloat(slider.getAttribute('se-min-value'));
        }
        var defaultMaxValue = max;
        if (slider.hasAttribute('se-max-value')) {
            defaultMaxValue = parseFloat(slider.getAttribute('se-max-value'));
        }
        if (defaultMinValue < min) {
            defaultMinValue = min;
        }
        if (defaultMaxValue > max) {
            defaultMaxValue = max;
        }
        if (defaultMinValue > defaultMaxValue) {
            defaultMinValue = defaultMaxValue;
        }
        var step = 0;
        if (slider.getAttribute('se-step')) {
            step = Math.abs(parseFloat(slider.getAttribute('se-step')));
        }
        // normalize flag
        var normalizeFact = 26;
        self.slider = slider;
        self.reset = function() {
            touchLeft.style.left = '0px';
            touchRight.style.left = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
            lineSpan.style.marginLeft = '0px';
            lineSpan.style.width = (slider.offsetWidth - touchLeft.offsetWidth) + 'px';
            startX = 0;
            x = 0;
        }
        ;
        self.setMinValue = function(minValue) {
            var ratio = ((minValue - min) / (max - min));
            touchLeft.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact))) + 'px';
            lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
            lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
            slider.setAttribute('se-min-value', minValue);
        }
        ;
        
        // initial reset
        self.setMaxValue = function(maxValue) {
            var ratio = ((maxValue - min) / (max - min));
            touchRight.style.left = Math.ceil(ratio * (slider.offsetWidth - (touchLeft.offsetWidth + normalizeFact)) + normalizeFact) + 'px';
            lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
            lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
            slider.setAttribute('se-max-value', maxValue);
        }
        ;
        // initial reset
        // usefull values, min, max, normalize fact is the width of both touch buttons
        self.reset();
        // usefull values, min, max, normalize fact is the width of both touch buttons
        var maxX = slider.offsetWidth - touchRight.offsetWidth;
        var selectedTouch = null;
        // set defualt values
        var initialValue = (lineSpan.offsetWidth - normalizeFact);
        // set defualt values
        self.setMinValue(defaultMinValue);
        // setup touch/click events
        self.setMaxValue(defaultMaxValue);
        function onStart(event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            var eventTouch = event;
            if (event.touches) {
                eventTouch = event.touches[0];
            }
            if (this === touchLeft) {
                x = touchLeft.offsetLeft;
            }
            else {
                x = touchRight.offsetLeft;
            }
            startX = eventTouch.pageX - x;
            selectedTouch = this;
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onStop);
            document.addEventListener('touchmove', onMove);
            document.addEventListener('touchend', onStop);
            // setup touch/click events
        }
        function onMove(event) {
            var eventTouch = event;
            if (event.touches) {
                eventTouch = event.touches[0];
            }
            x = eventTouch.pageX - startX;
            if (selectedTouch === touchLeft) {
                if (x > (touchRight.offsetLeft - selectedTouch.offsetWidth + 10)) {
                    x = (touchRight.offsetLeft - selectedTouch.offsetWidth + 10);
                }
                else {
                    if (x < 0) {
                        x = 0;
                    }
                }
                selectedTouch.style.left = x + 'px';
            }
            else {
                if (selectedTouch === touchRight) {
                    if (x < (touchLeft.offsetLeft + touchLeft.offsetWidth - 10)) {
                        x = (touchLeft.offsetLeft + touchLeft.offsetWidth - 10);
                    }
                    else {
                        if (x > maxX) {
                            x = maxX;
                        }
                    }
                    selectedTouch.style.left = x + 'px';
                }
            }
            
            // update line span
            lineSpan.style.marginLeft = touchLeft.offsetLeft + 'px';
            
            // write new value
            lineSpan.style.width = (touchRight.offsetLeft - touchLeft.offsetLeft) + 'px';
            // write new value
            // call on change
            calculateValue();
            if (slider.getAttribute('on-change')) {
                var fn = new Function('min, max', slider.getAttribute('on-change'));
                fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
            }
            if (self.onChange) {
                self.onChange(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
            }
        }
        function onStop(event) {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onStop);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onStop);
            
            // write new value
            selectedTouch = null;
            // write new value
            // call did changed
            calculateValue();
            if (slider.getAttribute('did-changed')) {
                var fn = new Function('min, max', slider.getAttribute('did-changed'));
                fn(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
            }
            if (self.didChanged) {
                self.didChanged(slider.getAttribute('se-min-value'), slider.getAttribute('se-max-value'));
            }
        }
        function calculateValue() {
            var newValue = (lineSpan.offsetWidth - normalizeFact) / initialValue;
            var minValue = lineSpan.offsetLeft / initialValue;
            var maxValue = minValue + newValue;
            var minValue = minValue * (max - min) + min;
            var maxValue = maxValue * (max - min) + min;
            console.log(step);
            if (step !== 0) {
                var multi = Math.floor((minValue / step));
                minValue = step * multi;
                multi = Math.floor((maxValue / step));
                maxValue = step * multi;
            }
            slider.setAttribute('se-min-value', minValue);
            slider.setAttribute('se-max-value', maxValue);
            // link events
        }
        // link events
        touchLeft.addEventListener('mousedown', onStart);
        touchRight.addEventListener('mousedown', onStart);
        touchLeft.addEventListener('touchstart', onStart);
        touchRight.addEventListener('touchstart', onStart);
    };
    window.controls.RangeSlider = RangeSlider;
})(window)
;
// from https://codepen.io/tomuzarowski/pen/xxZOEGV
(function(window) {

    window.controls = window.controls || {};
    function triggerChange(el) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, false);
        el.dispatchEvent(event);
    }
    class CodepenDatePicker {
        constructor(inputSelector) {
            this.input = document.querySelector(inputSelector);
            this.form = this.input.parentElement;
            this.popupContainer = null;
            this.monthContainer = null;
            this.tableContainer = null;
            this.table = document.createElement("table");
            this.months = [
                'January', 
                'February', 
                'March', 
                'April', 
                'May', 
                'June', 
                'July', 
                'August', 
                'September', 
                'October', 
                'November', 
                'December'
            ];
            this.selectedMonth = new Date().getMonth();
            this.selectedYear = new Date().getFullYear();
            this.buildCalendar();
            this.setMainEventListener();
        }
        buildCalendar() {
            this.popupContainer = document.createElement("div");
            this.popupContainer.classList.add("calendar-popup");
            this.form.appendChild(this.popupContainer);
            this.monthContainer = document.createElement("div");
            this.monthContainer.classList.add("month-and-year");
            this.monthContainer.innerHTML = `<h4>${this.getMonth()} ${this.getYear()}</h4>`;
            this.popupContainer.appendChild(this.monthContainer);
            this.createButtons();
            this.populateTable(this.selectedMonth, this.selectedYear);
        }
        createButtons() {
            const prev = document.createElement("button");
            prev.classList.add('button', 'prev');
            prev.innerHTML = "<i class='fas fa-chevron-left'></i>";
            const next = document.createElement("button");
            next.classList.add('button', 'next');
            next.innerHTML = "<i class='fas fa-chevron-right'></i>";
            prev.addEventListener("click", (e) => {
            
                e.preventDefault();
                this.updateMonth(this.selectedMonth - 1);
            }
            )
            next.addEventListener("click", (e) => {
            
                e.preventDefault();
                this.updateMonth(this.selectedMonth + 1);
            }
            )
            this.popupContainer.appendChild(prev);
            this.popupContainer.appendChild(next);
        }
        populateTable(month, year) {
            this.table.innerHTML = "";
            const namesRow = document.createElement("tr");
            const days = [
                "Mon", 
                "Tue", 
                "Wed", 
                "Thu", 
                "Fri", 
                "Sat", 
                "Sun"
            ];
            days.forEach((name) => {
            
                const th = document.createElement("th");
                th.innerHTML = name;
                namesRow.appendChild(th);
            }
            )
            this.table.appendChild(namesRow);
            const tempDate = new Date(year, month, 1);
            let firstMonthDay = tempDate.getDay();
            firstMonthDay = firstMonthDay === 0 ? 7 : tempDate.getDay();
            const daysInMonth = this.getDaysInMonth(month, year);
            const j = daysInMonth + firstMonthDay - 1;
            let tr = document.createElement("tr");
            if (firstMonthDay - 1 !== 0) {
                tr = document.createElement("tr");
                this.table.appendChild(tr);
            }
            for (let i = 0; i < firstMonthDay - 1; i++) {
                const td = document.createElement("td");
                td.innerHTML = "";
                tr.appendChild(td);
            }
            for (let i = firstMonthDay - 1; i < j; i++) {
                if (i % 7 === 0) {
                    tr = document.createElement("tr");
                    this.table.appendChild(tr);
                }
                const td = document.createElement("td");
                td.innerText = i - firstMonthDay + 2;
                td.dayNr = i - firstMonthDay + 2;
                td.classList.add("day");
                td.addEventListener("click", (e) => {
                
                    const selectedDay = e.target.innerHTML;
                    this.fillInput(selectedDay);
                    this.hideCalendar();
                }
                )
                tr.appendChild(td);
            }
            this.popupContainer.appendChild(this.table);
        }
        fillInput(day) {
            day = day < 10 ? "0" + day : day;
            let month = null;
            month = this.selectedMonth < 9 ? "0" + (this.selectedMonth + 1) : this.selectedMonth + 1;
            this.input.value = `${day}.${month}.${this.selectedYear}`;
            triggerChange(this.input)
        }
        updateMonth(month) {
            this.selectedMonth = month;
            if (this.selectedMonth < 0) {
                this.selectedYear--;
                this.selectedMonth = 11;
            }
            else {
                if (this.selectedMonth > 11) {
                    this.selectedYear++;
                    this.selectedMonth = 0;
                }
            }
            this.monthContainer.innerHTML = `<h4>${this.months[this.selectedMonth]} ${this.selectedYear}</h4>`;
            this.populateTable(this.selectedMonth, this.selectedYear);
        }
        getMonth() {
            return this.months[this.selectedMonth];
        }
        getYear() {
            return this.selectedYear;
        }
        getDaysInMonth(month, year) {
            return new Date(year, month + 1, 0).getDate();
        }
        hideCalendar() {
            this.form.classList.remove("open");
        }
        setMainEventListener() {
            this.input.addEventListener("click", (e) => {
            
                this.form.classList.toggle("open");
                if (!this.form.classList.contains("open")) {
                    this.hideCalendar();
                }
            }
            )
        }
    }
    window.controls.CodepenDatePicker = CodepenDatePicker;
})(window)
;
