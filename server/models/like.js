'use strict';

module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define('like', {
    likeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  like.associate = model => {
    like.belongsTo(model.profile);
  };

  return like;
};
