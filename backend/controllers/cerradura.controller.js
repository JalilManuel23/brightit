const registrosCerradura = {};

const RegistroCerradura = require('../models/RegistrosCerradura');
const ConfigCerradura = require('../models/ConfigCerradura');
var validacion = require('validator');

registrosCerradura.editarAlerta = (req, res) => {
    var params = req.body;

    try {
        var temperaturaAlerta = !validacion.isEmpty(params.temperaturaAlerta);
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (temperaturaAlerta) {
        ConfigCerradura.findOneAndUpdate({ _id: "60612f232cce824434e9c674" }, params, { new: true }, (err, registroActualizado) => {

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

registrosCerradura.editarActual = (req, res) => {
    var id = req.params.id;

    var params = req.body;

    try {
        var temperaturaActual = !validacion.isEmpty(params.temperaturaActual);
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (temperaturaActual) {
        ConfigCerradura.findOneAndUpdate({ _id: "60612f232cce824434e9c674" }, params, { new: true }, (err, registroActualizado) => {

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

registrosCerradura.verRegistrosConfig = (req, res) => {
    var consulta = ConfigCerradura.find({});

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

registrosCerradura.agregarRegistro = async (req, res) => {
    const {temperaturaRegistrada, horaRegistro} = req.body;

    const newRegistro = new RegistroCerradura({temperaturaRegistrada, horaRegistro});

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

// registrosCerradura.verRegistros = (req, res) => {
//     var consulta = RegistroCerradura.find({});

//     consulta.exec((err, registros) => {
//         if(err) {
//             return res.status(500).send({
//                 // Error
//                 status: 'Error',
//                 mensaje: 'Error al devolver registros'
//             });
//         }

//         if(!registros) {
//             return res.status(404).send({
//                 // Error
//                 status: 'Error',
//                 mensaje: 'No existen registros en la colección'
//             });
//         }

//         return res.status(200).send({
//             // Registros consultados con éxito
//             status: 'Busqueda Correcta',
//             registros
//         });
//     });
// }

// registrosCerradura.verRegistro = (req, res) => {
//     var id = req.params.id;

//     if (!id || id == null) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'No se ingreso ID de registro a buscar'
//         });
//     }

//     RegistroCerradura.findById(id, (err, registro) => {
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
//     });
// }

// registrosCerradura.editarRegistro = (req, res) => {
//     var id = req.params.id;

//     var params = req.body;

//     try {
//         var temperaturaRegistrada = !validacion.isEmpty(params.temperaturaRegistrada);
//         var horaRegistro = !validacion.isEmpty(params.horaRegistro);
//     }
//     catch (err) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'Faltan datos por enviar ... verifique por favor'
//         })
//     }

//     if (temperaturaRegistrada && horaRegistro) {
//         RegistroCerradura.findOneAndUpdate({ _id: id }, params, { new: true }, (err, registroActualizado) => {

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

// registrosCerradura.eliminarRegistro = (req, res) => {
//     var id = req.params.id;

//     if(!id || id == null) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'No se ingresó un ID del registro'
//         });
//     }
    
//     RegistroCerradura.findOneAndDelete({_id: id}, (err, registroEliminado) => {
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

module.exports = registrosCerradura;