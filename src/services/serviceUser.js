const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;
//
const code = 400;
const validationUser = async ({ displayName, email, password }) => {
  if (displayName.length < 8) {
    return { error: { code, message: '"displayName" length must be at least 8 characters long' },
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!(email.match(emailRegex))) {
    return { error: { code, message: '"email" must be a valid email' },
    }; 
  }
  if (password.length < 6) {
    return { error: { code, message: '"password" length must be at least 6 characters long' },
    };
  }
  const userLogin = await User.findOne({ where: { email } });
  if (userLogin) {
    return { error: { code: 409, message: 'User already registered' } };
  }
  return true;
};

/* Recebemos o valor de `admin` que, por padrão, é `false` */
const createUser = async ({ displayName, email, password, image }) => {
  const validation = await validationUser({ displayName, email, password });
  if (validation.error) {
    return validation;
  }
  await User.create({ displayName, email, password, image });
  const payload = { email };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};
//
const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return allUsers;
};

module.exports = { createUser, getAllUsers };