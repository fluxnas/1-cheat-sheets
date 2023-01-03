**OBJET** ex : crayon
| PROPRIETES | METHODES | 
|-------------- | --------------| 
| ex : couleurs taille forme | ex : crayon sert a ecrire | 
| --> assimiler a des variable : nom + valeur | --> assimiler a des fonctions stocker dans des propriétés | 



ex : 
var moi = {
  prenom : "hanna",                               --> propriété
  nom : "c.a.",                                   --> propriété
  age : 31                                        --> propriété
  
  id : function() {                               --> propriété qui stock une méthode dont le but est de retourner la valeur associé a la propriété prenom, nom et age
    return this.prenom + this.nom + this.age
  }
}
alert(moi.id())

--> hannac.a.31
