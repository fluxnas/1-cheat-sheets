# STEPS  

SO we need first to create 3 things: ON A 3 ELEMENT QUI INTERARGISSENT ENSEMBLE   
- **client-side** ==> Postman   
> client va demander des infos au serveur pour des actions (get datas, save datas, crud)  
> comment le cote client parle avec le cote serveur pour demander les infos   
> a travers des api endpoints  

- **Server- Side** ==> Node/Express  
> va prendre la question du front et la transformer en query pour la DB   
> ici on parle a la DB via la node  pg library   

- **Database** ==> Posgresql DB  


## Let's start with a database :  

- log in on postgress : dans le terminal :  
	- **brew services start postgresql**   
	- **psql postgres**  

- **CREATE DATABASE *name of the db*;**  
- **CREATE USER *username* WITH ENCRYPTED PASSWORD 'password';**  
- **GRANT ALL PRIVILEGES ON DATABASE *name of the db* TO *username*;  
- donner l'accès a tout les schemas (créer utilisateur et créer le système : **GRANT ALL ON SCHEMA PUBLIC TO *username*;**  
- se co a partir de l'utilisateur créer : **\c *database* *username\***  

- **CREATE TABLE *table name* (id serial PRIMARY KEY, content VARCHAR);**  

- quitter : **\q**  

==> if you have an error like 'permission denied for schema public'  
You need to use your superuser account to give the acces to the new user created earlier  
\c *name of your new database* *postgres*  
GRANT ALL ON SCHEMA public to *user name*;  

==> it should be ok & then you can go back to your database with your new username in order to create the TABLE  
\c "name of your new database* *name of the new user*  


===> source = https://www.cybertec-postgresql.com/en/error-permission-denied-schema-public/  



> afficher les DB : \l  
> afficher les tables : \d  
> afficher liste utilisateur : \du  


## Let's continue with the SERVER SIDE on the terminal :  

- **touch index.mjs**  
- **npm init** (initialiser : accepter : touch entrée)  
- **npm install express --save**  

- ouvrir index.mjs : code index.mjs  
 
On your VSC : code :  
	import express from 'express'  
	const server = exrpress()  

	server.get('/',  (req,res) =>{  
    	res.send('hello world')  
	})  

	server.listen(3000)  

Terminal : node index.mjs  

==> localhost:3000 in order to check if the server is working in the browser. and we see a beautiful HELLO WORLD ==> server created  


## Time to shine from CLIENT SIDE for POSTMAN  

OPEN POSTMAN   

let's check if it's working on it  
GET localhost:3000 SEND  

We should see hello world in the console  


> CLIENT SIDE will ask the backend server for some action (get data, save, CRUD)  
> SERVER SIDE will take the frontend request and perform the right query to the DB  



## Let's go back to the VSC : connect db   

We will replace the endpoint from the server.get with some name here I choose test_table (in order to connect to the table in the DB)  

server.get('/test_table', function (req,res){  
res.send('{"name":"pepito"}')  
})  

But we have still to put some data in the DB :   
- **INSERT INTO test_table (content) VALUES('test content');**    

==> you can see the new content with the querry SELECT * FROM test_table;    


## LET's go back to the client side.  

HOW TO CONNECT the node to postgress?  
- Go to the terminal and add : **npm install pg --save**  

- Go back to VSC :  
**import express from 'express'  
const server = express()  
import pkg from 'pg'  
const {Client} = pkg  
const client = new Client({  
    host: 'localhost',  
    port: 5432,   
    database: 'lokkeroom_db',  
    user: 'lokkeroom_user',  
    password: 'password',  
})** 

// user : lokkeroom_user  
// db : lokkeroom_db  
// table : lokkeroom_table  

**server.get('/lokkeroom_table', (req, response) =>  {  
    // connecter a la database  
    client.connect((err) => {  
        if (err) {  
            console.error('connection error', err.stack)  
        } else {  
            // console.log('connected')  
        }  
    })  
    // select all de la database  
    client.query('SELECT * FROM lokkeroom_table', (err, res) => {  
        if (err) throw err // grace a cette ligne affiche l'erreur   
        console.log(res) // affiche la reponse dans mon terminal  
        response.send({connection: "successfull", connection_time: Date.now(), responde: res}) // renvoie les données à la personne qui a fait la requete original coté client:  
        client.end()  
    })  
}) 
server.listen(3000)**  


> DON T FORGET TO put node index.mjs in the terminal in order to launch the app & now you can test on POSTMAN and it should be ok  
> CLIENT SIDE TALK WITH THE SERVER SIDE   
> ==> Trough API ENDPOINTS  



## REMPLIR DB 
https://drawsql.app/?via=juan-pablo
- faire le schema 
- exporter en .sql
- se co a la db via le bon user
- copier coller le contenu du fichier .sql










 










