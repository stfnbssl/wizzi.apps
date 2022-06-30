/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\account\controllers\userapi.tsx.ittf
    utc time: Fri, 02 Jul 2021 09:09:26 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import wizziProto from 'wizzi.proto';

const myname = 'features/account/controllers/userapi';

export class UserApiController implements ControllerType {
    
    public path = '/api/v1/user';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering UserApiController.initialize');
        wizziProto.start('stfnbssl', {}, () => {
        
        }
        )
        this.router.get('/checkusername/:username', this.getCheckUsername);
    };
    
    private getCheckUsername = async (request: Request, response: Response) => {
    
        console.log('getCheckUsername.request.params', request.params);
        wizziProto.validateUsername(request.params.username).then((result: any) => {
        
            console.log('getCheckUsername.result', result);
            sendSuccess(response, result)
        }
        ).catch(err => 
        
            sendFailure(response, {
                err: err
             }, 501)
        )
    }
    ;
}
