const usersCtrl = {};

const User = require('../models/User');
var validacion = require('validator');
const passport = require('passport');

usersCtrl.agregarUsuario =  (req, res) => {
    const {name, email, password} = req.body;

    const newUser = new User({name, email, password});

    newUser.save((err, usuarioAgregado) => {

        if (err || !usuarioAgregado) {
            return res.status(505).send({
                status: 'error',
                mensaje: 'El usuario no se ha guardado'
            })
        }

        req.flash('Correcto', 'Usuario agregado correctamente');

        // res.redirect("/users/");
        return res.status(200).send({     
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

usersCtrl.eliminarUsuario = (req, res) => {
    var id = req.params.id;

    if(!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingresó un ID del articulo'
        });
    }
    User.findOneAndDelete({_id: id}, (err, usuarioEliminado) => {
        if(err) {
            return res.status.send(500).send({
                status: 'Error',
                mensaje: 'Error, no se pudo eliminar el usuario'
            });
        }

        if(!usuarioEliminado) {
            return res.status(404).send({
                status: 'Error',
                mensaje: 'Error el usuario a eliminar no existe'
            });
        }

        return res.status(200).send({
            status: 'Registro eliminado con éxito',
            usuarioEliminado
        });
    });
}

usersCtrl.entrar = passport.authenticate('local', {
    failureRedirect: '/crear_cuenta',
    successRedirect: '/dashboard'
});

module.exports = usersCtrl;