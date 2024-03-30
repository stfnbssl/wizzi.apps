/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\App.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import * as React from 'react';
// Redux
import {connect, ConnectedProps} from 'react-redux';
// Styles
import {StyleSheet, css} from 'aphrodite';
// Features
import {getFilesFromQuery, fileConversions} from '../features/file';
import {withPreferences, PreferencesContextType} from '../features/preferences';
import {Annotation} from '../features/annotations';
import {LoggedUser} from '../features/app';
import {PackiOptions, QueryParams, SaveStatus, PackiSaveOptions, PackiState, PackiFile, PackiFiles, PackiDefaults, PackiProduction} from '../features/packi';
import {PackiSession, PackiListenerSubscription} from '../features/packi';
// Utils
import nullthrows from 'nullthrows';
import debounce from 'lodash/debounce';
import {isMobile} from '../utils/detectPlatform';
// Widgets
import {AnimatedLogo} from './widgets/AnimatedLogo';
import {CollapsibleObject} from './widgets/CollapsibleObject';
// Components
import AppShell from './shell/AppShell';
import AppDetails from './AppDetails';
import {EditorViewProps} from './EditorView/EditorViewProps';
import LazyLoad from './widgets/LazyLoad';
import {PreviewKind} from './types';
import {Dispatch} from 'redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {Packi, packiActions} from '../features/packi';
import {GeneratedArtifact, wizziActions} from '../features/wizzi';
import {PreferencesType} from '../features/preferences';
import {StoreState} from '../store';
import {getEventServiceInstance} from '../services';
import {packiToEntryArray, entryArrayToPacki, mixPreviousAndGeneratedPackiFilesToEntryArray, entryArrayDiff} from '../features/file/convertFileStructure';
import {FileSystemEntry, TextFileEntry, AssetFileEntry} from '../features/file';
import updateEntry from './FileList/actions/updateEntry';
// Defaults
import {config} from '../features/config';
const {
    DEFAULT_PACKI_CODE
 } = config;
const myname = "src.components.App";


interface PackiStateProps {
    generatedArtifact?: GeneratedArtifact;
    mTreeBuildUpScript?: string;
    mTreeIttf?: any;
    jobGeneratedArtifacts?: PackiFiles;
    wizziMetaFolderIttfDocuments?: PackiFiles;
    clonedGithubRepoOwner?: string;
    clonedGithubRepoName?: string;
    clonedGithubRepoFiles?: PackiFiles;
    wizzifiedIttfContent?: string;
    codeASTContent?: string;
    wizziError?: any;
}

