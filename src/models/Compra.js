const { Schema, model } = require('mongoose');

const CompraSchema = new Schema({
    idUsuario: {type: Number, required: true},
    montoPagar: {type: Number, required: true},
    productos: {type: Date, required: true}
}, {
    timestamps: true
});

module.exports = model('Compra', CompraSchema);