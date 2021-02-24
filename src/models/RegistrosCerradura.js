const { Schema, model } = require('mongoose');

const RegistroCerraduraSchema = new Schema({
    pinEmpleado: {type: Number, required: true},
    horaIngreso: {type: Date, required: true},
    horaSalida: {type: Date, required: true}
}, {
    timestamps: true
});

module.exports = model('RegistroCerradura', RegistroCerraduraSchema);