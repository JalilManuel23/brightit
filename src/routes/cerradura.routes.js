const { Router } = require('express');
const router = Router();

const { agregarRegistro, verRegistros, verRegistro, editarRegistro, eliminarRegistro } = require('../controllers/cerradura.controller');

router.post('/cerradura/crear_registro', agregarRegistro);
router.get('/cerradura', verRegistros);
router.get('/cerradura/ver_registro/:id', verRegistro);
router.put('/cerradura/editar_registro/:id', editarRegistro);
router.delete('/cerradura/eliminar_registro/:id', eliminarRegistro);

module.exports = router;