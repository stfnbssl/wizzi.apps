/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\ittf\api\ittfFs.ts.ittf
    utc time: Tue, 05 Jul 2022 13:36:59 GMT
*/
import {FsOptions} from '../types';
import ittfPaths from './ittfPaths';

export async function getIttfDocument(options: FsOptions) {

    return new Promise((resolve, reject) => {
        
            var hash = options.hash;
            var ittf = ittfPaths.getIttfFileContentByHash(hash);
            if (ittf.ok == false) {
                return reject({
                        status: error(ittf.message)
                     });
            }
            else {
                return resolve({
                        data: {
                            content: ittf.content
                         }, 
                        status: success('Ittf document content fetched')
                     });
            }
        }
        );
}

export async function putIttfDocument(options: FsOptions) {

    return new Promise((resolve, reject) => {
        
            var hash = options.hash;
            var content = options.content;
            var ittf = ittfPaths.putIttfFileContentByHash(hash, content);
            if (ittf.ok == false) {
                return reject({
                        status: error(ittf.message)
                     });
            }
            else {
                var pretty = null;
                if (options.prettify) {
                    pretty = ittfHtmlPrettifier(content, {
                        fromString: true
                     })
                    ;
                }
                return resolve({
                        data: {
                            pretty: pretty
                         }, 
                        status: success('Ittf document content written')
                     });
            }
        }
        );
}
