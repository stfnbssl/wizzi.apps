/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\geop\api\geop.ts.ittf
    utc time: Thu, 27 Jul 2023 15:16:13 GMT
*/
import path from 'path';
import {verify, fSystem} from 'wizzi-utils';
import {config} from '../../config';
import {wizziProds} from '../../wizzi';
import * as wizziFs from '../../../utils/wizziFs';
var fsfile = fSystem.vfile();
var plugins = [
    "./wizzi.plugin.geop/index.js", 
    "./wizzi.plugin.json/index.js"
];
var pluginsBaseFolder = "C:/My/wizzi/stfnbssl/wizzi.plugins/packages";

async function getGeopList() {

    return new Promise((resolve, reject) => {
        
            let geopFolderPath = path.join(config.ittfPath, 'geop');
            wizziFs.getFolderFiles(geopFolderPath, geopFolderPath, '/geop').then((geop: any) => {
            
                console.log('api/geop/getGeopList', geop, __filename);
                return resolve(geop);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.geop.api.getGeopList.error', err);
                return reject(err);
            }
            )
        }
        );
}

async function getGeopItem(name: string) {

    return new Promise((resolve, reject) => {
        
            let geopItemPath = path.join(config.ittfPath, 'geop', name + '.geop.ittf');
            wizziProds.loadAndTransformModelFs(geopItemPath, {}, {
                plugins: plugins, 
                pluginsBaseFolder: pluginsBaseFolder, 
                transformer: "geop/extended"
             }).then((geopModelTransformed: any) => {
            
                console.log('api/geop/getGeopItem/geopModelTransformed', Object.keys(geopModelTransformed), __filename);
                return resolve(geopModelTransformed.transformResult);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.geop.api.getGeopItem.error', err);
                return reject(err);
            }
            )
        }
        );
}

export {getGeopList, getGeopItem};