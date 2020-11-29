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
      include: { model: models.profile, include: [models.category] }
    });
    res.status(200).send(users);
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
      include: [models.profile]
    });
    if (user.length > 0) {
      res.status(200).send(user);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(500).send({ error, message: 'Could not get User' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await await models.user.findAll({ where: { email: email } });
    const validatedPass = await bcrypt.compare(password, user[0].password);
    if (!validatedPass) throw new Error();
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
};

module.exports = { createUser, getAllUsers, getUser, login };