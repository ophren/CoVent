'use strict';

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    text: DataTypes.STRING,
  });

  message.associate = model => {
    message.belongsTo(model.profile, {
      as: 'receivedMessage',
    });

    message.belongsTo(model.profile, {
      as: 'sentMessage',
    });
  };

  return message;
};