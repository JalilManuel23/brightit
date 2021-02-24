const registrosAlimentador = {};

const Registro = require('../models/RegistrosAlimentador');
var validacion = require('validator');

registrosAlimentador.agregarRegistro = async (req, res) => {
    const {horaUltimoUso, numeroPorcion} = req.body;

    const newRegistro = new Registro({horaUltimoUso, numeroPorcion});

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

registrosAlimentador.verRegistros = (req, res) => {
    var consulta = Registro.find({});

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

registrosAlimentador.verRegistro = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingreso ID de registro a buscar'
        });
    }

    Registro.findById(id, (err, registro) => {
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

registrosAlimentador.editarRegistro = (req, res) => {
    var id = req.params.id;

    var params = req.body;

    try {
        var horaUltimoUso = !validacion.isEmpty(params.horaUltimoUso);
        var numeroPorcion = !validacion.isEmpty(params.numeroPorcion);
    }
    catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (horaUltimoUso && numeroPorcion) {
        Registro.findOneAndUpdate({ _id: id }, params, { new: true }, (err, registroActualizado) => {

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

module.exports = registrosAlimentador;