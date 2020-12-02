'use strict';

const userAttributes = ['id', 'firstName', 'lastName', 'email'];
const profileAttributes = ['id', 'picture', 'description', 'age', 'gender', 'location', 'userId', 'hasNewMatch'];


const getUsersObject = async (models) => {
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
        { model: models.category }
      ]
    }
  });
};

const getUserObject = async (models, id) => {
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
        { model: models.category }
      ]
    }
  });
};

const getProfileObject = async (models, id) => {
  return await models.profile.findAll({
    where: { id: id },
    include: [
      { model: models.user },
      {
        model: models.profile, as: 'likedProfile',
        attributes: profileAttributes,
        include: {
          attributes: userAttributes,
          model: models.user,
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
    ]
  });
};

const getProfilesObject = async (models) => {

};

module.exports = { getUsersObject, getUserObject, getProfileObject };