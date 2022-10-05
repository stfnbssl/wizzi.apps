var fs = require('fs');
var path = require('path');
var wizziUtils = require('wizzi-utils');
const common = require('./common');

function loadDirContents(dirname, callback) {
    const data = {};
    wizziUtils.vfile().getFiles(dirname, {deep: true, extension:null, documentContent: true}, function(err, files) {
        if (err) { return callback(err); }
        files.map(item => {
            data[normalizePath(item.fullPath)] = item.content;
        })
        callback(null, data)
    })
}

function loadMetaProductions(metaProductionsFolder, owner, callback) {
    console.log('loadMetaProductions', metaProductionsFolder, owner);
    common.loadPackiDirItems(metaProductionsFolder, { isDependency: false }, function(err, data) {
        if (err) { return callback(err); }
        // console.log(tFoldersFolder, data);
        var metaProductions = [];
        var j = 0;
        (function next() {
            var metaProductionPaths = data[j++];
            if (!metaProductionPaths) {
                console.log('metaProductions', metaProductions.length);
                return callback(null, metaProductions);
            }
            const basePath = metaProductionsFolder + '/' + metaProductionPaths.name;
            const mainIttf = metaProductionPaths.mainIttf.substring(basePath.length + 1);
            const metaProduction = {
                owner: owner,
                name: metaProductionPaths.name,
                mainIttf: mainIttf,
                wizziSchema: path.basename(mainIttf).split('.')[path.basename(mainIttf).split('.').length-2]
            };
            if (metaProductionPaths.packiFilesPath)
                loadDirContents(metaProductionPaths.packiFilesPath, function(err, filesData) {
                    if (err) { return callback(err); }
                    metaProduction.packiFiles = dataToPackiFiles(filesData, basePath, false);
                    metaProduction.packiFiles['wizzi.json.ittf'] = {
                        type: 'CODE',
                        contents: [
                            '{',
                            '    [ fragments',
                            '        {',
                            '            name "' + metaProduction.wizziSchema + '"',
                            '            path "' + owner + '/' + metaProduction.wizziSchema + '"',
                            '    [ contexts',
                            '        {',
                            '            name "wzCtx"',
                            '            path "' + owner + '/wzctx"',
                        ].join('\n')
                    };
                    metaProductions.push(metaProduction)
                    next();
                });
            else {
                metaProduction.packiFiles = {}
                metaProductions.push(metaProduction)
                next();
            }
        })()
    });
}
function loadTFolders(tFoldersFolder, owner, callback) {
    console.log('loadTFolders', tFoldersFolder, owner);
    loadPackiDirTFolder(tFoldersFolder, {}, function(err, data) {
        if (err) { return callback(err); }
        // console.log(tFoldersFolder, data);
        var tFolders = [];
        var j = 0;
        (function next() {
            var packiDepPaths = data[j++];
            if (!packiDepPaths) {
                console.log('tFolders', tFolders.length);
                return callback(null, tFolders);
            }
            const packiDependency = {
                owner: owner,
                name: packiDepPaths.name
            };
            loadDirContents(packiDepPaths.packiFilesPath, function(err, filesData) {
                if (err) { return callback(err); }
                packiDependency.packiFiles = /*JSON.stringify(*/dataToPackiFiles(filesData, tFoldersFolder, true)/*)*/;
                tFolders.push(packiDependency)
                next();
            });
        })()
    });
}

function dataToPackiFiles(filesData, basedir, isTFolder) {
    const prefix = isTFolder ? 't/' : '';
    const packiFiles = {};
    for (var filePath in filesData) {
        const relFilePath = filePath.substring(basedir.length + 1);
        packiFiles[prefix + relFilePath] = {
            type: "CODE",
            contents: filesData[filePath]
        }
    }
    return packiFiles;
}

function normalizePath(filePath) {
    return filePath && filePath.replace(/\\/g, '/');
}

const metaProductionsFolder = path.join(__dirname, 'data', 'metaProductions');
const jsonMetaProductions = path.join(__dirname, 'json', 'metaProductions.json');
module.exports = {
    exec: function(callback) {
        loadMetaProductions(metaProductionsFolder, 'stfnbssl', function(err, result) {
            if (err) return callback(err);
            fs.writeFile(jsonMetaProductions, JSON.stringify(result, null, 2), function (err) {
                if (err) return callback(err);
                callback(null);
            });
        });
    }
}

if (require.main === module) {
    module.exports.exec(function(err, result){
        console.log(err);
    });
}