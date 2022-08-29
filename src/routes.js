const { login } = require('./controllers/controllerLogin');
const { createUser, getAllUsers,
   deleteUser, getUserById } = require('./controllers/controllerUser');
const { createCategory, getAllCategories } = require('./controllers/controllerCategory');
const { createPost, getAllPosts,
searchPost, getPostById, updatedPost, deletePost } = require('./controllers/controllerPost');

module.exports = { 
  login,
  createUser,
  getAllUsers,
  deleteUser,
  getUserById,
  createCategory,
  getAllCategories,
  createPost,
  getAllPosts,
  searchPost,
  getPostById,
  updatedPost,
  deletePost };