/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packiEdit\api\packiEdit.ts.ittf
*/
import path from 'path';
import {wizziProds} from '../../wizzi';

async function getPackiFromLocalFolder(folderPath: string, rootFolder: string) {

    return new Promise((resolve, reject) => 
        
            wizziProds.scanIttfFolder(folderPath, rootFolder).then((result: any) => {
            
                console.log("scanIttfDocumentFs.result", Object.keys(result), __filename);
                if (result.fsitems) {
                    console.log("scanIttfDocumentFs.result.fsitems", result.fsitems, __filename);
                }
                wizziProds.folderBrowseToPackiFiles(result).then((resultPacki: any) => {
                
                    console.log("scanIttfDocumentFs.resultPacki", Object.keys(resultPacki), __filename);
                    return resolve(resultPacki);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", '.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", '.error', err);
                return reject(err);
            }
            )
        
        );
}

export {getPackiFromLocalFolder};
