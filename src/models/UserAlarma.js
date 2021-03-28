const { Schema, model } = require('mongoose');

const UserAlarmaSchema = new Schema({
    idUsuario: {type: Number, required: true},
    nombre: {type: String, required: true},
    contador: {type: Number, required: true, default: 0}
}, {
    timestamps: true
});

module.exports = model('UserAlarma', UserAlarmaSchema);