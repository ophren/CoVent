'use strict';

module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  });

  city.associate = model => {
    city.belongsToMany(model.profile, {
      through: 'cityProfiles'
    });
  };

  return city;
};