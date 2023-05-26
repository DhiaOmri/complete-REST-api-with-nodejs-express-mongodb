const User = require("./userModel");
const addUser = async (req, resp) => {
  const user = new User(req.body);
  try {
    await user.save();
    resp.status(201).json({ message: "sucess" });
  } catch (error) {
    resp.status(500).send(error.message);
  }
};
const getUsers = async (req, resp) => {
  try {
    const users = await User.find({});
    resp.status(201).send(users);
  } catch (error) {
    resp.status(500).send(error.message);
  }
};
const getUser = async (req, resp) => {
  try {
    const user = await User.find({ _id: req.params.id });
    resp.status(201).send(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
};
const updateUser = async (req, resp) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    resp.status(201).send(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
};
const deleteUser = async (req, resp) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    resp.status(201).json({ message: "success" });
  } catch (error) {
    resp.status(500).send(error.message);
  }
};
module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
