/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiStudioFolderEdit\api\studioFolderEdit.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import path from 'path';
import {wizziProds} from '../../wizzi';

async function getPackiFromLocalFolder(folderPath: string, rootFolder: string) {

    return new Promise((resolve, reject) => 
        
            wizziProds.scanIttfFolder(folderPath, rootFolder).then((result: any) => {
            
                if (result.fsitems) {
                }
                wizziProds.folderBrowseToPackiFiles(result).then((resultPacki: any) => {
                
                    return resolve(resultPacki);
                }
                ).catch((error: any) => {
                
                    if (typeof error === 'object' && error !== null) {
                    }
                    console.log("[31m%s[0m", '.error', error);
                    return reject(error);
                }
                )
            }
            ).catch((error: any) => {
            
                if (typeof error === 'object' && error !== null) {
                }
                console.log("[31m%s[0m", '.error', error);
                return reject(error);
            }
            )
        
        );
}

export {getPackiFromLocalFolder};
