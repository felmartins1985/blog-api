const { BlogPost, User, sequelize, PostCategory, Category } = require('../database/models');

const validatePost = async ({ title, content, categoryIds }) => {
  if (!title || !content || !categoryIds) {
    return { error: { code: 400, message: 'Some required fields are missing' } };
  }
  const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (count !== categoryIds.length) {
    return { error: { code: 400, message: '"categoryIds" not found' } };
  }
  return true;
};

const createPost = async (id, { title, content, categoryIds }) => {
  const validate = await validatePost({ title, content, categoryIds });
  if (validate !== true) return validate;
  const trs = await sequelize.transaction(async (transaction) => {
    const { dataValues } = await BlogPost.create({ title, content, userId: id }, { transaction });
    const categories = categoryIds.map((number) => ({
      postId: dataValues.id,
      categoryId: number,
    }));
    await PostCategory.bulkCreate(categories, { transaction });
    return dataValues;
  });
  return trs;
};
const getAllPosts = async () => {
    const posts = await BlogPost.findAll({
      include: [{ model: Category, as: 'categories', through: { attributes: [] } },
      { model: User, as: 'user', attributes: { exclude: ['password'] } }],
    });
    return posts; 
};
const getPostById = async (id) => {
  const posts = await BlogPost.findByPk(id, {
    include: [{ model: Category, as: 'categories', through: { attributes: [] } },
    { model: User, as: 'user', attributes: { exclude: ['password'] } }],
  });
  if (!posts) return { error: { code: 404, message: 'Post does not exist' } };
  return posts; 
};
module.exports = { createPost, getAllPosts, getPostById };