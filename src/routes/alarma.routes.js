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
    actualizarContador,
    editarUsuario,
    eliminarUsuario,
} = require('../controllers/alarma.controller');

router.put('/alarma/actualizar_horas', actualizarHoras);
router.get('/alarma/ver_registro', verRegistro);
router.get('/alarma/ver_codigo', verCodigo);
router.put('/alarma/cambiar_codigo', cambiarCodigo);               

router.post('/alarma/agregar_usuario', agregarUsuario);
router.get('/alarma/ver_datos_usuarios', verUsuarios);
router.put('/alarma/actualizar_contador/:idUsuario', actualizarContador);
router.delete('/alarma/eliminar_usuario/:idUsuario', eliminarUsuario);

// router.post('/alarma/crear_registro', agregarRegistro);
// router.get('/alarma', verRegistros);
// router.put('/alarma/editar_registro/:id', editarRegistro);
// router.get('/alarma/numero_usos', obtenerNumeroUsos);

module.exports = router;