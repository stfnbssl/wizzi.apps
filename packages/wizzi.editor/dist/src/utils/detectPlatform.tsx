/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\utils\detectPlatform.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
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
