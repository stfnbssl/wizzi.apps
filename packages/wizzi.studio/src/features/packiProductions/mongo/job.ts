/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packiProductions\mongo\job.ts.ittf
    utc time: Sat, 17 Feb 2024 04:55:15 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IJobModel} from "../types";

const JobSchema: Schema<IJobModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

JobSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type JobModelType = Model<IJobModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetJobModel() when initialized, after buildModel() has benn called
    

let JobModel: JobModelType;

export function GetJobModel():  JobModelType {

    if (!JobModel) {
        JobModel = model<IJobModel>("Job")
        ;
    }
    return JobModel;
}

export const JobModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        JobModel = model<IJobModel>("Job", JobSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
