/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\expandEntry.tsx.ittf
    utc time: Mon, 25 Mar 2024 04:27:37 GMT
*/
import {FileSystemEntry} from '../../../features/file';
import updateEntry from './updateEntry';
export default function expandEntry(entries: FileSystemEntry[], path: string, expand: boolean = true):  FileSystemEntry[] {
    
        return entries.map((entry) => {
            
                if (entry.item.path === path && entry.item.type === 'folder') {
                    return updateEntry(entry, {
                            state: {
                                isExpanded: expand
                             }
                         });
                }
                return entry;
            }
            );
    }
