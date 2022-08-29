const express = require('express');
const auth = require('../middlewares/auth');

const userRouter = express.Router();
const { createUser, getAllUsers, deleteUser, getUserById } = require('./routes');

userRouter.post('/', createUser);
userRouter.get('/', auth, getAllUsers);
userRouter.delete('/me', auth, deleteUser);
userRouter.get('/:id', auth, getUserById);

module.exports = userRouter;
