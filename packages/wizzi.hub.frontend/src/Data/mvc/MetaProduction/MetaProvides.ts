/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\mvc\MetaProduction\MetaProvides.ts.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {MetaPluginCategory, MetaPlugin, MetaPluginExt, MetaProductionCategory, MetaProduction, MetaProductionExt} from "@/Api/types";
import {MetaProvidesData} from "./types";
export class MetaProvides {
    constructor() {
        this.data = {};
    }
    data: { 
        [jobId: string]: MetaProvidesData;
    };
    getPlugin(jobId: string, pluginName: string):  undefined | MetaPluginExt {
        const metaProvides = this.data[jobId];
        return metaProvides.metaPlugins.find((item) => {
                return item.name == pluginName;
            }
            );
    }
    getMetaProduction(jobId: string, productionName: string):  undefined | MetaProductionExt {
        const metaProvides = this.data[jobId];
        return metaProvides.metaProductions.find((item) => {
                return item.name == productionName;
            }
            );
    }
    setData(jobId: string, metaProvides: MetaProvidesData) {
        this.data[jobId] = metaProvides;
    }
    filterPluginCategories(jobId: string, pluginName: string, selectedCategories: MetaPluginCategory[]):  MetaPluginCategory[] {
        const retval: MetaPluginCategory[] = [];
        const metaPlugin = this.getPlugin(jobId, pluginName);
        if (metaPlugin) {
            selectedCategories.forEach((selectedItem) => {
                const found = metaPlugin.pluginCategories.find((item) => {
                    return item.name == selectedItem.name;
                }
                );
                if (found) {
                    retval.push(selectedItem)
                }
            }
            )
        }
        return retval;
    }
    pluginsHaveProductionCategory(jobId: string, selectedPlugins: MetaPlugin[], productionCategory: MetaProductionCategory):  boolean {
        const retval: MetaProductionCategory[] = [];
        selectedPlugins.forEach((selectedPluginItem) => {
            const metaPlugin = this.getPlugin(jobId, selectedPluginItem.name);
            if (metaPlugin) {
                const found = metaPlugin.metaProductionCategories.find((item) => {
                    return item.name == productionCategory.name;
                }
                );
                if (found) {
                    retval.push(productionCategory)
                }
            }
        }
        )
        return retval.length > 0;
    }
    filterMetaProductionsByPluginsAndProductionCategories(
        jobId: string, 
        selectedPlugins: MetaPlugin[], 
        selectedProductionCategories: MetaProductionCategory[], 
        productions: MetaProduction[]):  MetaProduction[] {
        const retval: MetaProduction[] = [];
        console.log('Data.mvc.Metaproduction.MetaProvides.filterMetaProductionsByPluginsAndProductionCategories.selectedPlugins,selectedProductionCategories', selectedPlugins, selectedProductionCategories);
        productions.forEach((productionItem) => {
            const metaProduction = this.getMetaProduction(jobId, productionItem.name);
            if (metaProduction) {
                const foundPlugin = selectedPlugins.find((item) => {
                    return item.name == metaProduction.plugin;
                }
                );
                const foundCategory = metaProduction.categories.find((requestedCategory) => {
                    const found = selectedProductionCategories.find((selectedCategory) => {
                        return requestedCategory.name == selectedCategory.name;
                    }
                    );
                    return found;
                }
                );
                if (foundPlugin && foundCategory) {
                    retval.push(productionItem)
                }
            }
        }
        )
        return retval;
    }
    static getInstance():  InstanceType<typeof MetaProvides> {
        if (!MetaProvides.__instance) {
            MetaProvides.__instance = new MetaProvides();
        }
        return MetaProvides.__instance;
    }
    static __instance: null | InstanceType<typeof MetaProvides> = null;
}
