import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

export const pool = new pg.Pool ({
host: 'localhost',
user: 'nom_db_admin',
port: 5432,
password: 'password',
database: 'nom_projet'
})
