/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\session.tsx.ittf
*/
import mapValues from 'lodash/mapValues';
import nullthrows from 'nullthrows';
import * as State from './State';
import defaultConfig, {PackiIdentityState} from './defaultConfig';
import {PackiFiles, PackiFile, PackiState, PackiUser, PackiWindowRef, PackiOptions, PackiStateListener, PackiListenerSubscription, PackiSaveOptions} from './types';
import {fetch, createURL, createError} from './utils';
//
const myname = "src.features.packi.session";
//
const debounce = (func: any, timeout: any, context: any) => {

    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
        
            clearTimeout(timer);
            timer = setTimeout(() => 
            
                func.apply(context || this, args)
            , timeout)
            ;
        }
    ;
}
;
export default class PackiSession {
        constructor(options: PackiOptions) {
            console.log('packi.Session.ctor.options', options);
            this.apiURL = options.apiURL ?? defaultConfig.apiURL;
            this.host = options.host ?? defaultConfig.host;
            this.state = this.updateDerivedState({
                readOnly: !!options.readOnly, 
                generated: !!options.generated, 
                unsaved: false, 
                id: options.id, 
                owner: options.owner ?? '', 
                name: options.name ?? '', 
                description: options.description ?? '', 
                mainIttf: options.mainIttf ?? '', 
                wizziSchema: options.wizziSchema ?? '', 
                files: options.files ?? {}, 
                user: options.user, 
                packiProduction: options.packiProduction, 
                saveCount: 0
             }, PackiIdentityState)
            ;
            this.state.unsaved = false;
            this.setPreviewUrl(options.mainIttf)
            this.debouncedUploadPackiFilesUpdates = debounce(this.uploadPackiFilesUpdates, 3000, this)
            ;
        }
        private state: PackiState;
        private stateListeners: Set<PackiStateListener> = new Set();
        private readonly apiURL: string;
        private readonly host: string;
        private codeChangesDelay: number;
        private codeChangesTimer: any;
        
        
        /**
            * 
            * Sets the name of the Packi.
            * 
        */
        setName(name: string) {
            return this.setState((state) => 
                
                    (state.name !== name ? {
                            name
                         } : null)
                );
        }
        
        
        /**
            * 
            * Sets the description of the Packi.
            * 
        */
        setDescription(description: string) {
            return this.setState((state) => 
                
                    (state.description !== description ? {
                            description
                         } : null)
                );
        }
        
        setMainIttf(mainIttf: string) {
            return this.setState((state) => 
                
                    (state.mainIttf !== mainIttf ? {
                            mainIttf
                         } : null)
                );
        }
        
        setWizziSchema(wizziSchema: string) {
            return this.setState((state) => 
                
                    (state.wizziSchema !== wizziSchema ? {
                            wizziSchema
                         } : null)
                );
        }
        
        setPreviewUrl(filePath: string) {
            let pathPrefix = "/~/";
            if (this.state.packiProduction == 'package') {
                pathPrefix = "/~p/";
            }
            else if (this.state.packiProduction == 'plugin') {
                pathPrefix = "/~l/";
            }
            return this.setState((state) => 
                
                    ({
                        previewURL: `${process.env.API_SERVER_URL}${pathPrefix}${encodeURIComponent(state.owner)}/${encodeURIComponent(state.name)}?savecount=${state.saveCount}&filepath=${encodeURIComponent(filePath)}`
                     })
                );
        }
        
        
        // 
        
        // State
        
        // 
        
        /**
            * 
            * Returns the current state of the Packi. This includes files, dependencies
            * and other meta-data about the Packi.
            * 
        */
        getState():  PackiState {
            return this.state;
        }
        
        
        /**
            * 
            * Adds a callback for listening for any state changes.
            * 
            * @example
            * ```
            * const unsubscribe = Packi.addStateListener((state, prevState) => {
            * if (state.name !== prevState.name) {
            * console.log('name changed: ', state.name);
            * }
            * });
            * 
            * Packi.setName('unforgiven orange'); // // Make a change to the state
            * 
            * unsubscribe(); // Remove listener
            * ```
            * 
        */
        addStateListener(listener: PackiStateListener):  PackiListenerSubscription {
            this.stateListeners.add(listener);
            return () => 
                
                    this.stateListeners.delete(listener)
            ;
        }
        private setState(stateFn: (state: PackiState) => any) {
            const update = stateFn(this.state);
            if (update) {
                const oldState = this.state;
                const newState: PackiState = {
                    ...oldState, 
                    ...update
                 };
                this.state = this.updateDerivedState(newState, oldState);
                this.stateListeners.forEach(listener => 
                
                    listener(newState, oldState)
                )
            }
        }
        
