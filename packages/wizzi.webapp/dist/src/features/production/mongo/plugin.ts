/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\features\production\mongo\plugin.ts.ittf
    utc time: Sat, 23 Jul 2022 04:18:23 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPluginProductionModel} from "../types";

const PluginProductionSchema: Schema<IPluginProductionModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    sdkVersion: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

PluginProductionSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type PluginProductionModelType = Model<IPluginProductionModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call PluginProductionModel() when initialized, after buildModel() has benn called
    

let PluginProductionModel: PluginProductionModelType;

export function GetPluginProductionModel():  PluginProductionModelType {

    return PluginProductionModel;
}

export const PluginProductionModelBuilder: ModelBuilderType = {
    buildModel: () => 
    
        PluginProductionModel = model<IPluginProductionModel>("PluginProduction", PluginProductionSchema)
    
    
 };
