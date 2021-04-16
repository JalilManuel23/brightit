const {
    Router
} = require('express');
const router = Router();

const {
    agregarRegistro,
    verRegistros,
    verRegistro,
    editarRegistro,
    eliminarRegistro,
    registrarPorcion,
    obtenerPorciones,
    agregarHora,
    verHoras,
    editarHora,
    eliminarHora,
    reiniciarPorciones,
    servir
} = require('../controllers/alimentador.controller');

router.post('/alimentador/crear_registro', agregarRegistro);
router.put('/alimentador/servir/:id', servir);
router.get('/alimentador', verRegistros);
router.get('/alimentador/ver_registro/:id', verRegistro);
router.put('/alimentador/editar_registro/:id', editarRegistro);
router.put('/alimentador/reiniciar_porciones/:id', reiniciarPorciones);
router.delete('/alimentador/eliminar_registro/:id', eliminarRegistro);

router.post('/alimentador/agregar_porcion', registrarPorcion);
router.get('/alimentador/obtener_porciones', obtenerPorciones);

router.post('/alimentador/agregar_hora', agregarHora);
router.get('/alimentador/ver_horas', verHoras);
router.put('/alimentador/editar_hora/:id', editarHora);
router.delete('/alimentador/eliminar_hora/:id', eliminarHora);

module.exports = router;