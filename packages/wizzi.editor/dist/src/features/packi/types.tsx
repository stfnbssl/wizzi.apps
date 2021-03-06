/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\types.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
*/
import {ThemeName} from '../preferences/index';

export type Packi = { 
    id: string;
    files: PackiFiles;
};
export type PackiTemplate = { 
    id: string;
    files: PackiFiles;
};

export type PackiCodeFile = { 
    type: 'CODE';
    contents: string;
    generated?: boolean;
    bothRealAndGenerated?: boolean;
    error?: Error;
};
    //
    

export type PackiAssetFile = { 
    type: 'ASSET';
    // string = url
    contents: string | File | Blob | FormData;
    generated?: boolean;
    bothRealAndGenerated?: boolean;
    // string = url
    error?: Error;
};
    //
    

export type PackiFile = PackiCodeFile | PackiAssetFile;
    //
    

export type PackiFiles = { 
    [path: string]: PackiFile;
};
    //
    

export interface PackiError extends Error {
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
}
    //
    

export type PackiUser = { 
    sessionSecret?: string;
    accessToken?: string;
};
    //
    

export type PackiState = { 
    /**
        // Files that make up the content of the packed Production.
    */
    files: PackiFiles;
    /**
        // The id of the Production
    */
    id?: string;
    /**
        // The owner of the Production
    */
    owner: string;
    /**
        // The name of the Production
    */
    name: string;
    /**
        // Additional description of the packed Production.
    */
    description: string;
    /**
        // The packed Production kind (artifact | package | meta | plugin | tfolder).
    */
    packiProduction?: PackiProduction;
    /**
        // When the PackiProduction == 'artifact' is the main ITTF Document of the artifact.
    */
    mainIttf?: string;
    /**
        // When the PackiProduction == 'artifact' is the Wizzi Schema of the main ITTF Document.
    */
    wizziSchema?: string;
    /**
        // TODO ???
    */
    url: string;
    user?: PackiUser;
    /**
        // 
        // Unsaved status of the Packi.
        // Becomes `true` when the Packi code is changed and `false` whenever the Packi is saved.
        // 
    */
    unsaved: boolean;
    /**
        // 
        // URL of the saved Packi.
        // The URL is empty when no save "id" is available.
        // 
    */
    saveURL?: string;
    /**
        // URL to use to when loading the web-preview in an iframe.
    */
    previewURL?: string;
    /**
        // The packed Production cannot be changed
    */
    readOnly?: boolean;
    /**
        // The packed Production is generated can be viewed but not changed
    */
    generated?: boolean;
};

export type SaveStatus = 'unsaved' | 'edited' | 'saving-draft' | 'saved-draft' | 'publishing' | 'published' | 'changed';

export type SaveHistory = { 
    hashId: string;
    savedAt: string;
    isDraft?: boolean;
}[];

export type PackiListenerSubscription = () => any;

export type SavedPacki = { 
    _id: string;
    created: string;
    owner: string;
    name: string;
    description: string;
    packiProduction: PackiProduction;
    files: PackiFiles;
    mainIttf?: string;
    wizziSchema?: string;
    history?: SaveHistory;
    isDraft?: boolean;
};

export type PackiDefaults = { 
    name: string;
};

export type PackiWindowRef = { 
    current: Window | null;
};

export type PackiOptions = { 
    id?: string;
    name?: string;
    description?: string;
    mainIttf?: string;
    wizziSchema?: string;
    files?: PackiFiles;
    readOnly?: boolean;
    generated?: boolean;
    apiURL?: string;
    host?: string;
    verbose?: boolean;
    user?: PackiUser;
    webPreviewRef?: PackiWindowRef;
    packiProduction?: PackiProduction;
};

export type PackiSaveOptions = { 
    isDraft?: boolean;
    ignoreUser?: boolean;
    excludeFromHistory?: boolean;
};

export type PackiStateListener = (state: PackiState, prevState: PackiState) => any;

export type QueryInitParams = { 
    code?: string;
    sourceUrl?: string;
    name?: string;
    description?: string;
    files?: string;
    iframeId?: string;
    waitForData?: 'boolean';
    saveToAccount?: 'true' | 'false';
};

export type QueryStateParams = { 
    preview?: 'true' | 'false';
    theme?: ThemeName;
    verbose?: 'true' | 'false';
    hideQueryParams?: 'true' | 'false';
};

export type QueryParams = QueryInitParams & QueryStateParams;

export type RouterData = { 
    type: "success";
    packi?: SavedPacki;
    defaults: PackiDefaults;
} | { 
    type: "error";
    error: { 
        message: string;
    };
    defaults: PackiDefaults;
};

export type PackiFilesOrKind = PackiFiles | string;

export type PackiProduction = 'artifact' | 'package' | 'meta' | 'plugin' | 'tfolder';

export type PackiUploadPayload = { 
    name?: string;
    description?: string;
    mainIttf?: string;
    wizziSchema?: string;
    files?: PackiFiles;
};
