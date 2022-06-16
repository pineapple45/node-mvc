const { getUsersFromDB } = require('../models/users');

const getUsers = async (req, res) => {
  const users = await getUsersFromDB();

  res.render('index', { users });
};

module.exports = { getUsers };
