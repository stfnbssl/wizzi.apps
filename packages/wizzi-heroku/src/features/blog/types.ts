/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\blog\types.ts.ittf
*/

import {Document} from "mongoose";

export type IPost = { 
    owner: string;
    name: string;
    title: string;
    content: string;
    state: string;
    created_at: Date;
    updated_at: Date;
    published_at: Date;
};


type IPost_doc = { 
    _doc: IPost;
};

export interface IPostModel extends IPost, IPost_doc, Document {
}
