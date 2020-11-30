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

    // profile.belongsToMany(model.category, {
    //   through: 'categoryProfiles'
    // });

    // // old working version
    // profile.hasMany(model.givenLike, {
    //   onDelete: 'cascade'
    // });

    // profile.belongsToMany(model.givenLike, {
    //   through: 'likedProfiles',
    //   // through: model.givenLikeProfile,
    //   // foreignKey: model.givenLikeProfile.likedProfileId,
    // });
    profile.belongsToMany(model.profile, {
      through: 'likedProfiles',
      as: 'likedProfile',
      foreignKey: 'likedProfile'
      // targetKey: 'giveTo',
      // sourceKey: 'receivedFrom'
      // through: model.givenLikeProfile,
      // foreignKey: model.givenLikeProfile.likedProfileId,
    });

    profile.belongsToMany(model.profile, {
      through: 'likedProfiles',
      as: 'givenLike',
      foreignKey: 'givenLike'
      // through: model.givenLikeProfile,
      // foreignKey: model.givenLikeProfile.likedProfileId,
    });





    // profile.hasMany(model.receivedLike, {
    //   onDelete: 'cascade'
    // });

    // profile.hasMany(model.match, {
    //   onDelete: 'cascade'
    // });

    // profile.hasMany(model.activity, {
    //   onDelete: 'cascade'
    // });




  };

  return profile;
};