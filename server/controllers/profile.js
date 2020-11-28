'use strict';

const models = require('./../models/');

const createProfile = async (req, res) => {
  const { userId } = req.body;
  const profile = await models.profile.findAll({
    where: { userId: userId }
  });
  try {
    if (profile.length > 0) {
      const updatedProfile = await models.profile.update((req.body), {
        where: { userId: userId }
      });
      res.status(204).send(updatedProfile);
    } else {
      const newProfile = await models.profile.create(req.body);
      res.status(201).send(newProfile);
    }
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create profile' });
  }
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await models.profile.findAll({
      where: { userId: id },
      include: [models.user]
    });
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send({ error, message: 'Could not get Profile' });
  }
};

module.exports = { createProfile, getProfile };