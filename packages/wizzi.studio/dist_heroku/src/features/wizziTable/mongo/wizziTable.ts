/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziTable\mongo\wizziTable.ts.ittf
    utc time: Sun, 25 Feb 2024 14:14:59 GMT
*/
const myname = 'src/features/wizziTable/mongo/wizziTable';
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IWizziTableModel} from "../types";

const WizziTableSchema: Schema<IWizziTableModel> = new Schema({
    owner: String, 
    name: String, 
    field1: String, 
    field2: String, 
    created_at: Date, 
    updated_at: Date
 });


export type WizziTableModelType = Model<IWizziTableModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetWizziTableModel() when initialized, after buildModel() has benn called
    

let WizziTableModel: WizziTableModelType;

export function GetWizziTableModel():  WizziTableModelType {

    if (!WizziTableModel) {
        WizziTableModel = model<IWizziTableModel>("WizziTable")
        ;
    }
    return WizziTableModel;
}

export const WizziTableModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        WizziTableModel = model<IWizziTableModel>("WizziTable", WizziTableSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
