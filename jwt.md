WT composé de trois parties :

    un header : info du token : comment il est construit (algo, type, date expiration...)
    un payload (les “claims”) : données a crypter
    la signature : vérifier et conserver l'intégrité des données : elle reprends les 2 premières parties, les concatène et les encrypte

ce token va etre envoyé au backend pour certaines requètes et récuperer des données le back va recevoir --> décrypter la signature --> refaire le calcul (header + payload) --> et verifier si les deux objets decrypter sont similaires

JWT authentification stateless ( sans état : il ne stocke pas de données et ne fait référence à aucune transaction passée)

## 3 éléments importants :  
Ensemble, ils sont combinés à une structure standard : header.payload.signature

- un header : info du token : comment il est construit (algo, type, date expiration...)
{"typ": "JWT",
"alg": "HS256"}
- payload : données a crypter et a stocker dans le JWT 
> {
>  "userId": "abcd12345ghijk",
>  "username": "bezkoder",
>  "email": "contact@bezkoder.com",
>  "iss": "zKoder, author of bezkoder.com", // iss (Issuer): who issues the JWT
>  "iat": 1570238918, // iat (Issued at): time the JWT was issued at
>  "exp": 1570238992 // exp (Expiration Time): JWT expiration time
>}
- Signature : vérifier et conserver l'intégrité des données : elle reprends les 2 premières parties, les concatène et les encrypte

Ce token va etre envoyé au backend pour certaines requètes et récuperer des données le back va recevoir --> décrypter la signature --> refaire le calcul (header + payload) --> et verifier si les deux objets decrypter sont similaires

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




![325013279_680360187156740_7452717049033101924_n](https://user-images.githubusercontent.com/104756701/212075481-7f216edb-faa6-42b4-900c-a7b576f60c77.jpg)

