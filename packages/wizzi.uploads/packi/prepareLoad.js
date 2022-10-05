var fs = require('fs');
var path = require('path');
var wizziUtils = require('wizzi-utils');

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

function loadPackiDirTFolder(dirname, options, callback) {
    console.log('loadPackiDirTFolder', dirname, options);
    var files = [];
    fs.readdir(dirname, function(err, list) {
        if (err) { return callback(err); }
        var i = 0;
        (function next() {
            var filename = list[i++];
            if (!filename) return callback(null, files);
            var file = path.join(dirname, filename);
            fs.stat(file, function(err, stat) {
                if (err) return callback(err);        
                if (stat && stat.isDirectory())  {
                    files.push({name: filename, packiFilesPath: file});
                }
                next();
            });
        })();
    });
}

function loadPackiDirItems(dirname, options, callback) {
    console.log('loadPackiDirItems', dirname, options);
    var files = [];
    fs.readdir(dirname, function(err, list) {
        if (err) { return callback(err); }
        var mainIttf;
        var packiName
        var packiFilesPath;
        var i = 0;
        (function next() {
            var filename = list[i++];
            console.log('loadPackiDirItems.filename', filename);
            if (!filename) {
                if (mainIttf) {
                    
                    files.push({
                        name: packiName, 
                        mainIttf: normalizePath(mainIttf), 
                        packiFilesPath: normalizePath(packiFilesPath)}
                    );
                }
                return callback(null, files);
            }
            var file = path.join(dirname, filename);
            fs.stat(file, function(err, stat) {
                if (err) return callback(err);
                if (stat && stat.isDirectory()) {
                    console.log('loadPackiDirItems.isDirectory', filename);
                    if (filename == 't') {
                        packiFilesPath = dirname;
                        // stop search deep dirname is a artifactProduction
                        next();
                    } else {
                        // search deep
                        const savePathName = options.pathName;
                        options.pathName = options.pathName ? options.pathName + '/' + filename : filename;
                        loadPackiDirItems(file, options, function(err, subfiles) {
                            if (err) { return callback(err); }
                            console.log('called internal loadPackiDirItems', filename, subfiles.length),
                            files = files.concat(subfiles);
                            options.pathName = savePathName;
                            next();
                        })
                    }
                } else {
                    // filename is a mainIttf
                    packiFilesPath = dirname;
                    packiName = options.pathName;
                    mainIttf = normalizePath(file);
                    next();
                }
                    /*
                    var mainIttf;
                    var packiFilesPath;
                    fs.readdir(file, function(err, sublist) {
                        if (err) { return callback(err); }
                        packiFilesPath = normalizePath(file);
                        var j = 0;
                        (function nextSub() {
                            var subFilename = sublist[j++];
                            if (!subFilename) {
                                if (mainIttf) {
                                    const packiName = options.pathName ? options.pathName + '/' + filename : filename;
                                    files.push({name: packiName, mainIttf: normalizePath(mainIttf), packiFilesPath: normalizePath(packiFilesPath)});
                                }
                                return next();
                            }
                            var subFile = path.join(file, subFilename);
                            fs.stat(subFile, function(err, stat) {
                                if (stat && stat.isDirectory()) {
                                    if (subFilename != 't') {
                                        const savePathName = options.pathName;
                                        options.pathName = options.pathName ? options.pathName + '/' + filename : filename;
                                        loadPackiDir(subFile, options, function(err, subfiles) {
                                            if (err) { return callback(err); }
                                            console.log('called internal loadPackiDir', subFilename, subfiles.length),
                                            files = files.concat(subfiles);
                                            options.pathName = savePathName;
                                            nextSub();
                                        })
                                    } else {
                                        nextSub();    
                                    }
                                } else {
                                    console.log('is mainIttf', subFilename);
                                    mainIttf = normalizePath(path.join(file, subFilename));
                                    nextSub();
                                }
                            })
                            
                        })()
                    });
                }
                */
            });
        })()
    });
}
function loadArtifactProductions(artifactProductionsFolder, owner, callback) {
    console.log('loadArtifactProductions', artifactProductionsFolder, owner);
    loadPackiDirItems(artifactProductionsFolder, { isDependency: false }, function(err, data) {
        if (err) { return callback(err); }
        // console.log(tFoldersFolder, data);
        var artifactProductions = [];
        var j = 0;
        (function next() {
            var artifactProductionPaths = data[j++];
            if (!artifactProductionPaths) {
                console.log('artifactProductions', artifactProductions.length);
                return callback(null, artifactProductions);
            }
            const basePath = artifactProductionsFolder + '/' + artifactProductionPaths.name;
            const mainIttf = artifactProductionPaths.mainIttf.substring(basePath.length + 1);
            const artifactProduction = {
                owner: owner,
                name: artifactProductionPaths.name,
                mainIttf: mainIttf,
                wizziSchema: path.basename(mainIttf).split('.')[path.basename(mainIttf).split('.').length-2]
            };
            if (artifactProductionPaths.packiFilesPath)
                loadDirContents(artifactProductionPaths.packiFilesPath, function(err, filesData) {
                    if (err) { return callback(err); }
                    artifactProduction.packiFiles = /*JSON.stringify(*/dataToPackiFiles(filesData, basePath, false)/*)*/;
                    artifactProduction.packiFiles['wizzi.json.ittf'] = {
                        type: 'CODE',
                        contents: [
                            '{',
                            '    [ fragments',
                            '        {',
                            '            name "' + artifactProduction.wizziSchema + '"',
                            '            path "' + owner + '/' + artifactProduction.wizziSchema + '"',
                            '    [ contexts',
                            '        {',
                            '            name "wzCtx"',
                            '            path "' + owner + '/wzctx"',
                        ].join('\n')
                    };
                    artifactProductions.push(artifactProduction)
                    next();
                });
            else {
                artifactProduction.packiFiles = {}
                artifactProductions.push(artifactProduction)
                next();
            }
        })()
    });
}
function loadTFolders(tFoldersFolder, owner, options, callback) {
    console.log('loadTFolders', tFoldersFolder, owner);
    loadPackiDirTFolder(tFoldersFolder, {}, function(err, data) {
        if (err) { return callback(err); }
        console.log('loadTFolders', tFoldersFolder, data);
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
                name: options.siteTFolder ? options.siteName : packiDepPaths.name
            };
            loadDirContents(packiDepPaths.packiFilesPath, function(err, filesData) {
                if (err) { return callback(err); }
                if (options.siteTFolder){
                    packiDependency.packiFiles = dataToPackiFiles(filesData, tFoldersFolder, false);
                } else {
                    packiDependency.packiFiles = dataToPackiFiles(filesData, tFoldersFolder, true);
                }
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

const tFoldersFolder = path.join(__dirname, 'data', 'tFolders');
const jsonTFolders = path.join(__dirname, 'json', 'tFolders.json');
const artifactProductionsFolder = path.join(__dirname, 'data', 'artifactProductions');
const jsonArtifactProductions = path.join(__dirname, 'json', 'artifactProductions.json');
module.exports = {
    exec: function(options, callback) {
        loadTFolders(tFoldersFolder, 'stfnbssl', options, function(err, result) {
            if (err) return callback(err);
            fs.writeFile(jsonTFolders, JSON.stringify(result, null, 2), function (err) {
                if (err) return callback(err);
                loadArtifactProductions(artifactProductionsFolder, 'stfnbssl', function(err, result) {
                    if (err) return callback(err);
                    fs.writeFile(jsonArtifactProductions, JSON.stringify(result, null, 2), function (err) {
                        if (err) return callback(err);
                        callback(null);
                    });
                });
            });
        });
    }
}

if (require.main === module) {
    module.exports.exec({siteTFolder: true, siteName:"wizzihub"}, function(err, result){
        console.log(err);
    });
}