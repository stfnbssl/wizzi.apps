/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\lint\lintCode.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import eslintrc from '../../configs/eslint.json';
// @ts-ignore: no types defined for eslint

import {Annotation} from '../annotations/index';
// @ts-ignore: no types defined for eslint

import {Linter} from '../vendor/eslint';
import {isTS} from '../file/fileUtilities';

export default function lintCode(fileName: string, code: string, config: object = eslintrc):  Annotation[] {
        const linter = new Linter();
        const errors: { 
            ruleId: string;
            line: number;
            column: number;
            message: string;
            severity: number;
        }[] = linter.verify(code, config);
        return errors.map((err) => {
                    const isParsingError = err.message.toLowerCase().startsWith('parsing error');
                    if (isParsingError && isTS(fileName) && err.message.match(/ (as|extends|typeof|private|public) /)) {
                        return null;
                    }
                    return {
                            location: {
                                fileName, 
                                startLineNumber: err.line, 
                                endLineNumber: err.line, 
                                startColumn: err.column, 
                                endColumn: err.column
                             }, 
                            message: `${err.message} (${err.ruleId})`, 
                            severity: isParsingError ? 4 : Math.max(err.severity, 2), 
                            source: 'ESLint'
                         };
                }
                ).filter(err => 
                    err
                ) as Annotation[];
    }