interface PackiDispatchProps {
    dispatchGenerateArtifact: (fileName: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => void;
    dispatchMTree: (fileName: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => void;
    dispatchMTreeDebugInfo: (fileName: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => void;
    dispatchExecuteJob: (fileName: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => void;
    dispatchExecuteWizziMetaFolder: (productionKind: PackiProduction, productionId: string) => void;
    dispatchSaveLocalFolder: (localFolderPath: string, files: PackiFiles) => void;
    dispatchWizzify: (filePath: string, fileContent: string) => void;
    dispatchCodeAST: (filePath: string, fileContent: string) => void;
    dispatchGithubClone: (owner: string, name: string, branch: string) => void;
    dispatchChangeSelectedFile: (oldFilePath: string, newFilePath: string) => void;
}

const packiMapStateToProps = (storeState: StoreState):  PackiStateProps => {

    return {
            generatedArtifact: storeState.wizzi.generatedArtifact, 
            mTreeBuildUpScript: storeState.wizzi.mTreeBuildUpScript, 
            mTreeIttf: storeState.wizzi.mTreeIttf, 
            wizzifiedIttfContent: storeState.wizzi.wizzifiedIttfContent, 
            codeASTContent: storeState.wizzi.codeASTContent, 
            jobGeneratedArtifacts: storeState.wizzi.jobGeneratedArtifacts, 
            wizziMetaFolderIttfDocuments: storeState.wizzi.wizziMetaFolderIttfDocuments, 
            wizziError: storeState.wizzi.error, 
            clonedGithubRepoOwner: storeState.packi.clonedGithubRepoOwner, 
            clonedGithubRepoName: storeState.packi.clonedGithubRepoName, 
            clonedGithubRepoFiles: storeState.packi.clonedGithubRepoFiles
         };
}
;

const packiMapDispatchToProps = (dispatch: Dispatch):  PackiDispatchProps => 

    ({
        dispatchGenerateArtifact: (filePath: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => {
        
            if (filePath.endsWith('.ittf') && !filePath.endsWith('wfjob.ittf')) {
                dispatch(wizziActions.generateArtifactRequest({
                    filePath, 
                    files, 
                    productionKind, 
                    productionName
                 }))
            }
        }
        , 
        dispatchMTree: (filePath: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => {
        
            if (filePath.endsWith('.ittf') && !filePath.endsWith('wfjob.ittf')) {
                dispatch(wizziActions.mTreeRequest({
                    filePath, 
                    files, 
                    productionKind, 
                    productionName
                 }))
            }
        }
        , 
        dispatchMTreeDebugInfo: (filePath: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => {
        
            if (filePath.endsWith('.ittf') && !filePath.endsWith('wfjob.ittf')) {
                dispatch(wizziActions.mTreeBuildUpScriptRequest({
                    filePath, 
                    files, 
                    productionKind, 
                    productionName
                 }))
            }
        }
        , 
        dispatchExecuteJob: (fileName: string, files: PackiFiles, productionKind: PackiProduction, productionName: string) => 
        
            dispatch(wizziActions.executeJobRequest({
                fileName, 
                files, 
                productionKind, 
                productionName
             }))
        , 
        dispatchExecuteWizziMetaFolder: (productionKind: PackiProduction, productionId: string) => 
        
            dispatch(wizziActions.executeWizziMetaFolderRequest({
                productionKind, 
                productionId
             }))
        , 
        dispatchSaveLocalFolder: (localFolderPath: string, files: PackiFiles) => 
        
            dispatch(wizziActions.executeSaveLocalFolder({
                localFolderPath, 
                files
             }))
        , 
        dispatchWizzify: (filePath: string, fileContent: string) => 
        
            dispatch(wizziActions.wizzifyRequest({
                filePath, 
                fileContent
             }))
        , 
        dispatchCodeAST: (filePath: string, fileContent: string) => 
        
            dispatch(wizziActions.codeASTRequest({
                filePath, 
                fileContent
             }))
        , 
        dispatchChangeSelectedFile: (oldFilePath: string, newFilePath: string) => 
        
            dispatch(wizziActions.changeSelectedFile({
                oldFilePath, 
                newFilePath
             }))
        , 
        dispatchGithubClone: (owner: string, name: string, branch: string) => 
        
            dispatch(packiActions.githubCloneRequest({
                owner, 
                name, 
                branch
             }))
        
     })
;
type AppProps = PreferencesContextType & PropsFromRedux & { 
    packi: PackiOptions;
    loggedUser: LoggedUser;
    userAgent: string;
};
type State = PackiStateProps & { 
    session: PackiState;
    selectedFile: string;
    previewKind: PreviewKind;
    sendCodeOnChangeEnabled: boolean;
    autosaveEnabled: boolean;
    isSavedOnce: boolean;
    saveStatus: SaveStatus;
    isDownloading: boolean;
    isLocalWebPreview: boolean;
    verbose: boolean;
    annotations: Annotation[];
};
class AppMain extends React.Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);
        console.log('App.ctor.props', props, __filename);
        let id = props.packi._id;
        let files = props.packi.packiFiles;
        const owner = props.packi.owner;
        const name = props.packi.name;
        const mainIttf = props.packi.mainIttf;
        const wizziSchema = props.packi.wizziSchema;
        const description = props.packi.description;
        const packiProduction: PackiProduction = props.packi.packiProduction;
        const readOnly = props.packi.readOnly;
        const isLocalFolder = props.packi.isLocalFolder;
        const localFolderPath = props.packi.localFolderPath;
        const localFolderUri = props.packi.localFolderUri;
        const generated = props.packi.generated;
        const verbose = props.preferences.verbose;
        const sendCodeOnChangeEnabled = true;
        const sessionSecret = null;
        const isLocalWebPreview = false;
        this._PackiSession = new PackiSession({
            disabled: true, 
            id, 
            owner, 
            name, 
            description, 
            mainIttf, 
            wizziSchema, 
            files, 
            packiProduction, 
            readOnly, 
            isLocalFolder, 
            localFolderPath, 
            localFolderUri, 
            generated, 
            verbose, 
            user: props.loggedUser, 
            apiURL: nullthrows(process.env.API_SERVER_URL), 
            host: new URL(nullthrows(process.env.SERVER_URL)).host
         });
        ;
        
        // TODO preserve selected from history
        const selectedFile = Object.keys(files).length ? Object.keys(files)[0] : '';
        this.state = {
            session: this._PackiSession.getState(), 
            selectedFile, 
            sendCodeOnChangeEnabled, 
            autosaveEnabled: true, 
            isSavedOnce: false, 
            saveStatus: props.packi?.isDraft ? 'saved-draft' : id ? 'published' : 'unsaved', 
            isLocalWebPreview: false, 
            isDownloading: false, 
            verbose: false, 
            annotations: [], 
            fileEntries: [], 
            generatedArtifact: undefined, 
            jobGeneratedArtifacts: undefined, 
            wizziMetaFolderIttfDocuments: undefined, 
            wizzifiedIttfContent: undefined, 
            codeASTContent: undefined, 
            mTreeIttf: undefined, 
            mTreeBuildUpScript: undefined, 
            wizziError: undefined, 
            isWizziJobWaiting: false, 
            previewKind: this._getViewKind(selectedFile)
         };
    }
    _previewRef = React.createRef<Window>();
    private edited: boolean = false;
    _PackiSession: PackiSession;
    _PackiStateListener?: PackiListenerSubscription;
    _isFocused: boolean = false;
    _focusTimer: number | undefined;
    
    _generateArtifactOrWizzifyOrCodeAST(filePath: string) {
        const files = this.state.session.files;
        if (Object.keys(files).length) {
            filePath = filePath || this.state.selectedFile || Object.keys(files)[0];
            if (this.state.session.files[filePath]) {
                if (filePath.endsWith('.ittf')) {
                    if (!(filePath.startsWith('t/') || filePath.indexOf('/t/') > -1)) {
                        if (this.state.previewKind == 'generated') {
                            this.props.dispatchGenerateArtifact(filePath, fileConversions.packiFilterIttf(this.state.session.files), this.state.session.packiProduction, this.state.session.name)
                        }
                        else if (this.state.previewKind == 'mTreeIttf') {
                            this.props.dispatchMTree(filePath, fileConversions.packiFilterIttf(this.state.session.files), this.state.session.packiProduction, this.state.session.name)
                        }
                        else if (this.state.previewKind == 'mTreeBuildUpScript') {
                            this.props.dispatchMTreeDebugInfo(filePath, fileConversions.packiFilterIttf(this.state.session.files), this.state.session.packiProduction, this.state.session.name)
                        }
                    }
                }
                else {
                    if (this.state.previewKind == 'codeAST') {
                        this.props.dispatchCodeAST(filePath, this.state.session.files[filePath].contents)
                    }
                    else if (this.state.previewKind == 'wizzified') {
                        this.props.dispatchWizzify(filePath, this.state.session.files[filePath].contents)
                    }
                }
            }
        }
    }
    
    _executeJobNotDebounced = () => {
        const files = this.state.session.files;
        const filePath = this.state.selectedFile;
        if (Object.keys(files).length && filePath) {
            this.setState({
                isWizziJobWaiting: false
             })
            this.props.dispatchExecuteJob(filePath, fileConversions.packiFilterIttf(files), this.state.session.packiProduction, this.state.session.name)
        }
    };
    
    _executeWizziMetaFolderNotDebounced = () => {
        console.log('App._executeWizziMetaFolderNotDebounced', __filename);
        const files = this.state.session.files;
        
        // TODO check if .packi/config contains a meta property
        if (Object.keys(files).length) {
            this.setState({
                isWizziMetaFolderWaiting: false
             })
            this.props.dispatchExecuteWizziMetaFolder(this.state.session.packiProduction, this.state.session.id)
        }
    };
    
    _getViewKind = (selectedFile, selectedFilePrev) => {
        selectedFilePrev = selectedFilePrev || "";
        if (this.state) {
            if (selectedFile.endsWith('.ittf') && selectedFilePrev.endsWith('.ittf')) {
                return this.state.previewKind;
            }
            if (!selectedFile.endsWith('.ittf') && !selectedFilePrev.endsWith('.ittf')) {
                return this.state.previewKind;
            }
        }
        else {
            if (selectedFile.endsWith('.ittf')) {
                return 'generated';
            }
            else {
                return 'wizzified';
            }
        }
    };
    
    static getDerivedStateFromProps(_props: AppProps, state: State) {
        return null;
    }
    
    componentDidMount() {
        this._PackiStateListener = this._PackiSession.addStateListener(this._handleSessionStateChange);
        this._isFocused = document.hasFocus();
        this._focusTimer = window.setInterval(this._handleFocusChangeInterval, 500);
        if (this.props.preferences.autoGenSingleDoc && this.props.packi.mainIttf) {
            this._generateArtifactOrWizzifyOrCodeAST(this.props.packi.mainIttf)
        }
    }
    
    componentWillUnmount() {
        this._PackiStateListener?.();
        clearInterval(this._focusTimer);
        this._focusTimer = undefined;
    }
    
    componentDidUpdate(prevProps: AppProps, prevState: State) {
        if (prevProps.jobGeneratedArtifacts !== this.props.jobGeneratedArtifacts) {
            this._PackiSession.updateJobGeneratedFiles(this.props.jobGeneratedArtifacts || {})
        }
        if (prevProps.wizziMetaFolderIttfDocuments !== this.props.wizziMetaFolderIttfDocuments) {
            this._PackiSession.updateWizziMetaFolderIttfDocuments(this.props.wizziMetaFolderIttfDocuments || {})
        }
        if (prevProps.clonedGithubRepoFiles !== this.props.clonedGithubRepoFiles || prevProps.clonedGithubRepoName !== this.props.clonedGithubRepoName || prevProps.clonedGithubRepoOwner !== this.props.clonedGithubRepoOwner) {
            this._PackiSession.updateClonedGithubRepoFiles(this.props.clonedGithubRepoOwner, this.props.clonedGithubRepoName, this.props.clonedGithubRepoFiles || {})
        }
    }
    _handleFocusChangeInterval = () => {
        const isFocused = document.hasFocus();
        if (this._isFocused !== isFocused) {
            this._isFocused = isFocused;
            if (isFocused) {
                this._PackiSession.setFocus();
            }
        }
    };
    _handleSessionStateChange = (packiState: PackiState, prevPackiState: PackiState) => 
        // log 'Session state change: ', diff(prevPackiState, packiState), packiState
        this.setState((state) => {
        
            let annotations: Annotation[] | undefined;
            
            // Set save-status to changed if needed
            const saveStatus: SaveStatus = state.unsaved && (state.saveStatus === 'saved-draft' || state.saveStatus === 'published' || state.saveStatus === 'unsaved') ? this.edited ? 'edited' : 'unsaved' : state.saveStatus;
            
            // Update session state
            return {
                    session: packiState, 
                    saveStatus, 
                    annotations: annotations ?? state.annotations
                 };
        }
        , 
        // 15/7/21 Disactivated
        
        // for changes uploaded see
        
        // - _PackiSession.updatePackiData
        
        // - _PackiSession.updatePackiFiles
        () => {
        
        }
        );
    
    _handleSubmitMetadata = (details: { 
        name: string;
        description: string;
        mainIttf: string;
        wizziSchema: string;
    }) => {
        this.edited = true;
        this._PackiSession.setName(details.name);
        this._PackiSession.setDescription(details.description);
        this._PackiSession.setMainIttf(details.mainIttf);
        this._PackiSessionn.setWizziSchema(details.wizziSchema);
    };
    
    _handleDownloadAsync = async () => {
    
        this.setState({
            isDownloading: true
         })
        
        // Make sure file is saved before downloading
        const {
            saveStatus
         } = this.state;
        let once = true;
        this.setState((state) => {
        
            const {
                id
             } = state.session;
            if (!id) {
                
                // this shouldn't happen
                return {
                        saveStatus, 
                        isDownloading: false
                     };
            }
            if (once) {
                once = false;
                const url = `${process.env.API_SERVER_URL}/--/api/v2/packi/download/${id}`;
                
                // Simulate link click to download file
                const element = document.createElement('a');
                if (element && document.body) {
                    document.body.appendChild(element);
                    element.setAttribute('href', url);
                    element.setAttribute('download', 'packi.zip');
                    element.style.display = '';
                    element.click();
                    document.body.removeChild(element);
                }
            }
            return {
                    saveStatus, 
                    isDownloading: false
                 };
        }
        )
    }
    ;
    
    _handleSelectFile = (filePath: string) => {
        if (filePath == this.state.selectedFile) {
            return ;
        }
        this.setState((state) => {
        
            return {
                    selectedFile: filePath, 
                    previewKind: this._getViewKind(filePath, state.selectedFile)
                 };
        }
        , () => {
        
            if (this.props.preferences.autoGenSingleDoc) {
                this._generateArtifactOrWizzifyOrCodeAST(filePath)
            }
            this._PackiSession.setSelectedFile(filePath)
        }
        )
    };
    
    _updateFiles = (updateFn: (files: PackiFiles) => { 
        [filePath: string]: PackiFile | null;
    }) => {
        const state = this._PackiSession.getState();
        const filesUpdate = updateFn(state.files);
        if (Object.keys(filesUpdate).length) {
            this.edited = true;
            this._PackiSession.updatePackiFiles(filesUpdate, () => 
            
                this._generateArtifactOrWizzifyOrCodeAST()
            )
        }
    };
    
    _handleSaveLocalFolder = () => {
        console.log('App._handleSaveLocalFolder', __filename);
        this._PackiSession.saveLocalFolder();
    };
    
    _handleCloseLocalFolder = () => {
        console.log('App._handleCloseLocalFolder', __filename);
        this._PackiSession.closeLocalFolder();
    };
    
    _handleGenerateArtifactPreview = async () => 
    
        this.setState((state) => {
        
            return {
                    previewKind: 'generated'
                 };
        }
        , () => {
        
            const files = this.state.session.files;
            if (Object.keys(files).length) {
                const filePath = this.state.selectedFile || Object.keys(files)[0];
                if (filePath.endsWith('.ittf')) {
                    this.props.dispatchGenerateArtifact(filePath, fileConversions.packiFilterIttf(this.state.session.files), this.state.session.packiProduction, this.state.session.name)
                }
            }
        }
        )
    
    ;
    
    _handleMTreePreview = async () => 
    
        this.setState((state) => {
        
            return {
                    previewKind: 'mTreeIttf'
                 };
        }
        , () => {
        
            const files = this.state.session.files;
            if (Object.keys(files).length) {
                const filePath = this.state.selectedFile || Object.keys(files)[0];
                if (filePath.endsWith('.ittf')) {
                    this.props.dispatchMTree(filePath, fileConversions.packiFilterIttf(this.state.session.files), this.state.session.packiProduction, this.state.session.name)
                }
            }
        }
        )
    
    ;
    
    _handleMTreeDebugInfoPreview = async () => 
    
        this.setState((state) => {
        
            return {
                    previewKind: 'mTreeBuildUpScript'
                 };
        }
        , () => {
        
            const files = this.state.session.files;
            if (Object.keys(files).length) {
                const filePath = this.state.selectedFile || Object.keys(files)[0];
                if (filePath.endsWith('.ittf')) {
                    this.props.dispatchMTreeDebugInfo(filePath, fileConversions.packiFilterIttf(this.state.session.files), this.state.session.packiProduction, this.state.session.name)
                }
            }
        }
        )
    
    ;
    _handleBrowsePreview = async () => 
    
        this.setState((state) => {
        
            return {
                    previewKind: 'browser'
                 };
        }
        )
    
    ;
    _handleWizzifyPreview = async () => 
    
        this.setState((state) => {
        
            return {
                    previewKind: 'wizzified'
                 };
        }
        , () => {
        
            const files = this.state.session.files;
            if (Object.keys(files).length) {
                const filePath = this.state.selectedFile || Object.keys(files)[0];
                if (!filePath.endsWith('.ittf')) {
                    this.props.dispatchWizzify(filePath, files[filePath].contents)
                }
            }
        }
        )
    
    ;
    _handleCodeASTPreview = async () => 
    
        this.setState((state) => {
        
            return {
                    previewKind: 'codeAST'
                 };
        }
        , () => {
        
            const files = this.state.session.files;
            if (Object.keys(files).length) {
                const filePath = this.state.selectedFile || Object.keys(files)[0];
                if (!filePath.endsWith('.ittf')) {
                    this.props.dispatchCodeAST(filePath, files[filePath].contents)
                }
            }
        }
        )
    
    ;
    _handleGithubClone = async (details: any) => 
    
        this.props.dispatchGithubClone(details.owner, details.name, details.branch)
    
    ;
    render() {
        if (this.props && this.state) {
            return  (
                <LazyLoad<React.ComponentType<EditorViewProps>>
                 load={() => 
                    
                        (import('./EditorView/EditorView'))
                }>
                    {
                        ({
                            loaded, 
                            data: Comp
                         }) => 
                        
                            loaded && Comp ?  (
                                <Comp 
                                    id={this.state.session.id}
                                    owner={this.state.session.owner}
                                    name={this.state.session.name}
                                    description={this.state.session.description}
                                    files={this.state.session.files}
                                    mainIttf={this.state.session.mainIttf}
                                    wizziSchema={this.state.session.wizziSchema}
                                    packiProduction={this.state.session.packiProduction}
                                    isLocalFolder={this.state.session.isLocalFolder}
                                    localFolderPath={this.state.session.localFolderPath}
                                    readOnly={this.state.session.readOnly}
                                    generated={this.state.session.generated}
                                    annotations={this.state.annotations}
                                    loggedUser={this.props.loggedUser}
                                    autosaveEnabled={this.state.autosaveEnabled}
                                    createdAt={this.props.packi.created}
                                    isDownloading={this.state.isDownloading}
                                    onGithubClone={this._handleGithubClone}
                                    onDownloadAsync={this._handleDownloadAsync}
                                    onSubmitMetadata={this._handleSubmitMetadata}
                                    onSelectFile={this._handleSelectFile}
                                    previewRef={this._previewRef}
                                    previewURL={this.state.session.previewURL}
                                    saveStatus={this.state.saveStatus}
                                    selectedFile={this.state.selectedFile}
                                    sendCodeOnChangeEnabled={this.state.sendCodeOnChangeEnabled}
                                    updateFiles={this._updateFiles}
                                    userAgent={this.props.userAgent}
                                    verbose={this.state.verbose}
                                    previewKind={this.state.previewKind}
                                    generatedArtifact={this.props.generatedArtifact}
                                    mTreeBuildUpScript={this.props.mTreeBuildUpScript}
                                    mTreeIttf={this.props.mTreeIttf}
                                    isWizziJobWaiting={this.state.isWizziJobWaiting}
                                    wizzifiedIttfContent={this.props.wizzifiedIttfContent}
                                    codeASTContent={this.props.codeASTContent}
                                    wizziError={this.props.wizziError}
                                    onGenerateArtifactPreview={this._handleGenerateArtifactPreview}
                                    onMTreePreview={this._handleMTreePreview}
                                    onMTreeDebugInfoPreview={this._handleMTreeDebugInfoPreview}
                                    onBrowsePreview={this._handleBrowsePreview}
                                    onWizzifyPreview={this._handleWizzifyPreview}
                                    onCodeASTPreview={this._handleCodeASTPreview}
                                    onExecuteWizziJob={this._executeJobNotDebounced}
                                    onExecuteWizziMetaFolder={this._executeWizziMetaFolderNotDebounced}
                                    onSaveLocalFolder={this._handleSaveLocalFolder}
                                    onCloseLocalFolder={this._handleCloseLocalFolder}
                                 />
                                )
                             :  (
                                <AppShell
                                 title={this.state.session.name} />
                                )
                        
                        
                    }
                </LazyLoad>
                )
            ;
        }
        else {
            return  (
                <div
                >
                    Not ready
                </div>
                )
            ;
        }
    }
}
const connector = connect(packiMapStateToProps, packiMapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
const AppMainContainer = withPreferences(connector(AppMain));
export default AppMainContainer;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        display: 'flex', 
        height: '100%', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
     }, 
    logo: {
        transform: 'scale(0.5)', 
        opacity: 0.9
     }, 
    loadingText: {
        marginTop: 0, 
        opacity: 0.7, 
        fontSize: 18
     }
 });
