const {
    Router
} = require('express');
const router = Router();

const {
    agregarRegistro,
    verRegistros,
    verRegistro,
    editarRegistro,
    eliminarRegistro,
    buscarCodigo
} = require('../controllers/empleados.controller');

router.post('/empleados/crear_registro', agregarRegistro);
router.get('/empleados', verRegistros);
router.get('/empleados/ver_registro/:id', verRegistro);
router.get('/empleados/buscar_codigo/:pinEmpleado', buscarCodigo);
router.put('/empleados/editar_registro/:id', editarRegistro);
router.delete('/empleados/eliminar_registro/:id', eliminarRegistro);

module.exports = router;