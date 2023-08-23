const express = require('express');
const userController = require('../controllers/user.controller');

// Crea un enrutador utilizando Express
const router = express.Router();

// Ruta para crear un nuevo usuario
router.post('/', userController.createUser);

// Ruta para obtener todos los usuarios
router.get('/', userController.getUsers);

// Exporta el enrutador 
module.exports = router;
