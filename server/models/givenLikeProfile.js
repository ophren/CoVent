'use strict';

module.exports = (sequelize, DataTypes) => {
  const givenLikeProfile = sequelize.define('givenLikeProfile', {
    likedProfileId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

  });
  return givenLikeProfile;
};