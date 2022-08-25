const ServiceUser = require('../services/serviceUser');

const createUser = async (req, res) => {
  const responseService = await ServiceUser.createUser(req.body);
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  return res.status(201).json({ token: responseService });
};

module.exports = { createUser };