'use strict';

const bcrypt = require('bcrypt');
const models = require('../models');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await models.user.findAll({
    where: { email: email }
  });
  if (user.length !== 0)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = {
      ...req.body,
      password: hash,
    };
    const user = await models.user.create(newUser);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await models.user.findAll({
      include: [models.event, {
        model: models.profile, include: [
          { model: models.local },
          { model: models.tourist }
        ]
      }]
    });
    res.status(201).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, message: 'Could not get all users' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.user.findAll({
      where: { id: id },
      include: [models.event, {
        model: models.profile, include: [
          { model: models.local },
          { model: models.tourist }
        ]
      }]
    });
    if (user.length > 0) res.status(201).send(user);
    throw new Error();
  } catch (error) {
    res.status(500).send({ error, message: 'Could not get User' });
  }
};

module.exports = { createUser, getAllUsers, getUser };