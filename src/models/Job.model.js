const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Job = sequelize.define('jobs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recluter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreingKey: true
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    max_hourly_rate: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    open: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true
});

module.exports = Job;
