const { Router } = require('express');
const router = Router();

const { editarAlerta, editarActual, verRegistrosConfig, agregarRegistro } = require('../controllers/cerradura.controller');

router.put('/cerradura/actualizar_alerta', editarAlerta);
router.put('/cerradura/actualizar_temp_actual', editarActual);
router.get('/cerradura/ver_registros_config', verRegistrosConfig);

router.post('/cerradura/crear_registro', agregarRegistro);
// router.get('/cerradura', verRegistros);
// router.get('/cerradura/ver_registro/:id', verRegistro);
// router.put('/cerradura/editar_registro/:id', editarRegistro);
// router.delete('/cerradura/eliminar_registro/:id', eliminarRegistro);

module.exports = router;