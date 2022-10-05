/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\blog\models\post.ts.ittf
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPostModel} from "../types";

const PostSchema: Schema<IPostModel> = new Schema({
    owner: String, 
    name: String, 
    title: String, 
    content: String, 
    state: String, 
    created_at: Date, 
    updated_at: Date, 
    published_at: Date
 });

PostSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type PostModelType = Model<IPostModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetPostModel() when initialized, after buildModel() has benn called
    

let PostModel: PostModelType;

export function GetPostModel():  PostModelType {

    if (!PostModel) {
        PostModel = model<IPostModel>("Post")
        ;
    }
    return PostModel;
}

export const PostModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        PostModel = model<IPostModel>("Post", PostSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
