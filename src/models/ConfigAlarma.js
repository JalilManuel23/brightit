const { Schema, model } = require('mongoose');

const ConfigAlarmaSchema = new Schema({
    codigo: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('ConfigAlarma', ConfigAlarmaSchema);