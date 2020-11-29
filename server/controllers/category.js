'use strict';

const models = require('./../models/');

const addCategory = async (req, res) => {
  const { name, profileId } = req.body;
  const category = await models.category.findAll({
    where: { name: name },
    include: {
      model: models.profile,
      where: {
        id: profileId,
      }
    }
  });
  if (category.length > 0)
    return res
      .status(409)
      .send({ error: '409', message: 'Category already exists' });
  try {
    const newCategory = await models.category.create(req.body);
    const profile = await models.profile.findAll({
      where: { id: profileId }
    });
    console.log('newCategory', newCategory);
    console.log('profile BEFORE-->', profile);
    await profile[0].addCategory(newCategory);
    console.log('profile AFTER-->', profile);

    res.status(201).send(newCategory);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not add category' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    // // unique list
    // const categories = await models.category.aggregate('name', 'DISTINCT', {
    //   plain: false,
    // });

    // // not unique list
    // const categories = await models.category.findAll({});

    const categories = await models.category.findAll({
      attributes: ['name'],
      group: ['name'],
      include: [models.profile],
    });
    console.log('categories-->', categories);
    res.status(200).send(categories);
  } catch (error) {

  }
};

module.exports = { addCategory, getAllCategories };