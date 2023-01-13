- Créer un dossier : dossier-projet
- se mettre dans le dossier via terminal : 
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


- créer dosier routes.mjs avec un fichier auth.mjs pour y mettre les controllers
- l'importer et le relationner avec le fichier index.mjs
