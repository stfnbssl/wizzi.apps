/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\dev\api\scanDevFolders.ts.ittf
    utc time: Sat, 17 Feb 2024 04:55:15 GMT
*/
import path from 'path';
import {verify, fSystem} from 'wizzi-utils';
import {config} from '../../config';
import {wizziProds} from '../../wizzi';
import {ScanDevFoldersOptions} from '../types';
const file = (fSystem as any).file;

const myname = 'features.dev.api.scanDevFolders';

const plugins = [
    "./wizzi.plugin.json/index.js"
];
const pluginsBaseFolder = "C:/My/wizzi/stfnbssl/wizzi.plugins/packages";

async function execScanDevFolders(options: ScanDevFoldersOptions):  Promise<any> {

    return new Promise(
        // loog myname, 'options', options
        
        // loog myname, 'config', config
        
        // loog myname, "folders of baseDevFolderPath", folders
        (resolve, reject) => {
        
            var baseDevFolderPath = "C:/My/wizzi/stfnbssl";
            var searchInFolders = [];
            if (options.hasPlugins) {
                searchInFolders.push('wizzi.plugins');
            }
            if (options.hasMetaPlugins) {
                searchInFolders.push('wizzi.metas');
            }
            
            var result = {
                wizziPackages: []
             };
            var folders = file.getFolders(baseDevFolderPath, {
                deep: false
             });
            
            function exec(i) {
            
                const folder = folders[i];
                if (!folder) {
                    return resolve(result);
                }
                if (folder == 't' || searchInFolders.indexOf(folder) < 0) {
                    return exec(i+1);
                }
                scanFolderPackages(path.join(baseDevFolderPath, folder), options).then(
                // loog myname, 'execScanDevFolders', 'packagesInfo.length', packagesInfo.length
                (packagesInfo: any) => {
                
                    result.wizziPackages = result.wizziPackages.concat(packagesInfo)
                    ;
                    exec(i+1);
                }
                )
            }
            exec(0);
        }
        );
}

async function scanFolderPackages(folderPath: string, options: ScanDevFoldersOptions):  Promise<any> {

    return new Promise(
        // loog myname, 'scanFolderPackages.packagesFolder', packagesFolder
        (resolve, reject) => {
        
            var packagesFolder = path.join(folderPath, 'packages');
            var packagesFolderFolders = file.getFolders(packagesFolder, {
                deep: false
             });
            var packagesInfo = [];
            function exec(i) {
            
                const packageName = packagesFolderFolders[i];
                if (!packageName) {
                    return resolve(packagesInfo);
                }
                if (packageName == 't') {
                    return exec(i+1);
                }
                detectWizziPackage(path.join(packagesFolder, packageName), options).then((packageInfo: any) => {
                
                    if (options.hasPlugins && packageInfo.isPlugin || options.hasMetaPlugins && packageInfo.isMetaPlugin) {
                        packagesInfo.push(packageInfo);
                    }
                    return exec(i+1);
                }
                )
            }
            exec(0);
        }
        );
}

async function detectWizziPackage(folderPath: string, options: ScanDevFoldersOptions):  Promise<any> {

    return new Promise((resolve, reject) => {
        
            var packageInfo = {
                ok: false, 
                isPlugin: false, 
                isMetaPlugin: false, 
                name: null, 
                fullPath: null, 
                hasWizziOverride: false, 
                wizziConfigFiles: [
                    
                ], 
                schemas: {
                    
                 }, 
                artifacts: {
                    
                 }, 
                transformations: {
                    
                 }, 
                wizzifiers: {
                    
                 }, 
                metaProductions: {
                    
                 }
             };
            var folders = file.getFolders(folderPath, {
                deep: false
             });
            folders.forEach((childFolderName) => {
            
                if (childFolderName == '.wizzi') {
                    packageInfo.ok = true;
                    packageInfo.name = path.basename(folderPath);
                    packageInfo.fullPath = folderPath;
                    packageInfo.wizziConfigFiles = [];
                }
                if (childFolderName == '.wizzi-override') {
                    packageInfo.ok = true;
                    packageInfo.name = path.basename(folderPath);
                    packageInfo.fullPath = folderPath;
                    packageInfo.wizziConfigFiles = [];
                    packageInfo.hasWizziOverride = true;
                }
            }
            )
            if (!packageInfo.ok) {
                return resolve(packageInfo);
            }
            var files = file.getFiles(path.join(folderPath), {
                deep: false
             });
            // loog myname, 'detectWizziPackage', childFileName
            function exec(i) {
            
                const childFileName = files[i];
                if (!childFileName) {
                    return detectPlugin(packageInfo, ".wizzi", options).then((notUsed: any) => 
                        
                            detectPlugin(packageInfo, ".wizzi-override", options).then((notUsed: any) => {
                            
                                if (packageInfo.isPlugin) {
                                    return resolve(packageInfo);
                                }
                                else {
                                    detectMetaPlugin(packageInfo, ".wizzi-override", options).then((notUsed: any) => {
                                    
                                        return resolve(packageInfo);
                                    }
                                    )
                                }
                            }
                            )
                        
                        )
                    ;
                }
                if (!childFileName.startsWith('wizzi.config.')) {
                    return exec(i+1);
                }
                var fullPath = path.join(folderPath, childFileName);
                packageInfo.wizziConfigFiles.push({
                    name: childFileName, 
                    fullPath, 
                    content: options.hasPluginContents ? require(fullPath) : null
                 })
                exec(i+1);
            }
            exec(0);
        }
        );
}

