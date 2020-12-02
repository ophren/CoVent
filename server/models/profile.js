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
    hasNewMatch: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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

  };

  return profile;
};