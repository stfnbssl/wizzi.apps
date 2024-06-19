/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\mvc\MetaProduction\Model.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {JobItem} from "@/Data/types";
import * as packiApi from "@/Api/packiApi";
import {Constants} from "./Constants";
import {Storage} from "./Storage";
import {AppState} from "./types";
export class Model {
    constructor(storage: InstanceType<typeof Storage>, constants: typeof Constants) {
        this.storage = storage;
        this.constants = constants;
        this.wzApi = api.Wizzi;
        //
    }
    constants: typeof Constants;
    storage: InstanceType<typeof Storage>;
    // log 'Model.prototype.getAppState.retval', retval
    getAppState(callback: (cb: AppState) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Model.getAppState.');
        }
        const retval: AppState = {
            activeView: this.storage.getWizziMetaProductionState('activeView'), 
            metaId: this.storage.getWizziMetaProductionState('metaId'), 
            metaName: this.storage.getWizziMetaProductionState('metaName'), 
            currentJobId: this.storage.getWizziMetaProductionState('currentJobId')
         };
        return callback(retval);
    }
    // log 'Model.prototype.setAppState', state
    setAppState(state: AppState, callback: () => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Model.setAppState.');
        }
        this.storage.setWizziMetaProductionState('activeView', state.activeView)
        this.storage.setWizziMetaProductionState('metaId', state.metaId)
        this.storage.setWizziMetaProductionState('metaName', state.metaName)
        this.storage.setWizziMetaProductionState('currentJobId', state.currentJobId)
        return callback();
    }
    updatePackiFile(
        productionKind: string, 
        productionId: string, 
        filePath: string, 
        oldContents: string, 
        newContents: string, 
        callback: (cb: any) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Model.updatePackiFile.');
        }
        if (oldContents.trim() == newContents.trim()) {
            return callback({
                    message: 'Nothing changed'
                 });
        }
        const pm = new this.wzApi.PackiManager();
        pm.putCodeFile(filePath, oldContents)
        const packiDiffs = {
            [filePath]: {
                d: 0, 
                contents: newContents
             }
         };
        this.storage.putPackiDiffs(productionKind, productionId, packiDiffs, {}, callback)
    }
    // 
    // set meta plugins selections object
    // 
    // set meta productions selections object
    // 
    setupJobProductionItem(jobItem: JobItem):  JobItem {
        if (jobItem.__setup) {
            return jobItem;
        }
        const mpls = packiApi.extractPackiFileContent(jobItem.packiFiles, this.constants.metaPluginSelectionsFilePath, {
            json: true
         });
        mpls.json = mpls.json || {};
        if (!mpls.json.metaPluginCategories) {
            mpls.json.metaPluginCategories = [];
            mpls.text = JSON.stringify(mpls.json);
        }
        if (!mpls.json.metaPlugins) {
            mpls.json.metaPlugins = [];
            mpls.text = JSON.stringify(mpls.json);
        }
        jobItem.__mpls = mpls;
        const mps = packiApi.extractPackiFileContent(jobItem.packiFiles, this.constants.metaProductionSelectionsFilePath, {
            json: true
         });
        mps.json = mps.json || {};
        if (!mps.json.metaProductionCategories) {
            mps.json.metaProductionCategories = [];
            mps.text = JSON.stringify(mps.json);
        }
        if (!mps.json.metaProductions) {
            mps.json.metaProductions = [];
            mps.text = JSON.stringify(mps.json);
        }
        jobItem.__mps = mps;
        jobItem.__setup = true;
        console.log('^^^^^ -----> app.Model.prototype.setupJobProductionItem.jobItem', jobItem, __filename);
        return jobItem;
    }
}