'use strict';

const models = require('../models');

const like = async (req, res) => {

  const { direction } = req.params;
  const { profileId } = req.body;


  const profile = await models.profile.findAll({
    where: { id: profileId },
    // include: [models.receivedLike] // models.givenLike,
  });

  if (profile.length === 0) {
    return res.status(500).send({ error: '500', message: 'Profile not available' });
  }

  try {
    if (direction === 'give') {
      console.log('INSIDE DIRECTION');
      const { givenLikeId } = req.body;
      const likedProfile = await models.profile.findAll({
        where: { id: givenLikeId }
      });
      console.log('likedProfile', likedProfile);

      if (likedProfile.length === 0) {
        return res.status(500).send({ error: '500', message: 'Liked profile not available' });
      }

      // const duplicateLikeCheck = profile[0].givenLikes.filter((el) => {
      //   return Number(el.givenLikeId) === Number(givenLikeId);
      // });

      // if (duplicateLikeCheck.length > 0) {
      //   return res.status(500).send({ error: '500', message: 'Already liked' });
      // }

      // const givenLike = await models.givenLike.create(req.body);
      // console.log('profile[0]-->', profile[0]);
      // console.log('givenLike-->', givenLike);
      // console.log('likedProfile-->', likedProfile[0]);

      // await profile[0].addGivenLike(givenLike, { through: { likedProfileId: givenLikeId } });
      console.log('profile[0]', profile[0]);
      await profile[0].addLikedProfile(givenLikeId, profileId);
      // await likedProfile[0].addGivenLike(profileId);

      //       likedProfile
      // givenLike

      // await profile[0].addGivenLike(likedProfile[0], { through: { likedProfileId: +givenLikeId } });
      res.status(201).send(givenLike);
    } else if (direction === 'receive') {

      const { receivedLikeId } = req.body;

      const receivedLikeProfile = await models.profile.findAll({
        where: { id: receivedLikeId }
      });

      if (receivedLikeProfile.length === 0) {
        return res.status(500).send({ error: '500', message: 'Received liked profile not available' });
      }

      const duplicateLikeCheck = profile[0].receivedLikes.filter((el) => {
        return Number(el.receivedLikeId) === Number(receivedLikeId);
      });

      if (duplicateLikeCheck.length > 0) {
        return res.status(500).send({ error: '500', message: 'Already received like' });
      }

      const receivedLike = await models.receivedLike.create(req.body);
      res.status(201).send(receivedLike);
    } else {
      res.status(500).send({ error, message: 'Wrong direction' });
    }
  } catch (error) {
    res.status(500).send({ error, message: 'Could not like' });
  }
};

module.exports = { like };