/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\packi\session.tsx.ittf
    utc time: Tue, 19 Jul 2022 16:44:54 GMT
*/
import mapValues from 'lodash/mapValues';
import nullthrows from 'nullthrows';
import FileUploader, {FileUploaderCallback} from './FileUploader';
import * as State from './State';
import defaultConfig, {PackiIdentityState} from './defaultConfig';
import {PackiFiles, PackiFile, PackiState, PackiUser, PackiWindowRef, PackiOptions, PackiStateListener, PackiListenerSubscription, PackiSaveOptions} from './types';
import {fetch, createURL, createError, createUserHeader} from './utils';
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
            this.apiURL = options.apiURL ?? defaultConfig.apiURL;
            this.host = options.host ?? defaultConfig.host;
            this.state = this.updateDerivedState({
                disabled: !!options.disabled, 
                unsaved: false, 
                owner: options.owner ?? '', 
                name: options.name ?? '', 
                description: options.description ?? '', 
                mainIttf: options.mainIttf ?? '', 
                wizziSchema: options.wizziSchema ?? '', 
                files: options.files ?? {}, 
                user: options.user, 
                packiProduction: options.packiProduction, 
                id: options.id, 
                saveCount: 0, 
                saveURL: options.id ? createURL(this.host, options.id) : undefined, 
                url: createURL(this.host, options.id)
             }, PackiIdentityState)
            ;
            this.state.unsaved = false;
            this.setPreviewUrl();
            this.fileUploader = new FileUploader({
                apiURL: this.apiURL, 
                callback: this.onFileUploaded
             });
            ;
            this.onStateChanged(this.state, PackiIdentityState);
            this.debouncedUploadUpdates = debounce(this.uploadUpdates, 2000, this)
            ;
        }
        private state: PackiState;
        private stateListeners: Set<PackiStateListener> = new Set();
        private readonly apiURL: string;
        private readonly host: string;
        private readonly fileUploader: FileUploader;
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
        
        
        /**
            * 
            * Sets the associated user account.
            * 
            * When set and `online` is true, causes this Packi to appear on the
            * "Recently in Development" section of all Wizzi clients that are signed
            * in with that account.
            * 
        */
        setUser(user?: PackiUser) {
            return this.setState((state) => 
                
                    (state.user !== user ? {
                            user
                         } : null)
                );
        }
        
        setPreviewUrl() {
            return this.setState((state) => 
                
                    ({
                        previewURL: `${process.env.API_SERVER_URL}/~/${encodeURIComponent(state.owner)}/${encodeURIComponent(state.name)}?savecount=${state.saveCount}`
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
            * Waits for any pending operations such as running dependencies resolutions
            * before returning the state.
            * 
        */
        async getStateAsync() {
            await this.fileUploader.waitForCompletion();
            return this.getState();
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
            console.log('_PackiSession.setState.update', update);
            if (update) {
                const oldState = this.state;
                const newState: PackiState = {
                    ...oldState, 
                    ...update
                 };
                this.state = this.updateDerivedState(newState, oldState);
                console.log('_PackiSession.setState.state', this.state);
                this.onStateChanged(newState, oldState);
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
        
        private onStateChanged(state: PackiState, prevState: PackiState) {
            this.updateFileUploader(state, prevState);
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
        
        
        /**
            * *
            * * Helper function that uploads an asset and returns its url.
            * 
        */
        uploadAssetAsync = async (contents: File | Blob | FormData):  Promise<string> => {
        
            let url: string = '';
            const fileUploader = new FileUploader({
                apiURL: this.apiURL, 
                callback: (_request, resultURL, error) => {
                
                    if (error) {
                        throw error;
                    }
                    else {
                        if (resultURL) {
                            url = resultURL;
                        }
                    }
                }
                
             });
            fileUploader.add('asset', {
                type: 'ASSET', 
                contents
             })
            await fileUploader.waitForCompletion();
            return url;
        }
        ;
        private updateFileUploader(state: PackiState, prevState: PackiState) {
            const files = state.files;
            
            // Stop uploading any removed or changed assets
            const prevFiles = prevState.files;
            if (!prevState.disabled && ((!state.disabled && files !== prevFiles) || state.disabled)) {
                for (const path in prevFiles) {
                    if (!files[path] || files[path].contents !== prevFiles[path].contents || state.disabled) {
                        this.fileUploader.remove(path, prevFiles[path]);
                    }
                }
            }
            if (!state.disabled && (files !== prevFiles || prevState.disabled)) {
                for (const path in files) {
                    const file = files[path];
                    if (file.type === 'ASSET' && typeof file.contents === 'object' && !file.error && (prevFiles[path]?.contents !== file.contents || prevState.disabled)) {
                        this.fileUploader.add(path, file);
                    }
                }
            }
        }
        
        private onFileUploaded: FileUploaderCallback = (request, resultURL, error) => 
        
            // When a file has been uploaded, store its url in the state. This state should be persisted
            // by the client so that the next time it doesn't need to be uploaded again.
            this.setState(({
                files
             }) => 
            
                ({
                    files: State.addObject(files, request.path, {
                        ...request.file, 
                        ...((resultURL ? {
                                    contents: resultURL
                                 } : {}))
                        , 
                        ...((error ? {
                                    error
                                 } : {}))
                        
                     })
                 })
            )
        ;
        
        
        /**
            * 
            * Gets the URL at which the Packi can be downloaded as a zip file. Will automatically
            * save the Packi if it contains unsaved changes.
            * 
        */
        async getDownloadURLAsync(saveOptions?: PackiSaveOptions) {
            await this.fileUploader.waitForCompletion();
            let state = this.getState();
            return `${this.apiURL}/--/api/v2/packi/download/${state.id}`;
        }
        
        updatePackiData(packiData: PackiData) {
            return this.setState((state) => {
                
                    this.uploadUpdates(packiData)
                    return packiData;
                }
                );
        }
        updateJobGeneratedFiles(jobGeneratedFiles: PackiFiles) {
            console.log('PackiSession.updateJobGeneratedFiles.jobGeneratedFiles', jobGeneratedFiles);
            this.updatePackiFiles(jobGeneratedFiles, () => {
            
            }
            )
        }
        updatePackiFiles(files: PackiFiles, done: () => any) {
            console.log('PackiSession.updatePackiFiles.files', files);
            return this.setState((state) => {
                
                    const newFiles = State.updateObjects(state.files, files);
                    if (newFiles !== state.files) {
                        console.log('PackiSession.calling.debounce.uploadUpdates');
                        this.debouncedUploadUpdates({
                            packiFiles: newFiles
                         }, done)
                    }
                    return newFiles !== state.files ? {
                                files: newFiles
                             } : null;
                }
                );
        }
        async uploadUpdates(payload: PackiUploadPayload, done: () => any) {
            console.log('PackiSession.uploadUpdates.payload', payload);
            
            // Wait for any pending asset uploads to complete before saving
            await this.fileUploader.waitForCompletion();
            const {
                id, 
                packiProduction
             } = this.state;
            const url = `${this.apiURL}/api/v1/production/${packiProduction}/${encodeURIComponent(id)}`;
            console.log('PackiSession.uploadUpdates', url);
            const response = await fetch(url, {
                    method: 'PUT', 
                    body: JSON.stringify(payload), 
                    headers: {
                        'Content-Type': 'application/json'
                     }
                 });
            const data = await response.json();
            console.log('PackiSession.uploadUpdates.response.data', data);
            this.state.saveCount++;
            if (done) {
                done();
            }
            this.setPreviewUrl();
        }
    }
