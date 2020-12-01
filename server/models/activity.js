'use strict';

module.exports = (sequelize, DataTypes) => {
  const activity = sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  activity.associate = model => {
    // activity.belongsToMany(model.profile, { through: 'activityProfiles' });
    activity.belongsTo(model.category);

  };

  return activity;
};