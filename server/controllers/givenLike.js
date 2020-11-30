'use strict';

const models = require('./../models/');

const giveLike = async (req, res) => {
  try {
    const { profileId } = req.body;
    const giveLike = await models.giveLike.create(req.body);
    res.status(201).send(giveLike);

  } catch (error) {

  };