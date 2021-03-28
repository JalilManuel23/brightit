const {
    Router
} = require('express');
const router = Router();

const {
    actualizarHoras,
    verRegistro,
    agregarUsuario,
    verUsuarios,
    cambiarCodigo,
    verCodigo,
    agregarRegistro,
    verRegistros,
    editarRegistro,
    eliminarRegistro,
    obtenerNumeroUsos,
} = require('../controllers/alarma.controller');

router.put('/alarma/actualizar_horas', actualizarHoras);
router.get('/alarma/ver_registro', verRegistro);
router.get('/alarma/ver_codigo', verCodigo);
router.put('/alarma/cambiar_codigo', cambiarCodigo);               

router.post('/alarma/agregar_usuario', agregarUsuario);
router.get('/alarma/ver_datos_usuarios', verUsuarios);
// router.post('/alarma/crear_registro', agregarRegistro);
// router.get('/alarma', verRegistros);
// router.put('/alarma/editar_registro/:id', editarRegistro);
// router.delete('/alarma/eliminar_registro/:id', eliminarRegistro);
// router.get('/alarma/numero_usos', obtenerNumeroUsos);

module.exports = router;