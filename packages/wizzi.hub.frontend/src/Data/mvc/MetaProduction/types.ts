/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\mvc\MetaProduction\types.ts.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {JobItem, StringKeyedObject} from "@/Data/types";
import {MetaPluginCategoryExt, MetaPluginExt, MetaProductionCategoryExt, MetaProductionExt} from "@/Api/types";
export type ActiveViewKind = 'plugins-selection' | 'productions-selection' | 'generation-execution';
;
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
export type LocalSaveAppState = { 
    activeView: ActiveViewKind;
    currentJobId?: string;
    metaId?: string;
    metaName?: string;
    reloadCount: number;
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
export type MetaProvidesData = { 
    metaPluginCategories: MetaPluginCategoryExt[];
    metaPlugins: MetaPluginExt[];
    metaProductionCategories: MetaProductionCategoryExt[];
    metaProductions: MetaProductionExt[];
};
;