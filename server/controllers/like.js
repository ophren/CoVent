'use strict';

const models = require('../models');

const like = async (req, res) => {

  const { direction } = req.params;
  const { profileId } = req.body;

  const values = Object.values(req.body);

  const profile = await models.profile.findAll({
    where: { id: profileId },
    include: [
      {
        model: models.profile, as: 'likedProfile',
        attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
        include: {
          attributes: ['id', 'firstName', 'lastName', 'email'],
          model: models.user,
        }
      },
      {
        model: models.profile, as: 'receivedLike',
        attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
        include: {
          model: models.user,
          attributes: ['id', 'firstName', 'lastName', 'email'],
        }
      },
    ]
  });
  console.log('profile[0].dataValues.userId-->', profile[0].dataValues.userId);

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

      const targetProfile = await models.profile.findAll({
        where: { id: values[1] },
        include: [
          { model: models.user },
          {
            model: models.profile, as: 'likedProfile',
            attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
            include: {
              attributes: ['id', 'firstName', 'lastName', 'email'],
              model: models.user,
            }
          },
          {
            model: models.profile, as: 'receivedLike',
            attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
            include: {
              model: models.user,
              attributes: ['id', 'firstName', 'lastName', 'email'],
            }
          },
        ]
      });

      if (targetProfile[0].dataValues.likedProfile.length > 0) {
        const matchCheck = targetProfile[0].dataValues.likedProfile.some((el) => {
          return el.dataValues.id === profileId;
        });

        if (matchCheck) {
          await profile[0].addMatched(givenLikeId, profileId);
          console.log('profile[0]-->', profile[0]);

          await targetProfile[0].addMatched(profileId, givenLikeId);
          const updatedUser = await models.user.findAll({
            where: { id: profile[0].dataValues.userId },
            attributes: ['id', 'firstName', 'lastName', 'email'],
            include: {
              model: models.profile,
              attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
              include: [
                {
                  model: models.profile, as: 'likedProfile',
                  attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
                  include: {
                    model: models.user,
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                  }
                },
                {
                  model: models.profile, as: 'receivedLike',
                  attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
                  include: {
                    model: models.user,
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                  }
                },
                {
                  model: models.profile, as: 'matched',
                  attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
                  include: {
                    model: models.user,
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                  }
                },
                { model: models.category }
              ]
            }
          });
          // return res.status(201).send({ message: 'You got a new match' });
          return res.status(201).send(updatedUser);
        }
      }

      const updatedUser = await models.user.findAll({
        where: { id: profile[0].dataValues.userId },
        attributes: ['id', 'firstName', 'lastName', 'email'],
        include: {
          model: models.profile,
          attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
          include: [
            {
              model: models.profile, as: 'likedProfile',
              attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
              include: {
                model: models.user,
                attributes: ['id', 'firstName', 'lastName', 'email'],
              }
            },
            {
              model: models.profile, as: 'receivedLike',
              attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
              include: {
                model: models.user,
                attributes: ['id', 'firstName', 'lastName', 'email'],
              }
            },
            {
              model: models.profile, as: 'matched',
              attributes: ['id', 'picture', 'age', 'gender', 'location', 'userId'],
              include: {
                model: models.user,
                attributes: ['id', 'firstName', 'lastName', 'email'],
              }
            },
            { model: models.category }
          ]
        }
      });
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