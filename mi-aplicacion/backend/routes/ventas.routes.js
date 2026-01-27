// ===============================
// Rutas para la entidad Ventas
// ===============================

const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventas.controller');

// GET /ventas → listar ventas
router.get('/', ventasController.getVentas);

// POST /ventas → crear venta
router.post('/', ventasController.createVenta);

module.exports = router;
