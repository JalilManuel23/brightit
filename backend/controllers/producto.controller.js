const ctrlProducto = {};

const Producto = require('../models/Producto');
var validacion = require('validator');
var fs = require('fs'); //trabajar con archivos o gestionar los files
var path = require('path'); //trabajar con la ruta de los archivos

ctrlProducto.agregarRegistro = async (req, res) => {
    const {id, nombre, descripcion, precio} = req.body;

    const newRegistro = new Producto({id, nombre, descripcion, precio});

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

ctrlProducto.subirFoto = (req, res) => {
    var nombre_archivo = 'Imagen no subida ...';

    console.log(req);
    var ruta_archivo = req.files.imagen.path;
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
        var idProducto = req.params.id;

        Producto.findOneAndUpdate({
            _id: idProducto
        }, {
            imagen: nombre_archivo
        }, {
            new: true
        }, (err, productoActualizado) => {
            if (err || !productoActualizado) {
                return res.status(200).send({
                    status: 'error',
                    message: 'Error al guardar la imagen del usuario ...'
                });
            }

            return res.status(200).send({
                status: 'exitosa',
                productoActualizado
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

ctrlProducto.sacarImagen = (req, res) => {
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

ctrlProducto.verRegistros = (req, res) => {
    var consulta = Producto.find({});

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

ctrlProducto.verRegistro = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingreso ID de registro a buscar'
        });
    }

    Producto.findById(id, (err, registro) => {
        if (err || !registro) {
            return res.status(404).send({
                status: 'Error: ',
                mensaje: 'No existe el registro a buscar en la colección'
            })
        }

        return res.status(200).send({
            status: 'Busqueda del registro de forma exitosa',
            registro
        })
    });
}

// ctrlEmpleados.editarRegistro = (req, res) => {
//     var id = req.params.id;

//     var params = req.body;

//     try {
//         var nombre = !validacion.isEmpty(params.nombre);
//         var pinEmpleado = !validacion.isEmpty(params.pinEmpleado);
//         var horaIngreso = !validacion.isEmpty(params.horaIngreso);
//         var horaSalida = !validacion.isEmpty(params.horaSalida);
//     }
//     catch (err) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'Faltan datos por enviar ... verifique por favor'
//         })
//     }

//     if (nombre && pinEmpleado && horaIngreso && horaSalida) {
//         Empleado.findOneAndUpdate({ _id: id }, params, { new: true }, (err, registroActualizado) => {

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

// ctrlEmpleados.eliminarRegistro = (req, res) => {
//     var id = req.params.id;

//     if(!id || id == null) {
//         return res.status(404).send({
//             status: 'Error',
//             mensaje: 'No se ingresó un ID del registro'
//         });
//     }
    
//     Empleado.findOneAndDelete({_id: id}, (err, registroEliminado) => {
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

module.exports = ctrlProducto;