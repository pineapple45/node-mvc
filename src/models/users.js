const { getDb } = require('../database/database');

const getUsersFromDB = async () => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    sql = 'SELECT * FROM Users';

    db.all(sql, [], (error, rows) => {
      if (error) reject(err);
      resolve(rows);
    });
  });
};

module.exports = { getUsersFromDB };
