const registrosAlarma = {};

// const RegistroAlarma = require('../models/RegistrosAlarma');
const ConfigAlarma = require('../models/ConfigAlarma');
const UserAlarma = require('../models/UserAlarma');
var validacion = require('validator');

registrosAlarma.actualizarHoras = async (req, res) => {
    var params = req.body;

    try {
        var horaActiva = !validacion.isEmpty(params.horaActiva);  
        var horaDesactivada = !validacion.isEmpty(params.horaDesactivada);  
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (horaActiva && horaDesactivada) {
        ConfigAlarma.findOneAndUpdate({ _id: "605fe9ebdba0045904d35d1c" }, params, { new: true }, (err, registroActualizado) => {

            if (err) {
                return res.status(404).send({
                    status: 'Error',
                    mensaje: 'Error al actualizar'
                })
            }

            if (!registroActualizado) {
                return res.status(404).send({
                    status: 'Error',
                    mensaje: 'No existe el registro a actualizar'
                })
            }

            return res.status(200).send({
                status: 'Registro Actualizado con éxito',
                registroActualizado
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

registrosAlarma.cambiarCodigo = (req, res) => {
    var params = req.body;

    try {
        var codigo = !validacion.isEmpty(params.codigo);
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (codigo) {
        ConfigAlarma.findOneAndUpdate({ _id: "605fe9ebdba0045904d35d1c" }, params, { new: true }, (err, registroActualizado) => {

            if (err) {
                return res.status(404).send({
                    status: 'Error',
                    mensaje: 'Error al actualizar'
                })
            }

            if (!registroActualizado) {
                return res.status(404).send({
                    status: 'Error',
                    mensaje: 'No existe el registro a actualizar'
                })
            }

            return res.status(200).send({
                status: 'Registro Actualizado con éxito',
                registroActualizado
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


 registrosAlarma.verRegistro = (req, res) => {
    var consulta = ConfigAlarma.find({});

    consulta.exec((err, registros) => {
        if(err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver registros'
            });
        }

        if(!registros) {
            return res.status(404).send({
                // Error
                status: 'Error',
                mensaje: 'No existen registros en la colección'
            });
        }

        return res.status(200).send({
            // Registros consultados con éxito
            status: 'Busqueda Correcta',
            registros
        });
    });
 }

 registrosAlarma.verCodigo = (req, res) => {
    var consulta = ConfigAlarma.find({});

    consulta.exec((err, registros) => {
        if(err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver registros'
            });
        }

        if(!registros) {
            return res.status(404).send({
                // Error
                status: 'Error',
                mensaje: 'No existen registros en la colección'
            });
        }

        return res.status(200).send({
            // Registros consultados con éxito
            status: 'Busqueda Correcta',
            registros
        });
    });
 }

registrosAlarma.agregarUsuario = async (req, res) => {
    const {idUsuario, nombre, contador} = req.body;

    const newRegistro = new UserAlarma({idUsuario, nombre, contador});

    await newRegistro.save((err, registroAgregado) => {

        if (err || !registroAgregado) {
            return res.status(404).send({
                status: 'error',
                mensaje: 'El registro no se ha guardado'
            })
        }

        return res.status(200).send({
            //Registro insertado con exito 
            status: 'Completado',
            registroAgregado
        });
    });
}

registrosAlarma.verUsuarios = (req, res) => {
    var consulta = UserAlarma.find({});

    consulta.exec((err, registros) => {
        if(err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver registros'
            });
        }

        if(!registros) {
            return res.status(404).send({
                // Error
                status: 'Error',
                mensaje: 'No existen registros en la colección'
            });
        }

        return res.status(200).send({
            // Registros consultados con éxito
            status: 'Busqueda Correcta',
            registros
        });
    });
}

// registrosAlarma.verRegistro = (req, res) => {
//     RegistroAlarma.find({},(err, registro) => {
//         if (err || !registro) {
//             return res.status(404).send({
//                 status: 'Error: ',
//                 mensaje: 'No existe el registro a buscar en la colección'
//             })
//         }

//         return res.status(200).send({
//             status: 'Busqueda del registro de forma exitosa',
//             registro
//         })
//     }).sort({_id: -1}).limit(1);
// }

// registrosAlarma.editarRegistro = (req, res) => {
//     var id = req.params.id;

//     var params = req.body;

//     try {
//         var horaActiva = !validacion.isEmpty(params.horaActiva);
//         var horaDesactivada = !validacion.isEmpty(params.horaDesactivada);
//     }
//     catch (err) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'Faltan datos por enviar ... verifique por favor'
//         })
//     }

//     if (horaActiva && horaDesactivada) {
//         RegistroAlarma.findOneAndUpdate({ _id: id }, params, { new: true }, (err, registroActualizado) => {

//             if (err) {
//                 return res.status(404).send({
//                     status: 'Error',
//                     mensaje: 'Error al actualizar'
//                 })
//             }

//             if (!registroActualizado) {
//                 return res.status(404).send({
//                     status: 'Error',
//                     mensaje: 'No existe el registro a actualizar'
//                 })
//             }

//             return res.status(200).send({
//                 status: 'Registro Actualizado con éxito',
//                 registroActualizado
//             })
//         });
//     }
//     else {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'Los datos no son validos verifique por favor'
//         })
//     }
// }

// registrosAlarma.eliminarRegistro = (req, res) => {
//     var id = req.params.id;

//     if(!id || id == null) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'No se ingresó un ID del registro'
//         });
//     }
    
//     RegistroAlarma.findOneAndDelete({_id: id}, (err, registroEliminado) => {
//         if(err) {
//             return res.status.send(500).send({
//                 status: 'Error',
//                 mensaje: 'Error, no se pudo eliminar el registro'
//             });
//         }

//         if(!registroEliminado) {
//             return res.status(404).send({
//                 status: 'Error',
//                 mensaje: 'Error el registro a eliminar no existe'
//             });
//         }

//         return res.status(200).send({
//             status: 'Registro eliminado con éxito',
//             registroEliminado
//         });
//     });
// }

// registrosAlarma.obtenerNumeroUsos = (req, res) => { 
//     let usuarios = [];
//     let valores = [];

//     RegistroAlarma.aggregate([
//         {
//             $group: {
//                 _id: "$usuario",
//                 count: {
//                     $sum: 1
//                 }
//             }
//         }
//     ], (err, registros) => {
//         if(err) {
//             res.status(404).send({
//                 'status': 'ERROR'
//             });
//         }

//         registros.map((registro) => {
//             usuarios.push(registro._id);
//             valores.push(registro.count);
//         });

//         res.status(200).send({usuarios, valores});
//     })
// }

module.exports = registrosAlarma;