const { db: database } = require('../database/database');

const getUsersFromDB = async () => {
  return new Promise((resolve, reject) => {
    const db = database.init;
    sql = 'SELECT * FROM Users';

    db.all(sql, [], (error, rows) => {
      if (error) reject(err);
      resolve(rows);
    });
  });
};

const getUserByIdFromDB = (id) => {
  return new Promise((resolve, reject) => {
    const db = database.init;
    sql = `SELECT * FROM Users WHERE id=${id};`;
    db.get(sql, [], (error, row) => {
      if (error) reject(error);
      resolve(row);
    });
  });
};

const updateUserInDB = async (id, updatedName) => {
  return new Promise((resolve, reject) => {
    // const db = getDb();
    sql = `UPDATE Users SET Name = "${updatedName}" WHERE id=${id};`;
    db.run(sql, [], (error, row) => {
      if (error) reject(error);
      resolve(row);
    });
  });
};

const deleteUserInDB = async (id) => {
  return new Promise((resolve, reject) => {
    const db = database.init;
    sql = `DELETE FROM Users WHERE id=${id};`;
    db.run(sql, [], (error, row) => {
      if (error) reject(error);
      resolve(row);
    });
  });
};

const createUserInDB = async (name) => {
  return new Promise((resolve, reject) => {
    const db = database.init;
    sql = `INSERT INTO Users VALUES ("${name}" , ${parseInt(
      Math.random() * 1000
    )})`;
    db.run(sql, [], (error, row) => {
      if (error) reject(error);
      resolve(row);
    });
  });
};

module.exports = {
  getUsersFromDB,
  updateUserInDB,
  getUserByIdFromDB,
  deleteUserInDB,
  createUserInDB,
};
