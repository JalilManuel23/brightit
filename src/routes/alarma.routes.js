const { Router } = require('express');
const router = Router();

const { agregarRegistro, verRegistros, verRegistro, editarRegistro, eliminarRegistro } = require('../controllers/alarma.controller');

router.post('/alarma/crear_registro', agregarRegistro);
router.get('/alarma', verRegistros);
router.get('/alarma/ver_registro', verRegistro);
router.put('/alarma/editar_registro/:id', editarRegistro);
router.delete('/alarma/eliminar_registro/:id', eliminarRegistro);

module.exports = router;
