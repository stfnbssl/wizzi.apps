/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\__tests__\expandEntry.test.tsx.ittf
    utc time: Fri, 09 Aug 2024 15:52:24 GMT
*/
import {FileSystemEntry} from '../../types';
import expandEntry from '../expandEntry';
it('expands entry', () => {
    const entries: FileSystemEntry[] = [
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: false
             }
         }
    ];
    expect(expandEntry(entries, 'app/test')).toEqual([
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: true
             }
         }
    ])
    expect(expandEntry(entries, 'app/test', true)).toEqual([
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: true
             }
         }
    ])
    expect(expandEntry(entries, 'app/test', false)).toEqual([
        {
            item: {
                path: 'app/test', 
                type: 'folder'
             }, 
            state: {
                isExpanded: false
             }
         }
    ])
}
)