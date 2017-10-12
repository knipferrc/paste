import Database from 'better-sqlite3'

const db = new Database('dev.db')

const usersTable = db.prepare('CREATE TABLE if not exists users(id text, firstName text, lastName text, email text, password text)')
usersTable.run()

export default db
