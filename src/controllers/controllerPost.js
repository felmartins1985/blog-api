const ServicePost = require('../services/servicePost');

const createPost = async (req, res) => {
  const { id } = req.user;
  const responseService = await ServicePost.createPost(id, req.body);
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  return res.status(201).json(responseService);
};
const getAllPosts = async (_req, res) => {
  const responseService = await ServicePost.getAllPosts();
  return res.status(200).json(responseService);
};

module.exports = { createPost, getAllPosts };