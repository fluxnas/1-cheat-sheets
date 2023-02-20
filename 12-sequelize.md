# Sequelize : orm (object relational mapping) 

librairie qui permet de gerer tout les trucs lourd en background

ref : https://marquesdev.gitbooks.io/1-jour-1-bibliotheque-sequelize/content/chapitre-4-pas-a-pas/gestions-des-utilisateurs/creation-des-modeles-et-des-migrations.html.  

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
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/935bd8c19a4e3f955f5e4e216108418d41915f59/cheat-sheet-code/config.js#L1-L24
+ créer le fichier **.env**  
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/fafde0f6ca38d036363420f226c14dae50c92681/cheat-sheet-code/.env-2#L1-L4
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
- dans le terminal : créer le premier model dans le dossier sequelize : **npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string**
--> ca créait un fichier user.js dans le model et aussi un fichier dans le dossier migration
- changer fichier user.js :
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/e6920ff6d58d3184b48bc68a438a7421b148398d/cheat-sheet-code/user.js#L1-L30
- le fichier migrations : gère les modifs du code source permet de suivre les modifs apporté a la db
- dans le terminal dossier sequelize : **npx sequelize-cli db:migrate**
> - on peut revenir en arrière : **npx sequelize-cli db:migrate:undo**
-  dans le fichier migration qui vient d'etre créer changer createdAt et updatedAt par created_at et updated_at
