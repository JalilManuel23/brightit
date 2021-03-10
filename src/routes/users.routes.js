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
    dashboard,
    logout,
    isLogged
} = require('../controllers/users.controller');

router.post('/usuarios/crear_cuenta', agregarUsuario);
router.get('/usuarios', verUsuarios);
router.get('/usuarios/ver_usuario/:id', verUsuario);
router.put('/usuarios/editar_usuario/:id', editarUsuario);
router.delete('/usuarios/eliminar_usuario/:id', eliminarUsuario);
router.post('/usuarios/entrar', entrar);
router.get('/dashboard', dashboard);
router.get('/usuarios/logout', logout);
router.get('/usuarios/is_logged', isLogged);

module.exports = router;