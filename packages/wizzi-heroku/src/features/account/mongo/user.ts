/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\account\mongo\user.ts.ittf
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IUserModel} from "../types";
const UserSchema: Schema<IUserModel> = new Schema({
    email: String, 
    username: String, 
    name: String, 
    avatar_url: String, 
    openid_provider: String, 
    created_at: Date, 
    updated_at: Date, 
    last_access_at: Date
 });
export type UserModelType = Model<IUserModel>;
    // mongoose models creation is centralized
    // mongodb calls buildModel() when starting, after connection has been established
    // controllers call UserModel() when initialized, after buildModel() has benn called
    
let UserModel: UserModelType;
export function GetUserModel():  UserModelType {

    return UserModel;
}
export const UserModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        UserModel = model<IUserModel>("User", UserSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
