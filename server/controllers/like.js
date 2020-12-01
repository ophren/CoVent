'use strict';

const models = require('../models');

const like = async (req, res) => {

  const { direction } = req.params;
  const { profileId } = req.body;


  const profile = await models.profile.findAll({
    where: { id: profileId },
    include: [models.like, models.liked]
  });

  if (profile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Profile not available' });
  }

  console.log('BEFORE TRY CATCH-->');

  try {
    if (direction === 'give') {

      const { givenLikeId } = req.body;
      const likedProfile = await models.profile.findAll({
        where: { id: givenLikeId }
      });

      if (likedProfile.length === 0) {
        return res.status(500).send({ error: '500', message: 'Liked profile not available' });
      }

      const duplicateLikeCheck = profile[0].likes.filter((el) => {
        return Number(el.likeId) === Number(givenLikeId);
      });

      if (duplicateLikeCheck.length > 0) {
        return res.status(500).send({ error: '500', message: 'Already liked' });
      }

      await profile[0].addLikedProfile(givenLikeId, profileId);
      const like = await models.like.create({ profileId: profileId, likeId: givenLikeId });
      res.status(201).send(like);

    } else if (direction === 'receive') {
      console.log('INSIDE RECEIVE-->');

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
      console.log('profile[0]-->', profile[0]);
      console.log('receivedLikeId-->', receivedLikeId);
      console.log('profileId', profileId);


      await profile[0].addReceivedLike(receivedLikeId, profileId);
      const liked = await models.liked.create({ profileId: profileId, likedId: receivedLikeId });
      res.status(201).send(liked);

    } else {
      res.status(500).send({ error, message: 'Wrong direction' });
    }
  } catch (error) {
    res.status(500).send({ error, message: 'Could not like' });
  }
};

module.exports = { like };