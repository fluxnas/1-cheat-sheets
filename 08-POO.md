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

![whatis-object_oriented_programming](https://user-images.githubusercontent.com/104756701/211527008-7bffe30c-a826-4065-ba6f-9ba733f5b448.png)

**La structure, ou les blocs de construction, de la programmation orientée objet comprennent les éléments suivants :**
- **Les classes** sont des types de données définis par l'utilisateur qui servent de modèle aux objets, attributs et méthodes individuels.
- **Les objets** sont des instances d'une classe créées avec des données spécifiquement définies. Les objets peuvent correspondre à des objets du monde réel ou à une entité abstraite. Lorsque la classe est définie initialement, la description est le seul objet défini.
- **Les méthodes** sont des fonctions définies à l'intérieur d'une classe qui décrivent les comportements d'un objet. Chaque méthode contenue dans les définitions de classe commence par une référence à un objet d'instance. De plus, les sous-routines contenues dans un objet sont appelées méthodes d'instance. Les programmeurs utilisent les méthodes à des fins de réutilisation ou pour garder la fonctionnalité encapsulée dans un seul objet à la fois.
- **Les attributs/ propriétés** sont définis dans le modèle de classe et représentent l'état d'un objet. Les objets auront des données stockées dans le champ des attributs. Les attributs de classe appartiennent à la classe elle-même.


**La programmation orientée objet est basée sur les principes suivants :**
- **Encapsulation** Ce principe stipule que toutes les informations importantes sont contenues dans un objet et que seules certaines informations sont exposées. L'implémentation et l'état de chaque objet sont conservés de manière privée dans une classe définie. Les autres objets n'ont pas accès à cette classe et n'ont pas le droit d'y apporter des modifications. Ils peuvent uniquement appeler une liste de fonctions ou de méthodes publiques. Cette caractéristique de dissimulation des données assure une plus grande sécurité du programme et évite la corruption involontaire des données.
- **Abstraction** Les objets ne révèlent que les mécanismes internes qui sont pertinents pour l'utilisation d'autres objets, en cachant tout code d'implémentation inutile. La classe dérivée peut voir sa fonctionnalité étendue. Ce concept peut aider les développeurs à apporter plus facilement des modifications ou des ajouts au fil du temps.
- **Héritage** Les classes peuvent réutiliser le code d'autres classes. Les relations et les sous-classes entre les objets peuvent être attribuées, ce qui permet aux développeurs de réutiliser une logique commune tout en maintenant une hiérarchie unique. Cette propriété de la POO oblige à une analyse plus approfondie des données, réduit le temps de développement et garantit un niveau de précision plus élevé.
- **Polymorphisme** Les objets sont conçus pour partager des comportements et ils peuvent prendre plus d'une forme. Le programme détermine la signification ou l'utilisation nécessaire pour chaque exécution de cet objet à partir d'une classe parent, ce qui réduit la nécessité de dupliquer le code. Une classe enfant est alors créée, qui étend la fonctionnalité de la classe parent. Le polymorphisme permet à différents types d'objets de passer par la même interface.




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
