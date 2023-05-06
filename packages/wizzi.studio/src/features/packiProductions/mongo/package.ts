/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packiProductions\mongo\package.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPackageProductionModel} from "../types";

const PackageProductionSchema: Schema<IPackageProductionModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

PackageProductionSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type PackageProductionModelType = Model<IPackageProductionModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetPackageProductionModel() when initialized, after buildModel() has benn called
    

let PackageProductionModel: PackageProductionModelType;

export function GetPackageProductionModel():  PackageProductionModelType {

    if (!PackageProductionModel) {
        PackageProductionModel = model<IPackageProductionModel>("PackageProduction")
        ;
    }
    return PackageProductionModel;
}

export const PackageProductionModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        PackageProductionModel = model<IPackageProductionModel>("PackageProduction", PackageProductionSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
