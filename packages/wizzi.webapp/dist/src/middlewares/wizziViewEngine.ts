/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\middlewares\wizziViewEngine.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import path from 'path';
import {Application} from 'express';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {wizziProds} from '../features/wizzi';
export const WizziViewEngineMiddleware: MiddlewareType = (app: Application) => {

    app.engine('ittf', async function(filePath: string, options: any, callback: any) {
    
        try {
            const twinJsonContext = await wizziProds.inferAndLoadContextFs(filePath, 'wzCtx');
            const siteCtx = await loadJsonIttfModel('sitectx.json.ittf');
            const context = {
                ...options, 
                locals: options._locals, 
                siteCtx, 
                ...twinJsonContext
             };
            // loog 'WizziViewEngineMiddleware.filePath', filePath
            // loog 'WizziViewEngineMiddleware.options', JSON.stringify(options, null, 2)
            wizziProds.generateArtifactFs(filePath, context).then((generated) => {
            
                return callback(null, generated.artifactContent);
            }
            ).catch((err) => {
            
                return callback(err);
            }
            )
        } 
        catch (ex) {
            callback(ex);
        } 
    })
    const viewsFolder = path.resolve(__dirname, '..', 'site', 'views');
    // specify the views directory
    app.set('views', viewsFolder);
    // register the template engine
    app.set('view engine', 'ittf');
    console.log('WizziViewEngineMiddleware installed, on folder', viewsFolder, __filename);
}
;
async function loadJsonIttfModel(relPath: string) {

    return new Promise((resolve, reject) => 
        
            wizziProds.loadModelFs(path.join(config.ittfPath, 'models', relPath), {}).then(
            // log 'loadJsonIttfModel', model
            model => 
            
                resolve(model)
            ).catch(err => 
            
                reject(err)
            )
        
        );
}
