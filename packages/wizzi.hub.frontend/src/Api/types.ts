/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Api\types.ts.ittf
    utc time: Wed, 31 Jul 2024 14:56:15 GMT
*/
import {ParameterItem} from '@/Components/metaCtxBuilder/types';

export type PackiFileType = 'CODE' | 'ASSETT';
;

/**
    * 
    * The content of a Packi code file.
    * 
*/
export type PackiFile = { 
    type: PackiFileType;
    contents: string;
    generated?: boolean;
    error?: Error;
};
;

/**
    * 
    * Dictionary of file-names and their content that make up
    * the files of the Packi.
    * 
*/
export type PackiFiles = { 
    [path: string]: PackiFile;
};
;

export type PackiFileContent = { 
    text: string;
    json?: { 
    };
};
;

/**
    * 
    * A PackiFile entry for FileExplorer
    * 
*/
export type PackiEntry = { 
    type: 'folder' | 'file';
    id?: string;
    name: string;
    uri: string;
    contents?: string;
    children?: string[];
};
;

/**
    * 
    * Context data for wizzi generations from packifiles
    * 
*/
export type PackiGenerationContext = { 
    modelRequestContext?: { 
    };
    artifactRequestContext?: { 
    };
    globalContext?: { 
    };
};
;

/**
    * 
    * Context data for meta demo installations of packifiles
    * 
*/
export type PackiInstallContext = { 
    name: string;
    buildCommand?: string;
    runDevCommand?: string;
}

export type HubDbMetaProvides = { 
    name?: string;
    pluginMetaProductions: MetaProduction[];
    pluginCategories: MetaPluginCategory[];
};
;

export type MetaProductionFiles = { 
    name: string;
    parameters: PackiFiles;
    folderTemplates: PackiFiles;
    ittfDocumentTemplates: PackiFiles;
    plainDocuments: PackiFiles;
};
;

export interface HubProductionItem {
    id: string;
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
}


export type MetaProduction = { 
    name: string;
    plugin: string;
    categories: { 
        name: string;
    }[];
};
;

export type MetaProductionExt = { 
    name: string;
    plugin: string;
    categories: { 
        name: string;
    }[];
};
;

export type MetaProductionCategory = { 
    name: string;
};
;

export type MetaProductionCategoryExt = { 
    name: string;
};
;

export type MetaPluginCategory = { 
    name: string;
};
;

export type MetaPluginCategoryExt = { 
    name: string;
    plugins: { 
        name: string;
    }[];
};
;

export type MetaPlugin = { 
    name: string;
    categories?: { 
        name: string;
    }[];
};
;

export type MetaPluginExt = { 
    name: string;
    __is_hub_meta_plugin: boolean;
    owner?: string;
    pluginCategories: MetaPluginCategory[];
    metaProductionCategories: MetaProductionCategory[];
    metaProductionCategoriesObj: { 
        [name: string]: MetaProductionCategory;
    };
    metaProductions: MetaProduction[];
    metaProductionsObj: { 
        [name: string]: MetaProduction;
    };
};
;

export type MetaParameters = { 
    packiFiles: PackiFiles;
    metaParametersObj: { 
        [productionName: string]: MetaProductionParameters;
    };
    err?: any;
    error?: any;
};
;

export type MetaProductionParameters = { 
    metaProductionName: string;
    index: string;
    parametersIndexObj: { 
        parameters: ParameterItem[];
    };
};
;

export type MetaDemoPackage = { 
    name: string;
    useNpm: boolean;
    npm: { 
        [key: string]: string;
    };
};
;