## Mise en place SERVER et environnement travail :

- Créer un dossier : dossier-projet  
- via terminal installer les pkg dans le dossier :   
      - npm init -y  
      - Express — Node.js framework : **npm install express** -----> dans le script package.json : "run": **"node index.mjs"**  
      - Nodemon — Automatic restart of node when file changes : **npm install nodemon** -----> dans le script package.json : **"dev": "nodemon index.mjs"**  
      - Pg is PostgreSQL client for Node : **npm install pg**  
      - Bcrypt : For password hashing : **npm install bcrypt**  
      - Dotenv :For access to your environment variable : **npm install dotenv**  
      - JSON Web Token : For generating tokens : **npm install jsonwebtoken**  
      - CookieParser : For setting cookies : **npm install cookie-parser**  
-----> **npm install express nodemon pg bcrypt dotenv jsonwebtoken cookie-parser**   

- créer fichier server.mjs :   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/5132f321397a2b98b2a48f73fc80c8db32dfa7f5/cheat-sheet-code/server.mjs#L1-L21

- créer la structure a l'interieur du dossier avec des dossiers :  
      - Middleware : l'authentification -----> ***auth.mjs***   
      - Models : connexion DB -----> ***pools.mjs*** & ***dbConnect.mjs***   
      - Routes : lien des routes '/' -----> ***router.mjs***   
      - Controllers : methodes/logiques de chaque routes, queries/requêtes -----> ***login.mjs register.mjs logout.mjs***     
 
  

## Mise en place DATABASE et environnment de travail  
> reminder :   
> **\q** : Exit psql connection    
> **\c** : Connect to a new database    
> **\list** : List databases  
> **\du** : List all roles   
> **\dt** : List all tables          
> **DROP DATABASE ma_db** : supprime la database ma_db     
> **\conninfo** : info de connexion


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
- créer le **JWT_SECRETKEY** et ajouter dans le fichier **.env**   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/b1c467719a5db3470660ebb5db7c37c0bb6daf3a/cheat-sheet-code/.env#L1-L3  
- créer un nouveau fichier dans dossier ./nom_de_projet/models : **pool.mjs**    
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/b1c467719a5db3470660ebb5db7c37c0bb6daf3a/cheat-sheet-code/pool.mjs#L1-L9   
- créer un nouveau fichier dans dossier ./nom_de_projet/models : **connectDB.mjs**      
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/b1c467719a5db3470660ebb5db7c37c0bb6daf3a/cheat-sheet-code/dbConnect.mjs#L1-L12       


## Middleware : authentification
- créer fichier **auth.mjs** dans dossier ./nom_de_projet/middleware :   
-----> la logique qui recupere le token du header et qui verifie si cest le meme que celui stocké dans .env :   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/bafbd8779bb47f7a38df1b3c69d2e527396bc3fb/cheat-sheet-code/auth-verify-token.mjs#L1-L22
- créer fichier **doublons.mjs** dans dossier ./nom_de_projet/middleware     
-----> la logique qui vérifie si l'utilisateur ou l'email existe deja dans la db :
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/3082b60fde690f86d6404e6967ad1bb6d506c4d7/cheat-sheet-code/userAuth.mjs#L1-L43

## Controllers
*Explications controllers :*    
Le contrôleur contient la logique permettant d'enregistrer l'utilisateur dans notre base de données et de se connecter.     
Deux fonctions :  
- signup : crée un nouvel utilisateur en hachant son mot de passe avec bcrypt avant de le sauvegarder dans la base de données.    
- login :  
      - trouve l'email de la demande dans la base de données, s'il existe  
      - compare le mot de passe avec le mot de passe existant dans la base de données s'il correspond,  
      - générer un jeton avec l'identifiant de l'utilisateur en utilisant ( JWT ) et créer un cookie avec Cookie-Parser pour l'utilisateur  
      - retourner les informations sur l'utilisateur  
____
*Explications variables d'environnements :*  
Dès que votre projet Node.js utilisera une base de données, un stockage d'objets ou une API externe, vous devrez stocker des informations d'identification.
Ces informations d'identification, comme les noms d'utilisateur, les mots de passe ou les tokens, sont appelés des secrets que vous devez garder évidemment secrets. -----> use **dotenv** library -----> variables stockées dans **.env** SECRET_KEY   
CE FICHIER NE DOIT PAS ETRE POUSSER SUR LE GIT -----> créer **.gitignore**   
____
- créer le fichier **userController.mjs** comme ceci :   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/eeffc1f55cdb4c50c78aff4d3af07d62e0fc14d6/cheat-sheet-code/userControllers.mjs#L1-L86   

## Routes   
Dans le dossier routes, configurez les routes pour l'application en utilisant le module Router fourni par Express.js. Créez donc un fichier dans le dossier routes appelé userRoutes.js. Dans la route d'inscription, le middleware est passé pour vérifier les doublons de noms d'utilisateurs et d'emails dans la base de données.  


> si on export : **export const createUser = (request, response)** pour chaque const   
> --> alors on import comme ca : import { allUsers, createUser } from './routes.mjs'   
> ou si on utilise qu'un seul export a la fin du fichier : **export default client**   
> --> alors on import comme ca : import client from './routes.mjs'   

