import Database from 'better-sqlite3'

const db = new Database('data/dev.db')

const usersTable = db.prepare(
  'CREATE TABLE if not exists users(id text, email text, password text, firstName text, lastName text)'
)
usersTable.run()

export default db
