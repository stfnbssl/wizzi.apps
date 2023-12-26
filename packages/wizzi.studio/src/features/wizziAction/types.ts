/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziAction\types.ts.ittf
    utc time: Mon, 24 Jul 2023 09:37:44 GMT
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
