const registrosAlarma = {};

const RegistroAlarma = require('../models/RegistrosAlarma');
var validacion = require('validator');

registrosAlarma.agregarRegistro = async (req, res) => {
    const {horaActiva, horaDesactivada} = req.body;

    const newRegistro = new RegistroAlarma({horaActiva, horaDesactivada});

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

registrosAlarma.verRegistros = (req, res) => {
    var consulta = RegistroAlarma.find({});

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

registrosAlarma.verRegistro = (req, res) => {
    RegistroAlarma.find({},(err, registro) => {
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
    }).sort({_id: -1}).limit(1);
}

registrosAlarma.editarRegistro = (req, res) => {
    var id = req.params.id;

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
        RegistroAlarma.findOneAndUpdate({ _id: id }, params, { new: true }, (err, registroActualizado) => {

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

registrosAlarma.eliminarRegistro = (req, res) => {
    var id = req.params.id;

    if(!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingresó un ID del registro'
        });
    }
    
    RegistroAlarma.findOneAndDelete({_id: id}, (err, registroEliminado) => {
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

module.exports = registrosAlarma;