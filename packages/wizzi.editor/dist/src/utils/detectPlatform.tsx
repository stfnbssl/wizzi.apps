/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\detectPlatform.tsx.ittf
    utc time: Thu, 11 Apr 2024 13:23:20 GMT
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
