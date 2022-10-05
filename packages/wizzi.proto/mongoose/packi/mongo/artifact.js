const mongoose = require('mongoose');

const modelName = 'ArtifactProduction';

const artifactProductionSchema = new mongoose.Schema({
    owner: { type: String},
    name: { type: String},
    description: { type: String},
    wizziSchema: { type: String},
    mainIttf: { type: String},
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

artifactProductionSchema.index(
    { owner: 1, name: 1 },
    { unique: true }
)

let ArtifactProduction = null;

module.exports = {
    getArtifactProduction: function() {
        ArtifactProduction = mongoose.models.ArtifactProduction;
        if (!ArtifactProduction) { ArtifactProduction = mongoose.model(modelName, artifactProductionSchema); }
        return ArtifactProduction;
    }
}