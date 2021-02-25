const { Schema, model } = require('mongoose');

const RegistroCerraduraSchema = new Schema({
    temperaturaRegistrada: {type: Number, required: true},
    horaRegistro: {type: Date, required: true}
}, {
    timestamps: true
});

module.exports = model('RegistroCerradura', RegistroCerraduraSchema);