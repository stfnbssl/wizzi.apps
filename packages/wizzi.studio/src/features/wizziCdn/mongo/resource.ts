/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziCdn\mongo\resource.ts.ittf
    utc time: Sun, 16 Jul 2023 13:02:23 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IWizziCdnResourceModel} from "../types";

const WizziCdnResourceSchema: Schema<IWizziCdnResourceModel> = new Schema({
    owner: String, 
    name: String, 
    contents: String, 
    created_at: Date, 
    updated_at: Date
 });

WizziCdnResourceSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type WizziCdnResourceModelType = Model<IWizziCdnResourceModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetWizziCdnResourceModel() when initialized, after buildModel() has benn called
    

let WizziCdnResourceModel: WizziCdnResourceModelType;

export function GetWizziCdnResourceModel():  WizziCdnResourceModelType {

    if (!WizziCdnResourceModel) {
        WizziCdnResourceModel = model<IWizziCdnResourceModel>("WizziCdnResource")
        ;
    }
    return WizziCdnResourceModel;
}

export const WizziCdnResourceModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        WizziCdnResourceModel = model<IWizziCdnResourceModel>("WizziCdnResource", WizziCdnResourceSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
