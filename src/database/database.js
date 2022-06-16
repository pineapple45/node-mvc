const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db_path = path.join(__dirname, 'node-mvc');
let db;

const connectToDb = () => {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database(db_path, sqlite3.OPEN_READWRITE, (err) => {
      if (err) reject(err);
      console.log('Connected to Sqlite');
      resolve();
    });
  });
};

const getDb = () => db;

module.exports = { connectToDb, getDb };
