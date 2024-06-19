/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Data\mvc\MetaProduction\index.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {Constants} from "./Constants";
import {Storage} from "./Storage";
import {Model} from "./Model";
import {Controller} from "./Controller";
let mvcInstance: InstanceType<typeof MetaProductionMvc>;
class MetaProductionMvc {
    constructor() {
        this.constants = Constants;
        this.storage = new Storage();
        this.model = new Model(this.storage, this.constants);
        this.controller = new Controller(this.model, this.constants);
        this.user = {
            id: "stfnbssl"
         };
    }
    constants: typeof Constants;
    storage: InstanceType<typeof Storage>;
    model: InstanceType<typeof Model>;
    controller: InstanceType<typeof Controller>;
    user: { 
        id: string;
    };
}
export function getMvc() {
    if (!mvcInstance) {
        mvcInstance = new MetaProductionMvc();
    }
    return mvcInstance;
}
