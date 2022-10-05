var fs = require('fs');
var path = require('path');
var wizziUtils = require('wizzi-utils');

module.exports = {
    loadPackiDirItems: function(dirname, options, callback) {
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
                });
            })()
        });
    }
}
