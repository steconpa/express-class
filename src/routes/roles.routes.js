const express = require('express');
const rolesController = require('../controllers/role.controller');

// Crea un enrutador utilizando Express
const router = express.Router();

// Ruta para crear un nuevo rol
router.post('/', rolesController.createRole);

// Ruta para obtener todos los roles
router.get('/', rolesController.getRoles);

// Exporta el enrutador 
module.exports = router;