async function detectPlugin(packageInfo: any, wizziFolder: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise((resolve, reject) => 
        
            detectSchema(packageInfo, wizziFolder, options).then((notUsed: any) => 
            
                detectArtifact(packageInfo, wizziFolder, options).then((notUsed: any) => {
                
                    return resolve();
                }
                )
            
            )
        
        );
}

async function detectSchema(packageInfo: any, wizziFolder: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise(
        // check wizzi plugin standard folders
        (resolve, reject) => {
        
            var wizziSchemasFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'wizzi', 'schemas');
            var wizziModelsFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'wizzi', 'models');
            var artifactsFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'artifacts');
            if (!(file.exists(wizziSchemasFolder) && file.exists(wizziModelsFolder) && file.exists(artifactsFolder))) {
                return resolve();
            }
            packageInfo.isPlugin = true;
            var schemaFilePaths = file.getFiles(wizziSchemasFolder, {
                deep: false
             });
            // loog myname, 'detectSchema', schemaFilePath
            function exec(i) {
            
                const schemaFilePath = schemaFilePaths[i];
                if (!schemaFilePath) {
                    return resolve();
                }
                if (schemaFilePath.endsWith('.wfschema.ittf')) {
                    var schemaName = schemaFilePath.substring(0, schemaFilePath.length - '.wfschema.ittf'.length);
                    packageInfo.schemas[schemaName] = {
                        name: schemaName, 
                        fullPath: path.join(wizziSchemasFolder, schemaName, schemaName + '.wfschema.ittf'), 
                        content: null
                     };
                    if (options.hasPluginContents) {
                        try {
                            exec(i+1);
                            packageInfo.schemas[schemaName].content = file.read(packageInfo.schemas[schemaName].fullPath);
                        } 
                        catch (ex) {
                            exec(i+1);
                        } 
                    }
                    else {
                        exec(i+1);
                    }
                }
                else {
                    exec(i+1);
                }
            }
            exec(0);
        }
        );
}

async function detectArtifact(packageInfo: any, wizziFolder: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise(
        // check wizzi plugin standard folders
        (resolve, reject) => {
        
            var wizziSchemasFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'wizzi', 'schemas');
            var wizziModelsFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'wizzi', 'models');
            var artifactsFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'artifacts');
            if (!(file.exists(wizziSchemasFolder) && file.exists(wizziModelsFolder) && file.exists(artifactsFolder))) {
                return resolve();
            }
            var artifactSchemas = file.getFolders(artifactsFolder, {
                deep: false
             });
            // loog myname, 'detectArtifact', 'schema', schema
            function exec(i) {
            
                const schema = artifactSchemas[i];
                if (!schema) {
                    return resolve();
                }
                detectArtifactSchemaArtifacts(packageInfo, wizziFolder, schema, options).then((notUsed: any) => 
                
                    detectWizzifier(packageInfo, wizziFolder, options).then((notUsed: any) => 
                    
                        exec(i+1)
                    )
                
                )
            }
            exec(0);
        }
        );
}

async function detectArtifactSchemaArtifacts(packageInfo: any, wizziFolder: string, schema: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise((resolve, reject) => {
        
            
            // console.log("detectArtifacts.schema", schema);
            var artifactSchemaFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'artifacts', schema);
            var artifactSchemaArtifacts = file.getFolders(artifactSchemaFolder, {
                deep: false
             });
            // loog myname, 'detectArtifactSchemaArtifacts', artifact
            function exec(i) {
            
                const artifact = artifactSchemaArtifacts[i];
                if (!artifact) {
                    return resolve();
                }
                detectArtifactSchemaArtifactGenOrTrans(packageInfo, wizziFolder, schema, artifact, options).then((notUsed: any) => 
                
                    exec(i+1)
                )
            }
            exec(0);
        }
        );
}

