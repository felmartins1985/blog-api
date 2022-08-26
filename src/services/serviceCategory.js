const { Category } = require('../database/models');

const createCategory = async (name) => {
  await Category.create({ name });
  const category = await Category.findOne({ where: { name } });
  return category;
};
const getAllCategories = async () => {
  const allUsers = await Category.findAll();
  return allUsers;
};
module.exports = { createCategory, getAllCategories };