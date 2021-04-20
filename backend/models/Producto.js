const { Schema, model } = require('mongoose');

ProductoSchema = new Schema({
    id: {type: Number, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    imagen: String
}, {
    timestamps: true
});

module.exports = model('Producto', ProductoSchema);