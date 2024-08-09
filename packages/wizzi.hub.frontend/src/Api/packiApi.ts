/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Api\packiApi.ts.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import axios, {AxiosError, AxiosResponse} from 'axios';
import {PackiFileType, PackiFiles, PackiEntry, PackiGenerationContext, PackiInstallContext} from './types';
import DiffMatchPatch from "diff-match-patch";
interface Result {
}
const BASE_URL = 'http://localhost:3003/api/v1';
const packiFilePrefix = 'json:/';
export function setToken(token: string) {
    axios.interceptors.request.use((config) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
    )
}
axios.interceptors.response.use(res => 
    res
, (error: AxiosError) => {
    const {
        data, 
        status
     } = error.response!;
    switch (status) {
        case 400: {
            console.error(data);
            break;
        }
        case 401: {
            console.error('unauthorised');
            break;
        }
        case 404: {
            console.error('/not-found');
            break;
        }
        case 500: {
            console.error('/server-error');
            break;
        }
    }
    return Promise.reject(error);
}
)
const responseBody = <T>(response: AxiosResponse<T>) => 
    response.data
;
const request = {
    get: async <T>(url: string) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.get<T>(url).then(responseBody)
        ;
    }
    , 
    post: async <T>(url: string, body: { 
    }) => {
        axios.defaults.baseURL = BASE_URL;
        return axios.post<T>(url, body).then(responseBody)
        ;
    }
    
 };
export function clonePackiFiles(packiFiles: string | PackiFiles, filters?: string[]):  any {
    
    const testPackiFilesObj = packiFilesToObject(packiFiles);
    if (testPackiFilesObj.__is_error) {
        return testPackiFilesObj;
    }
    
    const packiFilesObj: PackiFiles = testPackiFilesObj as PackiFiles;
    filters = filters || [];
    function isOk(filename: string) {
        if (!filters || filters.length == 0) {
            return true;
        }
        filters.forEach((filter) => {
            if (filename.startsWith(filter)) {
                return true;
            }
        }
        )
        return false;
    }
    const retval: PackiFiles = {};
    for (const k in packiFilesObj) {
        if (isOk(k)) {
            retval[k] = packiFilesObj[k];
        }
    }
    return retval;
}

export function extractPackiFileContent(packiFiles: string | PackiFiles, filePath: string, options: { 
    json: boolean;
}):  any {
    
    const testPackiFileObj = extractPackiFile(packiFiles, filePath);
    if (testPackiFileObj && testPackiFileObj.__is_error) {
        return testPackiFileObj;
    }
    
    let retval: any = {
        exists: !!testPackiFileObj, 
        text: (testPackiFileObj && testPackiFileObj.contents) || (options.json ? '{}' : '')
     };
    if (options.json) {
        try {
            retval.json = testPackiFileObj && JSON.parse(testPackiFileObj.contents) || {};
        } 
        catch (err) {
            console.log("Error in Packi.extractPackiFileContent parsing packiFile contents", err, testPackiFileObj.contents);
            retval = {
                __is_error: true, 
                message: "Error parsing packiFile contents", 
                contents: testPackiFileObj.contents
             };
        } 
    }
    return retval;
}

export function extractPackiFile(packiFiles: string | PackiFiles, filePath: string):  any {
    
    const testPackiFilesObj = packiFilesToObject(packiFiles);
    if (testPackiFilesObj.__is_error) {
        return testPackiFilesObj;
    }
    
    return testPackiFilesObj[filePath];
}
export function packiFilesToObject(packiFiles: string | PackiFiles):  any {
    if (typeof packiFiles === "string") {
        try {
            return JSON.parse(packiFiles);
        } 
        catch (err) {
            console.log("[31m%s[0m", "Packi.packiFilesToObject. Error parsing packiFiles", err, packiFiles);
            return {
                    __is_error: true, 
                    message: "Error parsing packiFiles string", 
                    packiFiles
                 };
        } 
    }
    else {
        return packiFiles;
    }
}
export function packiToEntryArray(files: PackiFiles):  PackiEntry[] {
    const fileSystem: PackiEntry[] = [];
    const fs: { 
        [uri: string]: PackiEntry;
    } = {};
    const state: { 
        count: number;
    } = {
        count: 0
     };
    for (const filename of Object.keys(files).sort()) {
        setFileEntry(filename, files[filename].contents, fs, state)
    }
    for (const uri in fs) {
        fileSystem.push(fs[uri])
    }
    return fileSystem;
}

