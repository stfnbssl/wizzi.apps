/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\site\controllers\docs.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {cheatsheetApi} from '../../features/docs';

export class DocsController implements ControllerType {
    
    public path = '/docs';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering DocsController.initialize', __filename);
        this.router.get('/cheatsheet/:name', this.cheatsheet);
    };
    
    private cheatsheet = async (request: Request, response: Response) => 
    
        cheatsheetApi.getCheatsheet(request.params.name).then(result => 
        
            response.render('docs/cheatsheet.html.ittf', {
                cs: result
             })
        ).catch((err: any) => {
        
            console.log('docs.cheatsheet.error', err, __filename);
            var content = err;
            if (typeof err === 'object' && err !== null) {
                content = '<html><body><pre><code>' + JSON.stringify(err, null, 4) + '</code></pre></body></html>';
            }
            sendHtml(response, content)
        }
        )
    
    ;
}
