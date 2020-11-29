'use strict';

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });

  profile.associate = model => {
    profile.belongsTo(model.user);

    // profile.hasMany(model.category, {
    //   onDelete: 'cascade'
    // });

    profile.belongsToMany(model.category, {
      through: 'categoryProfiles'
    });


    // profile.hasMany(model.activity, {
    //   onDelete: 'cascade'
    // });

    // profile.hasMany(model.match, {
    //   onDelete: 'cascade'
    // });

    // profile.hasMany(model.givenLike, {
    //   onDelete: 'cascade'
    // });

    // profile.hasMany(model.receivedLike, {
    //   onDelete: 'cascade'
    // });

  };

  return profile;
};