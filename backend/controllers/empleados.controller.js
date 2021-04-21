const ctrlEmpleados = {};

const Empleado = require('../models/Empleado');
var validacion = require('validator');

ctrlEmpleados.agregarRegistro = async (req, res) => {
    const {nombre, pinEmpleado, horaIngreso, horaSalida} = req.body;

    const newRegistro = new Empleado({nombre, pinEmpleado, horaIngreso, horaSalida});

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

ctrlEmpleados.verRegistros = (req, res) => {
    var consulta = Empleado.find({});

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

ctrlEmpleados.verRegistro = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingreso ID de registro a buscar'
        });
    }

    Empleado.findById(id, (err, registro) => {
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

ctrlEmpleados.buscarCodigo = (req, res) => {
    var pinEmpleado = req.params.pinEmpleado;

    if (!pinEmpleado || pinEmpleado == null) {
        return res.status(404).send({
            status: 'error',
            mensaje: 'No se ingreso ID de registro a buscar'
        });
    }

    Empleado.findOne(({"pinEmpleado": pinEmpleado}), (err, registro) => {
        if (err || !registro) {
            return res.status(404).send({
                status: 'error',
                mensaje: 'No existe el registro a buscar en la colección'
            })
        }

        return res.status(200).send({
            status: 'exitosa',
            registro
        })
    });
}

ctrlEmpleados.editarRegistro = (req, res) => {
    var id = req.params.id;

    var params = req.body;

    try {
        var nombre = !validacion.isEmpty(params.nombre);
        var pinEmpleado = !validacion.isEmpty(params.pinEmpleado);
        var horaIngreso = !validacion.isEmpty(params.horaIngreso);
        var horaSalida = !validacion.isEmpty(params.horaSalida);
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (nombre && pinEmpleado && horaIngreso && horaSalida) {
        Empleado.findOneAndUpdate({ _id: id }, params, { new: true }, (err, registroActualizado) => {

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

ctrlEmpleados.eliminarRegistro = (req, res) => {
    var id = req.params.id;

    if(!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingresó un ID del registro'
        });
    }
    
    Empleado.findOneAndDelete({_id: id}, (err, registroEliminado) => {
        if(err) {
            return res.status.send(500).send({
                status: 'Error',
                mensaje: 'Error, no se pudo eliminar el registro'
            });
        }

        if(!registroEliminado) {
            return res.status(404).send({
                status: 'Error',
                mensaje: 'Error el registro a eliminar no existe'
            });
        }

        return res.status(200).send({
            status: 'Registro eliminado con éxito',
            registroEliminado
        });
    });
}

module.exports = ctrlEmpleados;