/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\detectPlatform.tsx.ittf
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
