const express = require('express');
const path = require('path');
const { connectToDb } = require('./database/database');
const {
  getUsers,
  updateUser,
  getUserByID,
  deleteUser,
  createUser,
  newUser,
} = require('./controllers/users');

const app = express();
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', getUsers);
app.get('/:id/update', getUserByID);
app.post('/:id/update', updateUser);
app.post('/:id/delete', deleteUser);
app.get('/create', newUser);
app.post('/create', createUser);

const run = async () => {
  await connectToDb()
    .then(() => {
      app.listen(3000, () => console.log('Listening on PORT 3000'));
    })
    .catch((err) => {
      console.log('Error connecting to DB...', err);
    });
};

run();
