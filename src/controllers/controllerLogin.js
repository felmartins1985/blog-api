const ServiceLogin = require('../services/serviceLogin');

const login = async (req, res) => {
  const responseService = await ServiceLogin.login(req.body);
  // console.log(responseService, '<--');
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  return res.status(200).json({ token: responseService });
};

module.exports = { login };