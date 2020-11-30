'use strict';

const models = require('../models');

const addMatch = async (req, res) => {

  const { profileId, matchedProfileId } = req.body;

  const profile = await models.profile.findAll({
    where: { id: profileId },
    include: [models.match]
  });

  if (profile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Profile not available' });
  }

  const matchedProfile = await models.profile.findAll({
    where: { id: matchedProfileId },
    include: [models.match]  });

  if (matchedProfile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Profile not available' });
  }



};

module.exports = { addMatch };