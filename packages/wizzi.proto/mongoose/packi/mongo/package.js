const mongoose = require('mongoose');

const modelName = 'PackageProduction';

const packageProductionSchema = new mongoose.Schema({
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

packageProductionSchema.index(
    { owner: 1, name: 1 },
    { unique: true }
)

let PackageProduction = null;

module.exports = {
    getPackageProduction: function() {
        PackageProduction = mongoose.models.PackageProduction;
        if (!PackageProduction) { PackageProduction = mongoose.model(modelName, packageProductionSchema); }
        return PackageProduction;
    }
}