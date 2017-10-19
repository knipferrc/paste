import Database from 'better-sqlite3'

const db = new Database('src/server/data/dev.db')

const usersTable = db.prepare(
  'CREATE TABLE if not exists users(id text, email text, password text, firstName text, lastName text)'
)
usersTable.run()

const pastesTable = db.prepare(
  'CREATE TABLE if not exists pastes(id text, title text, description text, content text)'
)
pastesTable.run()

export default db
