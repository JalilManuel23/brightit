const { Router } = require('express');
const router = Router();

const { agregarRegistro, subirFoto, sacarImagen, verRegistros, verRegistro } = require('../controllers/producto.controller');

var multipart=require('connect-multiparty');
var mdUpload=multipart({uploadDir:'./backend/upload/images'});

router.post('/producto/crear_registro', agregarRegistro);
router.put('/producto/cargar_imagen/:id',mdUpload, subirFoto);
router.get('/producto/sacar_imagen/:image', sacarImagen);
router.get('/productos/obtener_datos', verRegistros);
router.get('/producto/obtener_datos/:id', verRegistro);

module.exports = router;