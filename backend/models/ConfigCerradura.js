const { Schema, model } = require('mongoose');

const ConfigCerraduraSchema = new Schema({
    temperaturaActual: {type: Number, required: true},
    temperaturaAlerta: {type: Number, required: true},
}, {
    timestamps: true
});

module.exports = model('ConfigCerradura', ConfigCerraduraSchema);