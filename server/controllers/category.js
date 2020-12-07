'use strict';

const models = require('./../models/');

const addCategory = async (req, res) => {
  const { name, profileId } = req.body;
  const category = await models.category.findAll({
    where: { name: name }
  });
  const profile = await models.profile.findAll({
    where: { id: profileId },
    include: [models.category]
  });

  if (profile.length > 0) {
    if (profile[0].categories) {
      const profileCatCheck = profile[0].categories.some((el) => {
        return el.name === name;
      });
      if (profileCatCheck) {
        return res
          .status(409)
          .send({ error: '409', message: 'Category already exists' });
      } else {
        try {
          if (category.length > 0) {
            await profile[0].addCategory(category);
            res.status(201).send(category[0]);
          } else {
            const newCategory = await models.category.create(req.body);
            await profile[0].addCategory(newCategory);
            res.status(201).send(newCategory);
          }
        } catch (error) {
          res.status(400).send({ error, message: 'Could not add category' });
        }
      }
    } else {
      try {
        if (category.length > 0) {
          await profile[0].addCategory(category);
          res.status(201).send(profile);
        } else {
          const newCategory = await models.category.create(req.body);
          await profile[0].addCategory(newCategory);
          res.status(201).send(newCategory);
        }
      } catch (error) {
        res.status(400).send({ error, message: 'Could not add category' });
      }
    }
  } else {
    return res
      .status(500)
      .send({ error: '500', message: 'Profile not available' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await models.category.findAll({
      include: {
        model: models.profile, include: [{ model: models.user }],
      }
    });
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send({ error, message: 'Could not get Categories' });
  }
};

module.exports = { addCategory, getAllCategories };