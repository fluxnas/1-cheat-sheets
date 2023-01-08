https://www.kindsonthegenius.com/build-a-rest-api-with-node-js-and-postgresql-get-post-putdelete-step-by-step/

une fois le server créé, mise en place node, index.mjs, package.json ....   

- terminal : demarrer postgres : brew services start postgresql  
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