        private updateDerivedState(state: PackiState, prevState: PackiState):  PackiState {
            
            // Set unsaved to true whenever files or dependencies change
            state.unsaved = state.unsaved || State.isUnsaved(state, prevState);
            // Update other derived states
            this.updateDerivedOnlineState(state, prevState);
            return state;
        }
        
        
        /**
            * 
            * Sets the focus to this Packi.
            * 
            * Causes this Packi to be moved to the top of the "Recently in Development" list
            * in the Wizzi client.
            * 
        */
        setFocus() {
        }
        
        private updateDerivedOnlineState(state: PackiState, prevState: PackiState) {
            const {
                id, 
                name, 
                disabled
             } = state;
        }
        
        // 
        
        // Files (code & assets)
        
        // 
        
        /**
            * 
            * Updates code or asset files.
            * 
            * Use this method to add/remove/update files and upload assets.
            * To remove a file specify `null` as the value of the file.
            * 
            * @example
            * ```ts
            * const Packi = new Packi({
            * files: {
            * 'App.js': { type: 'CODE', contents: 'console.log("hello world!");' },
            * 'data.json': { type: 'CODE', contents: '{}' },
            * }
            * });
            * 
            * // Add or update files
            * Packi.updateFiles({
            * 'App.js': {
            * type: 'CODE',
            * contents: 'console.log("Hello Packi!");'
            * }
            * });
            * 
            * // Upload an asset
            * Packi.updateFiles({
            * 'assets/logo.png': {
            * type: 'ASSET',
            * contents: file // File, Blob or FormData
            * }
            * });
            * 
            * // Add a pre-uploaded asset
            * Packi.updateFiles({
            * 'assets/expo.jpg': {
            * type: 'ASSET',
            * contents: 'https://mysite/expo.jpg'
            * }
            * });
            * 
            * // Remove files
            * Packi.updateFiles({
            * 'data.json': null,
            * 'assets/expo.jpg': null
            * });
            * ```
            * 
        */
        updateFiles(files: PackiFiles) {
            return this.setState((state) => {
                
                    const newFiles = State.updateObjects(state.files, files);
                    return newFiles !== state.files ? {
                                files: newFiles
                             } : null;
                }
                );
        }
        setSelectedFile(filePath: string) {
            return this.setState((state) => {
                
                    if (state.selectedFile !== filePath) {
                        if (!(filePath.startsWith('t/') || filePath.indexOf('/t/') > -1)) {
                            this.setPreviewUrl(filePath)
                        }
                        return {
                                selectedFile: filePath
                             };
                    }
                    else {
                        return null;
                    }
                }
                );
        }
        
        updateJobGeneratedFiles(jobGeneratedFiles: PackiFiles) {
            this.updatePackiFiles(jobGeneratedFiles, () => {
            
            }
            )
        }
        
        updateWizziMetaFolderIttfDocuments(wizziMetaFolderIttfDocuments: PackiFiles) {
            this.updatePackiFiles(wizziMetaFolderIttfDocuments, () => {
            
            }
            )
        }
        
        updateClonedGithubRepoFiles(clonedGithubRepoOwner: string, clonedGithubRepoName: string, clonedGithubRepoFiles: PackiFiles) {
            const toAddPackiFiles: PackiFiles = {};
            Object.keys(clonedGithubRepoFiles).forEach((k) => {
            
                const filePath = 'github/' + clonedGithubRepoOwner + '/' + clonedGithubRepoName + '/' + k;
                toAddPackiFiles[filePath] = {
                    type: clonedGithubRepoFiles[k].type, 
                    contents: clonedGithubRepoFiles[k].contents
                 };
            }
            )
            this.updatePackiFiles(toAddPackiFiles, () => {
            
            }
            )
        }
        
        updatePackiFiles(files: PackiFiles, done: () => any) {
            return this.setState((state) => {
                
                    const newFiles = State.updateObjects(state.files, files);
                    if (newFiles !== state.files) {
                        this.debouncedUploadPackiFilesUpdates({
                            packiFiles: newFiles
                         }, done)
                    }
                    return newFiles !== state.files ? {
                                files: newFiles
                             } : null;
                }
                );
        }
        
        async uploadPackiFilesUpdates(payload: PackiUploadPayload, done: () => any) {
            const {
                id, 
                packiProduction
             } = this.state;
            const url = `${this.apiURL}/api/v1/production/${packiProduction}/${encodeURIComponent(id)}`;
            const response = await fetch(url, {
                    method: 'PUT', 
                    body: JSON.stringify(payload), 
                    headers: {
                        'Content-Type': 'application/json'
                     }
                 });
            const data = await response.json();
            this.state.saveCount++;
            if (done) {
                done();
            }
        }
        
        
        /**
            * 
            * Gets the URL at which the Packi can be downloaded as a zip file. Will automatically
            * save the Packi if it contains unsaved changes.
            * 
        */
        async getPackiDownloadURL(saveOptions?: PackiSaveOptions) {
            let state = this.getState();
            return `${this.apiURL}/--/api/v2/packi/download/${state.id}`;
        }
    }
