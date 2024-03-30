/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziAction\types.ts.ittf
    utc time: Sun, 24 Mar 2024 21:38:41 GMT
*/
import {Document} from "mongoose";


export type IWizziAction = { 
    owner: string;
    kind: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at: Date;
};


type IWizziAction_doc = { 
    _doc: IWizziAction;
};

export interface IWizziActionModel extends IWizziAction, IWizziAction_doc, Document {
}
