/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\FileList\actions\__tests__\expandEntry.test.tsx.ittf
    utc time: Sun, 24 Jul 2022 11:56:37 GMT
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
