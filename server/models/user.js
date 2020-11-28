'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  // user.associate = model => {
  //   user.hasMany(model.event, {
  //     onDelete: 'cascade'
  //   });

  //    user.hasOne(model.profile, {
  //     onDelete: 'cascade'
  //   });
  // };

  return user;
};