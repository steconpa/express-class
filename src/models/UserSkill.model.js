const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const UserSkill = sequelize.define('user_skills', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'users', 
            key: 'id'
        }
    },
    skill_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'skills',
            key: 'id'
        }
    },
});

module.exports = UserSkill;
