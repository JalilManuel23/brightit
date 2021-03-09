const comprasCtrl = {};

var validacion = require('validator');

comprasCtrl.agregarCompra = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    } else {
        console.log('NO');
        return res.status(505).send({
            'status': 'No ha iniciado sesión'
        });
    }
}

module.exports = comprasCtrl;