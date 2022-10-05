/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\EditorViewProps.tsx.ittf
*/
import {SaveStatus, PackiSaveOptions, PackiFiles, PackiFile} from '../../features/packi';
import {GeneratedArtifact} from '../../features/wizzi';
import {Packi} from '../../features/packi';
import {FileSystemEntry, TextFileEntry, AssetFileEntry} from '../../features/file';
import {Annotation} from '../../features/annotations';
export type EditorViewProps = { 
    createdAt: string | undefined;
    saveStatus: SaveStatus;
    selectedFile: string;
    id?: string;
    owner: string;
    name: string;
    description: string;
    files: PackiFiles;
    mainIttf: string;
    wizziSchema: string;
    packiProduction: PackiProduction;
    readOnly: boolean;
    generated: boolean;
    isDownloading: boolean;
    annotations: Annotation[];
    sendCodeOnChangeEnabled: boolean;
    onSubmitMetadata: (details: { 
        name: string;
        description: string;
    }) => void;
    onPublishAsync: (options?: PackiSaveOptions) => Promise<void>;
    onDownloadAsync: () => Promise<void>;
    onSelectFile: (path: string) => void;
    updateFiles: (updateFn: (files: PackiFiles) => { 
        [path: string]: PackiFile | null;
    }) => void;
    autosaveEnabled: boolean;
    userAgent: string;
    previewRef: React.MutableRefObject<Window | null>;
    previewURL: string;
    verbose: boolean;
    loggedUser?: LoggedUser;
    entry: TextFileEntry | AssetFileEntry | undefined;
    params: { 
        id?: string;
    };
    generatedArtifact?: GeneratedArtifact;
    mTreeBuildupScript?: string;
    mTreeIttf?: string;
    wizziError?: any;
    isWizziJobWaiting: boolean;
    wizzifiedIttfContent?: string;
    codeASTContent?: string;
    onFileEntriesChange: (entries: FileSystemEntry[]) => Promise<void>;
    onEntrySelected: (entry: FileSystemEntry) => void;
    onExecuteWizziJob: () => void;
    onExecuteWizziMetaFolder: () => void;
    onGenerateArtifactPreview: () => void;
    onMTreePreview: () => void;
    onMTreeDebugInfoPreview: () => void;
    onBrowsePreview: () => void;
    onWizzifyPreview: () => void;
    onCodeASTPreview: () => void;
    onGithubClone: () => void;
};