function setFileEntry(
    filename: string, 
    contents: string, 
    fs: { 
        [uri: string]: PackiEntry;
    }, 
    state: { 
        count: number;
    }) {
    const parts = filename.split('/');
    let uri = '';
    let parentUri = '';
    let folderObj: PackiEntry | null = null;
    for (var i=0; i<parts.length-1; i++) {
        let part = parts[i];
        parentUri = uri;
        uri += (uri.length > 0 ? '/' : '') + part;
        folderObj = fs[uri];
        if (!folderObj) {
            folderObj = {
                id: ++state.count + '', 
                type: 'folder', 
                uri: uri, 
                name: part, 
                children: [
                    
                ]
             };
            fs[uri] = folderObj;
        }
        if (parentUri.length > 0) {
            let parentFolderObj = fs[parentUri];
            if (parentFolderObj && parentFolderObj.children) {
                const found = parentFolderObj.children.filter((item) => {
                    return item == folderObj?.uri;
                }
                );
                if (found.length == 0) {
                    parentFolderObj.children.push(folderObj.uri)
                }
                else {
                }
            }
            else {
            }
        }
        else {
        }
    }
    let fileObj: PackiEntry = {
        id: ++state.count + '', 
        type: 'file', 
        uri: filename, 
        name: parts[parts.length-1], 
        contents: contents
     };
    fs[filename] = fileObj;
    if (folderObj && folderObj.children) {
        folderObj.children.push(fileObj.uri)
    }
}
export function mountToPackiFolder(packiFiles: PackiFiles, packiFilesTobeMounted: PackiFiles, folderName: string):  PackiFiles {
    for (var k in packiFilesTobeMounted) {
        let basename = k;
        let prefix = '';
        if (k.startsWith(packiFilePrefix)) {
            basename = k.substring(packiFilePrefix.length);
            prefix = packiFilePrefix;
        }
        packiFiles[prefix + folderName + '/' + basename] = packiFilesTobeMounted[k];
    }
    return packiFiles;
}

