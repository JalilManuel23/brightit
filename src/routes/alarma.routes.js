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
    obtenerNumeroUsos,
    cambiarCodigo,
    verCodigo
} = require('../controllers/alarma.controller');

router.post('/alarma/crear_registro', agregarRegistro);
router.get('/alarma', verRegistros);
router.get('/alarma/ver_registro', verRegistro);
router.put('/alarma/editar_registro/:id', editarRegistro);
router.delete('/alarma/eliminar_registro/:id', eliminarRegistro);
router.get('/alarma/numero_usos', obtenerNumeroUsos);
router.put('/alarma/cambiar_codigo', cambiarCodigo);
router.get('/alarma/ver_codigo', verCodigo);

module.exports = router;