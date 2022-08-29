const express = require('express');

const loginRouter = express.Router();
const { login } = require('./routes');

loginRouter.post('/', login);

module.exports = loginRouter;