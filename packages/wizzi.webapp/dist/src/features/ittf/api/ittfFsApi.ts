/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\ittf\api\ittfFsApi.ts.ittf
    utc time: Tue, 19 Jul 2022 19:18:03 GMT
*/
import {FsOptions} from '../types';
import {getIttfFileContentByHash, putIttfFileContentByHash} from './ittfPaths';
import {pretty} from 'wizzi-utils';

async function getIttfDocument(options: FsOptions) {

    return new Promise((resolve, reject) => {
        
            var hash = options.hash;
            var ittf = getIttfFileContentByHash(hash);
            if (ittf.ok == false) {
                return reject({
                        message: ittf.message
                     });
            }
            else {
                return resolve({
                        data: {
                            content: ittf.content
                         }, 
                        message: 'Ittf document content fetched'
                     });
            }
        }
        );
}

async function putIttfDocument(options: FsOptions) {

    return new Promise((resolve, reject) => {
        
            var hash = options.hash;
            var content = options.content || "";
            var ittf = putIttfFileContentByHash(hash, content);
            if (ittf.ok == false) {
                return reject({
                        message: ittf.message
                     });
            }
            else {
                var prettyText = "";
                if (options.prettify) {
                    pretty.prettifyIttfHtmlFromString(content, function(err: any, text: string) {
                    
                        if (err) {
                            prettyText = "";
                        }
                        else {
                            prettyText = text;
                        }
                        return resolve({
                                data: {
                                    pretty: prettyText
                                 }, 
                                message: 'Ittf document content written'
                             });
                    })
                }
                else {
                    return resolve({
                            data: {
                                pretty: prettyText
                             }, 
                            message: 'Ittf document content written'
                         });
                }
            }
        }
        );
}

export {getIttfDocument, putIttfDocument};
