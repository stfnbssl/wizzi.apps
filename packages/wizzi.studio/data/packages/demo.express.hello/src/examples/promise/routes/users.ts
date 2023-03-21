/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\wizzi.demo.server\data\packages\demo.express.hello\.wizzi\src\examples\promise\routes\users.ts.ittf
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {FcError, SYSTEM_ERROR} from '../../../utils/error';
import {statusCode} from '../../../utils';
import {userService} from '../services/userService';

const myname = 'examples/promise/controllers/users';

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

export class UsersController implements ControllerType {
    
    public path = '/examples/promise/users';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log("[33m%s[0m", 'Entering UsersController.initialize');
        this.router.get('/', function(req: Request, res: Response) {
        
            (res as any).promise(userService.getAll());
        })
        this.router.get('/errorRoute', function(req: Request, res: Response) {
        
            throw new Error('This is synchronous error!');
        })
        this.router.get('/:id', function(req: Request, res: Response) {
        
            (res as any).promise(() => 
            
                userService.getById(req.params.id)
            )
        })
        this.router.get('/:id/profilePic', async function(req: Request, res: Response) {
        
            try {
                const url = await userService.getUserProfilePicUrl(req.params.id);
                res.redirect(url);
            } 
            catch (e) {
                (res as any).promise(Promise.reject(e));
            } 
        })
    };
}
