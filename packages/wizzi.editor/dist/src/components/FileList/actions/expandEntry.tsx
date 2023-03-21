/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\expandEntry.tsx.ittf
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
