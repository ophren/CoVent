'use strict';

module.exports = (sequelize, DataTypes) => {
  const match = sequelize.define('match', {
    matchedProfileId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  // match.associate = model => {
  //   match.belongsToMany(model.profile, {
  //     through: 'matchProfiles'
  //   });
  // };

  return match;
};