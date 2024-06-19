/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Utils\underscore2.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
export function isString(val: any):  boolean {
    return typeof val === "string";
}
export function isArray(val: any):  boolean {
    return Array.isArray ? Array.isArray(val) : toString.call(val) === '[object Array]';
}
export function isObject(val, val: any):  boolean {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}
// https://github.com/esamattis/underscore.string/blob/master/helper/makeString.js
export function makeString(object: any) {
    if (object == null) {
        return '';
    }
    return '' + object;
}
// https://github.com/esamattis/underscore.string/blob/master/helper/capitalize.js
export function capitalize(str: string, lowercaseRest?: boolean) {
    str = makeString(str);
    var remainingChars = !lowercaseRest ? str.slice(1) : str.slice(1).toLowerCase();
    return str.charAt(0).toUpperCase() + remainingChars;
}
// https://underscorejs.org/docs/modules/debounce.html
export function debounce(func: Function, wait: number, immediate?: boolean) {
    let timeout;
    let previous: number;
    let args;
    let result;
    let context;
    var later = function() {
        var passed = now() - previous;
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
    var debounced = restArguments(function(_args) {
        context = this;
        args = _args;
        previous = now();
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
}
export function now():  number {
    return Date.now || function() {
            return new Date().getTime();
        };
}
export function restArguments(func: Function, startIndex?: number) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
            let length = Math.max(arguments.length - startIndex, 0),
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
,
export function sortFilter(items, options: { 
    sort: { 
        ascending?: boolean;
        keyName?: string;
    };
    filter: { 
        searchText?: string;
        keyName?: string;
    };
}) {
    let retval = items;
    if (options.sort && options.sort.keyName && options.sort.keyName.length > 0) {
        const {
            ascending, 
            keyName
         } = options.sort;
        function getVal(item) {
            return keyName ? item[keyName] : item;
        }
        retval = items.sort((a, b) => {
            if (getVal(a) > getVal(b)) {
                return ascending ? 1 : -1;
            }
            else if (getVal(a) < getVal(b)) {
                return ascending ? -1 : 1;
            }
            else {
                return 0;
            }
        }
        )
        ;
    }
    if (options.filter) {
        let {
            searchText, 
            keyName
         } = options.filter;
        searchText = searchText ? searchText.toLowerCase() : searchText;
        function getVal(item) {
            return keyName ? item[keyName] : item;
        }
        retval = retval.filter((item) => {
            if (!searchText || searchText.length == 0) {
                return true;
            }
            return getVal(item) && getVal(item).toLowerCase().indexOf(searchText) > -1;
        }
        )
        ;
    }
    return retval;
}
