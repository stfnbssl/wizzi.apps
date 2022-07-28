/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\account\controllers\apiv1user.tsx.ittf
    utc time: Thu, 28 Jul 2022 09:18:22 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {validateUsername} from '../api/user';

const myname = 'features/account/controllers/apiv1user';

export class ApiV1UserController implements ControllerType {
    
    public path = '/api/v1/user';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1UserController.initialize', __filename);
        this.router.get('/checkusername/:username', this.getCheckUsername);
    };
    
    private getCheckUsername = 
    // loog 'getCheckUsername.request.params', request.params
    async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        validateUsername(request.params.username).then(
        // loog 'getCheckUsername.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch(err => 
        
            sendFailure(response, {
                err: err
             }, 501)
        )
    }
    ;
}
