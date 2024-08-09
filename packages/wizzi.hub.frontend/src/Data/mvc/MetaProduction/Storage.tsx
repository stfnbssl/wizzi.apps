/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Data\mvc\MetaProduction\Storage.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import * as wizziHubApi from "@/Api/wizziHubApi";
import * as packiApi from "@/Api/packiApi";
import {JobItem} from "@/Data/types";
import {LocalObjectStore} from "@/Data/Components/LocalObjectStore";
import * as _ from "@/Utils/underscore2";
export class Storage {
    constructor() {
        this.wizziMetaProductionState = new LocalObjectStore('wzMetaProductionState');
        this.lsJob = new LocalObjectStore('wzJobs');
    }
    wizziMetaProductionState: InstanceType<typeof LocalObjectStore>;
    lsJob: InstanceType<typeof LocalObjectStore>;
    findAllJobs(owner: string | null, options: any) {
        if (!options) {
            throw new Error('The options parameter is required. Method: Storage.findAllJobs.');
        }
        console.log('Data.mvc.Metaproduction.Storage.findAllJobs.options', options);
        return new Promise((resolve, reject) => 
                this.lsJob.findAll((items: any) => {
                    if ((owner && owner.length > 0) && (options.reload || items.length == 0)) {
                        var action = wizziHubApi.getJob;
                        if (!action) {
                            throw new Error('The value of "action" cannot be null.  Method: Storage.findAllJobs.');
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
                            console.log("[31m%s[0m", 'Storage.findAllJobs.error', err);
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
    findJob(owner: string | null, id: string, options: any) {
        if (!options) {
            throw new Error('The options parameter is required. Method: Storage.findJob.');
        }
        return new Promise((resolve, reject) => 
                this.findAllJobs(owner, options).then((result: any) => {
                    const found = result.jobs.find((item: any) => {
                        return item.id == id;
                    }
                    );
                    if (found) {
                        return resolve(found);
                    }
                    else {
                        reject(new Error('Storage.findJob.err not found: job/' + owner + '/' + id))
                    }
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'Storage.findJob.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    replaceJobLocal(newJobItem: JobItem):  Promise<{ 
        message: string;
        oldJobItem: JobItem | null;
        newJobItem: JobItem;
    }> {
        return new Promise((resolve, reject) => 
                this.findAllJobs(null, {
                    reload: false
                 }).then((result: any) => {
                    const newItems: JobItem[] = [];
                    let oldJobItem: JobItem | null = null;
                    result.jobs.forEach((item: any) => {
                        if (item.id == newJobItem.id) {
                            newItems.push(newJobItem)
                            oldJobItem = item;
                        }
                        else {
                            newItems.push(item)
                        }
                    }
                    )
                    this.lsJob.replace(newItems, () => 
                        resolve({
                            message: 'Job item localy replaced', 
                            oldJobItem: oldJobItem, 
                            newJobItem: newJobItem
                         })
                    )
                }
                ).catch((err: any) => {
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'Storage.replaceJobLocal.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    putPackiDiffs(
        productionKind: string, 
        id: string, 
        packiDiffs: any, 
        callback: any) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Storage.putPackiDiffs.');
        }
        var action = (wizziHubApi as any)['put' + _.capitalize(productionKind) + 'PackiDiffs'];
        if (!action) {
            throw new Error('The value of "action" cannot be null. Check parameter "productionKind": ' + productionKind + '. Method: Storage.putPackiDiffs.');
        }
        console.log('Data.mvc.Metaproduction.Storage.putPackiDiffs', productionKind, id, packiDiffs);
        wizziHubApi.putJobPackiDiffs(id, packiDiffs, {}).then(() => 
            this.putPackiDiffsLocal(productionKind, id, packiDiffs, callback)
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
        callback: any) {
        if (!callback) {
            throw new Error('The callback parameter is required. Method: Storage.putPackiDiffsLocal.');
        }
        if (productionKind == 'job') {
            this.findJob(null, id, {
                reload: false
             }).then((item: any) => {
                const pbuilder = new packiApi.PackiBuilder(JSON.parse(item.packiFiles));
                pbuilder.applyPatch_ChangesOnly(packiDiffs)
                item.packiFiles = JSON.stringify(pbuilder.packiFiles);
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
    }
    setWizziMetaProductionState(name: string, value: any) {
        return this.wizziMetaProductionState.setValue(name, value);
    }
    getWizziMetaProductionState(name: string) {
        return this.wizziMetaProductionState.getValue(name);
    }
}
