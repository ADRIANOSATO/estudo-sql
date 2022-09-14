const SQLite = require("sqlite3");
const path = require("path");

const db = new SQLite.Database("./src/db/database.db");

const fileDatabase = path.join(__dirname, "db", "database.db");

SQLite.verbose();

async function main() {
  const sql = `

    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL  
    );
`;
  const callback = (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Table created successfully", result);
    }
  };

  db.run(sql, callback);
}

main();
