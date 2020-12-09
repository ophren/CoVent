'use strict';

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ''
    },
    hasNewMatch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }

  });

  profile.associate = model => {

    profile.belongsTo(model.user);

    profile.belongsToMany(model.profile, {
      through: 'likedProfiles',
      as: 'likedProfile',
      foreignKey: 'likedProfile',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.profile, {
      through: 'likedProfiles',
      as: 'givenLike',
      foreignKey: 'givenLike',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.profile, {
      through: 'receivedLikes',
      as: 'receivedLike',
      foreignKey: 'receivedLike',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.profile, {
      through: 'receivedLikes',
      as: 'liked',
      foreignKey: 'liked',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.profile, {
      through: 'matches',
      as: 'matched',
      foreignKey: 'matched',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.profile, {
      through: 'matches',
      as: 'partner',
      foreignKey: 'partner',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.category, {
      through: 'categoryProfiles',
      onDelete: 'cascade'
    });

    profile.belongsToMany(model.city, {
      through: 'cityProfiles',
      onDelete: 'cascade'
    });

    profile.hasMany(model.swipe);

    profile.hasMany(model.message, {
      // through: 'messages',
      // as: 'receivedMessage',
      // foreignKey: 'receivedMessage',
      onDelete: 'cascade'
    });

    // profile.hasMany(model.message, {
    //   // through: 'messages',
    //   as: 'sentMessage',
    //   // foreignKey: 'sentMessage',
    //   onDelete: 'cascade'
    // });

  };

  return profile;
};