/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi-override\src\features\packi\api\PackiBuilder.ts.ittf
    utc time: Fri, 08 Mar 2024 06:29:02 GMT
*/
import DiffMatchPatch from 'diff-match-patch';
import {PackiFiles} from '../types';
export class PackiBuilder {
    constructor(packiFiles: PackiFiles) {
        this.packiFiles = packiFiles || {};
        this.dmp = new DiffMatchPatch();
        console.log('PackiBuilder.ctor.packiFiles', packiFiles, __filename);
    }
    packiFiles: PackiFiles = {};
    dmp: any = null;
    getFileContent(filePath: string) {
        const file = this.packiFiles[filePath];
        return file ? file.contents : null;
    }
    putFile(filePath: string, type, contents) {
        this.packiFiles[filePath] = {
            type: type, 
            contents: contents
         };
    }
    putCodeFile(filePath: string, contents: string) {
        this.putFile(filePath, 'CODE', contents)
    }
    deleteFile(filePath: string) {
        delete this.packiFiles[filePath]
    }
    getFileDiffs(filePath: string, newContent: string) {
        const diffs = this._diffLineMode(this.packiFiles[filePath].contents, newContent);
        return diffs;
    }
    applyFileDiffs(filePath: string, diffs: string) {
        console.log('applyFileDiffs.filePath', filePath, __filename);
        console.log('applyFileDiffs.diffs', diffs, __filename);
        console.log('applyFileDiffs.this.packiFiles[filePath]', this.packiFiles[filePath], __filename);
        const textToPatch = this.packiFiles[filePath].contents;
        const patches = this.dmp.patch_make(textToPatch, diffs);
        const [patchedText, results] = this.dmp.patch_apply(patches, textToPatch);
        this.packiFiles[filePath].contents = patchedText;
    }
    getPackiFilesDiffs(packiFiles: PackiFiles) {
        const matches = {};
        var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, key;
        for (i=0; i<i_len; i++) {
            key = Object.keys(packiFiles)[i];
            if (this.packiFiles[key]) {
                matches[key] = {
                    d: 0, 
                    diffs: this._diffLineMode(this.packiFiles[key].contents, packiFiles[key].contents)
                 };
            }
            else {
                matches[key] = {
                    d: 1, 
                    type: packiFiles[key].type, 
                    contents: packiFiles[key].contents
                 };
            }
        }
        var i, i_items=Object.keys(this.packiFiles), i_len=Object.keys(this.packiFiles).length, key;
        for (i=0; i<i_len; i++) {
            key = Object.keys(this.packiFiles)[i];
            if (!packiFiles[key]) {
                matches[key] = {
                    d: -1
                 };
            }
        }
        return matches;
    }
    applyPatch(packiDiffs: any) {
        const patchedFiles = {};
        var i, i_items=Object.keys(packiDiffs), i_len=Object.keys(packiDiffs).length, key;
        for (i=0; i<i_len; i++) {
            key = Object.keys(packiDiffs)[i];
            if (packiDiffs[key].d == 1) {
                patchedFiles[key] = {
                    type: packiDiffs[key].type, 
                    contents: packiDiffs[key].contents
                 };
            }
            else if (packiDiffs[key].d == 0) {
                const textToPatch = this.packiFiles[key].contents;
                const patches = this.dmp.patch_make(textToPatch, packiDiffs[key].diffs);
                const [patchedText, results] = this.dmp.patch_apply(patches, textToPatch);
                patchedFiles[key] = {
                    type: this.packiFiles[key].type, 
                    contents: patchedText
                 };
            }
        }
        this.packiFiles = patchedFiles;
    }
    applyPatch_ChangesOnly(packiChanges: any) {
        var i, i_items=Object.keys(packiChanges), i_len=Object.keys(packiChanges).length, key;
        for (i=0; i<i_len; i++) {
            key = Object.keys(packiChanges)[i];
            if (packiChanges[key].d == 1) {
                this.putCodeFile(key, packiChanges[key].contents)
            }
            else if (packiChanges[key].d == 0) {
                if (packiChanges[key].contents && packiChanges[key].contents.length > 0) {
                    this.putCodeFile(key, packiChanges[key].contents)
                }
                else {
                    const textToPatch = this.packiFiles[key].contents;
                    const patches = this.dmp.patch_make(textToPatch, packiChanges[key].diffs);
                    const [patchedText, results] = this.dmp.patch_apply(patches, textToPatch);
                    this.putCodeFile(key, patchedText)
                }
            }
            else if (packiChanges[key].d == -1) {
                this.deleteFile(key)
            }
        }
    }
    equals(packiFiles: PackiFiles) {
        var i, i_items=Object.keys(packiFiles), i_len=Object.keys(packiFiles).length, key;
        for (i=0; i<i_len; i++) {
            key = Object.keys(packiFiles)[i];
            if (this.packiFiles[key]) {
                if (this.packiFiles[key].type != packiFiles[key].type) {
                    return false;
                }
                if (this.packiFiles[key].contents != packiFiles[key].contents) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        var i, i_items=Object.keys(this.packiFiles), i_len=Object.keys(this.packiFiles).length, key;
        for (i=0; i<i_len; i++) {
            key = Object.keys(this.packiFiles)[i];
            if (!packiFiles[key]) {
                return false;
            }
        }
        return true;
    }
    _diffLineMode(text1: string, text2: string) {
        var a = this.dmp.diff_linesToChars_(text1, text2);
        var lineText1 = a.chars1;
        var lineText2 = a.chars2;
        var lineArray = a.lineArray;
        var diffs = this.dmp.diff_main(lineText1, lineText2, false);
        this.dmp.diff_charsToLines_(diffs, lineArray);
        return diffs;
    }
}
