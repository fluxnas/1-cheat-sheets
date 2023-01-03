on accede aux objets par références    
--> si on modifie un references on modifie totues les references du meme objets
on accède aux valeurs primitives par valeurs   
--> lorsque l'on modifie une valeur on modifie qu'une seule valeur 

**OBJET** ex : crayon
| PROPRIETES | METHODES | 
|-------------- | --------------| 
| ex : couleurs taille forme | ex : crayon sert a ecrire | 
| --> assimiler a des variable : nom + valeur | --> assimiler a des fonctions stocker dans des propriétés | 



ex :   
var moi = {   
  prenom : "hanna",                               ***--> propriété***   
  nom : "c.a.",                                   ***--> propriété***   
  age : 31                                        ***--> propriété***   
  
  id : function() {                               ***--> propriété qui stock une méthode dont le but est de retourner la valeur associé a la propriété prenom, nom et age***   
    return this.prenom + this.nom + this.age   
  }   
}   
alert(moi.id())   
   
***--> return : hannac.a.31***    


## Creer des objets a partir du constructeur (qui est une fonction)
avec des methodes et des propriétés dont les objets créer a partir de celui ci heriterons de ces methodes et de ces propriétés   

ex :   
function Identite(p, n, a) {    
  this.prenom = p;   
  this.nom = n;   
  this.a = age   
}   
var Hanna = new Identite("hanna", "c.a.", 31)    
var Victor = new Identite("victor", "f.a.", 29)    
alert("age de hanna " + hanna.age)   


## METHODES

.toLowerCase()   
.toUpperCase()   
.indexOf(element dont on veut l'index, facultatif : compter a partir de l'element en placement 1 par exemple)  
.lastIndexOf()  
.replace("element a remplacer", "element de remplacement")   
.slice(position depart, position fin) : extrait les caracteres entre position1 et position2   
.trim() : enleve les espaces inutiles en debut et fin de chaine 
