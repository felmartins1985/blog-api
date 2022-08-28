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
 const getPostById = async (req, res) => {
  const { id } = req.params;
  const responseService = await ServicePost.getPostById(id);
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  return res.status(200).json(responseService);
 };
const updatedPost = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { id: userId } = req.user;
  const responseService = await ServicePost.updatedPost(id, userId, title, content);
  if (responseService.error) {
    return res
    .status(responseService.error.code)
    .json({ message: responseService.error.message });
  }
  res.status(200).json(responseService);
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const responseService = await ServicePost.deletePost(id, userId);
  if (responseService.error) {
    return res.status(responseService.error.code).json({ message: responseService.error.message });
  }
  return res.status(204).end();
};
async function searchPost(req, res) {
  const { q } = req.query;
  const responseService = await ServicePost.searchPost(q);
  console.log(responseService);
  return res.status(200).json(responseService);
}
module.exports = { createPost, getAllPosts, getPostById, updatedPost, deletePost, searchPost };