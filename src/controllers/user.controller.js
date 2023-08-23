// Importa el modelo User desde models/index.js
const { User, Role, Skill } = require('../models');

/**
 * Obtiene todos los usuarios.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
async function getUsers(req, res) {
    try {
        // Busca y obtiene todos los usuarios en la base de datos
        const users = await User.findAll({
            include: [
                {
                    model: Role,
                    as: 'role'
                },
                {
                    model: Skill,
                    as: 'skills',
                    through: { attributes: [] } // Para evitar incluir atributos adicionales de la tabla intermedia
                }
            ]
        });

        // Responde con los usuarios en formato JSON
        res.json(users);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al obtener los usuarios:', error);
        res.status(500).send('Error al obtener los usuarios');
    }
}

/**
 * Crea un nuevo usuario.
 * @param {Object} req - Objeto de solicitud con el cuerpo (body) que contiene el parametros del usuario.
 * @param {Object} res - Objeto de respuesta.
 */
async function createUser(req, res) {
    try {
        const { name, email, hourly_rate, role_id } = req.body;

        // Crea un nuevo usuario en la base de datos utilizando el modelo User
        const newUser = await User.create({ name, email, hourly_rate, role_id });

        // Responde con el nuevo usuario creado en formato JSON
        res.json(newUser);
    } catch (error) {
        // Manejo de errores en caso de fallo
        console.error('Error al crear el usuario:', error);
        res.status(500).send('Error al crear el usuario');
    }
}

// Exporta todos los controladores
module.exports = {
    getUsers,
    createUser
};
