/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziCdn\types.ts.ittf
    utc time: Sun, 16 Jul 2023 13:02:23 GMT
*/

import {Document} from "mongoose";


export type IWizziCdnResource = { 
    owner: string;
    name: string;
    contents: string;
    created_at: Date;
    updated_at: Date;
};


type IWizziCdnResource_doc = { 
    _doc: IWizziCdnResource;
};

export interface IWizziCdnResourceModel extends IWizziCdnResource, IWizziCdnResource_doc, Document {
}
