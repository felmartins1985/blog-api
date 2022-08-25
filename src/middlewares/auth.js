require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

// function checkUserId(id, req, res, next) {
//   if (Number(id) !== Number(req.params.userId)) {
//     return res.status(401).json({
//       message: 'Acesso negado',
//     });
//   }
//   next();
// }

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(token, JWT_SECRET);
    // const decoded = jwt.verify(token, JWT_SECRET);
    // req.user = decoded;
    next();
  } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
  }
};