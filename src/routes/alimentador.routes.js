const { Router } = require('express');
const router = Router();

const { agregarRegistro, verRegistros, verRegistro, editarRegistro } = require('../controllers/alimentador.controller');

router.post('/alimentador/crear_registro', agregarRegistro);
router.get('/alimentador', verRegistros);
router.get('/alimentador/ver_registro/:id', verRegistro);
router.put('/alimentador/editar_registro/:id', editarRegistro);

module.exports = router;
