const mongoose = require('mongoose');

const modelName = 'TFolder';

const TFolderSchema = new mongoose.Schema({
    owner: { type: String},
    name: { type: String},
    description: { type: String},
    packiFiles: { 
        type: String,
        get: function(data) {
            return JSON.parse(data);
        },
        set: function(data) {
            return JSON.stringify(data);
        }        
    },
    created_at: { type: Date},
    updated_at: { type: Date},
    userUpdated: Boolean
});

TFolderSchema.index(
    { owner: 1, name: 1 },
    { unique: true }
)

let TFolder = null;

module.exports = {
    getTFolder: function() {
        TFolder = mongoose.models.TFolder;
        if (!TFolder) { TFolder = mongoose.model(modelName, TFolderSchema); }
        return TFolder;
    }
}