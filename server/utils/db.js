const Database = require('better-sqlite3')

const db = new Database('data/dev.db')

const usersTable = db.prepare(
  'CREATE TABLE if not exists users(id text, email text, password text, firstName text, lastName text)'
)
usersTable.run()

const pastesTable = db.prepare(
  'CREATE TABLE if not exists pastes(id text, title text, description text, content text)'
)

pastesTable.run()

module.exports = db
