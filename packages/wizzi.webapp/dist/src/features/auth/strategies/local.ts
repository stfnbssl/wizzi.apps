/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\auth\strategies\local.ts.ittf
    utc time: Thu, 28 Jul 2022 09:18:21 GMT
*/
import {Strategy} from 'passport-local';
import {GetAuthUserModel, AuthUserModelType} from '../mongo/authuser';
import {config} from '../../config';
let authUserModel: AuthUserModelType;
export // loog 'features.auth.strategies.local.createStrategy'
function createStrategy() {

    authUserModel = GetAuthUserModel();
    return new Strategy({
            usernameField: 'user[email]', 
            passwordField: 'user[password]'
         }, (email: string, password: string, done: any) => {
        
            console.log('features.auth.strategies.local.verify.email,password', email, password, __filename);
            authUserModel.findOne({
                email
             }).then((authuser: any) => {
            
                if (!authuser || !authuser.validatePassword(password)) {
                    console.log('features.auth.strategies.local.verify.false', __filename);
                    return done(null, false, {
                            errors: {
                                'email or password': 'is invalid'
                             }
                         });
                }
                console.log('features.auth.strategies.local.verify.true.authuser', authuser, __filename);
                return done(null, authuser);
            }
            ).catch(done)
        }
        );
}
