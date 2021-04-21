const usersCtrl = {};

const User = require('../models/User');
var validacion = require('validator');
const passport = require('passport');
var nodemailer = require('nodemailer');
var fs = require('fs'); //trabajar con archivos o gestionar los files
var path = require('path'); //trabajar con la ruta de los archivos

usersCtrl.agregarUsuario = async (req, res) => {
    var params = req.body;

    var newUser = new User();

    newUser.name = params.name;
    newUser.email = params.email;
    newUser.password = params.password;
    newUser.image = null;

    console.log(newUser);

    let pass = params.password;

    newUser.password = await newUser.encryptPassword(pass);

    newUser.save((err, usuarioAgregado) => {

        if (err || !usuarioAgregado) {
            return res.status(505).send({
                status: 'error',
                mensaje: 'El usuario no se ha guardado'
            })
        }

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
        if (err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver usuarios'
            });
        }

        if (!usuarios) {
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

usersCtrl.cargarDatos = (req, res) => {
    var email = req.params.email;

    if (!email || email == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingreso email de usuario a buscar'
        });
    }

    User.find({
        email
    }, (err, usuario) => {
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
    } catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (validar_name && validar_email) {
        User.findOneAndUpdate({
            _id: id
        }, params, {
            new: true
        }, (err, usuarioActualizado) => {

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
    } else {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Los datos no son validos verifique por favor'
        })
    }
}

usersCtrl.eliminarUsuario = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingresó un ID del articulo'
        });
    }
    User.findOneAndDelete({
        _id: id
    }, (err, usuarioEliminado) => {
        if (err) {
            return res.status.send(500).send({
                status: 'Error',
                mensaje: 'Error, no se pudo eliminar el usuario'
            });
        }

        if (!usuarioEliminado) {
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

usersCtrl.entrar = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        console.log('/login handler', req.body);
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(500).json({
                error: 'User not found.'
            });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({
                success: true
            });
        });
    })(req, res, next);
}


usersCtrl.agregarProducto = (req, res) => {
    var id = req.params.id;

    var params = req.body;
    console.log(params);
    User.findOneAndUpdate({
        _id: id
    }, params, {
        new: true
    }, (err, usuarioActualizado) => {

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

usersCtrl.verificarLogged = (req, res) => {
    if (req.isAuthenticated()) {
        next();
        res.send({
            user: req.user
        });
    } else {
        res.redirect("/login");
    }
}

usersCtrl.logout = (req, res) => {
    req.logout();

    if (req.isAuthenticated()) {
        next();
    } else {
        return res.status(200).send({
            'status': 'No ha iniciado sesión'
        });
    }
}

usersCtrl.isLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log('NO');
        return res.status(505).send({
            'status': 'No ha iniciado sesión'
        });
    }
}

usersCtrl.subirFoto = (req, res) => {
    var nombre_archivo = 'Imagen no subida ...';

    console.log(req.files.image);
    var ruta_archivo = req.files.image.path;
    if (!req.files) {
        return res.status(404).send({
            status: 'error',
            message: nombre_archivo
        });
    }

    var nombre_split = ruta_archivo.split('\\');

    nombre_archivo = nombre_split[3];

    var extension_split = nombre_archivo.split('.'); //arreglo 
    var extencion_archivo = extension_split[1];

    if (extencion_archivo == 'jpg' || extencion_archivo == 'jpeg' || extencion_archivo == 'png' || extencion_archivo == 'gif') {
        var idUsuario = req.params.id;

        User.findOneAndUpdate({
            _id: idUsuario
        }, {
            image: nombre_archivo
        }, {
            new: true
        }, (err, usuarioActualizado) => {
            if (err || !usuarioActualizado) {
                return res.status(200).send({
                    status: 'error',
                    message: 'Error al guardar la imagen del usuario ...'
                });
            }

            return res.status(200).send({
                status: 'exitosa',
                usuarioActualizado
            });
        })
    } else {
        fs.unlink(ruta_archivo, (err) => {
            return res.status(404).send({
                status: 'error',
                message: 'La extencion de la imagen no es valida'
            });
        });
    }
}

usersCtrl.sacarImagen = (req, res) => {
    var archivo = req.params.image;
    var ruta_archivo = './backend/upload/images/' + archivo;

    fs.exists(ruta_archivo, (existe) => {

        if (existe) {
            return res.sendFile(path.resolve(ruta_archivo));
        } else {
            return res.status(404).send({
                status: 'error',
                mensaje: 'Error la imagen no existe en la ruta especificada'
            })
        }
    });
}

usersCtrl.enviarMail = (req, res) => {
    var params = req.body;

    var nombre = params.nombre;
    var email = params.email;
    var mensaje = params.mensaje;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com ',
        port: 465,
        service: 'gmail',
        auth: {
            user: 'bright.it.utd@gmail.com',
            pass: 'brightit'
        }
    });


    var mailOptions = {
        from: email,
        to: 'bright.it.utd@gmail.com',
        subject: `Mensaje de ${email}`,
        text: `${nombre} ha enviado: ${mensaje}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(404).send({
                status: 'error',
                mensaje: 'Error al enviar correo'
            });
        } else {
            return res.status(200).send({
                status: 'exitosa',
                info: info.response
            });
        }
    });
}

module.exports = usersCtrl;