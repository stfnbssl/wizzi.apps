/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\mvc\MetaProduction\Storage.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import * as wizziHubApi from "@/Api/wizziHubApi";
import {JobItem} from "@/Data/types";
import {LocalObjectStore} from "@/Data/Components/LocalObjectStore";
export class Storage {
    constructor() {
        this.wizziMetaProductionState = new LocalObjectStore('wzMetaProductionState');
        this.lsJob = new LocalObjectStore('wzJobs');
    }
    wizziMetaProductionState: InstanceType<typeof LocalObjectStore>;
    lsJob: InstanceType<typeof LocalObjectStore>;
    findAllJobs(owner: string, options: any) {
        if (!options) {
            throw new Error('The options parameter is required. Method: app.Storage.findAllJobs.');
        }
        console.log('Storage.prototype.findAllJobs.options', options);
        return new Promise((resolve, reject) => 
                this.lsJob.findAll((items) => {
                    if (options.reload || (items.length == 0 && owner && owner.length > 0)) {
                        var action = wizziHubApi.getJob;
                        if (!action) {
                            throw new Error('The value of "action" cannot be null.  Method: app.Storage.findAllJobs.');
                        }
                        action(owner).then((result: any) => 
                            this.lsJob.replace(result.item, () => 
                                resolve({
                                    jobs: result.item, 
                                    source: "server data"
                                 })
                            )
                        ).catch((err: any) => {
                            if (typeof err === 'object' && err !== null) {
                            }
                            console.log("[31m%s[0m", 'app.Storage.findAllJobs.error', err);
                            return reject(err);
                        }
                        )
                    }
                    else {
                        resolve({
                            jobs: items, 
                            source: "local storage"
                         })
                    }
                }
                )
            );
    }
    findJob(owner: string, id: string, options: any) {
        if (!options) {
            throw new Error('The options parameter is required. Method: app.Storage.findJob.');
        }
        return new Promise((resolve, reject) => 
                this.findAllJobs(owner, options).then((result: any) => {
                    var i, i_items=result.jobs, i_len=result.jobs.length, item;
                    for (i=0; i<i_len; i++) {
                        item = result.jobs[i];
                        if (item.id == id) {
                            return resolve(item);
                        }
                    }
                    reject(new Error('app.Storage.findJob.err not found: job/' + owner + '/' + id))
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'app.Storage.findJob.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    replaceJobLocal(newJobItem: JobItem):  Promise<{ 
        message: string;
        oldJobItem: JobItem;
        newJobItem: JobItem;
    }> {
        return new Promise((resolve, reject) => 
                this.findAllJobs(null, {
                    reload: false
                 }).then((result: any) => {
                    const newItems = [];
                    result.jobs.forEach((item) => {
                        if (item.id == newJobItem.id) {
                            newItems.push(newJobItem)
                        }
                        else {
                            newItems.push(item)
                        }
                    }
                    )
                    this.lsJob.replace(newItems, () => 
                        resolve({
                            message: 'Job item localy replaced', 
                            oldJobItem: item, 
                            newJobItem: newJobItem
                         })
                    )
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'app.Storage.replaceJobLocal.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    putPackiDiffs(
        productionKind: string, 
        id: string, 
        packiDiffs: any, 
        options: any, 
        callback) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: app.Storage.putPackiDiffs.');
        }
        var action = wizziHubApi['put' + _.capitalize(productionKind) + 'PackiDiffs'];
        if (!action) {
            throw new Error('The value of "action" cannot be null. Check parameter "productionKind": ' + productionKind + '. Method: app.Storage.putPackiDiffs.');
        }
        wizziHubApi.putJobPackiDiffs(id, packiDiffs, options).then((result: any) => 
            this.putPackiDiffsLocal(productionKind, id, packiDiffs, options, callback)
        ).catch((err: any) => {
            alert('.error\n' + err);
            throw new Error(err);
        }
        )
    }
    putPackiDiffsLocal(
        productionKind: string, 
        id: string, 
        packiDiffs: any, 
        options: any, 
        callback) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: app.Storage.putPackiDiffsLocal.');
        }
        var ls = this['ls' + _.capitalize(productionKind)];
        this.findJob(null, id, {
            reload: false
         }).then((item: any) => {
            const pm = new wizziHubApi.PackiManager(JSON.parse(item.packiFiles));
            pm.applyPatch_ChangesOnly(packiDiffs)
            item.packiFiles = JSON.stringify(pm.packiFiles);
            this.replaceJobLocal(item).then((result: any) => 
                callback(result)
            ).catch((err: any) => {
                alert('.error\n' + err);
                throw new Error(err);
            }
            )
        }
        ).catch((err: any) => {
            alert('.error\n' + err);
            throw new Error(err);
        }
        )
    }
    setWizziMetaProductionState(name: string, value: any) {
        return this.wizziMetaProductionState.setValue(name, value);
    }
    getWizziMetaProductionState(name: string) {
        return this.wizziMetaProductionState.getValue(name);
    }
}
