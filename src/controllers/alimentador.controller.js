const registrosAlimentador = {};

const Registro = require('../models/RegistrosAlimentador');
const RegistroPorcion = require('../models/RegistroPorcion');
const RegistroHora = require('../models/ConfigAlimentador');

var validacion = require('validator');

registrosAlimentador.servir = (req, res) => {
    var id = req.params.id;

    var params = req.body;
    console.log(params);
    try {
        var servir = !validacion.isEmpty(params.servir);
    } catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (servir) {
        Registro.findOneAndUpdate({
            _id: id
        }, params, {
            new: true
        }, (err, registroActualizado) => {
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
    } else {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Los datos no son validos verifique por favor'
        })
    }
}

registrosAlimentador.agregarRegistro = async (req, res) => {
    const {
        horaUltimoUso,
        numeroPorcion
    } = req.body;

    const newRegistro = new Registro({
        horaUltimoUso,
        numeroPorcion
    });

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
        if (err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver registros'
            });
        }

        if (!registros) {
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
    console.log(id);

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

    Registro.findOneAndUpdate({
        _id: id
    }, params, {
        new: true
    }, (err, registroActualizado) => {

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

registrosAlimentador.eliminarRegistro = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingresó un ID del registro'
        });
    }

    Registro.findOneAndDelete({
        _id: id
    }, (err, registroEliminado) => {
        if (err) {
            return res.status.send(500).send({
                status: 'Error',
                mensaje: 'Error, no se pudo eliminar el registro'
            });
        }

        if (!registroEliminado) {
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

registrosAlimentador.registrarPorcion = async (req, res) => {
    var date = new Date();
    var numMes = date.getMonth();
    var mes = '';

    switch (numMes) {
        case 0: {
            mes = 'Enero';
        }
        break;
    case 1: {
        mes = 'Febrero';
    }
    break;
    case 2: {
        mes = 'Marzo';
    }
    break;
    case 3: {
        mes = 'Abril';
    }
    break;
    case 4: {
        mes = 'Mayo';
    }
    break;
    case 5: {
        mes = 'Junio';
    }
    break;
    case 6: {
        mes = 'Julio';
    }
    break;
    case 7: {
        mes = 'Agosto';
    }
    break;
    case 8: {
        mes = 'Septiembre';
    }
    break;
    case 9: {
        mes = 'Octubre';
    }
    break;
    case 10: {
        mes = 'Noviembre';
    }
    break;
    case 11: {
        mes = 'Diciembre';
    }
    break;
    }

    const newRegistro = new RegistroPorcion({
        mes
    });

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

registrosAlimentador.obtenerPorciones = async (req, res) => {
    let meses = [];
    let valores = [];

    RegistroPorcion.aggregate([{
        $group: {
            _id: "$mes",
            count: {
                $sum: 1
            }
        }
    }], (err, registros) => {
        if (err) {
            res.status(404).send({
                'status': 'ERROR'
            });
        }

        registros.map((registro) => {
            meses.push(registro._id);
            valores.push(registro.count);
        });

        res.status(200).send({
            meses,
            valores
        });
    })
}

registrosAlimentador.reiniciarPorciones = (req, res) => {
    var id = req.params.id;

    var params = req.body;

    try {
        var numeroPorcion = !validacion.isEmpty(params.numeroPorcion);
    } catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (numeroPorcion) {
        Registro.findOneAndUpdate({
            _id: id
        }, params, {
            new: true
        }, (err, registroActualizado) => {
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
    } else {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Los datos no son validos verifique por favor'
        })
    }
}

registrosAlimentador.agregarHora = async (req, res) => {
    const {
        hora
    } = req.body;

    const newRegistro = new RegistroHora({
        hora
    });

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

registrosAlimentador.verHoras = (req, res) => {
    var consulta = RegistroHora.find({});

    consulta.exec((err, registros) => {
        if (err) {
            return res.status(500).send({
                // Error
                status: 'Error',
                mensaje: 'Error al devolver registros'
            });
        }

        if (!registros) {
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

registrosAlimentador.editarHora = (req, res) => {
    var id = req.params.id;

    var params = req.body;

    try {
        var hora = !validacion.isEmpty(params.hora);
    } catch (err) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Faltan datos por enviar ... verifique por favor'
        })
    }

    if (hora) {
        RegistroHora.findOneAndUpdate({
            _id: id
        }, params, {
            new: true
        }, (err, registroActualizado) => {
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
    } else {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'Los datos no son validos verifique por favor'
        })
    }
}

registrosAlimentador.eliminarHora = (req, res) => {
    var id = req.params.id;

    if (!id || id == null) {
        return res.status(404).send({
            status: 'Error',
            mensaje: 'No se ingresó un ID del registro'
        });
    }

    RegistroHora.findOneAndDelete({
        _id: id
    }, (err, registroEliminado) => {
        if (err) {
            return res.status.send(500).send({
                status: 'Error',
                mensaje: 'Error, no se pudo eliminar el registro'
            });
        }

        if (!registroEliminado) {
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

module.exports = registrosAlimentador;