const { Router } = require('express');
const router = Router();

const { agregarUsuario, verUsuarios } = require('../controllers/users.controller');

router.get('/usuarios', verUsuarios);
router.post('/usuarios/crear_cuenta', agregarUsuario);

module.exports = router;
