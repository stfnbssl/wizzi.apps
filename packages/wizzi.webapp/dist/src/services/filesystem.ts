/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\services\filesystem.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {JsonComponents, jsonfile, FsJsonDocumentManager} from 'wizzi-repo';
import path from 'path';
import wizzi from 'wizzi';
import {ConfigType} from '../features/config';
import {fsTypes} from '../features/filesystem';
import {rejects} from 'assert';
import {FileDef, VFile, vfile as createVFileFS, VFileFS} from 'wizzi-utils';
import {FsDb, FsDbResult} from '../features/filesystem/types';
import {packiTypes} from '../features/packi';
type cb<T> = (err: any, result: T) => void;
let vfile: VFile;
let docman: FsJsonDocumentManager;
let packiTemplatesJsonUri = 'json://root/packi/templates';
let lastTemplatesReload: number = 0;
let saveConfig: ConfigType;
export default // loog 'filesystem.start.Packi templates path: ', packiTemplatesPath
    async function start(config: ConfigType):  Promise<FsDb> {
    
        saveConfig = config;
        const {
            packiTemplatesFolder
         } = config;
        var packiTemplatesPath = path.join(__dirname, '..', '..', '..', packiTemplatesFolder);
        return new Promise((resolve, rejects) => 
            
                JsonComponents.createFsJson([], 
                // loog 'filesystem.start.created FsJson'
                (err, fsJson) => {
                
                    if (err) {
                        rejects(err);
                    }
                    jsonfile({
                        fsJson
                     }, 
                    // loog 'filesystem.start.created json vfile'
                    (err, result) => {
                    
                        vfile = result;
                        docman = JsonComponents.createDocumentManager(fsJson);
                        docman.uploadFolder(packiTemplatesPath, packiTemplatesJsonUri, (err, result) => {
                        
                            if (err) {
                                rejects(err);
                            }
                            lastTemplatesReload = new Date().getTime();
                            const list = FsDbDriver.getPackiTemplatesList();
                            list.then(
                            // loog 'filesystem.start.At start got packi templates', value
                            value => 
                            
                                resolve(FsDbDriver)
                            ).catch(err => 
                            
                                console.log('filesystem.start.Error retrieving packi templates', err)
                            )
                        }
                        )
                    }
                    )
                }
                )
            );
    }

const FsDbDriver: fsTypes.FsDb = {
    getPackiTemplatesList: async function():  Promise<string[]> {
    
        return new Promise((resolve, rejects) => 
            
                reloadTemplates(() => 
                
                    vfile.getFolders(packiTemplatesJsonUri, {
                        deep: false
                     }, (err, result) => {
                    
                        if (err) {
                            rejects(err);
                        }
                        const ret: string[] = [];
                        result.forEach((item) => {
                        
                            if (item.relPath.startsWith('__') == false) {
                                ret.push(item.relPath);
                            }
                        }
                        )
                        resolve(ret);
                    }
                    )
                )
            );
    }, 
    getPackiTemplate: async function(id: string):  Promise<FileDef[]> {
    
        return new Promise((resolve, rejects) => 
            
                reloadTemplates(() => 
                
                    vfile.getFiles(`${packiTemplatesJsonUri}/${id}`, {
                        deep: true, 
                        documentContent: true
                     }, (err, result) => {
                    
                        if (err) {
                            rejects(err);
                        }
                        resolve(result);
                    }
                    )
                )
            );
    }, 
    getStarterTemplate: async function():  Promise<FileDef[]> {
    
        return new Promise((resolve, rejects) => 
            
                reloadTemplates(() => 
                
                    vfile.getFiles(`${packiTemplatesJsonUri}/__starter`, {
                        deep: true, 
                        documentContent: true
                     }, (err, result) => {
                    
                        if (err) {
                            rejects(err);
                        }
                        resolve(result);
                    }
                    )
                )
            );
    }, 
    savePackiTemplate: // loog 'filesystem.savePackiTemplate.id,path: ', id, templateFolder
    async function(id: string, files: packiTypes.PackiFiles):  Promise<FsDbResult> {
    
        const {
            packiTemplatesFolder
         } = saveConfig;
        var templateFolder = path.join(__dirname, '..', '..', '..', packiTemplatesFolder, id);
        try {
            let result = await deleteFolder(templateFolder);
            // loog 'filesystem.savePackiTemplate.deleteFolder.result: ', result
            await asyncForEach(Object.keys(files), 
                // loog 'filesystem.savePackiTemplate.writeFile.begin: ', path.join(templateFolder, file)
                
                // loog 'filesystem.savePackiTemplate.writeFile.result: ', result
                async (file: string) => {
                
                    let result = await writeFile(path.join(templateFolder, file), files[file].contents);
                }
                );
            return Promise.resolve({
                    writtenCount: Object.keys(files).length
                 });
        } 
        catch (err) {
            console.log('filesystem.savePackiTemplate.err: ', err);
            return Promise.reject(err);
        } 
    }
 };

function deleteFolder(folderPath: string):  Promise<boolean> {

    return new Promise((resolve, reject) => 
        
            createVFileFS().deleteFolder(folderPath, (err, result) => {
            
                if (err) {
                    console.log('filesystem.deleteFolder.err', err);
                    return reject(err);
                }
                resolve(true);
            }
            )
        );
}

function writeFile(filePath: string, content: string):  Promise<boolean> {

    return new Promise((resolve, reject) => 
        
            createVFileFS().write(filePath, content, (err, result) => {
            
                if (err) {
                    console.log('filesystem.writeFile.err', err);
                    return reject(err);
                }
                resolve(true);
            }
            )
        );
}

function reloadTemplates(callback: Function) {

    if ((new Date().getTime() - lastTemplatesReload) > 60 * 1000) {
        start(saveConfig).then(() => {
        
            lastTemplatesReload = new Date().getTime();
            callback();
        }
        )
    }
    else {
        callback();
    }
}

async function asyncForEach(array: string[], callback: Function) {

    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
