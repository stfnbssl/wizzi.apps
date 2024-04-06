/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziDocs\api\cheatsheet.ts.ittf
    utc time: Fri, 05 Apr 2024 18:03:04 GMT
*/
import path from 'path';
import {pretty, verify} from '@wizzi/utils';
import {wizziMaps, wizziProds} from '../../wizzi';
import stringify from 'json-stringify-safe';

export async function getCheatsheetList() {

    return new Promise((resolve, reject) => 
        
            wizziProds.getCheatsheetList().then((cheatsheets: any) => {
            
                return resolve(cheatsheets);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'cheatsheetApi.getCheatsheetList.error', err);
                return reject(err);
            }
            )
        
        );
}

export async function getCheatsheet(schemaName) {

    return new Promise((resolve, reject) => 
        
            wizziProds.getCheatsheet(schemaName).then((cheatsheet: any) => {
            
                return resolve(cheatsheet);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'cheatsheetApi.getCheatsheet.error', err);
                return reject(err);
            }
            )
        
        );
}
