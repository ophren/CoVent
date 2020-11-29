'use strict';

module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    matchId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  match.associate = model => {
    // match.belongsToMany(model.profile, { through: 'matchProfiles' });
    match.belongsTo(model.category);

  };

  return match;
};