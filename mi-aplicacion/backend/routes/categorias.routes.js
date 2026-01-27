// ===============================
// Rutas para la entidad Categorias
// ===============================

const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');

// GET /categorias → listar categorías
router.get('/', categoriasController.getCategorias);

// POST /categorias → crear categoría
router.post('/', categoriasController.createCategoria);

module.exports = router;
