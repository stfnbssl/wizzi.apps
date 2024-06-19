export interface FileOrFolder {
    id: string;
    type: string;
    name: string;
    children?: string[];
}

export type ExplorerData = FileOrFolder[];

export type AddFileOrFolder = {
    id?: string;
    type?: "file" | "folder";
    root?: boolean;
}

