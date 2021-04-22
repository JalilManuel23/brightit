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
    actualizarUsuario,
    eliminarUsuario,
    verificarCodigo
} = require('../controllers/alarma.controller');

router.put('/alarma/actualizar_horas', actualizarHoras);
router.get('/alarma/ver_registro', verRegistro);
router.get('/alarma/ver_codigo', verCodigo);
router.put('/alarma/cambiar_codigo', cambiarCodigo);               

router.post('/alarma/agregar_usuario', agregarUsuario);
router.get('/alarma/ver_datos_usuarios', verUsuarios);
router.put('/alarma/actualizar_contador/:idUsuario', actualizarContador);
router.put('/alarma/actualizar_usuario/:idUsuario', actualizarUsuario);
router.delete('/alarma/eliminar_usuario/:idUsuario', eliminarUsuario);
router.get('/alarma/verificar_codigo/:codigo', verificarCodigo);

module.exports = router;