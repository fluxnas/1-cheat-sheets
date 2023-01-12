# JWT authentification stateless ( sans état : il ne stocke pas de données et ne fait référence à aucune transaction passée)

JWT composé de trois parties :
- un header : info du token : comment il est construit (algo, type, date expiration...)
- un payload (les “claims”) : données a crypter
- la signature : vérifier et conserver l'intégrité des données : elle reprends les 2 premières parties, les concatène et les encrypte 

ce token va etre envoyé au backend pour certaines requètes et récuperer des données
le back va recevoir --> décrypter la signature --> refaire le calcul  (header + payload) --> et verifier si les deux objets decrypter sont similaires

![325013279_680360187156740_7452717049033101924_n](https://user-images.githubusercontent.com/104756701/212021254-1c5591bd-d012-4d23-9381-c1f157093bc5.jpg)


creeer le tokens, besoins 3 choses :
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

