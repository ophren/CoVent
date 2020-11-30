'use strict';

module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  });

  category.associate = model => {
    category.belongsToMany(model.profile, {
      through: 'categoryProfiles'
    });

    // category.belongsToMany(model.profile, {
    //   through: model.categoryProfiles
    // });

    // category.hasMany(model.activity);
    // category.belongsTo(model.profile);
  };

  return category;
};