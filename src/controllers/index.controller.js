const skillController = require('./skill.controller');
const roleController = require('./role.controller');
const userController = require('./user.controller');

function index (req, res) {
    res.render('index', {
        title: 'Index renderizado desde el controlador',
        menssage: 'Todo el contenido de la página index se renderiza desde el controlador con Pug'
    });
}

module.exports = {
    index,
    skillController,
    roleController,
    userController
};
