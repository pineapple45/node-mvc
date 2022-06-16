const {
  getUsersFromDB,
  updateUserInDB,
  getUserByIdFromDB,
  deleteUserInDB,
  createUserInDB,
} = require('../models/users');

const getUsers = async (req, res) => {
  const users = await getUsersFromDB();

  res.render('index', { users });
};

const getUserByID = async (req, res) => {
  const user_id = req.params.id;
  const user = await getUserByIdFromDB(user_id);
  // const users = await getUsersFromDB();
  res.render('update', { user });
};

const updateUser = async (req, res) => {
  const user_id = req.params.id;
  const updatedName = req.body.username;
  await updateUserInDB(user_id, updatedName);

  res.redirect('/');
};

const deleteUser = async (req, res) => {
  const user_id = req.params.id;
  await deleteUserInDB(user_id);

  res.redirect('/');
};

const newUser = async (req, res) => {
  res.render('createuser');
};

const createUser = async (req, res) => {
  const user = req.body.username;
  await createUserInDB(user);

  res.redirect('/');
};

module.exports = {
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
  createUser,
  newUser,
};
