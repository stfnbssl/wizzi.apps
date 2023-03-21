/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi-override\src\features\production\controllers\tfolder.tsx.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {webSecured} from '../../../middlewares/index';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {getTemplatePackiFiles} from '../api/meta';
import {createTFolder, updateTFolder, deleteTFolder, getTFolderObject, getTFolderObjectById} from '../api/tfolder';
import {mergePackiFiles} from '../utils';
import {packiTypes} from '../../packi';

const myname = 'features/production/controllers/tfolder';

function renderPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}
function getPackiConfigFile() {

    return {
            ['.packi/config.json.ittf']: {
                type: 'CODE', 
                contents: [
                    '{', 
                    '    { meta', 
                    '        $$ name "..name.."', 
                    '        { cliCtx"', 
                    '            kind "artifact" $$ file|artifact', 
                    '            $$ filePath ".packi/cliCtx.json.ittf" $$ when kind = "file"', 
                    '            { artifact', 
                    '                $$ name "..name.." $$ when kind = "artifact"', 
                    '            [ contexts', 
                    '                {', 
                    '                    $$ propertyName "..name.."', 
                    '                    $$ artifactName "..name.."', 
                    '    [ tfolders', 
                    '        {', 
                    '            $$ name "..name.."', 
                    '    [ contexts', 
                    '        {', 
                    '            $$ propertyName "..name.."', 
                    '            $$ artifactName "..name.."'
                ].join('\n')
             }
         };
}

function makeHandlerAwareOfAsyncErrors(handler) {

    return async function(request: Request, response: Response, next: Function) {
        
            try {
                await handler(request, response, next);
            } 
            catch (error) {
                if (error instanceof FcError) {
                    response.status(statusCode.BAD_REQUEST).send({
                        code: error.code, 
                        message: error.message, 
                        data: error.data || {}
                     })
                }
                else {
                    const fcError = new FcError(SYSTEM_ERROR);
                    response.status(statusCode.BAD_REQUEST).send({
                        code: fcError.code, 
                        message: error.message, 
                        data: fcError.data || {}
                     })
                }
            } 
        };
}

export class TFolderController implements ControllerType {
    
    public path = '/tfolder';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering TFolderController.initialize');
        this.router.get("/new", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getNewTFolderForm))
        this.router.post("/new", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.postTFolder))
        this.router.get("/update/:id", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getUpdateTFolderForm))
        this.router.post("/update", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.putTFolder))
        this.router.get("/delete/:id", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.getDeleteTFolderForm))
        this.router.post("/delete", makeHandlerAwareOfAsyncErrors(webSecured), makeHandlerAwareOfAsyncErrors(this.deleteTFolder))
    };
    
    private getNewTFolderForm = async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreateTFolder', 
            formData: {
                owner: (request.session as any).user.username
             }
         }, {})
    
    ;
    
    private postTFolder = async (request: Request, response: Response) => 
    
        getTemplatePackiFiles(request.body.meta_id, request.body.meta_propsValues ? JSON.parse(request.body.meta_propsValues) : {}, request.query.context as string, request.body.context ? JSON.parse(request.body.context) : {}, {
            wizziSchema: null, 
            mainIttf: null
         }).then((packiFiles: packiTypes.PackiFiles) => 
        
            createTFolder((request.session as any).user.username, request.body.tf_name, request.body.tf_description, JSON.stringify(mergePackiFiles(packiFiles, getPackiConfigFile()))).then((result: CRUDResult) => {
            
                if (result.ok) {
                    response.redirect('/~~/t/' + (request.session as any).user.username + '/' + request.body.mp_name)
                }
                else {
                    response.render('error.html.ittf', {
                        message: 'creating a new tfolder', 
                        error: result
                     })
                }
            }
            ).catch((err: any) => 
            
                response.render('error.html.ittf', {
                    message: 'creating a new tfolder', 
                    error: err
                 })
            )
        
        )
    
    ;
    
    private getUpdateTFolderForm = 
    // loog myname + '.getUpdateTFolderForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getTFolderObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'UpdateTFolder', 
                formData: {
                    _id: id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description
                 }
             }, {})
        )
    }
    ;
    
    private putTFolder = async (request: Request, response: Response) => {
    
        const obj = request.body;
        updateTFolder(obj.tf_id, obj.tf_owner, obj.tf_name, obj.tf_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/tfolders');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'updating a tFolder production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
    
    private getDeleteTFolderForm = 
    // loog myname + '.getDeleteTFolderForm.id', id
    async (request: Request, response: Response) => {
    
        const id = request.params.id;
        getTFolderObjectById(id).then((result: any) => 
        
            renderPageForm(request, response, {
                type: 'success', 
                formName: 'DeleteTFolder', 
                formData: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description
                 }
             }, {})
        )
    }
    ;
    
    private deleteTFolder = 
    // loog myname + '.deleteTFolder.request.path', request.path
    async (request: Request, response: Response) => {
    
        const obj = request.body;
        deleteTFolder(obj.tf_id, obj.tf_owner, obj.tf_name, obj.tf_description).then((result: any) => {
        
            if (result.ok) {
                response.redirect('/productions/tfolders');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'deleting a tFolder production', 
                    error: result
                 })
            }
        }
        )
    }
    ;
}
