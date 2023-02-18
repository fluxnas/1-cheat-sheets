# GITHUB

## TERMINAL USEFULL : 
#### CREER UN SERVEUR POUR VOIR LES CHANGEMENTS :
1. dans le terminal : **python3 -m http.server**
2. ensuite sur internet : http://0.0.0.0:8000/ or http://localhost:8000/

#### INSTALL LE PROMPT (dans le local en ligne DANS LE DOSSIER qu’on a besoin)
1. **'npm install prompt-sync'** in the terminal
2. If 'npm not found' for prompt --> **sudo apt-get install npm**
3. then : **const prompt = require('prompt-sync')();**


## INITIALISER ET PUSHER GIT GITHUB  
1. créer le repertoire sur github ou on veut pusher le dossier  
2. **git init**    
    Initialiser un git dans le dossier qu’on veut pusher : cela créait un dossier .git vide  
3. **git add .**  
4. **git commit - m “firstcommit”**  
5. **git remote add origin *git@github.com:fluxnas/BECODE.git***  
    pour le premier push on initialise le chemin sur github (copier le chemin du dossier git ssh)  
6. **git push -u origin master**   
    push le dossier sur le github   

## ANNULER UN COMMIT   
**git reset --soft HEAD**  

## CREER UNE BRANCHE  
1. Dans le terminal : se mettre dans le bon dossier  
2. creer une branche : **git branch nomDeBranche**  
    creer une branche et se mettre dans la branche : **git checkout -b nomDeBranche**   
    
## PUSH SUR MASTER GITHUB
1. **git add** : dans le terminal : VERIFIER QU’ON EST SUR LA BONNE BRANCHE
2. **git commit -m “...”**
3. **git push** : ca ouvre un pop up dans github 
4. verifier les modifs entre les fichiers > valider > merger
5. **git pull** : recuper le fichier en local sur son ordi

## BIEN FUSIONNER UNE BRANCHE AVEC UN PROJET COLLECTIF (du local en ligne)
1. **git pull** : se mettre dans le main pour recuperer les derniers changements en local
2. **git add .** + **git commit -m “...”** : se mettre dans la branche (et pas sur le main!!) : enregistrer
3. **git merge main nomBranche** : dans la branche (plus safe)
4. regler les conflits dans subl text + save 
    (5. fusionner : pas obligé si déja fait plus haut : 
    - dans le terminal, VERIFIER QU’ON EST SUR LA BONNE BRANCHE: git add
    - git commit -m “...” 
6. **git push** : ca ouvre un pop up dans github 
7. verifier les modifs entre les fichiers > valider > merger
8. **git pull** : recupe le fichier en local sur son ordi

## FUSIONNER UNE BRANCHE AVEC LA MASTER 
- se placer sur master : git checkout master
- merge la branche cible : git merge nom-branche
> les changements on été eeffectué   
- push sur le git : voir plus haut 



## COMMANDES USEFULL

**man (or info)** : open the manuel    
**man [nom de la commande] (or info)** : en savoir plus sur nom de la commande (ex : man cp)  
**whatis …** : def de …  
**h** : help  
**q** : quit   
**clear** : efface terminal  

**cd …** : aller dans ce folder  
**cd -** : revient au dossier précédent  
**ls** : afficher la liste des répertoires et fichiers   
**ls -R** : affiche fichier et sous répertoire d’un répertoire  
**pwd** : affiche le chemin du répertoire dans lequel on est  

**cat …** : affiche contenu d’un fichier   
**touch** : créer un fichier  
**mkdir ...** : créer répertoire  
**echo salut > test.txt** : créer un fichier test.txt qui contient “salut”  
**mv example.txt test.txt** : renomme le fichier example.txt par test.txt  
**mv elemntADeplacer /CheminDestination** : (move) déplacer un fichier   
**rm elementASupprimer** : (remove) supprime un fichier  
**rm -i** : (remove) supprime un fichier et demande “etes vous sure?”  
**rm -r elementASupprimer** : (remove) supprime un répertoire  
**rm -ir elementASupprimer** : (remove) supprime un répertoire et demande “etes vous sure?”  
**rmdir** : supprime un répertoire s'il est vide  
**cp …** : copier/coller le contenu d’un répertoire dans un autre ( ex : cp file1 file2 : file 2 créait nvx fichier file2 identique a file1)  
**subl nom_du_fichier** : ouvrir un fichier avec le terminal  


**dirs** : affiche les répertoires dans lesquels ont a récemment navigué  
**pushd** : go to a folder while keeping old location on "cache"  
**popd** : go back to an old location on "cache"  

