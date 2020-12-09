'use strict';

module.exports = (sequelize, DataTypes) => {
  const conversation = sequelize.define('conversation', {

  });

  // conversation.associate = model => {
  //   conversation.belongsTo(model.profile, { as: 'profile1' });
  //   conversation.belongsTo(model.profile, { as: 'profile2' });
  //   conversation.hasMany(model.message);
  // };

  return conversation;
};

