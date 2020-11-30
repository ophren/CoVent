'use strict';

module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    matchedProfileId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  match.associate = model => {
    match.belongsTo(model.category);

    // match.belongsToMany(model.profile, { through: 'matchProfiles' });
  };

  return match;
};