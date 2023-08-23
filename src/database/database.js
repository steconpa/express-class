const { Sequelize } = require('sequelize');

const DB_NAME = 'tinder_skills';
const DB_USER = 'postgres';
const DB_PASS = 'rV07XeVw836prjSYjSs0';

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'postgres'
});

// Probar la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch(err => {
    console.error('Error en la conexión a la base de datos:', err);
  });

module.exports = sequelize;
