const User = require('./User');
const Gallery = require('./Appointment');
const Painting = require('./Service');

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
