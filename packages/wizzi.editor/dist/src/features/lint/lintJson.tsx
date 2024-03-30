/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\lint\lintJson.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import parse from 'json-to-ast';
import {Annotation} from '../annotations/index';

export default function lintJson(fileName: string, code: string):  Annotation[] {
    
        try {
            parse(code, {
                source: fileName
             })
            return [];
        } 
        catch (e) {
            return [
                    {
                        location: {
                            fileName, 
                            startLineNumber: e.line || 0, 
                            endLineNumber: e.line || 0, 
                            startColumn: e.column || 0, 
                            endColumn: e.column || 0
                         }, 
                        message: e.message, 
                        severity: 4, 
                        source: 'JSON'
                     }
                ];
        } 
    }
