/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\wizzi\api\context.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import path from 'path';
import {file} from 'wizzi';
import {config} from '../../config';
import * as wizziProds from '../productions';
import {packiTypes} from '../../packi';
import {ArtifactRequest, MetaContext} from '../types';
const myname = 'features.wizzi.api.context';
export async function resolveContexts(contextItems: MetaContext[]) {

    const promises: Promise<any>[] = [];
    contextItems.map(contextItem => 
    
        promises.push(new Promise((resolve, reject) => 
        
            resolveContext(contextItem).then((context: any) => {
            
                console.log(myname + 'resolveContext.resolved', contextItem.name, Object.keys(context), __filename);
                resolve({
                    name: contextItem.name, 
                    value: context
                 })
            }
            ).catch((err: any) => {
            
                console.log('features.wizzi.api.context.resolveContexts.resolveContext.error', err, __filename);
                return reject(err);
            }
            )
        
        ))
    )
    console.log(myname + '.resolveContexts.promises', promises.length, __filename);
    return new Promise((resolve, reject) => 
        
            Promise.all(promises).then(
            // loog myname + '.resolveContexts.all.items', items
            (items) => {
            
                var context: any = {};
                items.map((value: any) => {
                
                    if (value.name && value.name.length > 0) {
                        context[value.name] = value.value;
                    }
                    else {
                        context = Object.assign({}, context, value.value)
                        ;
                    }
                }
                )
                resolve(context)
            }
            ).catch((err: any) => {
            
                console.log('features.wizzi.api.context.resolveContexts.Promise.all.error', err, __filename);
                return reject(err);
            }
            )
        
        );
}
function resolveContext(contextItem: MetaContext) {

    if (contextItem.source == 'json-fsIttf') {
        return new Promise(
            // TODO check contextItem.path.endsWith('.json.ittf')
            (resolve, reject) => 
            
                wizziProds.generateArtifactFs(path.join(config.ittfPath, contextItem.path as string)).then((value: any) => {
                
                    console.log(myname + '.resolveContext', contextItem.source, 'path', contextItem.path, Object.keys(value), __filename);
                    resolve(value);
                }
                ).catch((err: any) => {
                
                    console.log('features.wizzi.api.context.resolveContext.wizziProds.generateArtifactFs.error', err, __filename);
                    return reject(err);
                }
                )
            
            );
    }
    else if (contextItem.source == 'json-packiIttf') {
        return new Promise((resolve, reject) => 
            
                wizziProds.generateArtifact(contextItem.mainIttf as string, contextItem.packiFiles as packiTypes.PackiFiles).then((value: any) => {
                
                    console.log(myname + '.resolveContext', contextItem.source, 'mainIttf', contextItem.mainIttf, Object.keys(value), __filename);
                    resolve(value);
                }
                ).catch((err: any) => {
                
                    console.log('features.wizzi.api.context.resolveContext.wizziProds.generateArtifact.error', err, __filename);
                    return reject(err);
                }
                )
            
            );
    }
    else if (contextItem.source == 'json-dbIttf') {
        throw new Error('ContextItem source not yet implemented: ' + contextItem.source);
    }
    else if (contextItem.source == 'json-fsFile') {
        return new Promise((resolve, reject) => {
            
                const json = file.readJSON(contextItem.path as string);
                resolve(json);
            }
            );
    }
    else if (contextItem.source == 'json-value') {
        return new Promise(resolve => 
            
                resolve(contextItem.value)
            );
    }
    else if (contextItem.source == 'model-fsIttf') {
        return new Promise((resolve, reject) => 
            
                wizziProds.loadModelFs(path.join(config.ittfPath, contextItem.path as string), {}).then((value: any) => {
                
                    console.log(myname + '.resolveContext', contextItem.source, 'path', contextItem.path, Object.keys(value), __filename);
                    resolve(value);
                }
                ).catch((err: any) => {
                
                    console.log('features.wizzi.api.context.resolveContext.wizziProds.loadModelFs.error', err, __filename);
                    return reject(err);
                }
                )
            
            );
    }
    else if (contextItem.source == 'model-packiIttf') {
        return new Promise((resolve, reject) => 
            
                wizziProds.loadModel(contextItem.mainIttf as string, contextItem.packiFiles as packiTypes.PackiFiles).then((value: any) => {
                
                    console.log(myname + '.resolveContext', 'mainIttf', contextItem.mainIttf, Object.keys(value), __filename);
                    resolve(value);
                }
                ).catch((err: any) => {
                
                    console.log('features.wizzi.api.context.resolveContext.wizziProds.loadModel.error', err, __filename);
                    return reject(err);
                }
                )
            
            );
    }
    else if (contextItem.source == 'model-dbIttf') {
        throw new Error('ContextItem source not yet implemented: ' + contextItem.source);
    }
    else {
        throw new Error('Invalid contextItem source: ' + contextItem.source);
    }
}
