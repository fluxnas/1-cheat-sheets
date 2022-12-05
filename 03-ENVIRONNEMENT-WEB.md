# ENVIRONNMENT WEB

ARCHITECTRURE 3 TIERS : 
- CLIENT 
- SERVEUR WEB
- BD : source de données

## TIERS 1 : CLIENT :

### **URL : https://site.com/a-propos : divisé en 3 parties :**    
  **- 1ere partie:** https:// : protocole   
  **- 2eme partie :** site.com : hote : serveur que l'on vise avec notre url : nom de domaine : id unique d'un serveur web (dissimule l'adresse ip (internet protocole) : 145.56.98.0)   
    fait un detour par un DNS (domaine name system) pour recuperer l'adresse ip qui se cache derrière le nom de domaine   
    grace a l'ip on peut contacter le serveur    
  **- 3eme partie :*** /a-propos/ : ressource : permet de localiser la source sur le serveur   

### HTTPS :
ok on sait ou se situe la source  
maintenant on doit utiliser un protocole qui permet la comunication entre les deux réseaux : interface utilisateur et serveur   

#### **- LE CLIENT ENVOIE UNE REQUETE HTTPS : divisé en 3 parties :**
  **- 1ere partie:**
  > GET /a-propos/ HTTP/1.1  
  
  GET : methode http : le verbe :   
    - GET : récupère la ressource   
    - POST : envoi des données sur un serveur (ex: formulaire)  
    - PUT : modifie des données   
    - DELETE : supprime des données   
  /a-propos/ : localisation dela ressource  
  HTTP/1.1 : version d'http utilisé   

   **- 2eme partie : L'en-tête de la requête (headers):**   
   > Host : site.com   
   > user-agent: mozilla/5.0   
   > ...  
  
  informations structurés au format clef valeur exploité par le serveur web   
  ces infos sont normalisés avec des conventions qui permettent dêtre interpreter par tout les serveurs   
  --> généralement gérer par le serveur seul   

  **- 3eme partie : Le corps de la requête (body) :**
  > {   "message" : "lorem ipsum"   
  >     "submit" : true   
  >     "option" : 4   
  > }  
  
  ici les infos sont diverses : on peut avoir du json, html , images... mais generalement xml ou json   
  --> gérer manuellement par les programeureuses   
    
#### **- ET LE SERVEUR REPONDS PAR UNE REPONSE HTTPS :**

   **- 1ere partie:**  
   > HTTP/1.1 200 OK   

HTTP/1.1 : version http  
200 : code du status : code a 3 chiffres :   
  - 1XX informational  
  - 2XX : success  
  - 3XX : redirection  
  - 4XX : client error  
  - 5XX : server error    

OK : explication de ce code  
  
   **- 2eme partie : L'en-tête de la reponse (headers):**      
   > Server : nginx/1.14.0 (Ubuntu)  
   > Date : Sun, 03 May 2020 21:14:12 GMT   
   > ... 

explique au navigateur comment il doit se comporter
   
  **- 3eme partie : Le corps de la requête (body) :**
   
   > < !DOCTYPE html >     
   > < html lang="fr" >   
   > < head >   
   > ...
 
 le body qui contient la ressource que l'on a demandé


## TIERS 2 : SERVEUR WEB :

C'es un logiciel qui permet de lire et repondre a des requetes http   
Le server recoit la requete :   
 - lis la requete (ex headers)  
 - effctue une action (en fonction de la ressource demander par le client dans l'url)  
 - construit sa reponse http contenant le code de status et les header + info resutante de l'action qu'il a effectué dans le body de la reponse   
 la ou ca se complique cest lorsque le server va lancer un script et retourner le resultat au client :  
 cela signifie qu'il va falloir faire un programme qui réponds a une url bien specifique  
 --> et cest la notre boulotttttt !! dev web back end   
 --> CEST CE QU'ON APPEL UN API REST : cad une fonction dispo sur un server que l'on peut declencher avec une requete http et qui retourne un resultat simple et facilement exploitable     

 en backend on peut programmer avec nimporte quel langage : tant que le server web est compatible avec le langage utilisé, exemple :   
- php : utilisé apache et nginx   
- js : utilisé node et express   
- c sharp ou vb net utilisé 2is asp.net   
- ...   

On attend d'un server web quil retourne des pages web : 2 methodes :   
- le server creer des page html dans le repertoire du server web : page web statique elle ne change pas   
- le server lance un script qui va venir construire une page sur mesure : page web dynamique     

le fichier php : php permet de construire des pages html : c'est le script !   


## TIERS 3 : BD : source de données 

Pour creer une page, le server qui créait le script doit venir recuperer les données a afficher quelque part : une source de données. 
Ca peut etre des fichiers json, xml, csv, txt... Mais la forme la plus puissant : BASE DE DONNEES !
Cette base de donnée est controlé par un SGBD (systeme de gestion de base de donne) ou "serveur de base de donné" ou DBSM (data base system manager). Cela permet d'interargir facielemnt avec la base de donnée. 

Les base de données permettent :   
- structurer et organiser les données  
- interargir facilement avec celle ci
- separer les données du server web  

- Différentes possibilités de SGBD : mysql, postgresql, oracle, mongodb...  
- Langage de requete utilisé par enormement de SGBD pour faire leur propre langage : SQL   

 SELECT  
 INSERT  
 UPDATE  
 ...

--> ce que le dev fait :  
- construire la base de donnée  
- la maintenir dans le temps  
- ecrire les requete dans le script  

RESUME pour construire la page :  
- le script envoie la requete au SGBD   
- le SGBD interargit directement avec les données et renvoie ce qui a été demandé dans la requete  
- maintenant que le script a les données : il peut construire la page web 


## CONSLUSION 

- client demande page web : envoie requete http a un server web  
- le server recoit la requete et peut   
   - retourner la resource a l'utilisateur : page statique    
   - lancer un script et retourner le resultat pour construire page html :   
     --> parfois le script va avoir besoin de travailler avec des données exterieur :   
     pour se faire il va faire une requete auprès d'un SGBD   
        --> le SGBD va alors interargir avec la base de donnes et les renvoyer au serveur  
   - une fois que le script est termine et que la ressource est terminé   
     --> le server web va pouvoir renvoyer le resultat dans une reponse HTTP au client   
     --> et le navigateur va afficher la page web   


exemple de langage / server / bd :
![Capture d’écran 2022-12-05 à 13 11 42](https://user-images.githubusercontent.com/104756701/205634301-b819204d-e46b-4a1e-9c5b-e656a92e54d5.png)

tuto from : https://www.youtube.com/watch?v=tpLAcLFn9-U




## RESUME : 
![317333464_1534943820264213_6471252226176950663_n](https://user-images.githubusercontent.com/104756701/205656014-d6b3b280-3372-4980-80a0-95cba1e7f369.png)




## TIPS

serveur : localhost
sgbd : postgresql
ecrire le script : node.js / express

