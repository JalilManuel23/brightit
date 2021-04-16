const { Schema, model } = require('mongoose');

const UserAlarmaSchema = new Schema({
    idUsuario: {type: Number},
    nombre: {type: String},
    contador: {type: Number, default: 0}
}, {
    timestamps: true
});

module.exports = model('UserAlarma', UserAlarmaSchema);