/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\philos\api\philos.ts.ittf
    utc time: Thu, 27 Jul 2023 15:16:13 GMT
*/
import path from 'path';
import {verify, fSystem} from 'wizzi-utils';
import {config} from '../../config';
import {wizziProds} from '../../wizzi';
import * as wizziFs from '../../../utils/wizziFs';
var fsfile = fSystem.vfile();
var plugins = [
    "./wizzi.plugin.philos/index.js", 
    "./wizzi.plugin.json/index.js"
];
var pluginsBaseFolder = "C:/My/wizzi/stfnbssl/wizzi.plugins/packages";

async function getPhilosList() {

    return new Promise((resolve, reject) => {
        
            let philosFolderPath = path.join(config.ittfPath, 'philos');
            wizziFs.getFolderFiles(philosFolderPath, philosFolderPath, '/philos').then((philos: any) => {
            
                console.log('api/philos/getPhilosList', philos, __filename);
                return resolve(philos);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.philos.api.getPhilosList.error', err);
                return reject(err);
            }
            )
        }
        );
}

async function getPhilosItem(name: string) {

    return new Promise((resolve, reject) => {
        
            let philosItemPath = path.join(config.ittfPath, 'philos', name + '.philos.ittf');
            wizziProds.loadAndTransformModelFs(philosItemPath, {}, {
                plugins: plugins, 
                pluginsBaseFolder: pluginsBaseFolder, 
                transformer: "philos/extended"
             }).then((philosModelTransformed: any) => {
            
                console.log('api/philos/getPhilosItem/philosModelTransformed', Object.keys(philosModelTransformed), __filename);
                return resolve(philosModelTransformed.transformResult);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.philos.api.getPhilosItem.error', err);
                return reject(err);
            }
            )
        }
        );
}

export {getPhilosList, getPhilosItem};
