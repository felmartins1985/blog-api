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

const getAllUsers = async (req, res) => {
  const responseService = await ServiceUser.getAllUsers();
  return res.status(200).json(responseService);
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  const responseService = await ServiceUser.getUserById(id);
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  return res.status(200).json(responseService);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  await ServiceUser.deleteUser(id);
  return res.status(204).end();
};
module.exports = { createUser, getAllUsers, getUserById, deleteUser };