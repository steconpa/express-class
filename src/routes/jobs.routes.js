const express = require('express');
const jobController = require('../controllers/job.controller');

// Crea un enrutador utilizando Express
const router = express.Router();

// Ruta para crear un nuevo trabajo
router.post('/', userController.createJob);

// Ruta para obtener todos los trabajos creados por el usuario reclutador
router.get('/', userController.getJobs);

// Exporta el enrutador 
module.exports = router;
