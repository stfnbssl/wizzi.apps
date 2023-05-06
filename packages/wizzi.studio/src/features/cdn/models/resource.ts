/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\cdn\models\resource.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {ICdnResourceModel} from "../types";

const CdnResourceSchema: Schema<ICdnResourceModel> = new Schema({
    owner: String, 
    name: String, 
    contents: String, 
    created_at: Date, 
    updated_at: Date
 });

CdnResourceSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type CdnResourceModelType = Model<ICdnResourceModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetCdnResourceModel() when initialized, after buildModel() has benn called
    

let CdnResourceModel: CdnResourceModelType;

export function GetCdnResourceModel():  CdnResourceModelType {

    if (!CdnResourceModel) {
        CdnResourceModel = model<ICdnResourceModel>("CdnResource")
        ;
    }
    return CdnResourceModel;
}

export const CdnResourceModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        CdnResourceModel = model<ICdnResourceModel>("CdnResource", CdnResourceSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
