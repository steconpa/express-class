const Role = require('./Role.model');
const Skill = require('./Skill.model');
const User = require('./User.model');
const UserSkill = require('./UserSkill.model');
const Job = require('./Job.model');
// const JobSkill = require('./JobSkill');
// const Offer = require('./Offer');
// const Payment = require('./Payment');
// const Rating = require('./Rating');

// Configurar asociaciones entre modelos
User.belongsTo(Role, { foreignKey: 'role_id' });

User.belongsToMany(Skill, {
  through: UserSkill,
  foreignKey: 'user_id', // Nombre correcto de la columna en la tabla intermedia
    otherKey: 'skill_id', // Nombre correcto de la columna en la tabla intermedia
    as: 'skills' // Nombre de la relación en el modelo
 });

Skill.belongsToMany(User, {
  through: UserSkill,
  foreignKey: 'skill_id', // Nombre correcto de la columna en la tabla intermedia
  otherKey: 'user_id', // Nombre correcto de la columna en la tabla intermedia
  as: 'users' // Nombre de la relación en el modelo
 });

Job.belongsTo(User, { foreignKey: 'recluter_id' });

// Exportar todos los modelos
module.exports = {
  Role,
  Skill,
  User,
  UserSkill,
  Job,
  // JobSkill,
  // Offer,
  // Payment,
  // Rating
};
