'use strict';

module.exports = (sequelize, DataTypes) => {
  const swipe = sequelize.define('swipe', {
    swipeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  swipe.associate = model => {
    swipe.belongsTo(model.profile);
  };

  return swipe;
};