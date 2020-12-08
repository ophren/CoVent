'use strict';

const models = require('./../models/');
const helperFuncs = require('./../utils/helperFuncs');

const addSwipe = async (req, res) => {
  try {
    console.log('SERVER SWIPE CONTROLLER-->');
    console.log('req.body-->', req.body);

    const newSwipe = await models.swipe.create(req.body);
    console.log('newSwipe-->', newSwipe);
    res.status(201).send(newSwipe);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create profile' });
  }
};

module.exports = { addSwipe };