const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Skill = sequelize.define('skills', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Skill;
