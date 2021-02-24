const { Router } = require('express');
const router = Router();

const { agregarUsuario, verUsuarios, verUsuario, editarUsuario } = require('../controllers/users.controller');

router.post('/usuarios/crear_cuenta', agregarUsuario);
router.get('/usuarios', verUsuarios);
router.get('/usuarios/ver_usuario/:id', verUsuario);
router.put('/usuarios/editar_usuario/:id', editarUsuario);

module.exports = router;
