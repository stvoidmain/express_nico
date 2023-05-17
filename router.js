let express = require('express')
let router = express.Router();
let carritoController = require('./controllers/carritoController.js');

router.get('/carrito/:item', carritoController.agregarItem);

module.exports = router