/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\recursivelyCreateParents.tsx.ittf
*/
import {FileSystemEntry, getParentPath} from '../../../features/file';
export default function recursivelyCreateParents(entries: FileSystemEntry[], path: string, expand?: boolean):  FileSystemEntry[] {
    
        const next: FileSystemEntry[] = [];
        let parent = getParentPath(path);
        while (parent) {
            const parentEntry = entries.find(e => 
            
                e.item.path === parent
            );
            if (parentEntry) {
                if (parentEntry.item.type !== 'folder') {
                    throw new Error('File path must be inside a folder');
                }
                break;
            }
            else {
                next.push({
                    item: {
                        type: 'folder', 
                        path: parent
                     }, 
                    state: {
                        isExpanded: !!expand
                     }
                 })
                parent = getParentPath(parent);
            }
        }
        return next;
    }
