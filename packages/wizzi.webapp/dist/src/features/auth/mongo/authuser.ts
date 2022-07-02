/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\auth\mongo\authuser.ts.ittf
    utc time: Sat, 02 Jul 2022 04:01:54 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IAuthUserModel} from "../types";
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const AuthUserSchema = new Schema<IAuthUserModel>({
    userName: {
        type: String
     }, 
    realName: {
        type: String
     }, 
    email: {
        type: String
     }, 
    hash: {
        type: String
     }, 
    salt: {
        type: String
     }
 }, {
    collection: 'users'
 });
AuthUserSchema.methods.setPassword = // loog 'features.auth.mongo.AuthUser.setPassword.salt,hash', this.salt, this.hash
function(password: string) {

    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}
;
AuthUserSchema.methods.validatePassword = // loog 'features.auth.mongo.AuthUser.validatePassword.hash,this.hash', hash, this.hash
function(password: string):  boolean {

    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
}
;
AuthUserSchema.methods.generateJWT = function() {

    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
            email: this.email, 
            id: this._id, 
            exp: parseInt(String(expirationDate.getTime() / 1000), 10)
         }, 'secret');
}
;
AuthUserSchema.methods.toAuthJSON = function() {

    return {
            _id: this._id, 
            email: this.email, 
            token: this.generateJWT()
         };
}
;

export type AuthUserModelType = Model<IAuthUserModel>;

let authUserModel: AuthUserModelType;

export function GetAuthUserModel():  AuthUserModelType {

    return authUserModel;
}

export const AuthUserModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        authUserModel = model<IAuthUserModel>("AuthUser", AuthUserSchema)
    
    
 };
