const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

// Ruta principal
router.get('/', controller.index);

/// Rutas relacionadas con roles
router.use('/roles', require('./roles.routes'));

// Rutas relacionadas con habilidades
router.use('/skills', require('./skills.routes'));

// Rutas relacionadas con los usuarios
router.use('/users', require('./users.routes'));

// Rutas relacionadas con los trabajos
router.use('/jobs', require('./jobs.routes'));

module.exports = router;
