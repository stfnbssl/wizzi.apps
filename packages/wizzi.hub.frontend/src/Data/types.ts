/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\types.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
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
    __setup: boolean;
    // meta plugin selections
    __mpls?: { 
        text: string;
        json: { 
            metaPlugins: any[];
            metaPluginCategories: any[];
        };
    };
    // meta production selections
    __mps?: { 
        text: string;
        json: { 
            metaProductions: any[];
            metaProductionCategories: any[];
        };
    };
};
;