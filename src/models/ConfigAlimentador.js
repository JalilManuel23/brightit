const { Schema, model } = require('mongoose');

const ConfigCerraduraSchema = new Schema({
    hora: {type: String, required: true}
});

module.exports = model('ConfigAlimentador', ConfigCerraduraSchema);