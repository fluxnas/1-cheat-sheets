https://www.youtube.com/watch?v=5MQWjWl16bs
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/

# node

node > framework   
npm > librairie en lien avec node qui facilite la creation de projet node
quitter node > deux fois : ctrl + c 

## MISE EN PLACE

1. terminal : npm init  : initialiser projet node

2. terminal : npm install express 
> plsrs fichiers / dossier apparaisse :  
  - node.modules tout ce que tinstalle va sinstaller ici : les librairies les dependances   
  - package.json : repertorie toutes les librairies node.modules  
quand on telecharge un fichier via github   
sur le terminal on fait npm install : il reinstalle toutes les dependances node.module grace au fichier package.json qui les repertorie  

3. terminal : npm install nodemon

4. dans fichier package.json:  
rajouter script :  
"run": "node index.js"  
"dev": "nodemon index.js"   

5. creeer fichier index.js et modifier :  
const express = require('express')  
// creation app qui depend de express :  
const app = express()  
// on dit a notre app decouter sur port 8080  
app.listen(8080, () => { console.log("salut")})  


## REQUETES / ROUTES :

### POSTMAN : tester la requete :
![Capture d’écran 2022-12-06 à 14 30 33](https://user-images.githubusercontent.com/104756701/205925473-0754d91c-49bc-47ab-8512-2ce8ee430e1d.png)


### FICHIER DE REQUETE.rest : enregistrer la requete :

- creer fichier a la racine du projet "notes_requests.rest" par exemple et lister les requetes séparer par **###**  

**GET http://localhost:8080/api/users** 
**###**  
**POST http://localhost:8080/api/users/ HTTP/1.1  
content-type: application/json  
{  "id" : 5,  
    "nom" : "connier",  
    "prenom" : "jf",  
}**  

### TYPE DE REQUETE : 
> **app.METHODE(CHEMIN, GESTIONNAIRE(req, res))**  
> (METHODE = get, post, delete, ...)

exemple :
- app.get('/pokemons/1, (req, res) => res.sen('les infos du pok 1'))   
- app.post('/pokemons', (req, res) => res.send('vous ajouter un pok au pokedex'))   
- app.put('/pokemons/1', (req, res) => res.send('vous modifier le pok 1'))  
- app.delete('/pokemons/1' (req, res) => res.send('le pok 1 est suppr'))   
- app.delete('/pokemons'), (req, res) => res.send('tous les pok suppr')   

autre exemple : 
- **CREATE** : Utilisez la méthode HTTP POST pour créer une ressource dans un environnement REST.    
	/books - **GET** - get the collection of books   
- **READ** : Utilisez la méthode GET pour lire une ressource et récupérer des données sans les modifier.   
	/books - **POST** - insert into the collection   
- **UPDATE** : utiliser la méthode PUT pour mettre à jour une ressource.     
	/book/:id - **PUT** - update the book with :id   
- **DELETE** : Utilisez la méthode DELETE pour supprimer une ressource du système.
	/book/:id - **DELETE** - delete the book with :id     

**GET :**    
pointers page /users renvoie touts les users --> tester dans insomnia avec verbe GET    
	**app.get('/api/users', (req, res) => {  
	res.json(users)  
  	})**   
pointers page users/id renvoie lusers defini par l'id --> tester dans insomnia avec verbe GET    
	**app.get('/api/users/:id', (req, res) => {   
  		const id = Number(req.params.id)   
  		const user = users.find(user => user.id === id)   
  		res.json(user)   
	})**   
  
  
**POST :** ajouter créer un user dynamique  --> tester dans insomnia avec POST   
	**app.post('/api/users', (req, res) => {  
		const { id, nom, prenom } = req.body  
		users.push({  
			id,  
			nom,  
			prenom  
		})  
		res.json(users)  
	})**  


**DELETE :**  pointer un id et supprimer sa ressource --> tester dans insomnia avec DELETE    
	**app.delete('/api/users/:id', (req, res) => {   
  		const id = Number(req.params.id)   
  		users = users.filter(user => user.id !== id)   
  		res.status(204).end()   
	})**  

**PUT** Mise a jour "update" d'un user --> tester dans insomnia avec PUT    
	**app.put('/api/users/:id', function(req, res) {  
		const Userid = Number(req.params.id)  
		const {id, nom, prenom} = req.body  
		users = users.map(function(user) {  
			if(user.id === Userid) {  
				return {  
					id,  
					nom,  
					prenom  
				}  
			}  
			return user  
		})   
		res.json(users)  
	})**

## CONNEXION DB : postgresql   
 
### Mise en place : dans le terminal :   
- lancer pg : **brew services start postgresql** --> stop : **brew services stop postgresql**   
- connect to default psql : **psql postgres**  
--> la ligne commence par : **postgres=#** : nous sommes connectés en tant que super-utilisateur ou root  
- avoir les infos de connexion : **postgres=# \conninfo**

> \q: Exit psql connection  
> \c: Connect to a new database  
> \dt: List all tables  
> \du: List all roles  
> \list: List databases  

### Créer un nouveau role :  
Pour ne pas utiliser les comptes par défaut, qui ont des privilèges de superutilisateur.
- creer un role : **postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';**
- donner le droit creer db au role : **postgres=# ALTER ROLE me CREATEDB;**
- sortir de postgres : **postgres=# \q**
- relier pg et me : **psql -d postgres -U me**
--> **postgres=#** se transforme en **postgres=>** (on est plus connecté en superuser)  

### Créer une db :
- creer db : **postgres=> CREATE DATABASE api;**
- voir les db dispo : **\list**  
- se connecter avec la nvlle api : me : **postgres=> \c api**

### Créer une table :
- creer une table users : 
**api=>  
CREATE TABLE users (  
  ID SERIAL PRIMARY KEY,  
  name VARCHAR(30),  
  email VARCHAR(30)  
);**  
- ajouter des données :
**api=>
INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'),**
  
### Configuration express & node.js :
- creer dossier pour le projet : **mkdir-nv-projet**
- creer un fichier json dans le dossier : **npm init -y**
- installer Express pour le serveur et node-postgres pour nous connecter à PostgreSQL : **npm i express pg**
- créer fichier index.js balbalbla voir plus haut 

### Connexion à une base de données Postgres avec Node.js : 
- créer fichier queries.js :
**const Pool = require('pg').Pool   
const pool = new Pool({   
  user: 'me',   
  host: 'localhost',   
  database: 'api',   
  password: 'password',   
  port: 5432,   
})**


### CREER DES ROUTES POUR DES OPERATINS CRUD : 

Dans le fichier queries.js :

**GET all users**  
const getUsers = (req, res) => {   
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {   
    if (error) {   
      throw error   
    }   
    response.status(200).json(results.rows)   
  })   
}   

**GET a single user by ID**   
const getUserById = (request, response) => {   
  const id = parseInt(request.params.id)   

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {   
    if (error) {   
      throw error   
    }   
    response.status(200).json(results.rows)   
  })  
}   

**POST a new user**
const createUser = (request, response) => {   
  const { name, email } = request.body   

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {    
    if (error) {   
      throw error   
    }   
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)   
  })   
}   

**PUT updated data in an existing user**
const updateUser = (request, response) => {   
  const id = parseInt(request.params.id)   
  const { name, email } = request.body   

  pool.query(   
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',   
    [name, email, id],   
    (error, results) => {  
      if (error) {  
        throw error   
      }   
      response.status(200).send(`User modified with ID: ${id}`)  
    }  
  )   
}   

**DELETE a user**
const deleteUser = (request, response) => {  
  const id = parseInt(request.params.id)  

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {  
    if (error) {  
      throw error  
    }  
    response.status(200).send(`User deleted with ID: ${id}`)   
  })   
}   

**Exporting CRUD functions in a REST API**
Pour accéder à ces fonctions depuis index.js, nous devons les exporter. 
Nous pouvons le faire avec module.exports, en créant un objet de fonctions.   

module.exports = {   
  getUsers,   
  getUserById,  
  createUser,  
  updateUser,  
  deleteUser,  
}  






















