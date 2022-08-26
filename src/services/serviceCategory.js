const { Category } = require('../database/models');

const createCategory = async (name) => {
  await Category.create({ name });
  const category = await Category.findOne({ where: { name } });
  return category;
};

module.exports = { createCategory };