- Créer un dossier : dossier-projet
- se mettre dans le dossier via terminal : 
      - npm init
      - npm install express :     "run": "node index.mjs"
      - npm install nodemon :     "dev": "nodemon index.mjs"
- créer fichier index.mjs : 
import express from 'express'  
const app = express()  
app.listen(3000, () => {console.log('run port 3000')})  
- créer dosier routes.mjs avec un fichier auth.mjs pour y mettre les controllers
- l'importer et le relationner avec le fichier index.mjs
