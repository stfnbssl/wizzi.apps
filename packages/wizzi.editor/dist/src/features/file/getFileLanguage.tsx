/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\getFileLanguage.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
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