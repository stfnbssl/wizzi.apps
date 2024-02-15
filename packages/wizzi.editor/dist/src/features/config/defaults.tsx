/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\config\defaults.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
import {PackiFiles} from '../packi';
export const DEFAULT_PACKI_CODE: PackiFiles = {
    '.wizzi/index.html.ittf': {
        contents: `html
  body
    h1 Hello world
  `, 
        type: 'CODE'
     }, 
    '.wizzi/main.js.ittf': {
        contents: `module
  kind es6
  log 'Hello world'
  `, 
        type: 'CODE'
     }, 
    '.wizzi/main.wfjob.ittf': {
        contents: `wfjob
  `, 
        type: 'CODE'
     }, 
    'README.md': {
        contents: `# Sample Packi
  `, 
        type: 'CODE'
     }
 };
export const EDITOR_LOAD_FALLBACK_TIMEOUT = 3000;
