const {
    Router
} = require('express');
const router = Router();

const {
    agregarUsuario,
    verUsuarios,
    verUsuario,
    editarUsuario,
    eliminarUsuario,
    entrar,
    verificarLogged,
    logout,
    isLogged,
    cargarDatos
} = require('../controllers/users.controller');

router.post('/usuarios/crear_cuenta', agregarUsuario);
router.get('/usuarios', verUsuarios);
router.get('/usuarios/ver_usuario/:id', verUsuario);
router.put('/usuarios/editar_usuario/:id', editarUsuario);
router.delete('/usuarios/eliminar_usuario/:id', eliminarUsuario);
router.post('/usuarios/entrar', entrar);
router.get('/dashboard', verificarLogged);
router.get('/opciones', verificarLogged);
router.get('/usuarios/logout', logout);
router.get('/usuarios/is_logged', isLogged);
router.get('/usuarios/cargar_datos/:email', cargarDatos);

module.exports = router;