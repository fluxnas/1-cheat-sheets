# node

node > framework 
npm > librairie en lien avec node qui facilite la creation de projet node

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


## REQUETES / ROUTES

> **app.METHODE(CHEMIN, GESTIONNAIRE(req, res))**  
> (METHODE = get, post, delete, ...)

exemple :
- app.get('/pokemons/1, (req, res) => res.sen('les infos du pok 1'))
- app.post('/pokemons', (req, res) => res.send('vous ajouter un pok au pokedex'))
- app.put('/pokemons/1', (req, res) => res.send('vous modifier le pok 1'))
- app.delete('/pokemons/1' (req, res) => res.send('le pok 1 est suppr'))
- app.delete('/pokemons'), (req, res) => res.send('tous les pok suppr')

### Les middlewares 
permettent d'effectuer un traitement avant celui défini par les routes. On trouvera de nombreux middleware disponible sur NPM comme par exemple body-parser permettant de gérer les données postées par un formulaire par exemple.

### GET : 
recuperer toutes les infos des users :
    res.status() > defini un status pour la response
    res.json() > renvoie une promesse JSON : JSON en entrée et analyse pour produire un objet JavaScript. 
app.get('/users', (req, res) => {
	res.status(202).json(users)
  })
  
### POST : 
Besoin d'un autre middleware module pour POST 
terminal : npm install --save body-parser
relancer le serveur : npm run dev



