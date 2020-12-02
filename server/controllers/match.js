'use strict';

const models = require('../models');

const addMatch = async (req, res) => {

  const { profileId, matchedProfileId } = req.body;

  const profile = await models.profile.findAll({
    where: { id: profileId },
    // include: [models.match]
  });

  const values = Object.values(req.body);

  if (values[0] === values[1]) {
    return res.status(500).send({ error: '500', message: 'You cannot match yourself' });
  }

  if (profile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Profile not available' });
  }

  const matchedProfile = await models.profile.findAll({
    where: { id: matchedProfileId },
    // include: [models.match]
  });

  if (matchedProfile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Matched profile not available' });
  }

  try {
    await profile[0].addMatched(matchedProfileId, profileId);
    res.status(201).send(matchedProfile);
  } catch (error) {
    res.status(500).send({ error, message: 'Could not match' });

  }

};

module.exports = { addMatch };