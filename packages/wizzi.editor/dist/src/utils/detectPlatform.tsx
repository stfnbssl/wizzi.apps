/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\detectPlatform.tsx.ittf
    utc time: Sat, 23 Jul 2022 13:15:35 GMT
*/

export function isAndroid(userAgent: string) {

    return /Android/i.test(userAgent);
}

export function isIOS(userAgent: string) {

    return /iPhone|iPad|iPod/i.test(userAgent);
}

export function isMobile(userAgent: string = typeof navigator !== 'undefined' ? navigator.userAgent : '') {

    return isAndroid(userAgent) || isIOS(userAgent);
}
