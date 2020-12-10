'use strict';

const models = require('./../models/');
const helperFuncs = require('./../utils/helperFuncs');
const { Op } = require("sequelize");
const profile = require('./profile');

const createMessage = async (req, res) => {
  const { profileId, targetId, text } = req.body;
  const newMsg = await models.message.create({
    text,
    sentMessageId: profileId,
    receivedMessageId: targetId,
    profileId
  });
  res.status(204).send(newMsg);
};

const getAllMessages = async (req, res) => {
  const msgs = await models.message.findAll({});
  res.status(200).send(msgs);
};

const getConversation = async (req, res) => {
  const { profileId, receivedId } = req.params;
  const msgs = await models.message.findAll({
    where: {
      [Op.or]: [{ profileId: profileId, receivedMessageId: receivedId }, { profileId: receivedId, receivedMessageId: profileId }]
    }
  });
  res.status(200).send(msgs);
};

module.exports = { createMessage, getAllMessages, getConversation };