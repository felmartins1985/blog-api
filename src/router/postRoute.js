const express = require('express');
const auth = require('../middlewares/auth');

const postRouter = express.Router();
const { 
  createPost,
  getAllPosts,
  searchPost,
  getPostById, 
  updatedPost,
  deletePost } = require('./routes');

postRouter.post('/', auth, createPost);
postRouter.get('/', auth, getAllPosts);
postRouter.get('/search', auth, searchPost);
postRouter.get('/:id', auth, getPostById);
postRouter.put('/:id', auth, updatedPost);
postRouter.delete('/:id', auth, deletePost);

module.exports = postRouter;