const { Router } = require('express');
const router = Router();

const { editarAlerta, editarActual, verUltimoRegistro, agregarRegistro, datosGrafica, verConfig } = require('../controllers/cerradura.controller');

router.put('/cerradura/actualizar_alerta', editarAlerta);
router.put('/cerradura/actualizar_temp_actual', editarActual);
router.get('/cerradura/ultimo_registro/:last', verUltimoRegistro);
router.get('/cerradura/datos_grafica/:last', datosGrafica);

router.post('/cerradura/crear_registro', agregarRegistro);
router.get('/cerradura/ver_registros_config/:id', verConfig);
// router.get('/cerradura', verRegistros);
// router.get('/cerradura/ver_registro/:id', verRegistro);
// router.put('/cerradura/editar_registro/:id', editarRegistro);
// router.delete('/cerradura/eliminar_registro/:id', eliminarRegistro);

module.exports = router;