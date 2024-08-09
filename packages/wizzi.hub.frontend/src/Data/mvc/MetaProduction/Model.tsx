/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\mvc\MetaProduction\Model.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import DiffMatchPatch from "diff-match-patch";
import {JobItem} from "@/Data/types";
import * as packiApi from "@/Api/packiApi";
import {Constants} from "./Constants";
import {Storage} from "./Storage";
import {LocalSaveAppState} from "./types";
export class Model {
    constructor(storage: InstanceType<typeof Storage>, constants: typeof Constants) {
        this.storage = storage;
        this.constants = constants;
        //
    }
    constants: typeof Constants;
    storage: InstanceType<typeof Storage>;
    getAppState(callback: (cb: LocalSaveAppState) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Model.getAppState.');
        }
        const retval: LocalSaveAppState = {
            activeView: this.storage.getWizziMetaProductionState('activeView'), 
            metaId: this.storage.getWizziMetaProductionState('metaId'), 
            metaName: this.storage.getWizziMetaProductionState('metaName'), 
            currentJobId: this.storage.getWizziMetaProductionState('currentJobId'), 
            reloadCount: parseInt(this.storage.getWizziMetaProductionState('reloadCount'))
         };
        return callback(retval);
    }
    setAppState(state: LocalSaveAppState, callback: () => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Model.setAppState.');
        }
        this.storage.setWizziMetaProductionState('activeView', state.activeView)
        this.storage.setWizziMetaProductionState('metaId', state.metaId)
        this.storage.setWizziMetaProductionState('metaName', state.metaName)
        this.storage.setWizziMetaProductionState('currentJobId', state.currentJobId)
        this.storage.setWizziMetaProductionState('reloadCount', state.reloadCount.toString())
        return callback();
    }
    updatePackiFile(
        productionKind: string, 
        productionId: string, 
        filePath: string, 
        oldContents: string | null, 
        newContents: string, 
        callback: (cb: any) => void) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Model.updatePackiFile.');
        }
        console.log("Data.mvc.Metaproduction.Model.updatePackiFile", productionKind, filePath, oldContents, newContents);
        if (oldContents && oldContents.trim() == newContents.trim()) {
            return callback({
                    message: 'Nothing changed'
                 });
        }
        let packiDiffs: { 
            [x: string]: { 
                d: number;
                contents: string;
                diffs?: DiffMatchPatch.Diff[];
            };
        } = {
            [filePath]: {
                d: 1, 
                contents: newContents, 
                diffs: []
             }
         };
        if (oldContents != null) {
            const pbuilder = new packiApi.PackiBuilder({});
            pbuilder.putCodeFile(filePath, oldContents)
            const fileDiffs = pbuilder.getFileDiffs(filePath, newContents);
            packiDiffs = {
                [filePath]: {
                    d: 0, 
                    diffs: fileDiffs, 
                    contents: newContents
                 }
             };
        }
        this.storage.putPackiDiffs(productionKind, productionId, packiDiffs, callback)
    }
    // 
    // set meta plugins selections object
    // 
    // set meta productions selections object
    // 
    // set meta demo package object
    // 
    // set saved meta context (metaCtx) object
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
        jobItem.__metaPlugins = mpls;
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
        jobItem.__metaProductions = mps;
        const mdp = packiApi.extractPackiFileContent(jobItem.packiFiles, this.constants.metaDemoPackageFilePath, {
            json: true
         });
        mdp.json = mdp.json || {};
        if (!mdp.json.name) {
            mdp.json.name = '__name_missing__';
            mdp.json.useNpm = false;
            mdp.json.npm = {};
            mdp.text = JSON.stringify(mdp.json);
        }
        jobItem.__metaDemoPackage = mdp;
        const metaCtx = packiApi.extractPackiFileContent(jobItem.packiFiles, this.constants.metaCtxFilePath, {
            json: true
         });
        metaCtx.json = metaCtx.json || {};
        jobItem.__metaCtx = metaCtx;
        jobItem.__setup = true;
        return jobItem;
    }
}
