/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\dev\api\index.ts.ittf
    utc time: Sun, 24 Mar 2024 21:38:41 GMT
*/
import path from 'path';
import {verify, fSystem} from 'wizzi-utils';
import {config} from '../../config';
import {ScanDevFoldersOptions} from '../types';
import {execScanDevFolders} from './scanDevFolders';

const myname = 'features.dev.api.index';

async function scanDevFolders(options: ScanDevFoldersOptions):  Promise<any> {

    return new Promise((resolve, reject) => 
        
            execScanDevFolders(options).then((result: any) => {
            
                console.log(myname, 'options', options, __filename);
                return resolve(result);
            }
            ).catch((error: any) => {
            
                if (typeof error === 'object' && error !== null) {
                }
                console.log("[31m%s[0m", 'features.dev.api.scanDevFolders.error', error);
                return reject(error);
            }
            )
        
        );
}

export {scanDevFolders};
