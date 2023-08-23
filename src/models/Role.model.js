const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

// Define el modelo Role utilizando Sequelize
const Role = sequelize.define('roles', {
  // Campo id que es la clave primaria
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // Campo name que almacena el nombre del rol
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Opciones adicionales del modelo
  // Agrega automáticamente los campos createdAt y updatedAt
  timestamps: true
});

// Exporta el modelo Role para su uso en otros archivos
module.exports = Role;
