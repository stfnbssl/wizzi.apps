/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\selectEntry.tsx.ittf
    utc time: Fri, 16 Feb 2024 22:02:11 GMT
*/
import {FileSystemEntry} from '../../../features/file';
import updateEntry from './updateEntry';
export default function selectEntry(entries: FileSystemEntry[], path: string):  FileSystemEntry[] {
    
        return entries.map(e => 
            
                e.item.path === path ? updateEntry(e, {
                        state: {
                            isSelected: !e.state.isSelected
                         }
                     }) : e
            );
    }
