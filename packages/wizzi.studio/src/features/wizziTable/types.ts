/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziTable\types.ts.ittf
    utc time: Thu, 11 Apr 2024 13:29:18 GMT
*/
import {Document} from "mongoose";


export type IWizziTable = { 
    owner: string;
    name: string;
    field1: string;
    field2: string;
    created_at: Date;
    updated_at: Date;
};


type IWizziTable_doc = { 
    _doc: IWizziTable;
};

export interface IWizziTableModel extends IWizziTable, IWizziTable_doc, Document {
}
