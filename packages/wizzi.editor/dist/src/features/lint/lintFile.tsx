/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\lint\lintFile.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import {PackiFiles} from '../packi';
import {Annotation} from '../annotations';
import {isESLintConfig, isScript, isJson} from '../file';

async function lintCode(path: string, code: string, files: PackiFiles):  Promise<Annotation[]> {

    const eslintrc = Object.keys(files).find(isESLintConfig);
    let config: object | undefined;
    if (eslintrc) {
        try {
            
            // Use the babel-eslint parser by default since it's what we bundle
            
            // This avoids having to specify the parser which might not be obvious
            
            // @ts-ignore
            config = { parser: 'babel-eslint',  ...JSON.parse(files[eslintrc].contents)  }; 
        } 
        catch (e) {
            return [
                    {
                        message: `Content of the ESLint config (${eslintrc}) is not valid JSON`, 
                        location: {
                            fileName: eslintrc, 
                            startLineNumber: 0, 
                            endLineNumber: 0, 
                            startColumn: 0, 
                            endColumn: 0
                         }, 
                        severity: 4, 
                        source: 'ESLint'
                     }
                ];
        } 
    }
    const {
        default: lintCode
     } = await import('./lintCode');
    return lintCode(path, code, config);
}

export default async function lintFile(selectedFile: string, files: PackiFiles):  Promise<Annotation[]> {
    
        const file = files[selectedFile];
        if (!file || file.type !== 'CODE') {
            return [];
        }
        else {
            if (isScript(selectedFile) && file.contents) {
                return lintCode(selectedFile, file.contents, files);
            }
            else {
                if (isJson(selectedFile)) {
                    const {
                        default: lintJson
                     } = await import('./lintJson');
                    return lintJson(selectedFile, file.contents);
                }
                else {
                    return [];
                }
            }
        }
    }
