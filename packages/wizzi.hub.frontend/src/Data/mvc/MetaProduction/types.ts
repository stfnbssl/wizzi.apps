/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\mvc\MetaProduction\types.ts.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {JobItem, StringKeyedObject} from "../types";
type ActiveViewKind = 'plugins-selection' | 'productions-selection' | 'generation-execution';
export type AppState = { 
    activeView: ActiveViewKind;
    metaId?: string;
    metaName?: string;
    currentJobId?: string;
    currentJob?: JobItem;
    reloadCount: number;
    selectedMetaProductions?: StringKeyedObject[];
    selectedMetaPlugins?: StringKeyedObject[];
};
;
export type MetaSelectionState = { 
    pluginCatSelId?: string;
    pluginSelId?: string;
    catSelId?: string;
    prodSelId?: string;
    selCounter: number;
    productionsSelected?: StringKeyedObject[];
    productionsUnselected?: StringKeyedObject[];
    categoriesSelected?: StringKeyedObject[];
    categoriesUnselected?: StringKeyedObject[];
};
;