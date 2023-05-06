/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\wizziPackage\types.ts.ittf
    utc time: Sat, 06 May 2023 11:50:24 GMT
*/
import wizzi from '@wizzi/factory';
export type WizziPackageOptions = { 
    name: string;
    description?: string;
    kind: "app" | "plugin";
    pluginKind?: "data" | "sgml" | "language";
    folderPath?: string;
    productionOptions?: wizzi.ProductionOptions;
};
