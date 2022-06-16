const express = require('express');
const path = require('path');
const { connectToDb } = require('./database/database');
const { getUsers } = require('./controllers/users');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

app.get('/', getUsers);

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
