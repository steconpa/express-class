// Importa el modelo Role desde models/index.js
const { Skill } = require('../models');

/**
 * Obtiene todas las habilidades.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
async function getSkills(req, res) {
    try {
        // Busca y obtiene todos las habilidades en la base de datos
        const skills = await Skill.findAll();

        // Responde con las habilidades en formato JSON
        res.json(skills);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al obtener las habilidades:', error);
        res.status(500).send('Error al obtener las habilidades');
    }
}

/**
 * Crea una nueva habilidad.
 * @param {Object} req - Objeto de solicitud con el cuerpo (body) que contiene el nombre de la habilidad.
 * @param {Object} res - Objeto de respuesta.
 */
async function createSkill(req, res) {
    try {
        const { name } = req.body;

        // Crea un nuevo rol en la base de datos utilizando el modelo Skill
        const newSkill = await Skill.create({ name });

        // Responde con la nueva habiliad creada en formato JSON
        res.json(newSkill);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al crear el rol:', error);
        res.status(500).send('Error al crear el rol');
    }
}

// Exporta todos los controladores
module.exports = {
    getSkills,
    createSkill
};
