/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziGist\api\wizziGist.ts.ittf
*/
import path from 'path';
import {verify, fSystem, pretty} from 'wizzi-utils';
import {wizziFsApi} from '../../wizziFs';
var fsfile = fSystem.vfile();

async function getIttfDocument(hash: string) {

    return new Promise((resolve, reject) => 
        
            wizziFsApi.getIttfFileContentByHash(hash).then((ittf: any) => {
            
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
        
            wizziFsApi.putIttfFileContentByHash(hash, content).then((ittf) => {
            
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
