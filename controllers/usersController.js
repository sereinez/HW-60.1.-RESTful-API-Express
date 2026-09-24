const getUsers = (req, res) => {
  res.type('text').send('Get users route');
};

const createUser = (req, res) => {
  res.type('text').send('Post users route');
};

const getUserById = (req, res) => {
  res.type('text').send(`Get user by Id route: ${req.params.userId}`);
};

const updateUserById = (req, res) => {
  res.type('text').send(`Put user by Id route: ${req.params.userId}`);
};

const deleteUserById = (req, res) => {
  res.type('text').send(`Delete user by Id route: ${req.params.userId}`);
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
