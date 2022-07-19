/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\EditorView\EditorViewProps.tsx.ittf
    utc time: Tue, 19 Jul 2022 16:44:54 GMT
*/
import {SaveStatus, SaveHistory, PackiSaveOptions, PackiFiles, PackiFile} from '../../features/packi';
import {GeneratedArtifact, JobError} from '../../features/wizzi';
import {Packi} from '../../features/packi';
import {FileSystemEntry, TextFileEntry, AssetFileEntry} from '../../features/file';
import {Annotation} from '../../features/annotations';
export type EditorViewProps = { 
    createdAt: string | undefined;
    saveHistory: SaveHistory;
    saveStatus: SaveStatus;
    selectedFile: string;
    files: PackiFiles;
    owner: string;
    name: string;
    description: string;
    mainIttf: string;
    wizziSchema: string;
    packiProduction: PackiProduction;
    id?: string;
    isDownloading: boolean;
    annotations: Annotation[];
    experienceURL: string;
    sendCodeOnChangeEnabled: boolean;
    onTogglePreview: () => void;
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
    uploadFileAsync: (file: File) => Promise<string>;
    autosaveEnabled: boolean;
    userAgent: string;
    previewRef: React.MutableRefObject<Window | null>;
    previewShown: boolean;
    previewURL: string;
    verbose: boolean;
    loggedUser?: LoggedUser;
    creatorUsername?: string;
    fileEntries: FileSystemEntry[];
    entry: TextFileEntry | AssetFileEntry | undefined;
    params: { 
        id?: string;
    };
    generatedArtifact?: GeneratedArtifact;
    mTreeDebugInfo?: string;
    mTreeIttf?: string;
    // loadingMessage: string | undefined;
    jobError?: JobError;
    isWizziJobWaiting: boolean;
    onSelectPacki: (packiId: string) => void;
    onFileEntriesChange: (entries: FileSystemEntry[]) => Promise<void>;
    onEntrySelected: (entry: FileSystemEntry) => void;
    onExecuteWizziJob: () => void;
    onMTreePreview: () => void;
    onMTreeDebugInfoPreview: () => void;
};
