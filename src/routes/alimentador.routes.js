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
    obtenerPorciones
} = require('../controllers/alimentador.controller');

router.post('/alimentador/crear_registro', agregarRegistro);
router.get('/alimentador', verRegistros);
router.get('/alimentador/ver_registro/:id', verRegistro);
router.put('/alimentador/editar_registro/:id', editarRegistro);
router.delete('/alimentador/eliminar_registro/:id', eliminarRegistro);

router.post('/alimentador/agregar_porcion', registrarPorcion);
router.get('/alimentador/obtener_porciones', obtenerPorciones);

module.exports = router;