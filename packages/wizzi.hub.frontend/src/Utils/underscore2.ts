/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Utils\underscore2.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import {StringKeyedObject} from "@/Data/types";
export function isString(val: any):  boolean {
    return typeof val === "string";
}
export function isArray(val: any):  boolean {
    return Array.isArray ? Array.isArray(val) : toString.call(val) === '[object Array]';
}
export function isObject(val: any):  boolean {
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
export function now():  number {
    return Date.now() || new Date().getTime();
}
export function sortFilter(items: StringKeyedObject[], options: { 
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
        function getVal(item: StringKeyedObject) {
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
        function getVal(item: StringKeyedObject) {
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
