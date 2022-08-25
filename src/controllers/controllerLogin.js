const ServiceLogin = require('../services/serviceLogin');

const login = async (req, res) => {
  const responseService = await ServiceLogin.login(req.body);
  console.log(responseService, '<--');
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  return res.status(200).json({ token: responseService });
};

module.exports = { login };
// module.exports = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     if (!validateBody(req.body, res)) return;
//     const user = await User.findOne({ where: { username } });
//     if (!user || user.password !== password) {
//       return res
//         .status(401)
//         .json({ message: 'Usuário não existe ou senha inválida' });
//     }
//       const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
//       const token = jwt.sign({ data: user }, secret, jwtConfig);
//     return res.status(200).json({ token });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: 'Erro interno', error: err.message });
//   }
// };