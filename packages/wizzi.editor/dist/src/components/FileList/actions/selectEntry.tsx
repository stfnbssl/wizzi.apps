/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.webapp\packages\wizzi.editor\.wizzi\src\components\FileList\actions\selectEntry.tsx.ittf
    utc time: Tue, 28 Jun 2022 14:08:24 GMT
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
