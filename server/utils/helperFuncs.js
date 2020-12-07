'use strict';

const userAttributes = ['id', 'firstName', 'lastName', 'email'];
const profileAttributes = ['id', 'picture', 'description', 'age', 'gender', 'location', 'userId', 'hasNewMatch'];


const findAllUsers = async (models) => {
  return await models.user.findAll({
    attributes: userAttributes,
    include: {
      model: models.profile,
      attributes: profileAttributes,
      include: [
        {
          model: models.profile, as: 'likedProfile',
          attributes: profileAttributes,
          include: {
            model: models.user,
            attributes: userAttributes,
          }
        },
        {
          model: models.profile, as: 'receivedLike',
          attributes: profileAttributes,
          include: {
            model: models.user,
            attributes: userAttributes,
          }
        },
        {
          model: models.profile, as: 'matched',
          attributes: profileAttributes,
          include: {
            model: models.user,
            attributes: userAttributes,
          }
        },
        { model: models.category },
        { model: models.city },
        { model: models.swipe }
      ]
    }
  });
};

const findUser = async (models, id) => {
  return await models.user.findAll({
    where: { id: id },
    attributes: userAttributes,
    include: {
      model: models.profile,
      attributes: profileAttributes,
      include: [
        {
          model: models.profile, as: 'likedProfile',
          attributes: profileAttributes,
          include: {
            model: models.user,
            attributes: userAttributes,
          }
        },
        {
          model: models.profile, as: 'receivedLike',
          attributes: profileAttributes,
          include: {
            model: models.user,
            attributes: userAttributes,
          }
        },
        {
          model: models.profile, as: 'matched',
          attributes: profileAttributes,
          include: {
            model: models.user,
            attributes: userAttributes,
          }
        },
        { model: models.category },
        { model: models.city },
        { model: models.swipe }
      ]
    }
  });
};

const findProfile = async (models, id, by) => {
  const identifier = by.includes('profile') ? 'id' : 'userId';

  return await models.profile.findAll({
    where: { [identifier]: id },
    include: [
      { model: models.user },
      {
        model: models.profile, as: 'likedProfile',
        attributes: profileAttributes,
        include: {
          model: models.user,
          attributes: userAttributes,
        }
      },
      {
        model: models.profile, as: 'receivedLike',
        attributes: profileAttributes,
        include: {
          model: models.user,
          attributes: userAttributes,
        }
      },
      {
        model: models.profile, as: 'matched',
        attributes: profileAttributes,
        include: {
          model: models.user,
          attributes: userAttributes,
        }
      },
      { model: models.category },
      { model: models.city },
      { model: models.swipe }
    ]
  });
};

const findProfiles = async (models) => {
  return await models.profile.findAll({
    attributes: profileAttributes,
    include: [
      {
        model: models.user,
        attributes: userAttributes,
      },
      {
        model: models.profile, as: 'likedProfile',
        attributes: profileAttributes,
        include: {
          model: models.user,
          attributes: userAttributes,
        }
      },
      {
        model: models.profile, as: 'receivedLike',
        attributes: profileAttributes,
        include: {
          model: models.user,
          attributes: userAttributes,
        }
      },
      {
        model: models.profile, as: 'matched',
        attributes: profileAttributes,
        include: {
          model: models.user,
          attributes: userAttributes,
        }
      },
      { model: models.category },
      { model: models.city },
      { model: models.swipe }
    ]
  });
};

module.exports = { findAllUsers, findUser, findProfile, findProfiles };
