const { Schema, model } = require('mongoose');

const RegistroPorcionSchema = new Schema({
    mes: {type: String, required: true}
});

module.exports = model('RegistroPorcion', RegistroPorcionSchema);