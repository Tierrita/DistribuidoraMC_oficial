// ===============================
// Rutas para la entidad Clientes
// ===============================

const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes.controller');

// GET /clientes → listar clientes
router.get('/', clientesController.getClientes);

// POST /clientes → crear cliente
router.post('/', clientesController.createCliente);

module.exports = router;
