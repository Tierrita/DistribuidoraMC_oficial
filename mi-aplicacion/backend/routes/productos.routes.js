// ===============================
// Rutas para la entidad Productos
// ===============================

const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

// GET /productos → listar productos
router.get('/', productosController.getProductos);

// POST /productos → crear producto
router.post('/', productosController.createProducto);

module.exports = router;
