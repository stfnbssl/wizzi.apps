/*
    Create the data/tfolders directory from the C:/My/wizzi/stfnbssl/wizzi-heroku/ittf/t directory
*/
var path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
var wizziUtils = require('wizzi-utils');

const wizzihub_tfolder = "C:/My/wizzi/stfnbssl/wizzi-heroku/ittf/t";
const wizzihub_tfolder2 = "C:/My/wizzi/stfnbssl/wizzi-heroku/.wizzi/t";
const tfolders_folder = "C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi.uploads/packi/data/tFolders";

function copyIttf(srcPath, destPath) {
    if (!fs.existsSync(path.dirname(destPath))){
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
    }   
    wizziUtils.vfile().copyFileSync(srcPath, destPath)                         
}

function execSchemaTFolders(callback) {
    wizziUtils.vfile().getFiles(wizzihub_tfolder, {deep: true, extension:null, documentContent: true}, function(err, files) {
        if (err) { return callback(err); }
        files.map(item => {
            const ss = item.relPath.split('.');
            if (ss[ss.length-1] == 'ittf') {
                const schema = ss[ss.length-2];
                if (['html', 'css', 'js', 'json', 'svg'].indexOf(schema) > -1) {
                    var dd = item.relPath.split('/');
                    console.log('write ' + schema, dd[0], item.relPath);
                    var destPath;
                    if (dd[0] == schema) {
                        destPath = path.join(tfolders_folder, item.relPath);
                    } else {
                        destPath = path.join(tfolders_folder, schema, item.relPath);
                    }
                    if (!fs.existsSync(path.dirname(destPath))){
                        fs.mkdirSync(path.dirname(destPath), { recursive: true });
                    }   
                    wizziUtils.vfile().copyFileSync(item.fullPath, destPath)                         
                    writtenSchemas[schema] = true;
                } else {
                    console.log('no schema', item.relPath);
                    noSchemas.push(item.relPath)
                }
            }
        })
        Object.keys(writtenSchemas).forEach(schema => {
            if (['html','js'].indexOf(schema) > -1) {
                noSchemas.forEach(itemRelPath => {
                    var srcPath = path.join(wizzihub_tfolder, itemRelPath);
                    var destPath = path.join(tfolders_folder, schema, itemRelPath);
                    copyIttf(srcPath, destPath);
                })
            }
        })
        callback(null);
    })
}

function execSiteWizzihubTFolders(callback) {
    wizziUtils.vfile().getFiles(wizzihub_tfolder, {deep: true, extension:null, documentContent: true}, function(err, files) {
        if (err) { return callback(err); }
        files.map(item => {
            const ss = item.relPath.split('.');
            if (ss[ss.length-1] == 'ittf') {
                destPath = path.join(tfolders_folder, 't', item.relPath);
                if (!fs.existsSync(path.dirname(destPath))){
                    fs.mkdirSync(path.dirname(destPath), { recursive: true });
                }   
                wizziUtils.vfile().copyFileSync(item.fullPath, destPath)                         
            }
        })
        wizziUtils.vfile().getFiles(wizzihub_tfolder2, {deep: true, extension:null, documentContent: true}, function(err, files) {
            if (err) { return callback(err); }
            files.map(item => {
                const ss = item.relPath.split('.');
                if (ss[ss.length-1] == 'ittf') {
                    destPath = path.join(tfolders_folder, 't', item.relPath);
                    if (!fs.existsSync(path.dirname(destPath))){
                        fs.mkdirSync(path.dirname(destPath), { recursive: true });
                    }   
                    wizziUtils.vfile().copyFileSync(item.fullPath, destPath)                         
                }
            })
            callback(null);
        })
    })
}

module.exports = {
    exec: function(callback) {
        rimraf(tfolders_folder, function(err, result){
            if (err) { return callback(err); }
            var writtenSchemas = {};
            var noSchemas = [];
            if (!fs.existsSync(tfolders_folder)){
                fs.mkdirSync(tfolders_folder);
            }       
            // execSchemaTFolders(callback);
            execSiteWizzihubTFolders(callback);
        });
    }
}

if (require.main === module) {
    module.exports.exec(function(err, result){
        console.log(err);
    });
}