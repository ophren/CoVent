'use strict';

module.exports = (sequelize, DataTypes) => {
  const liked = sequelize.define('liked', {
    likedId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  liked.associate = model => {
    liked.belongsTo(model.profile);
  };

  return liked;
};
