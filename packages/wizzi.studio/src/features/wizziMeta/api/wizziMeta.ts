/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziMeta\api\wizziMeta.ts.ittf
*/
import path from 'path';
import wizzi from 'wizzi';
import {verify, fSystem} from 'wizzi-utils';
import {metaTemplator} from './metaTemplator';
import {WizziMetaOptions} from '../types';
import {wizziProds} from '../../wizzi';
// generateFolderArtifacts
const file = fSystem.vfile();
const meta_generators = [
    'ts-node', 
    'ts-express', 
    'ts-client', 
    'js-vanilla', 
    'js-wizzi-plugin'
];

async function createWizziPackage(options: WizziMetaOptions) {

    return new Promise((resolve, reject) => {
        
            if (!options.metaSourcesFolderPath || options.metaSourcesFolderPath.length == 0) {
                return reject('wizziMeta.createWizziPackage. Missing metaSourcesFolderPath: ' + options.metaSourcesFolderPath);
            }
            if (meta_generators.indexOf(options.metaGenerator) < 0) {
                return reject('wizziMeta.createWizziPackage. Unknown metaGenerator: ' + options.metaGenerator);
            }
            if (!options.outputPackageName || options.outputPackageName.length == 0) {
                return reject('wizziMeta.createWizziPackage. Missing outputPackageName: ' + options.outputPackageName);
            }
            console.log('wizziMeta.createWizziPackage.options', options, __filename);
            var metaGeneratorFolderPath = path.join(options.metaSourcesFolderPath, 'meta-generators', options.metaGenerator);
            var metaGeneratorFileTemplatesIndex = path.join(metaGeneratorFolderPath, 'index.ittf.ittf');
            console.log('metaGeneratorFileTemplatesIndex', metaGeneratorFileTemplatesIndex, __filename);
            var destinationIttfTempFolder = path.join(options.metaSourcesFolderPath, 'meta-templates', '__temp', options.metaGenerator, options.outputPackageName);
            console.log('destinationIttfTempFolder', destinationIttfTempFolder, __filename);
            createCliCtx(options).then((cliCtx: any) => {
            
                console.log('wizziMeta.createWizziPackage.cliCtx', cliCtx, __filename);
                metaTemplator(metaGeneratorFileTemplatesIndex, destinationIttfTempFolder, cliCtx).then((result: any) => {
                
                    
                    
                    return generatePackageFiles(destinationIttfTempFolder, options, cliCtx);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziMeta.createWizziPackage.metaTemplator.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziMeta.createWizziPackage.createCliCtx.error', err);
                return reject(err);
            }
            )
        }
        );
}
async function createCliCtx(options: WizziMetaOptions) {

    return new Promise((resolve, reject) => {
        
            if (options.cliCtx) {
                return resolve(options.cliCtx);
            }
            if (!options.cliCtxName || options.cliCtxName.length == 0) {
                return reject('wizziMeta.createCliCtx. Missing both cliCtx and cliCtxName: ' + options.cliCtxName);
            }
            const _cliCtxName = options.cliCtxName.toLowerCase().endsWith(".json.ittf") ? options.cliCtxName : options.cliCtxName+ '.json.ittf';
            var metaGeneratorCliCtxFilePath = path.join(options.metaSourcesFolderPath, 'meta-generators', options.metaGenerator, 'contexts', _cliCtxName);
            console.log('metaGeneratorCliCtxFilePath', metaGeneratorCliCtxFilePath, __filename);
            wizzi.model(path.join(metaGeneratorCliCtxFilePath), {
                cliCtx: {
                    pkgName: options.outputPackageName, 
                    description: options.description || options.outputPackageName
                 }
             }, (err: any, cliCtx: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", 'wizziMeta.createCliCtx.wizzi.model. Load cliCtx error', err);
                    return reject({
                            message: 'wizziMeta.createCliCtx.wizzi.model. Load cliCtx error', 
                            err
                         });
                }
                return resolve(cliCtx);
            }
            )
        }
        );
}
async function generatePackageFiles(destinationIttfTempFolder: string, options: WizziMetaOptions, cliCtx: any) {

    return new Promise(
        // TODO check parent folder of outputPackagePath exists
        (resolve, reject) => {
        
            if (!options.outputPackagePath || options.outputPackagePath.length == 0) {
                return reject('wizziMeta.generatePackageFiles. Missing outputPackagePath: ' + options.outputPackagePath);
            }
            console.log("wizziMeta.generatePackageFiles.generating to folder", path.join(options.outputPackagePath, options.outputPackageName), __filename);
            wizziProds.generateFolderArtifactsFs(destinationIttfTempFolder, path.join(options.outputPackagePath, options.outputPackageName), {
                cliCtx: cliCtx
             }).then((genFolderResult: any) => {
            
                return resolve(genFolderResult);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziMeta.generatePackageFiles.wizziProds.generateFolderArtifactsFs.error', err);
                return reject(err);
            }
            )
        }
        );
}

export {createWizziPackage};
