import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

export const pool = new pg.Pool ({
database: process.env.DATABASE_NAME,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
port: process.env.DATABASE_PORT,
host: process.env.DATABASE_HOST,
})
