/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\wizziAction\types.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
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
