 
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
- dans tailwind.config.js dans le content : **["./src/\*\*/\*.{html,js, jsx}"]**
- installer extension sur vs code (1 fois) : ES7+ React/Redux/React-Native snippets
- dans dossier "page-accueil" creer fichier "page-accueil.jsx" et taper **rfc + enter** ca creer le debut de fichier
- se ref ici pour les components : https://tailwindcomponents.com/cheatsheet/
- creer un component dans fichier home.jsx : 
https://github.com/fluxnas/1-cheat-sheets/blob/75cc1664d1d0349a809ce35eac67ca7ca3d82732/cheat-sheet-code/component.js#L1-L12
- installer module : **npm install react-router-dom**
- dans App.js importer les routes et les creer : **import { BrowserRouter as Router, Routes, Route } from "react-router-dom";** 
https://github.com/fluxnas/1-cheat-sheets/blob/49d1fdbc628ebd724b9b93bbc730cc7d3abbb15c/cheat-sheet-code/routes.js#L2-L18



# JSX

## 5 regles :
- noms des propriétés écrit en camelCase :   
html : \<input maxlength="5" />    
jsx : \<input **maxLength**={5} />   

- nombres utilise les { } :    
html : \<input maxlength="5" />     
jsx : \<input maxLength=**{5}** />    

- le booleen true est ecrit simplement false avec des { }  :    
html : \<input speelcheck="true" /> & <input speelcheck="false" />   
jsx : \<input **speelCheck** /> & <input **speelCheck={false}** />   

- les class sont marqué className :    
html : \<div class="divider" />   
jsx : \<div **className**="divider" />   

- les styles sont des objets :    
html : \<a style="text-decoration:'none'; padding-top:'5px';" />   
jsx : \<div **style={{ textDecoration: 'none', paddingTop: '5px' }}**  

# import

quand on import un fichier .js pas besoin d'extension fichier   
quand on import d'autres fichiers .css .json .png, .jpg ...

# images import

lorsqu'on importe une image si :
images < 9.7kb --> <img src="data:image/png..." />
images > 9.7kb --> <img src="/static/media/name.png />
 
# events : detecte que le user clique sur un bouton   
utiliser les events a chaque fois qu'un user interargit et quun element change (onClick onChange drag typing....)   
 - determiner l'event : l'interaction que l'user va avoir   
 https://legacy.reactjs.org/docs/events.html    
 - créer une fonction (event handler ou callback) 
 - la nommer : handle + action (handleClick, handleScroll...) 
 - passer la fonction comme prop à un élément 
 - bien verifier que la fonction passée en prop a un nom d'évent valide (onClick, onMouseOver...)
 - bien appelé la propriété qui appel la fonction : **onClick**={handleClick}
 
# state useState() : 
--> fait apparaitre a l'ecran les changements en reaction a l'event. a chaque fois que ces données changent react va mettre a jour le contenu a l'écran automatiquement    
useState -> defini une nouvelle piece de donnée qui va changer, donc a chaque fois que la données change on veut reactualiser le component
useState est utilisé à chaque fois que l'on veut réactualiser un élément sur la page
 
**const [count, setCount] = useState(0)**     
- 0 : la valeur initiale par défault pour le "morceau d'état"   
- count (compte) : notre "morceau d'état" qui va changer avec le temps (string, tableau, objet...)    
- setcount (décompte) : cest la fonction "paramètres" utiliser pour update le count (le "morceau d'état")    

### .map function
souvent utiliser en react pour transformer chaques element dun tableau en une liste de components à l'utilisateur  
 
                      
# utiliser un API avec react

### faire une requete http (librairie Axios ou fetch)
terminal : **npm install axios**
                        
