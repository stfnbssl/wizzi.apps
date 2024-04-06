/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.heroku-1010\.wizzi-override\src\features\packiProductions\mongo\meta.ts.ittf
    utc time: Fri, 05 Apr 2024 18:03:04 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IMetaProductionModel} from "../types";

const MetaProductionSchema: Schema<IMetaProductionModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

MetaProductionSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type MetaProductionModelType = Model<IMetaProductionModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetMetaProductionModel() when initialized, after buildModel() has benn called
    

let MetaProductionModel: MetaProductionModelType;

export function GetMetaProductionModel():  MetaProductionModelType {

    if (!MetaProductionModel) {
        MetaProductionModel = model<IMetaProductionModel>("MetaProduction")
        ;
    }
    return MetaProductionModel;
}

export const MetaProductionModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        MetaProductionModel = model<IMetaProductionModel>("MetaProduction", MetaProductionSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
