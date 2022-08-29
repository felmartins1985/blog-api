const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;
//
const login = async ({ password, email }) => {
  if (email === '' || password === '') {
    return {
      error: {
        code: 400, message: 'Some required fields are missing' },
    };
  }
  const userLogin = await User.findOne({ where: { email } });
  if (!userLogin) {
    return {
      error: { code: 400, message: 'Invalid fields' },
    };
  }
  const payload = { email: userLogin.dataValues.email };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  // console.log(typeof token, '<--');
  return token;
}; 
module.exports = { login };