/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub\.wizzi-override\src\features\wizziMeta\api\wizziMeta.ts.ittf
    utc time: Sat, 06 Apr 2024 12:40:00 GMT
*/
import path from 'path';
import {verify, fSystem} from '@wizzi/utils';
import {WizziMetaRequest} from '../types';
import {wizziProds} from '../../wizzi';
import {packiTypes} from '../../packi';
const file = fSystem.vfile();

async function executeMetaProduction(options: WizziMetaRequest) {

    return new Promise((resolve, reject) => {
        
            console.log('wizziMeta.executeMetaProduction.options', options, __filename);
            createMetaCtx(options).then((metaCtx: any) => {
            
                console.log('wizziMeta.createWizziPackage.metaCtx', metaCtx, __filename);
                var pluginsBaseFolder = 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages';
                var metaPluginsBaseFolder = 'C:/My/wizzi/stfnbssl/wizzi.metas/packages';
                var globalContext = {};
                wizziProds.metaGenerate(metaCtx, {
                    items: [
                        '@wizzi/plugin.ittf', 
                        '@wizzi/plugin.json'
                    ], 
                    pluginsBaseFolder: ""
                 }, {
                    items: [
                        '@wizzi/meta.cloud', 
                        '@wizzi/meta.commons', 
                        '@wizzi/meta.docs', 
                        '@wizzi/meta.js', 
                        '@wizzi/meta.ts', 
                        '@wizzi/meta.ts.express', 
                        '@wizzi/meta.ts.db', 
                        '@wizzi/meta.web', 
                        '@wizzi/meta.wizzi'
                    ], 
                    metaPluginsBaseFolder: ""
                 }, globalContext).then((packiFiles: any) => {
                
                    return persistPackageFiles(packiFiles, options);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziMeta.executeMetaProduction.persistPackageFiles.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziMeta.executeMetaProduction.createMetaCtx.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function createMetaCtx(options: WizziMetaRequest) {

    return new Promise((resolve, reject) => {
        
            if (options.metaCtx) {
                return resolve(options.metaCtx);
            }
            if (verify.isEmpty(options.metaCtxFilepath)) {
                return reject('wizziMeta.createMetaCtx. Missing both metaCtx and metaCtxFilepath: ' + options.metaCtxFilepath);
            }
            console.log('createMetaCtx.options.metaCtxFilepath', options.metaCtxFilepath, __filename);
            wizziProds.loadModelFs(options.metaCtxFilepath, {
                metaCtx: {
                    pkgName: options.outputPackageName, 
                    description: options.description || options.outputPackageName
                 }
             }).then((metaCtx: any) => {
            
                return resolve(metaCtx);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziMeta.createMetaCtx.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function persistPackageFiles(packiFiles: packiTypes.PackiFiles, options: WizziMetaRequest) {

    return new Promise((resolve, reject) => {
        
            if (options.persist) {
                
                // TODO
                if (options.persist.type == 'filesystem') {
                    return resolve(packiFiles);
                }
                else {
                    return reject('wizziMeta.persistPackageFiles. Unknown persist type: ' + options.persist.type);
                }
            }
            else {
                return resolve(packiFiles);
            }
        }
        );
}

export {executeMetaProduction};
