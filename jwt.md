## 3 éléments importants :  
Ensemble, ils sont combinés à une structure standard : header.payload.signature

- header : L'en-tête répond à la question : Comment allons-nous calculer JWT ?   
{"typ": "JWT",
"alg": "HS256"}
- payload : Le Payload nous aide à répondre : Que voulons-nous stocker dans le JWT ?
> {
>  "userId": "abcd12345ghijk",
>  "username": "bezkoder",
>  "email": "contact@bezkoder.com",
>  "iss": "zKoder, author of bezkoder.com", // iss (Issuer): who issues the JWT
>  "iat": 1570238918, // iat (Issued at): time the JWT was issued at
>  "exp": 1570238992 // exp (Expiration Time): JWT expiration time
>}
- Signature : C'est dans cette partie que nous utilisons l'algorithme de hachage dont je vous ai parlé plus haut.


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

