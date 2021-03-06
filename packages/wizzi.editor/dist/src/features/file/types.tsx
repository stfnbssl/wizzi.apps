/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\file\types.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
*/

export type TextFileEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'file';
        content: string;
        generated?: boolean;
        bothRealAndGenerated?: boolean;
        virtual?: true;
        asset?: false;
    };
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isExpanded?: false;
    };
}>;

export type AssetFileEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'file';
        uri: string;
        generated?: false;
        asset: true;
        virtual?: true;
    };
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isExpanded?: false;
    };
}>;

export type FolderEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'folder';
        asset?: false;
        virtual?: false;
        generated?: false;
    };
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isExpanded?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
    };
}>;

export type FileSystemEntry = TextFileEntry | AssetFileEntry | FolderEntry;

export type FileSystemEntryDiff = { 
    kind: string;
    a?: FileSystemEntry['item'];
    b?: FileSystemEntry['item'];
};
