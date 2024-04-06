/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\wizziFs\api\byHash.ts.ittf
    utc time: Sat, 06 Apr 2024 12:36:47 GMT
*/
import path from 'path';
import {verify, fSystem, crypto} from '@wizzi/utils';

var fsfile = fSystem.vfile();

async function getIttfFileContentByHash(hash: string) {

    return new Promise((resolve, reject) => {
        
            const filePath = crypto.decrypt(hash);
            if (fsfile.isFile(filePath)) {
                return resolve({
                        content: fsfile.read(filePath)
                     });
            }
            else {
                return reject({
                        message: 'Ittf document ' + filePath + ' not found'
                     });
            }
        }
        );
}

async function putIttfFileContentByHash(hash: string, content: string) {

    return new Promise(
        // loog 'putIttfFileContentByHash', hash, filePath
        (resolve, reject) => {
        
            var filePath = crypto.decrypt(hash);
            try {
                fsfile.write(filePath, content)
                return resolve({
                        message: 'Ittf document written succesfully'
                     });
            } 
            catch (ex) {
                return reject({
                        message: 'Error writing ittf document ' + filePath + '. Message: ' + ex.message
                     });
            } 
        }
        );
}

export {getIttfFileContentByHash, putIttfFileContentByHash};
