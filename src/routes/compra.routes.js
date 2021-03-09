const { Router } = require('express');
const router = Router();

const { agregarCompra } = require('../controllers/compra.controller');

router.get('/compra/agregarCompra', agregarCompra);

module.exports = router;