export function unmountPackiFolder(packiFiles: PackiFiles, folderName: string):  PackiFiles {
    const result: PackiFiles = {};
    for (var k in packiFiles) {
        let basename = k;
        let prefix = '';
        if (k.startsWith(packiFilePrefix)) {
            basename = k.substring(packiFilePrefix.length);
            prefix = packiFilePrefix;
        }
        if (basename.startsWith(folderName)) {
            result[prefix + basename.substring(folderName.length+1)] = packiFiles[k];
        }
    }
    return result;
}
export function mergePackiFiles(packiFilesA: PackiFiles, packiFilesB: PackiFiles):  PackiFiles {
    const retval: PackiFiles = {};
    for (var k in packiFilesA) {
        retval[k] = packiFilesA[k];
    }
    for (var k in packiFilesB) {
        retval[k] = packiFilesB[k];
    }
    return retval;
}
export class PackiBuilder {
    constructor(packiFiles: PackiFiles) {
        this.packiFiles = packiFiles || {};
        this.dmp = new DiffMatchPatch();
    }
    packiFiles: PackiFiles;
    dmp: InstanceType<typeof DiffMatchPatch>;
    getFileContent(filePath: string) {
        const file = this.packiFiles[filePath];
        return file ? file.contents : null;
    }
    putFile(filePath: string, type: PackiFileType, contents: string) {
        this.packiFiles[filePath] = {
            type: type, 
            contents: contents
         };
    }
    putCodeFile(filePath: string, contents: string) {
        this.putFile(filePath, 'CODE', contents)
    }
    deleteFile(filePath: string) {
        delete this.packiFiles[filePath]
    }
    getFileDiffs(filePath: string, newContent: string):  DiffMatchPatch.Diff[] {
        const diffs: DiffMatchPatch.Diff[] = this._diffLineMode(this.packiFiles[filePath].contents, newContent);
        return diffs;
    }
    applyFileDiffs(filePath: string, diffs: string) {
        const textToPatch = this.packiFiles[filePath].contents;
        const patches = this.dmp.patch_make(textToPatch, diffs);
        const [patchedText] = this.dmp.patch_apply(patches, textToPatch);
        this.packiFiles[filePath].contents = patchedText;
    }
    getPackiFilesDiffs(packiFiles: PackiFiles):  { 
        [key: string]: { 
            d: number;
            type?: string;
            diffs?: DiffMatchPatch.Diff[];
            contents?: string;
        };
    } {
        const matches: { 
            [key: string]: { 
                d: number;
                type?: string;
                diffs?: DiffMatchPatch.Diff[];
                contents?: string;
            };
        } = {};
        for (const key in packiFiles) {
            // 17/2/24 added contents property for new content
            // simpler and not too costly
            // TODO eliminate diffs property ???
            if (this.packiFiles[key]) {
                matches[key] = {
                    d: 0, 
                    diffs: this._diffLineMode(this.packiFiles[key].contents, packiFiles[key].contents), 
                    contents: packiFiles[key].contents
                 };
            }
            else {
                matches[key] = {
                    d: 1, 
                    type: packiFiles[key].type, 
                    contents: packiFiles[key].contents
                 };
            }
        }
        for (const key in packiFiles) {
            if (!packiFiles[key]) {
                matches[key] = {
                    d: -1
                 };
            }
        }
        return matches;
    }
    applyPatch(packiDiffs: { 
        [key: string]: any;
    }) {
        const patchedFiles: PackiFiles = {};
        for (const key in packiDiffs) {
            if (packiDiffs[key].d == 1) {
                patchedFiles[key] = {
                    type: packiDiffs[key].type, 
                    contents: packiDiffs[key].contents
                 };
            }
            else if (packiDiffs[key].d == 0) {
                const textToPatch = this.packiFiles[key].contents;
                const patches = this.dmp.patch_make(textToPatch, packiDiffs[key].diffs);
                console.log('Api.packi.PackiBuilder.applyPatch.key.patches', key, patches);
                const [patchedText] = this.dmp.patch_apply(patches, textToPatch);
                patchedFiles[key] = {
                    type: this.packiFiles[key].type, 
                    contents: patchedText
                 };
            }
        }
        this.packiFiles = patchedFiles;
    }
    applyPatch_ChangesOnly(packiChanges: { 
        [key: string]: any;
    }) {
        for (const key in packiChanges) {
            if (packiChanges[key].d == 1) {
                this.putCodeFile(key, packiChanges[key].contents)
            }
            else if (packiChanges[key].d == 0) {
                if (packiChanges[key].contents && packiChanges[key].contents.length > 0) {
                    this.putCodeFile(key, packiChanges[key].contents)
                }
                else {
                    const textToPatch = this.packiFiles[key].contents;
                    const patches = this.dmp.patch_make(textToPatch, packiChanges[key].diffs);
                    const [patchedText] = this.dmp.patch_apply(patches, textToPatch);
                    this.putCodeFile(key, patchedText)
                }
            }
            else if (packiChanges[key].d == -1) {
                this.deleteFile(key)
            }
        }
    }
    equals(packiFiles: PackiFiles) {
        for (const key in packiFiles) {
            if (this.packiFiles[key]) {
                if (this.packiFiles[key].type != packiFiles[key].type) {
                    return false;
                }
                if (this.packiFiles[key].contents != packiFiles[key].contents) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        for (const key in this.packiFiles) {
            if (!packiFiles[key]) {
                return false;
            }
        }
        return true;
    }
    _diffLineMode(text1: string, text2: string):  DiffMatchPatch.Diff[] {
        var a = this.dmp.diff_linesToChars_(text1, text2);
        var lineText1 = a.chars1;
        var lineText2 = a.chars2;
        var lineArray = a.lineArray;
        var diffs = this.dmp.diff_main(lineText1, lineText2, false);
        this.dmp.diff_charsToLines_(diffs, lineArray);
        return diffs;
    }
}

export function prettify(packiFiles: PackiFiles) {
    const url = 'packimanager/prettify';
    const data = {
        packiFiles
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((result: any) => {
                if (result.err || result.error) {
                    console.log("[31m%s[0m", "Error", "api.Packi.prettify.result", result.err || result.error);
                    return reject(result.err || result.error);
                }
                console.log('api.Packi.prettify.result', result);
                return resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.Packi.prettify.error', err);
                return reject(err);
            }
            )
        
        );
}
export function generate(packiFiles: PackiFiles, context: PackiGenerationContext) {
    const url = 'packimanager/generate';
    const data = {
        packiFiles, 
        context
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((result: any) => {
                if (result.err || result.error) {
                    console.log("[31m%s[0m", "Error", "api.Packi.generate.result", result.err || result.error);
                    return reject(result.err || result.error);
                }
                console.log('api.Packi.generate.result', result);
                return resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.Packi.generate.error', err);
                return reject(err);
            }
            )
        
        );
}
export function install(packiFiles: PackiFiles, context: PackiInstallContext) {
    const url = 'packimanager/install';
    const data = {
        packiFiles, 
        context
     };
    return new Promise((resolve, reject) => 
            request.post<Result>(url, data).then((result: any) => {
                if (result.err || result.error) {
                    console.log("[31m%s[0m", "Error", "api.Packi.install.result", result.err || result.error);
                    return reject(result.err || result.error);
                }
                console.log('api.Packi.install.result', result);
                return resolve(result);
            }
            ).catch((err: any) => {
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'api.Packi.install.error', err);
                return reject(err);
            }
            )
        
        );
}