const usersCtrl = {};

const User = require('../models/User');

usersCtrl.verUsuarios = (req, res) => {
    var consulta = User.find({});

    consulta.exec((err, usuarios) => {
        if(err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver usuarios'
            });
        }

        if(!usuarios) {
            return res.status(404).send({
                // Error
                status: 'Error',
                mensaje: 'No existen usuarios en la colección'
            });
        }

        return res.status(200).send({
            // Registros consultados con éxito
            status: 'Busqueda Correcta',
            usuarios
        });
    });
}

usersCtrl.agregarUsuario = async (req, res) => {
    const {name, email, password} = req.body;

    const newUser = new User({name, email, password});

    await newUser.save((err, usuarioAgregado) => {

        if (err || !usuarioAgregado) {
            return res.status(404).send({
                status: 'error',
                mensaje: 'El usuario no se ha guardado'
            })
        }

        return res.status(200).send({
            //Registro insertado con exito 
            status: 'Completado',
            usuarioAgregado
        });
    });
}

module.exports = usersCtrl;