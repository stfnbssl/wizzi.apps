/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\getFileLanguage.tsx.ittf
*/
type Language = 'javascript' | 'typescript' | 'json' | 'css' | 'html' | 'markdown';

export default function(path: string):  Language | undefined {
    
        if (path.includes('.')) {
            switch (path.split('.').pop()) {
                case 'js': {
                    return 'javascript';
                }
                case 'ts':
                case 'tsx': {
                    return 'typescript';
                }
                case 'json': {
                    return 'json';
                }
                case 'css': {
                    return 'css';
                }
                case 'html': {
                    return 'html';
                }
                case 'md': {
                    return 'markdown';
                }
                default: {
                    return undefined;
                }
            }
        }
        return undefined;
    }
