/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\recursivelyCreateParents.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
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
