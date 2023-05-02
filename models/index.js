<<<<<<< HEAD
const User = require('./User');
// const Appointment = require('./Appointment');
// const Stylist = require("./Stylist");



// An appointment belongs to a user and a stylist
// Appointment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Appointment.belongsTo(Stylist, {
//   foreignKey: "stylist_id",
//   onDelete: "SET NULL",
// });

// // A user can have many appointments
// User.hasMany(Appointment);

// // A stylist can have many appointments
// Stylist.hasMany(Appointment);

module.exports = { User };

  
=======
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

>>>>>>> 95d6304d0a1a7f277c642ccc005e51bde9a12684
