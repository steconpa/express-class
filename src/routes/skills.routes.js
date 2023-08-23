const express = require('express');
const skillController = require('../controllers/skill.controller');

// Crea un enrutador utilizando Express
const router = express.Router();

// Ruta para crear una nueva habilidad
router.post('/', skillController.createSkill);

// Ruta para obtener todos las habilidades
router.get('/', skillController.getSkills);

// Exporta el enrutador 
module.exports = router;
