const usersCtrl = {};

const User = require('../models/User');

usersCtrl.verUsuarios = (req, res) => {
    return res.status(200).send({
        // Registros consultados con éxito
        status: 'Busqueda Correcta'
    });
}

usersCtrl.agregarUsuario = async (req, res) => {
    const {name, email, password} = req.body;

    const newUser = new User({name, email, password});
    await newUser.save();
}

module.exports = usersCtrl;