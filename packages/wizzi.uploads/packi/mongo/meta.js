const mongoose = require('mongoose');

const modelName = 'MetaProduction';

const metaProductionSchema = new mongoose.Schema({
    owner: { type: String},
    name: { type: String},
    description: { type: String},
    packiFiles: { 
        type: String,
        get: function(data) {
            const json = JSON.parse(data);
            return json;
        },
        set: function(data) {
            return JSON.stringify(data);
        }
    },
    created_at: { type: Date},
    updated_at: { type: Date},
    userUpdated: Boolean
});    

metaProductionSchema.index(
    { owner: 1, name: 1 },
    { unique: true }
)

let MetaProduction = null;

module.exports = {
    getMetaProduction: function() {
        MetaProduction = mongoose.models.MetaProduction;
        if (!MetaProduction) { MetaProduction = mongoose.model(modelName, metaProductionSchema); }
        return MetaProduction;
    }
}