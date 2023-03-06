 
# Creation front avec react 

- install react : **npx create-react-app nom-projet**   
- **npm start**  
- ouvrir le dossier nom-projet dans vs code
- dans dossier src creer dossier "components"
- creer git sur github : et relier le fichier local au fichier github en ligne : 
> - git init
> - git commit -m "first commit"
> - git branch -M master
> - git remote add origin https://github.com/fluxnas/fluxion3000.git
> - git push -u origin master
- creer fichier assets et mettre les images dedans
- creer une branche : **git branch page-accueil** et se co : **git checkout page-accueil**
- creer dossier : **page-accueil** dans dossier "components"
- installer tailwind (gère le css) : **npm install -D tailwindcss** dans dossier "nom-projet"
- init le tailwind : **npx tailwindcss init**
- -suppr le fichier index.css et la route dans index.js "/index.css" devient "App.css"
- tt suppr et coller ca dans le "App.css" : 
> @tailwind base;
> @tailwind components;
> @tailwind utilities;
- dans tailwind.config.js dans le content : **["./src/\*\**/\*.{html,js, jsx}"]**
- installer extension sur vs code (1 fois) : ES7+ React/Redux/React-Native snippets
- dans dossier "page-accueil" creer fichier "page-accueil.jsx" et taper **rfc + enter** ca creer le debut de fichier
- se ref ici pour les components : https://tailwindcomponents.com/cheatsheet/
- 
