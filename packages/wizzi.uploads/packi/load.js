var fs = require('fs');
var path = require('path');
const mongoose = require('mongoose');
const tFolderModel = require('./mongo/tFolder');
const ArtifactModel = require('./mongo/artifact');
const MetaModel = require('./mongo/meta');
const prepareLoad = require('./prepareLoad');

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://yanez:x5csosPN5YAsrl4Z@cluster0.idlk7.mongodb.net/wizzi?authSource=admin&replicaSet=atlas-ro0xxi-shard-0&readPreference=primary&ssl=true',
    {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
let TFolder;
let ArtifactProduction;
let MetaProduction;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    TFolder = tFolderModel.getTFolder();
    ArtifactProduction = ArtifactModel.getArtifactProduction();
    MetaProduction = MetaModel.getMetaProduction();
    if (false) {
        const item = {
            owner: 'stfnbssl',
            name: 'dixie 2',
            wizziSchema: 'html',
            mainIttf: 'a',
            packiFiles: { ['a']: { type: 'CODE', contents: 'hello' } }
        };
        userUpsertArtifactProduction(item, function(err, result) {
            console.log('userUpsertArtifactProduction.err', err);
            console.log('userUpsertArtifactProduction.result', result);
            upsertArtifactProduction(item, function(err, result) {
                console.log('upsertArtifactProduction.err', err);
                console.log('upsertArtifactProduction.result', result);
                db.close();
            });
        });
    }
    prepareLoad.exec({siteTFolder: true, siteName:"wizzihub"}, function(err) {
        if (err) throw err;
        uploadTFolders(path.join(__dirname, 'json', 'tFolders.json'), function (err, result) {
            console.log('uploadTFolders.err', err);
            console.log('uploadTFolders.result', Object.keys(result));
            if (err) throw err;
            if (fs.existsSync(path.join(__dirname, 'json', 'artifactProductions.json'))) {
                uploadArtifactProductions(path.join(__dirname, 'json', 'artifactProductions.json'), function (err, result) {
                    console.log('uploadArtifact.err', err);
                    console.log('uploadArtifact.result', Object.keys(result));
                    if (err) throw err;
                    if (fs.existsSync(path.join(__dirname, 'json', 'metaProductions.json'))) {
                        uploadMetaProductions(path.join(__dirname, 'json', 'metaProductions.json'), function (err, result) {
                            console.log('uploadMeta.err', err);
                            console.log('uploadMeta.result', Object.keys(result));
                            if (err) throw err;
                            db.close();
                        });
                    }
                });
            }
        });
    })
});

function uploadTFolders(tFoldersPath, callback) {
    fs.readFile(tFoldersPath, 'utf8', function (err, data) {
        if (err) throw err;
        itemsObj = JSON.parse(data);
        var j = 0;
        (function next() {
            var itemObj = itemsObj[j++];
            if (!itemObj) {
                console.log('done uploadTFolder', tFoldersPath);
                return callback(null, 'done uploadTFolder');
            }
            upsertTFolder(itemObj, function(err, result) {
                console.log('upsertTFolder.err', err);
                console.log('upsertTFolder.result', Object.keys(result));
                next();
            });
        })();
    });
}

function uploadArtifactProductions(itemsPath, callback) {
    fs.readFile(itemsPath, 'utf8', function (err, data) {
        if (err) throw err;
        itemsObj = JSON.parse(data);
        var j = 0;
        (function next() {
            var itemObj = itemsObj[j++];
            if (!itemObj) {
                console.log('done uploadArtifactProduction', itemsPath);
                return callback(null, 'done uploadArtifactProductions');
            }
            upsertArtifactProduction(itemObj, function(err, result) {
                console.log('upsertArtifactProduction.err', err);
                console.log('upsertArtifactProduction.result', Object.keys(result));
                next();
            });
        })();
    });
}

function uploadMetaProductions(itemsPath, callback) {
    fs.readFile(itemsPath, 'utf8', function (err, data) {
        if (err) throw err;
        itemsObj = JSON.parse(data);
        var j = 0;
        (function next() {
            var itemObj = itemsObj[j++];
            if (!itemObj) {
                console.log('done uploadMetaProduction', itemsPath);
                return callback(null, 'done uploadMetaProductions');
            }
            upsertMetaProduction(itemObj, function(err, result) {
                console.log('upsertMetaProduction.err', err);
                console.log('upsertMetaProduction.result', Object.keys(result));
                next();
            });
        })();
    });
}

function upsertTFolder(item, callback) {
    var query = { owner: item.owner, name: item.name};
    TFolder.find(query, function(err, result) {
        if (err) return callback(err);
        console.log('upsertTFolder.find.result', result.length, result && result.length > 0 && result[0].userUpdated, Object.keys(result))
        if (result.length == 0 || !result[0].userUpdated) {
            item.userUpdated = false;
            item.description = '...';
            item.created_at = new Date();
            item.updated_at = new Date();
            TFolder.findOneAndUpdate(query, item, {upsert: true, new: true}, function(err, doc) {
                if (err) return callback(err);
                return callback(null, { upserted: true, doc: doc });
            });
        }
        else
        {
            return callback(null, { upserted: false, message: 'The user already updated this' });
        }
    });
}

function upsertArtifactProduction(item, callback) {
    var query = { owner: item.owner, name: item.name};
    ArtifactProduction.find(query, function(err, result) {
        if (err) return callback(err);
        console.log('upsertArtifactProduction.find.result', result.length, result && result.length > 0 && result[0].userUpdated, Object.keys(result))
        if (result.length == 0 || !result[0].userUpdated) {
            item.userUpdated = false;
            item.description = '...';
            item.created_at = new Date();
            item.updated_at = new Date();
            ArtifactProduction.findOneAndUpdate(query, item, {upsert: true, new: true}, function(err, doc) {
                if (err) return callback(err);
                return callback(null, { upserted: true, doc: doc });
            });
        }
        else
        {
            return callback(null, { upserted: false, message: 'The user already updated this' });
        }
    });
}

function upsertMetaProduction(item, callback) {
    var query = { owner: item.owner, name: item.name};
    MetaProduction.find(query, function(err, result) {
        if (err) return callback(err);
        console.log('upsertMetaProduction.find.result', result.length, result && result.length > 0 && result[0].userUpdated, Object.keys(result))
        if (result.length == 0 || !result[0].userUpdated) {
            item.userUpdated = false;
            item.description = '...';
            item.created_at = new Date();
            item.updated_at = new Date();
            MetaProduction.findOneAndUpdate(query, item, {upsert: true, new: true}, function(err, doc) {
                if (err) return callback(err);
                return callback(null, { upserted: true, doc: doc });
            });
        }
        else
        {
            return callback(null, { upserted: false, message: 'The user already updated this' });
        }
    });
}

function userUpsertTFolder(item, callback) {
    item.userUpdated = true;
    var query = { owner: item.owner, name: item.name};
    console.log('userUpsertTFolder', item);
    TFolder.findOneAndUpdate(query, item, {upsert: true, new: true}, function(err, doc) {
        if (err) return callback(err);
        return callback(null, { upserted: true, message: 'user updated', doc: doc });
    });
}

function userUpsertArtifactProduction(item, callback) {
    item.userUpdated = true;
    var query = { owner: item.owner, name: item.name};
    console.log('userUpsertArtifactProduction', item);
    ArtifactProduction.findOneAndUpdate(query, item, {upsert: true, new: true}, function(err, doc) {
        if (err) return callback(err);
        return callback(null, { upserted: true, message: 'user updated', doc: doc });
    });
}