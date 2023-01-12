# JWT authentification stateless ( sans état : il ne stocke pas de données et ne fait référence à aucune transaction passée)

JWT composé de trois parties :
- un header : info du token : comment il est construit (algo, type, date expiration...)
- un payload (les “claims”) : données a crypter
- la signature : vérifier et conserver l'intégrité des données : elle reprends les 2 premières parties, les concatène et les encrypte 

ce token va etre envoyé au backend pour certaines requètes et récuperer des données
le back va recevoir --> décrypter la signature --> refaire le calcul  (header + payload) --> et verifier si les deux objets decrypter sont similaires

![325013279_680360187156740_7452717049033101924_n](https://user-images.githubusercontent.com/104756701/212021254-1c5591bd-d012-4d23-9381-c1f157093bc5.jpg)


##creeer le tokens, besoins 3 choses :

-  **clef secrète** pour securise le jwt :  
dotenv : **npm install dotenv** + creer un fichier d'environnement : **.env** :
**ACCESS_TOKEN_SECRET = huigm
REFRESH_TOKEN_SECRET = jhgjhl**
--> + importer dans index.mjs : **import ('dotenv').config from ('./.env')**   
--> créer access token : fontion :   
**function generateAccessToken(user) {return jwt.sign(user, process.env.CCESS_TOKEN_SECRET, {expireIn:'1800s'})}**   
--> generer premier jwt :   
**const accessToken = generateAccessToken(user);**  

-  **données a stocker** : 
-  date dexpiration du token : 


## trier ses fichiers / dossiers : 

- config : 
    - configurer la base de données PostgreSQL et Sequelize
    - configurer la clé d'authentification

- routes
    - auth.routes.js : POST signup & signin
    - user.routes.js : GET ressources publiques et protégées

- middlewares
    - verifySignUp.js : vérifie les doublons de nom d'utilisateur ou d'e-mail
    - authJwt.js : vérifie le Token, vérifie les rôles des utilisateurs dans la base de données

- controllers
    - auth.controller.js : gère les actions d'inscription et de signature
    - user.controller.js : retourne les contenus publics et protégés

- models pour les modèles Sequelize
    - user.model.js
    - role.model.js

- server.js : importe et initialise les modules et routes nécessaires, écoute les connexions.


v
