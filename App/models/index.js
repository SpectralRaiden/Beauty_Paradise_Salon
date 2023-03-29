const User = require('./User');
const Appointment = require('./Appointment');
const Service = require('./Service');

// Associations
User.hasMany(Appointment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
});

Service.hasMany(Appointment, {
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Appointment.belongsTo(Service, {
  foreignKey: 'service_id',
});

module.exports = { User, Appointment, Service };

  