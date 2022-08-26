const ServiceCategory = require('../services/serviceCategory');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name || name === '') {
  return res.status(400).json({ message: '"name" is required' });
  }
  const category = await ServiceCategory.createCategory(name);
  return res.status(201).json(category);
};
const getAllCategories = async (req, res) => {
  const responseService = await ServiceCategory.getAllCategories();
  return res.status(200).json(responseService);
};

module.exports = { createCategory, getAllCategories };