// Importa el modelo User desde models/index.js
const { User, Job } = require('../models');

/**
 * Obtiene todos los trabajos relacionados con el usuario reclutador.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
async function getJobs(req, res) {
    try {
        // Busca y obtiene todos los trabajos creados por el usuario reclutador
        const jobs = await Job.findAll({
            include: [
                {
                    model: User,
                    as: 'recluter'
                },
            ]
        });

        // Responde con los usuarios en formato JSON
        res.json(jobs);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al obtener los trabajos:', error);
        res.status(500).send('Error al obtener los trabajos');
    }
}

/**
 * Crea un nuevo trabajo.
 * @param {Object} req - Objeto de solicitud con el cuerpo (body) que contiene el parametros del usuario.
 * @param {Object} res - Objeto de respuesta.
 */
async function createJob(req, res) {
    try {
        const { recluter_id, tittle, max_hourly_rate, open, description } = req.body;

        // Verifica si el usuario con recluter_id tiene el rol de "reclutador"
        const recluterUser = await User.findOne({
            where: {
                id: recluter_id,
                role_id: 'reclutador'
            }
        });

        if (!recluterUser) {
            // Si el usuario no tiene el rol de "reclutador", responde con un mensaje de error
            return res.status(400).json({ error: 'El usuario no tiene el rol de reclutador' });
        }

        // Si el usuario cumple con la validación, crea un nuevo trabajo en la base de datos
        const newJob = await Job.create({ recluter_id, tittle, max_hourly_rate, open, description });

        // Responde con el nuevo usuario creado en formato JSON
        res.json(newJob);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al crear el trabajo:', error);
        res.status(500).send('Error al crear el trabajo');
    }
}

// Exporta todos los controladores
module.exports = {
    getJobs,
    createJob
};
