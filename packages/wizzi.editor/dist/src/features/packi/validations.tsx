/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\validations.tsx.ittf
*/
export const validatePackiName = (name: string) => 

    name ? /^[a-z_\-\.\d\s]+$/i.test(name) ? null : new Error('Name can only contain letters, numbers, space, hyphen (-), dot (.) and underscore (_).') : new Error('Name cannot be empty.')
;
