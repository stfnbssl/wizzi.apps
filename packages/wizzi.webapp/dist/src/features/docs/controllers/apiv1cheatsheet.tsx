/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\docs\controllers\apiv1cheatsheet.tsx.ittf
    utc time: Thu, 28 Jul 2022 09:18:22 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {getCheatsheet} from '../api/cheatsheet';

const myname = 'features/docs/controllers/apiv1cheatsheet';

export class ApiV1CheatsheetController implements ControllerType {
    
    public path = '/api/v1/docs/cheatsheet';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ApiV1CheatsheetController.initialize', __filename);
        this.router.get('/:name', this.getCheatsheet);
    };
    
    private getCheatsheet = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        console.log('getCheatsheet.request.params', request.params, __filename);
        getCheatsheet(request.params.name).then(
        // loog 'getArtifactProductionList.result', result
        (result: any) => 
        
            sendSuccess(response, result)
        ).catch((err: any) => {
        
            console.log('ApiV1Cheatsheet.getCheatsheet.error', err, __filename);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
