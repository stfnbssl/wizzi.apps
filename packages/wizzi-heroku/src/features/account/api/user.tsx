/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\account\api\user.tsx.ittf
*/
import {GetUserModel} from '../mongo/user';
import {IUserModel, SignupData, ValidateUserNotUsedResult, CreateUserResult} from '../types';
const myname = 'features.account.api.user';

export async function validateUsername(chosenUsername: string) {

    const User = GetUserModel();
    return new Promise((resolve, reject) => {
        
            let query = { username: chosenUsername };
            User.find(query, (err, result) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'username already in use'
                         });
                }
                resolve({
                    isValid: true
                 })
            }
            )
        }
        );
}

export async function getUserByEmail(email: string) {

    const User = GetUserModel();
    var query = {
        email: {
            $exists: true, 
            $eq: email
         }
     };
    return new Promise((resolve, reject) => 
        
            User.find(query, function(err, result) {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getUserByEmail', 'User.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            found: true, 
                            user: result[0]._doc
                         });
                }
                return resolve({
                        found: false
                     });
            })
        );
}

export async function validateUserNotUsed(chosenUsername: string, email: string):  Promise<ValidateUserNotUsedResult> {

    const User = GetUserModel();
    return new Promise((resolve, reject) => {
        
            let query = {
                username: {
                    $exists: true, 
                    $eq: chosenUsername
                 }
             };
            User.find(query, function(err, result) {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'validateUserNotUsed', 'User.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'username already in use'
                         });
                }
                let query = {
                    email: {
                        $exists: true, 
                        $eq: email
                     }
                 };
                User.find(query, function(err, result) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'validateUserNotUsed', 'User.find', 'error', err);
                        return reject(err);
                    }
                    if (result.length == 1) {
                        return resolve({
                                isValid: false, 
                                message: 'email already in use'
                             });
                    }
                    resolve({
                        isValid: true
                     })
                })
            })
        }
        );
}

export async function createUserFromSignup(signupData: SignupData):  Promise<CreateUserResult> {

    const User = GetUserModel();
    return new Promise((resolve, reject) => 
        
            validateUserNotUsed(signupData.wizziUserName, signupData.email).then((result: ValidateUserNotUsedResult) => {
            
                if (result.isValid) {
                    const newUser = new User({
                        username: signupData.wizziUserName, 
                        email: signupData.email, 
                        openid_provider: signupData.openidProvider, 
                        name: signupData.name, 
                        avatar_url: signupData.avatarUrl, 
                        created_at: new Date(), 
                        updated_at: new Date(), 
                        last_access_at: new Date()
                     });
                    newUser.save(function(err, doc) {
                    
                        if (err) {
                            console.log("[31m%s[0m", myname, 'createUserFromSignup', 'newUser.save', newUser, 'error', err);
                            return reject(err);
                        }
                        return resolve({
                                created: true, 
                                user: doc._doc, 
                                message: 'user created'
                             });
                    })
                }
                else {
                    resolve({
                        created: false, 
                        message: result.message
                     })
                }
            }
            ).catch(err => 
            
                reject(err)
            )
        
        );
}
