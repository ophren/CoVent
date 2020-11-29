'use strict';

module.exports = (sequelize, DataTypes) => {
  const receivedLike = sequelize.define('receivedLike', {
    receivedLikeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  receivedLike.associate = model => {
    receivedLike.belongsTo(model.profile);
  };

  return receivedLike;
};