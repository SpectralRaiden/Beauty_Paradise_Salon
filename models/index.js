import "./styles.css";
// Models index.js
const User = require('./User');
const Gallery = require('./Gallery');
// const Stylist = require(“./Stylist”);
// const Appointment = require(“./Appointment”);
// An appointment belongs to a user and a stylist
// Appointment.belongsTo(User, {
//   foreignKey: “user_id”,
//   onDelete: “SET NULL”,
// });
// Appointment.belongsTo(Stylist, {
//   foreignKey: “stylist_id”,
//   onDelete: “SET NULL”,
// });
// // A user can have many appointments
// User.hasMany(Appointment);
// // A stylist can have many appointments
// Stylist.hasMany(Appointment);

// module.exports = { User, Stylist, Appointment };
module.exports = { User, Gallery };

