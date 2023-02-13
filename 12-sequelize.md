# Sequelize : orm (object relational mapping) 

librairie qui permet de gerer tout les trucs lourd en background


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
- dans le dossier config : config.json
-> 3 environnements : developpement, test, production  
-> et changer le fichier :   
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/eda064547c9e948a478e9c8f2b36c6d9cc3e480a/cheat-sheet-code/config.json#L1-L39
+ créer le fichier **.env**
- dans le dossier **models** on a le fichier **index.js** qui contient les models de db quon va ajouter et changer  
> changer le debut du fichier avec : 
....
...
...
- dans le terminal : créer le premier model dans le dossier **sequelize** : **npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string**
--> ca créait un fichier user.js dans le model et aussi un fichier dans le dossier migration
- changer fichier user.js :
https://github.com/fluxnas/00-CHEAT-SHEETS-COURSES/blob/e6920ff6d58d3184b48bc68a438a7421b148398d/cheat-sheet-code/user.js#L1-L30
- le fichier migrations : gère les modifs du code source permet de suivre les modifs apporté a la db
- dans le terminal dossier sequelize : **npx sequelize-cli db:migrate**