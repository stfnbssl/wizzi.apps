/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\validations.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
export const validatePackiName = (name: string) => 

    name ? /^[a-z_\-\.\d\s]+$/i.test(name) ? null : new Error('Name can only contain letters, numbers, space, hyphen (-), dot (.) and underscore (_).') : new Error('Name cannot be empty.')
;
