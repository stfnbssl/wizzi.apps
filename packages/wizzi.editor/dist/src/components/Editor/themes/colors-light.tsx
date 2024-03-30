/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\Editor\themes\colors-light.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import {c} from '../../ThemeProvider';
export const syntax = {
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
export const ui = {
    background: c('background', 'light'), 
    text: '#5c6773', 
    selection: '#cccccc', 
    indent: {
        active: '#e0e0e0', 
        inactive: '#ecebec'
     }
 };
export type SyntaxColors = typeof syntax;
export type UIColors = typeof ui;
