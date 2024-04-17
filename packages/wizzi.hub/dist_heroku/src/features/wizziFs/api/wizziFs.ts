/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\wizziFs\api\wizziFs.ts.ittf
    utc time: Sat, 06 Apr 2024 12:40:00 GMT
*/
import path from 'path';
import {verify, fSystem, pretty} from '@wizzi/utils';
import {getIttfFileContentByHash, putIttfFileContentByHash} from './byHash';
var fsfile = fSystem.vfile();

async function getIttfDocument(hash: string) {

    return new Promise((resolve, reject) => 
        
            getIttfFileContentByHash(hash).then((ittf: any) => {
            
                return resolve({
                        content: ittf.content
                     });
            }
            ).catch((error: any) => {
            
                return reject({
                        message: "Error retrieving Ittf Document", 
                        error
                     });
            }
            )
        
        );
}

async function putIttfDocument(hash: string, content: string, prettify: string) {

    return new Promise((resolve, reject) => 
        
            putIttfFileContentByHash(hash, content).then((ittf) => {
            
                if (prettify) {
                    pretty.prettifyIttfHtmlFromString(content, (err: any, prettified: string) => {
                    
                        if (err) {
                            return resolve({
                                    data: {
                                        pretty: null
                                     }
                                 });
                        }
                        else {
                            return resolve({
                                    data: {
                                        pretty: prettified
                                     }, 
                                    message: 'Ittf Document written'
                                 });
                        }
                    }
                    )
                }
                else {
                    resolve({
                        data: {
                            pretty: null
                         }, 
                        message: 'Ittf Document written'
                     })
                }
            }
            ).catch((error) => {
            
                return reject({
                        message: "Error writing Ittf Document", 
                        error
                     });
            }
            )
        
        );
}

export {getIttfDocument, putIttfDocument};
