https://www.kindsonthegenius.com/build-a-rest-api-with-node-js-and-postgresql-get-post-putdelete-step-by-step/

une fois le server créé, mise en place node, index.mjs, package.json ....   

> \q: Exit psql connection  
> \c: Connect to a new database   
> \dt: List all tables   
> \du: List all roles   
> \list: List databases   
> DROP DATABASE ma_db : supprime la database ma_db   


- terminal : demarrer postgres : brew services restart postgresql   
- creer une DB : terminal : createdb test
- terminal : installer package dotenv : npm install dotenv  
> importer dans le fichier index.mjs :   
import dotenv from 'dotenv'   
dotenv.config() 
- Connect to a PostgreSQL : creer un fichier client.mjs :
import pkg from 'pg'   
const {Client} = pkg  
const client = new Client({
    host: 'localhost',
    user: 'me',
    port : 5432,
    password: 'password',
    database: 'test'
})
export default client
> importer dans le fichier index.mjs : import client from './client.mjs'
