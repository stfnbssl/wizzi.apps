/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziAction\mongo\wizziAction.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
*/
const myname = 'src/features/wizziAction/mongo/wizziAction';
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IWizziActionModel} from "../types";

const WizziActionSchema: Schema<IWizziActionModel> = new Schema({
    owner: String, 
    kind: String, 
    name: String, 
    description: String, 
    created_at: Date, 
    updated_at: Date
 });


export type WizziActionModelType = Model<IWizziActionModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetWizziActionModel() when initialized, after buildModel() has benn called
    

let WizziActionModel: WizziActionModelType;

export function GetWizziActionModel():  WizziActionModelType {

    if (!WizziActionModel) {
        WizziActionModel = model<IWizziActionModel>("WizziAction")
        ;
    }
    return WizziActionModel;
}

export const WizziActionModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        WizziActionModel = model<IWizziActionModel>("WizziAction", WizziActionSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
