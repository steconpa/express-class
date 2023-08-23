const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    hourly_rate: {
        type: DataTypes.NUMERIC,
        allowNull: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
    },
}, {
    timestamps: true
});

module.exports = User;
