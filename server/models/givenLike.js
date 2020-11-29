'use strict';

module.exports = (sequelize, DataTypes) => {
  const givenLike = sequelize.define('givenLike', {
    givenLikeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  givenLike.associate = model => {
    givenLike.belongsTo(model.profile);
  };

  return givenLike;
};