/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\mvc\MetaProduction\Controller.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
*/
import {JobItem} from "@/Data/types";
import {Constants} from "./Constants";
import {Model} from "./Model";
import {MetaProvides} from "./MetaProvides";
import {arrayAddUniqueName} from "@/Utils/arrays";
import {LocalSaveAppState} from "./types";
export class Controller {
    constructor(model: InstanceType<typeof Model>, constants: typeof Constants) {
        this.model = model;
        this.constants = constants;
    }
    constants: typeof Constants;
    model: InstanceType<typeof Model>;
    getAppState(callback: (cb: LocalSaveAppState) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Data.mvc.MetaProduction.Controller.getAppState.');
        }
        this.model.getAppState((state) => {
            if (!state.activeView) {
                state.activeView = 'productions-selection';
                delete state.currentJobId
            }
            state.activeView = 'productions-selection';
            return callback(state);
        }
        )
    }
    setAppState(newState: LocalSaveAppState, callback: () => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Data.mvc.MetaProduction.Controller.getAppState.');
        }
        this.model.getAppState(oldState => 
            this.model.setAppState(Object.assign({}, oldState, newState), callback)
        )
    }
    selectMetaPluginCategory(currentJob: JobItem, category: string, oper: string) {
        console.log('Data.mvc.MetaProduction.Controller.selectMetaPluginCategory.oper, category', oper, category);
        if (!currentJob.__metaPlugins) {
            throw new Error("Property `currentJob.__metaPlugins` not set");
        }
        const {
            text: mplsTextContent, 
            json: mplsJsonContent
         } = currentJob.__metaPlugins;
        if (oper == 'select') {
            arrayAddUniqueName(mplsJsonContent.metaPluginCategories, {
                name: category
             })
        }
        else {
            mplsJsonContent.metaPluginCategories = mplsJsonContent.metaPluginCategories.filter((item) => {
                return item.name != category;
            }
            )
            ;
            mplsJsonContent.metaPlugins = mplsJsonContent.metaPlugins.filter((item) => {
                return MetaProvides.getInstance().filterPluginCategories(currentJob.id, item.name, mplsJsonContent.metaPluginCategories).length > 0
                ;
            }
            )
            ;
        }
        console.log('Data.mvc.MetaProduction.Controller.selectMetaPluginCategory.mplsJsonContent', mplsJsonContent);
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaPluginSelectionsFilePath, mplsTextContent, JSON.stringify(mplsJsonContent, null, 2), (result) => {
            if (currentJob.__metaPlugins) {
                currentJob.__metaPlugins.text = JSON.stringify(mplsJsonContent, null, 2);
                console.log('Data.mvc.MetaProduction.Controller.selectMetaPluginCategory.result', result, currentJob.__metaPlugins);
            }
            if (oper == 'unselect') {
                this.filterProductionCategoriesByPlugins(currentJob)
            }
        }
        )
    }
    selectMetaPlugin(currentJob: JobItem, metaPlugin: string, oper: string) {
        if (!currentJob.__metaPlugins) {
            throw new Error("Property `currentJob.__metaPlugins` not set");
        }
        console.log('Data.mvc.MetaProduction.Controller.selectMetaPlugin.oper, metaPlugin', oper, metaPlugin);
        const {
            text: mplsTextContent, 
            json: mplsJsonContent
         } = currentJob.__metaPlugins;
        if (oper == 'select') {
            arrayAddUniqueName(mplsJsonContent.metaPlugins, {
                name: metaPlugin
             })
        }
        else {
            mplsJsonContent.metaPlugins;
            mplsJsonContent.metaPlugins.filter((item) => {
                return item.name != metaPlugin;
            }
            )
        }
        console.log('Data.mvc.MetaProduction.Controller.selectMetaPlugin.mplsJsonContent', mplsJsonContent);
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaPluginSelectionsFilePath, mplsTextContent, JSON.stringify(mplsJsonContent, null, 2), (result) => {
            if (currentJob.__metaPlugins) {
                currentJob.__metaPlugins.text = JSON.stringify(mplsJsonContent, null, 2);
                console.log('Data.mvc.MetaProduction.Controller.selectMetaPlugin.result', result, currentJob.__metaPlugins);
            }
            if (oper == 'unselect') {
                this.filterProductionCategoriesByPlugins(currentJob)
            }
        }
        )
    }
    filterProductionCategoriesByPlugins(currentJob: JobItem) {
        if (!currentJob.__metaPlugins) {
            throw new Error("Property `currentJob.__metaPlugins` not set");
        }
        const {
            json: mplsJsonContent
         } = currentJob.__metaPlugins;
        if (!currentJob.__metaProductions) {
            throw new Error("Property `currentJob.__metaProductions` not set");
        }
        const {
            text: mpsTextContent, 
            json: mpsJsonContent
         } = currentJob.__metaProductions;
        mpsJsonContent.metaProductionCategories = mpsJsonContent.metaProductionCategories.filter((item) => {
            return MetaProvides.getInstance().pluginsHaveProductionCategory(currentJob.id, mplsJsonContent.metaPlugins, item);
        }
        )
        ;
        mpsJsonContent.metaProductions = MetaProvides.getInstance().filterMetaProductionsByPluginsAndProductionCategories(currentJob.id, mplsJsonContent.metaPlugins, mpsJsonContent.metaProductionCategories, mpsJsonContent.metaProductions)
        ;
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaProductionSelectionsFilePath, mpsTextContent, JSON.stringify(mpsJsonContent, null, 2), (result) => {
            if (currentJob.__metaProductions) {
                currentJob.__metaProductions.text = JSON.stringify(mpsJsonContent, null, 2);
                console.log('Data.mvc.MetaProduction.Controller.filterProductionCategoriesByPlugins.result', result, currentJob.__metaProductions);
            }
        }
        )
    }
    selectMetaProductionCategory(currentJob: JobItem, category: string, oper: string) {
        if (!currentJob.__metaPlugins) {
            throw new Error("Property `currentJob.__metaPlugins` not set");
        }
        const {
            json: mplsJsonContent
         } = currentJob.__metaPlugins;
        if (!currentJob.__metaProductions) {
            throw new Error("Property `currentJob.__metaProductions` not set");
        }
        console.log('Data.mvc.MetaProduction.Controller.selectMetaProductionCategory.oper, category', oper, category);
        const {
            text: mpsTextContent, 
            json: mpsJsonContent
         } = currentJob.__metaProductions;
        if (oper == 'select') {
            arrayAddUniqueName(mpsJsonContent.metaProductionCategories, {
                name: category
             })
        }
        else {
            mpsJsonContent.metaProductionCategories = mpsJsonContent.metaProductionCategories.filter((item) => {
                return item.name != category;
            }
            )
            ;
            mpsJsonContent.metaProductions = MetaProvides.getInstance().filterMetaProductionsByPluginsAndProductionCategories(currentJob.id, mplsJsonContent.metaPlugins, mpsJsonContent.metaProductionCategories, mpsJsonContent.metaProductions)
            ;
        }
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaProductionSelectionsFilePath, mpsTextContent, JSON.stringify(mpsJsonContent, null, 2), (result) => {
            if (currentJob.__metaProductions) {
                currentJob.__metaProductions.text = JSON.stringify(mpsJsonContent, null, 2);
                console.log('Data.mvc.MetaProduction.Controller.selectMetaProductionCategory.result', result, currentJob.__metaProductions);
            }
        }
        )
    }
    selectMetaProduction(currentJob: JobItem, metaProduction: string, oper: string) {
        console.log('Data.mvc.MetaProduction.Controller.selectMetaProduction.oper, metaProduction', oper, metaProduction);
        if (!currentJob.__metaProductions) {
            throw new Error("Property `currentJob.__metaProductions` not set");
        }
        const {
            text: mpsTextContent, 
            json: mpsJsonContent
         } = currentJob.__metaProductions;
        if (oper == 'select') {
            arrayAddUniqueName(mpsJsonContent.metaProductions, {
                name: metaProduction
             })
        }
        else {
            mpsJsonContent.metaProductions = mpsJsonContent.metaProductions.filter((item) => {
                return item.name != metaProduction;
            }
            )
            ;
        }
        console.log('Data.mvc.MetaProduction.Controller.selectMetaProduction.mpsJsonContent', mpsJsonContent);
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaProductionSelectionsFilePath, mpsTextContent, JSON.stringify(mpsJsonContent, null, 2), (result) => {
            if (currentJob.__metaProductions) {
                currentJob.__metaProductions.text = JSON.stringify(mpsJsonContent, null, 2);
                console.log('Data.mvc.MetaProduction.Controller.selectMetaProduction.result', result, currentJob.__metaProductions);
            }
        }
        )
    }
}