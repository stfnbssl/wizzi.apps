/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\updateEntry.tsx.ittf
    utc time: Mon, 29 Jan 2024 07:09:54 GMT
*/
import {FileSystemEntry} from '../../../features/file';
export default function updateEntry<T extends FileSystemEntry>(entry: T, updates: { 
        item?: Partial<T['item']>;
        state?: Partial<T['state']>;
    }):  T {
    
        return {
                ...((entry as any))
                , 
                item: updates.item ? {
                        ...entry.item, 
                        ...((updates as any).item)
                        
                     } : entry.item, 
                state: updates.state ? {
                        ...entry.state, 
                        ...((updates as any).state)
                        
                     } : entry.state
             };
    }
