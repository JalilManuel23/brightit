const { Schema, model } = require('mongoose');

const RegistroAlimentadorSchema = new Schema({
    horaUltimoUso: {type: String, required: true},
    numeroPorcion: {type: String, required: true},
    servir: {type: String}
}, {
    timestamps: true
});

module.exports = model('RegistroAlimentador', RegistroAlimentadorSchema);