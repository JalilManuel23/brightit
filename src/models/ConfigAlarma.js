const { Schema, model } = require('mongoose');

const ConfigAlarmaSchema = new Schema({
    horaActiva: {type: Date, required: true},
    horaDesactivada: {type: Date, required: true},
    codigo: {type: String}
}, {
    timestamps: true
});

module.exports = model('ConfigAlarma', ConfigAlarmaSchema);