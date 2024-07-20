/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.express.lab\.wizzi\src\features\wizziHubProductions\mongo\job.ts.ittf
    utc time: Wed, 03 Jul 2024 08:24:51 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IJobProductionModel} from "../types";

const JobProductionSchema: Schema<IJobProductionModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

JobProductionSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

// mongoose models creation is centralized
// the mongodb service calls buildModel() when starting, after connection has been established
// controllers call GetJobProductionModel() when initialized, after buildModel() has benn called
export type JobProductionModelType = Model<IJobProductionModel>;
;

let JobProductionModel: JobProductionModelType;

export function GetJobProductionModel():  JobProductionModelType {
    if (!JobProductionModel) {
        JobProductionModel = model<IJobProductionModel>("Job", JobProductionSchema)
        ;
    }
    return JobProductionModel;
}

export const JobProductionModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
        JobProductionModel = model<IJobProductionModel>("Job", JobProductionSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    }
    
 };