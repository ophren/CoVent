'use strict';

const models = require('../models');
const helperFuncs = require('./../utils/helperFuncs');

const like = async (req, res) => {

  const { direction } = req.params;
  const { profileId } = req.body;
  const values = Object.values(req.body);

  const profile = await helperFuncs.findProfile(models, profileId, 'profile');

  if (values[0] === values[1]) {
    return res.status(500).send({ error: '500', message: 'You cannot like yourself' });
  }

  if (profile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Profile not available' });
  }

  try {
    if (direction === 'give') {
      const { givenLikeId } = req.body;
      const likedProfile = await models.profile.findAll({
        where: { id: givenLikeId }
      });

      if (likedProfile.length === 0) {
        return res.status(500).send({ error: '500', message: 'Liked profile not available' });
      }

      await profile[0].addLikedProfile(givenLikeId, profileId);
      await likedProfile[0].addReceivedLike(profileId, givenLikeId);

      const targetProfile = await helperFuncs.findProfile(models, values[1], 'profile');

      if (targetProfile[0].dataValues.likedProfile.length > 0) {
        const matchCheck = targetProfile[0].dataValues.likedProfile.some((el) => {
          return el.dataValues.id === profileId;
        });

        if (matchCheck) {
          await profile[0].addMatched(givenLikeId, profileId);
          await targetProfile[0].addMatched(profileId, givenLikeId);
          const updatedUser = await helperFuncs.findUser(models, profile[0].dataValues.userId);
          // return res.status(201).send({ message: 'You got a new match' });
          return res.status(201).send(updatedUser);
        }
      }

      const updatedUser = await helperFuncs.findUser(models, profile[0].dataValues.userId);
      res.status(201).send(updatedUser);

    } else if (direction === 'receive') {
      const { receivedLikeId } = req.body;
      const receivedLikeProfile = await models.profile.findAll({
        where: { id: receivedLikeId }
      });

      if (receivedLikeProfile.length === 0) {
        return res.status(500).send({ error: '500', message: 'Received liked profile not available' });
      }

      const duplicateLikeCheck = profile[0].likeds.filter((el) => {
        return Number(el.likedId) === Number(receivedLikeId);
      });

      if (duplicateLikeCheck.length > 0) {
        return res.status(500).send({ error: '500', message: 'Already received like' });
      }

      await profile[0].addReceivedLike(receivedLikeId, profileId);
      // const liked = await models.liked.create({ profileId: profileId, likedId: receivedLikeId });
      res.status(201).send(profile);

    } else {
      res.status(500).send({ error, message: 'Wrong direction' });
    }
  } catch (error) {
    res.status(500).send({ error, message: 'Could not like' });
  }
};

module.exports = { like };