async function detectArtifactSchemaArtifactGenOrTrans(packageInfo: any, wizziFolder: string, schema: string, artifact: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise((resolve, reject) => {
        
            var artifactSchemaArtifactGenOrTransFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'artifacts', schema, artifact);
            var artifactSchemaArtifactGenOrTrans = file.getFolders(artifactSchemaArtifactGenOrTransFolder, {
                deep: false
             });
            // loog myname, 'detectArtifactSchemaArtifactGenOrTrans', genortrans
            function exec(i) {
            
                const genortrans = artifactSchemaArtifactGenOrTrans[i];
                if (!genortrans) {
                    return resolve();
                }
                if (genortrans == 'gen') {
                    var artifactFullPath = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'artifacts', schema, artifact, 'gen', 'main.js.ittf');
                    var key = schema + '/' + artifact;
                    packageInfo.artifacts[key] = {
                        name: key, 
                        schema, 
                        artifact, 
                        fullPath: artifactFullPath, 
                        content: null
                     };
                    if (options.hasPluginContents) {
                        packageInfo.artifacts[key].content = file.read(artifactFullPath);
                    }
                    exec(i+1);
                }
                else if (genortrans == 'trans') {
                    var artifactFullPath = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'artifacts', schema, artifact, 'trans', 'main.js.ittf');
                    var key = schema + '/' + artifact;
                    packageInfo.transformations[key] = {
                        name: key, 
                        schema, 
                        artifact, 
                        fullPath: artifactFullPath, 
                        content: null
                     };
                    if (options.hasPluginContents) {
                        packageInfo.transformations[key].content = file.read(artifactFullPath);
                    }
                    exec(i+1);
                }
                else {
                    exec(i+1);
                }
            }
            exec(0);
        }
        );
}

async function detectWizzifier(packageInfo: any, wizziFolder: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise((resolve, reject) => {
        
            var wizzifiersFolder = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'wizzifiers');
            if (!file.exists(wizzifiersFolder)) {
                return resolve();
            }
            var wizzifierFolderSchemas = file.getFolders(wizzifiersFolder, {
                deep: false
             });
            // loog myname, "detectWizzifier", schemaName
            function exec(i) {
            
                const schemaName = wizzifierFolderSchemas[i];
                if (!schemaName) {
                    return resolve();
                }
                var wizzifierFullPath = path.join(packageInfo.fullPath, wizziFolder, 'lib', 'wizzifiers', schemaName, 'wizzifier.js.ittf');
                if (file.exists(wizzifierFullPath)) {
                    packageInfo.hasWizzifiers = true;
                    packageInfo.wizzifiers[schemaName] = {
                        name: schemaName, 
                        fullPath: wizzifierFullPath, 
                        content: null
                     };
                    if (options.hasPluginContents) {
                        packageInfo.wizzifiers[schemaName].content = file.read(wizzifierFullPath);
                    }
                }
                exec(i+1);
            }
            exec(0);
        }
        );
}

async function detectMetaPlugin(packageInfo: any, wizziFolder: string, options: ScanDevFoldersOptions):  Promise<void> {

    return new Promise((resolve, reject) => {
        
            var ittfFolder = path.join(packageInfo.fullPath, wizziFolder, 'ittf');
            var detector1Filepath = path.join(packageInfo.fullPath, wizziFolder, 'root', 't', 'meta-production.js.ittf');
            var detector2Filepath = path.join(packageInfo.fullPath, wizziFolder, 'root', 't', 'meta-production-starter.js.ittf');
            if (!(file.exists(ittfFolder) && file.exists(detector1Filepath) && file.exists(detector2Filepath))) {
                return resolve();
            }
            packageInfo.isMetaPlugin = true;
            var metaProductions = file.getFolders(ittfFolder, {
                deep: false
             });
            function exec(i) {
            
                const metaProduction = metaProductions[i];
                if (!metaProduction) {
                    return resolve();
                }
                if (metaProduction == 't') {
                    return exec(i+1);
                }
                var metaProductionPath = path.join(ittfFolder, metaProduction);
                var metaCtxSchemaPath = path.join(ittfFolder, metaProduction, 'metaCtxSchemas', 'index.json.ittf');
                packageInfo.metaProductions[metaProduction] = {
                    name: metaProduction, 
                    fullPath: metaProductionPath, 
                    metaCtxSchemaPath, 
                    content: null
                 };
                if (file.exists(metaCtxSchemaPath)) {
                    if (options.hasMetaPluginContents) {
                        packageInfo.metaProductions[metaProduction].metaCtxSchemaContent = file.read(metaCtxSchemaPath);
                    }
                }
                else {
                    packageInfo.metaProductions[metaProduction].metaCtxSchemaPath = null;
                }
                exec(i+1);
            }
            exec(0);
        }
        );
}

export {execScanDevFolders};
