const express = require('express');
const auth = require('../middlewares/auth');

const categoryRouter = express.Router();
const { createCategory, getAllCategories } = require('./routes');

categoryRouter.post('/', auth, createCategory);
categoryRouter.get('/', auth, getAllCategories);

module.exports = categoryRouter;