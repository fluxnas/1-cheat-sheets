# Sequelize : orm (object relational mapping) 

librairie qui permet de gerer tout les trucs lourd en background

ref : 
- https://marquesdev.gitbooks.io/1-jour-1-bibliotheque-sequelize/content/chapitre-4-pas-a-pas/gestions-des-utilisateurs/creation-des-modeles-et-des-migrations.html    
- https://runebook.dev/fr/docs/sequelize/manual/migrations    

commencer : 
- creer son projet, son server, .gitignor, .env ...   
- dans le terminal : **npm install sequelize**   
- ? dans le terminal : **npm install sequelize-cli** ?   
- creer un nouveau folder a la racine du backend : **sequelize**   
- aller dans le dossier : **cd sequelize**    
- **npx sequelize-cli init**    
-----> cela créer un dossier avec :   
-----> - dossier config   
-----> - dossier migrations   
-----> - dossier models   
-----> - dossier seeders   
- dans le dossier config : changer config.json par config.js
-> 3 environnements : developpement, test, production  
-> et changer le fichier :   
https://github.com/fluxnas/1-cheat-sheets/blob/30053813f97cb890fd9e29816049bcc9bf56b24d/cheat-sheet-code/config.js#L1-L27
+ créer le fichier **.env**  
https://github.com/fluxnas/1-cheat-sheets/blob/fafde0f6ca38d036363420f226c14dae50c92681/cheat-sheet-code/.env-2#L1-L4
- créer la db dans le terminal 
> - CREATE ROLE name_project_admin;
> - ALTER ROLE name_project_admin LOGIN;
> - ALTER ROLE name_project_admin CREATEDB;
> - GRANT ALL ON SCHEMA PUBLIC TO name_project_admin;
> - GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA PUBLIC TO name_project_admin;
> - \q
> - psql -d postgres -U name_project_admin
> - CREATE DATABASE name_project_db;
> - \c name_project_db;

- dans le dossier **models** on a le fichier **index.js** qui contient les models de db quon va ajouter et changer  
- dans le terminal : créer le premier model dans le dossier sequelize : **npx sequelize-cli model:generate --name user --attributes first_name:string,last_name:string,email:string**
--> ca créait un fichier user.js dans le model et aussi un fichier dans le dossier migration
- rajouter l'id dans le fichier user.js : 
https://github.com/fluxnas/1-cheat-sheets/blob/fb29562e609258c2bbac18bf9449514502b96247/cheat-sheet-code/user.js#L1-L30
- le fichier migrations : gère les modifs du code source permet de suivre les modifs apporté a la db
- dans le terminal dossier sequelize : **npx sequelize-cli db:migrate**
> - on peut revenir en arrière : **npx sequelize-cli db:migrate:undo**
-  dans le fichier migration qui vient d'etre créer changer createdAt et updatedAt par created_at et updated_at
- on peut créer un script pour garder une trace dans le package.json :    
**"make-model" : "npx sequelize-cli model:generate --name user --attributes first_name:string,last_name:string,email:string"**    
et **"migrate" : "npx sequelize-cli db:migrate"**
- s'il n'arrive pas a trouver certains fichier : créer un fichier à la racine : **.sequelizerc**   
https://github.com/fluxnas/1-cheat-sheets/blob/725d3596258dfe267644e10b57923827b7fd579e/cheat-sheet-code/.sequelizerc#L1-L8
- creer connexion db et routers/controllers


# créer une migration : ajouter une colonne
- terminal : **npx sequelize-cli migration:create --name modify_users_add_new_fields**
- changer le fichier de migration : 
https://github.com/fluxnas/1-cheat-sheets/blob/9831c80debdd310c4423c3215c1ee34efcc2b970/cheat-sheet-code/migration.js#L1-L18
- ajouter les changements dans le model 
- run la migration : terminal : **npx sequelize-cli db:migrate**



# ajouter une image cloudinary
- creer la route dans le user : requête : **server.post("/user/image", uploadImage)**
- creer la connexion a cloudinary : (provisoirement dans le **imageController.js**
const cloudinaryConfig = () => {   
  cloudinary.config({    // ==> basic cloudinary config (you will retrieve the infos in your cloudinary account)  
  cloud_name: process.env.CLOUD_NAME,   
  api_key: process.env.API_KEY,  
  api_secret: process.env.API_SECRET   
});   
}   
- ajouter dans le .env les infos de cloudinary : https://console.cloudinary.com/console/c-8eb8e0979c97e1fa04da1c80a0bb36/media_library/folders/home   
**CLOUD_NAME=|||    
API_KEY=|||  
API_SECRET=|||**   
-> et l'importer dans server.mjs (avec le controller) :    
**import image from "./controllers/imageController.js";   
const { uploadImage, cloudinaryConfig } = image;** 
-> et importer aussi dans server.mjs : **cloudinaryConfig();**   
- installer dans terminal : **npm install express-fileupload**
-> importer dans server.mjs : **import fileUpload from "express-fileupload";**   
-> et :   
**server.use(   
  fileUpload({   
    useTempFiles: true,   
    limits: { fileSize: 50 * 2024 * 1024 },   
  })   
);**   
- creer le controller image : **uploadImage** dans **imageController.js**   
https://github.com/fluxnas/1-cheat-sheets/blob/26d8f29cd18334ce5561c539d6bd497f621795b7/cheat-sheet-code/imageController.js#L1-L38
- tester avec insomnia : requete put, changer json par multipart form, entrer image et telecharger l'image
