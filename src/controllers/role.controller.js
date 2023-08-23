// Importa el modelo Role desde models/index.js
const { Role } = require('../models');

/**
 * Obtiene todos los roles.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
async function getRoles(req, res) {
    try {
        // Busca y obtiene todos los roles en la base de datos
        const roles = await Role.findAll();

        // Responde con los roles en formato JSON
        res.json(roles);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al obtener roles:', error);
        res.status(500).send('Error al obtener los roles');
    }
}

/**
 * Crea un nuevo rol.
 * @param {Object} req - Objeto de solicitud con el cuerpo (body) que contiene el nombre del rol.
 * @param {Object} res - Objeto de respuesta.
 */
async function createRole(req, res) {
    try {
        const { name } = req.body;

        // Crea un nuevo rol en la base de datos utilizando el modelo Role
        const newRole = await Role.create({ name });

        // Responde con el nuevo rol creado en formato JSON
        res.json(newRole);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al crear el rol:', error);
        res.status(500).send('Error al crear el rol');
    }
}

// Exporta todos los controladores
module.exports = {
    getRoles,
    createRole
};
