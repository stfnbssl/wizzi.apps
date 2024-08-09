/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\account\types.ts.ittf
*/

import {Document} from "mongoose";

export type IUser = { 
    username: string;
    email: string;
    name: string;
    avatar_url: string;
    openid_provider: string;
    created_at: Date;
    updated_at: Date;
    last_access_at: Date;
};

type IUser_doc = { 
    _doc: IUser;
};

export interface IUserModel extends IUser, IUser_doc, Document {
}

export type SignupData = { 
    name: string;
    email: string;
    avatarUrl: string;
    openidProvider: string;
    wizziUserName: string;
};

export type ValidateUserNotUsedResult = { 
    isValid: boolean;
    message?: string;
};

export type CreateUserResult = { 
    created: boolean;
    user?: IUser;
    message?: string;
};
