const { Schema, model } = require('mongoose');

const RegistroAlimentadorSchema = new Schema({
    horaUltimoUso: {type: Date, required: true},
    numeroPorcion: {type: Number, required: true}
}, {
    timestamps: true
});

module.exports = model('RegistroAlimentador', RegistroAlimentadorSchema);