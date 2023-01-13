## Mise en place SERVER et environnment travail :

- Créer un dossier : dossier-projet  
- via terminal installer les pkg dans le dossier :   
      - npm init -y  
      - Express — Node.js framework : **npm install express** :     "run": "node index.mjs"  
      - Nodemon — Automatic restart of node when file changes : **npm install nodemon** :     "dev": "nodemon index.mjs"  
      - Pg is PostgreSQL client for Node : **npm install pg**  
      - Bcrypt : For password hashing : **npm install bcrypt**  
      - Dotenv :For access to your environment variable : **npm install dotenv**  
      - JSON Web Token : For generating tokens : **npm install jsonwebtoken**  
      - CookieParser : For setting cookies : **npm install cookie-parser**  

    Sequelize — object relational mapper for PostgreSQL npm install --save sequelize   
    pg-hstore is a node package for serializing and deserializing JSON data to hstore format — npm install pg-hstore   

- créer fichier server .mjs :   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/2fc6063e48b532ff82b59120253fcf698bb294f1/cheat-sheet-code/server.mjs#L1-L21  

- créer la structure a l'interieur du dossier :  
      - Controllers  
      - Models  
      - Routes  
      - Middlewares   

## Mise en place DATABASE et environnment de travail  
- Créer / configurer la database :   
      - lancer postgresql avec utilisateur par default "postgres" : **psql postgres**  
      - creer un role : postgres=# **CREATE ROLE name_project_admin WITH LOGIN PASSWORD 'password';**  
      - donner le droit creer db au role : postgres=# **ALTER ROLE name_project_admin CREATEDB;**  
      - sortir de postgres : postgres=# **\q**  
      - relier pg et me : **psql -d postgres -U name_project_admin**   
      -----> postgres=# se transforme en postgres=> (on est plus connecté en superuser)  
      - creer une db : postgres=> **CREATE DATABASE name_project_db;**   
      - voir les db dispo : postgres=> **\list**  
      - se connecter a la nvlle db : postgres=> **\c name_project_db;**    
- creer une table :   
      - avec les infos voulues : name_project_db => **CREATE TABLE users ( ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30) );**    
      - importer depuis un schema : https://drawsql.app/diagrams    
      -----> example : https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/7bcf7bc8e8a5beca73e9674a08e0b71055c3e15c/cheat-sheet-code/example-db-creation.mjs   
      - quitter postgres : **\q***  

## Connecter SERVER et DATABASE   
- créer un nouveau fichier .env a la racine : **.env**   
-----> en utilisant ce site pour les password : https://www.motdepasse.xyz/    
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/191d35f188bbff5447d381ed048a91f059a50aa8/cheat-sheet-code/.env.mjs#L1-L5   
- créer un nouveau fichier dans dossier ./nom_de_projet/models : **connectDB.mjs**     
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/dc82344a339281faf1efca05fd77fe20685a4e50/cheat-sheet-code/connectDB.mjs#L1-L12   
- créer un nouveau fichier dans dossier ./nom_de_projet/models : **pool.mjs**   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/dc82344a339281faf1efca05fd77fe20685a4e50/cheat-sheet-code/pool.mjs#L1-L11   
