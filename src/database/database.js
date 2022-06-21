const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db_path = path.join(__dirname, 'node-mvc');

class ConnectToDB {
  _client;

  get init() {
    if (!this._client) console.log('client not initialised!!');
    return this._client;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this._client = new sqlite3.Database(
        db_path,
        sqlite3.OPEN_READWRITE,
        (err) => {
          if (err) reject(err);
          console.log('Connected to Sqlite');
          resolve();
        }
      );
    });
  }
}

db = new ConnectToDB();

module.exports = { db };
