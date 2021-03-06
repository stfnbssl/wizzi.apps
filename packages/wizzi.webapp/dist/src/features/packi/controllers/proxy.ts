/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\packi\controllers\proxy.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {paramsCheck} from '../../../utils/rest';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import axios from 'axios';
const myname = 'features/packi/controller/proxy';

export class ProxyController implements ControllerType {
    
    public path = '/api/v1/packi/proxy';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProxyController.initialize', __filename);
        this.router.post('/packiitem', this.packiItem);
    };
    
    private packiItem = async (request: Request, response: Response) => {
    
        const isLoggedOn = request.session && (request.session as any).user;
        const username = isLoggedOn ? (request.session as any).user.username : null;
        axios.post('http://localhost:3000/api/v1/packiitem', request.body).then(
        // loog myname + '.packiItem res', Object.keys(res), 'res.data', res.data
        (res: any) => {
        
            response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
            response.set('Expires', '-1');
            response.set('Pragma', 'no-cache');
            sendSuccess(response, res.data)
        }
        ).catch((err: any) => {
        
            console.log(myname + '.packiItem.err', Object.keys(err), __filename);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
}
