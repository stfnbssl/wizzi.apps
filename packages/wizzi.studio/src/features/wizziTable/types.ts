/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziTable\types.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
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
