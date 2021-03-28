const { Schema, model } = require('mongoose');

const RegistroAlarmaSchema = new Schema({
    horaActiva: {type: Date, required: true},
    horaDesactivada: {type: Date, required: true},
    usuario: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('RegistroAlarma', RegistroAlarmaSchema);