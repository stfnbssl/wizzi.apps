/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\mvc\MetaProduction\Controller.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {JobItem} from "@/Data/types";
import {Constants} from "./Constants";
import {Model} from "./Model";
import {arrayAddUniqueName} from "@/Utils/arrays";
import {AppState} from "./types";
export class Controller {
    constructor(model: InstanceType<typeof Model>, constants: typeof Constants) {
        this.model = model;
        this.constants = constants;
    }
    constants: typeof Constants;
    model: InstanceType<typeof Model>;
    getAppState(callback: (cb: AppState) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Controller.getAppState.');
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
    setAppState(newState: AppState, callback: () => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Controller.getAppState.');
        }
        this.model.getAppState(oldState => 
            this.model.setAppState(Object.assign({}, oldState, newState), callback)
        )
    }
    selectMetaPluginCategory(currentJob: JobItem, category: string, oper: string) {
        if (!currentJob.__mpls) {
            throw new Error("Property `currentJob.__mpls` not set");
        }
        const {
            text: mplsTextContent, 
            json: mplsJsonContent
         } = currentJob.__mpls;
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
        }
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaPluginSelectionsFilePath, mplsTextContent, JSON.stringify(mplsJsonContent, null, 2), (result) => {
        }
        )
    }
    selectMetaPlugin(currentJob: JobItem, metaPlugin: string, oper: string) {
        if (!currentJob.__mpls) {
            throw new Error("Property `currentJob.__mpls` not set");
        }
        console.log('%%%%%%%%%%%%%% Controller.prototype.selectMetaPlugin.currentJob', currentJob);
        console.log('Controller.prototype.selectMetaPlugin.metaPlugin', metaPlugin);
        console.log('Controller.prototype.selectMetaPlugin.oper', oper);
        const {
            text: mplsTextContent, 
            json: mplsJsonContent
         } = currentJob.__mpls;
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
        console.log('Controller.prototype.selectMetaPlugin.mplsJsonContent', mplsJsonContent);
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaPluginSelectionsFilePath, mplsTextContent, JSON.stringify(mplsJsonContent, null, 2), (result) => {
        }
        )
    }
    selectMetaProductionCategory(currentJob: JobItem, category: string, oper: string) {
        if (!currentJob.__mps) {
            throw new Error("Property `currentJob.__mpls` not set");
        }
        const {
            text: mpsTextContent, 
            json: mpsJsonContent
         } = currentJob.__mps;
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
        }
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaProductionSelectionsFilePath, mpsTextContent, JSON.stringify(mpsJsonContent, null, 2), (result) => {
        }
        )
    }
    selectMetaProduction(currentJob: JobItem, metaProduction: string, oper: string) {
        if (!currentJob.__mps) {
            throw new Error("Property `currentJob.__mpls` not set");
        }
        const {
            text: mpsTextContent, 
            json: mpsJsonContent
         } = currentJob.__mps;
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
        this.model.updatePackiFile('job', currentJob.id, this.constants.metaProductionSelectionsFilePath, mpsTextContent, JSON.stringify(mpsJsonContent, null, 2), (result) => {
        }
        )
    }
}