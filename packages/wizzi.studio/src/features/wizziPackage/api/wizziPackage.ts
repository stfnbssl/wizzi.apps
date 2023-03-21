/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziPackage\api\wizziPackage.ts.ittf
*/
import path from 'path';
import wizzi from 'wizzi';
import {verify, fSystem} from 'wizzi-utils';
import {searchConfigFile} from './packageFs';
import {wizziProds} from '../../wizzi';
const file = fSystem.vfile();

let moduleName = "wizziPackage.packageGenerator";

async function generateFromConfigFile(packageFolderPath: string, configName?: string) {

    moduleName += '.generateFromConfigFile';
    return new Promise((resolve, reject) => 
        
            searchConfigFile(packageFolderPath, configName).then(async (configPath: any) => {
            
                if (!configPath) {
                    console.log("[31m%s[0m", moduleName + ' config file "wizzi.config.' + (configName ? configName + '.' : '') + 'js" not found');
                    return reject({
                            message: moduleName + ' config file "wizzi.config.' + (configName ? configName + '.' : '') + 'js" not found'
                         });
                    return ;
                }
                const configInstance = await import(configPath);
                console.log(moduleName + '.configInstance', configInstance, __filename);
                const x_pluginsBaseFolder = configInstance.pluginsBaseFolder || __dirname;
                if (!configInstance.pluginsBaseFolder) {
                    console.log("[31m%s[0m", moduleName + ' - pluginsBaseFolder not set');
                    console.log("[31m%s[0m", moduleName + ' - pluginsBaseFolder defaulted to ' + x_pluginsBaseFolder);
                }
                var x_pluginsItems = [];
                if (configInstance.plugins && configInstance.plugins.length > 0) {
                    x_pluginsItems = configInstance.plugins;
                }
                else {
                    x_pluginsItems.push('wizzi-core');
                    x_pluginsItems.push('wizzi-js');
                    x_pluginsItems.push('wizzi-web');
                    console.log("[31m%s[0m", moduleName + ' - plugins not found in wizzi.config');
                    console.log("[31m%s[0m", moduleName + ' - using default plugins: "wizzi-core", "wizzi-js", "wizzi-web"');
                }
                wizziProds.executeJobFs({
                    storeKind: 'filesystem', 
                    wfjobName: configInstance.wfjobName, 
                    wfjobIttfDocumentUri: configInstance.wfjobPath, 
                    plugins: x_pluginsItems, 
                    pluginsBaseFolder: x_pluginsBaseFolder, 
                    globalContext: configInstance.globalContext, 
                    productionOptions: {
                        indentSpaces: 4, 
                        basedir: __dirname, 
                        verbose: 2, 
                        dumps: {
                            dumpsBaseFolder: path.join(__dirname, '_dumps'), 
                            mTreeBuildupJsWizziScript: {
                                dump: false
                             }
                         }
                     }
                 }).then((resultWizziJob: any) => {
                
                    if (configInstance.schemas && configInstance.schemas.length > 0) {
                        generateSchemas(configInstance.schemas, path.dirname(configInstance.wfjobPath), configInstance.destPath, {
                            items: x_pluginsItems, 
                            baseFolder: x_pluginsBaseFolder
                         }).then((resultSchemaGen: any) => {
                        
                            return resolve({
                                    resultWizziJob, 
                                    resultSchemaGen
                                 });
                        }
                        ).catch((err: any) => {
                        
                            if (typeof err === 'object' && err !== null) {
                                return reject({
                                        message: "wizziPackage.packageGenerator.generateFromConfigFile error", 
                                        err: wizzi.printWizziJobError(configInstance.wfjobName, err)
                                     });
                            }
                            console.log("[31m%s[0m", 'err.error', err);
                            return reject(err);
                        }
                        )
                    }
                    return resolve({
                            resultWizziJob
                         });
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'wizziPackage.packageGenerator.generateFromConfigFile.wizziProds.executeJobFs.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                    return reject({
                            message: "wizziPackage.packageGenerator.searchConfigFile error", 
                            err
                         });
                }
                console.log("[31m%s[0m", 'err.error', err);
                return reject(err);
            }
            )
        
        );
}
function generateSchemas(schemasToGen: string[], packageIttfSourceFolder: string, destPath: string, plugins: any) {

    return new Promise((resolve, reject) => 
        
            Promise.all(schemasToGen.map(async (schemaName: string) => {
            
                return await generateSchema(schemaName, packageIttfSourceFolder, destPath, plugins);
            }
            )).then((values: any) => {
            
                return resolve(values);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                    return reject({
                            message: "wizziPackage.packageGenerator.generateSchemas error", 
                            err
                         });
                }
                console.log("[31m%s[0m", 'err.error', err);
                return reject(err);
            }
            )
        
        );
}

async function generateSchema(schemaName: string, packageIttfSourceFolder: string, destPath: string, globalContext?: any, plugins?: any, pluginsBaseFolder?: string) {

    return new Promise((resolve, reject) => {
        
            console.log('wizziPackage.packageGenerator.generateSchema', schemaName, __filename);
            var options = {};
            if (plugins) {
                options = {
                    plugins: plugins.items, 
                    pluginsBaseFolder: plugins.baseFolder
                 };
            }
            wizziProds.generateWizziModelTypes({
                storeKind: "filesystem", 
                wfschemaName: schemaName, 
                wfschemaIttfDocumentUri: path.join(packageIttfSourceFolder, 'lib', 'wizzi', 'schemas', schemaName + '.wfschema.ittf'), 
                wfschemaOutputPackageFolder: destPath, 
                globalContext: globalContext, 
                plugins: plugins, 
                pluginsBaseFolder: pluginsBaseFolder
             }).then((result: any) => {
            
                console.log('wizziPackage.packageGenerator.generateSchema.result', result, __filename);
                return resolve(result);
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'wizziPackage.packageGenerator.generateSchema.wizziProds.generateWizziModelTypes.error', err);
                return reject(err);
            }
            )
        }
        );
}

export {generateFromConfigFile, generateSchemas, generateSchema};
