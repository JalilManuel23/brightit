const usersCtrl = {};

const User = require('../models/User');
var validacion = require('validator');

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

usersCtrl.verUsuario = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingreso ID de usuario a buscar'
        });
    }

    User.findById(id, (err, usuario) => {
        if (err || !usuario) {
            return res.status(404).send({
                status: 'Error: ',
                mensaje: 'No existe el usuario a buscar en la colección'
            })
        }

        return res.status(200).send({
            status: 'Busqueda del usuario de forma exitosa',
            usuario
        })
    });
}

usersCtrl.editarUsuario = (req, res) => {
    var id = req.params.id;

    var params = req.body;

    try {
        var validar_name = !validacion.isEmpty(params.name);
        var validar_email = !validacion.isEmpty(params.email);
        var validar_password = !validacion.isEmpty(params.password);
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (validar_name && validar_email && validar_password) {
        User.findOneAndUpdate({ _id: id }, params, { new: true }, (err, usuarioActualizado) => {

            if (err) {
                return res.status(404).send({
                    status: 'Error',
                    mensaje: 'Error al actualizar'
                })
            }

            if (!usuarioActualizado) {
                return res.status(404).send({
                    status: 'Error',
                    mensaje: 'No existe el usuario a actualizar'
                })
            }

            return res.status(200).send({
                status: 'Usuario Actualizado con éxito',
                usuarioActualizado
            })
        });
    }
    else {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Los datos no son validos verifique por favor'
        })
    }
}

module.exports = usersCtrl;