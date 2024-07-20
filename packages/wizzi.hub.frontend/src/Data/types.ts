/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\types.ts.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {MetaPluginCategory, MetaPlugin, MetaProductionCategory, MetaProduction} from "@/Api/types";
export type LocalStorageItem = { 
    [key: string]: any;
};
;
export type StringKeyedObject = { 
    [key: string]: any;
};
;
export type SelectableItem = { 
    keyValue: any;
    selected: boolean;
    itemValue: StringKeyedObject;
};
;
export type JobItem = { 
    id: string;
    name: string;
    description: string;
    packiFiles: string;
    __setup: boolean;
    // meta plugin selections
    __metaPlugins?: { 
        text: string;
        json: { 
            metaPlugins: MetaPlugin[];
            metaPluginCategories: MetaPluginCategory[];
        };
    };
    // meta production selections
    __metaProductions?: { 
        text: string;
        json: { 
            metaProductions: MetaProduction[];
            metaProductionCategories: MetaProductionCategory[];
        };
    };
};
;