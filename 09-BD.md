## CMD BASE PSQL 
- demarrer psql : **psql postgres**   
- quitter psql : **quit** ou **\q**   
- connect to a new database : **\c**   
- list all tables : **\dt**   
- list all roles : **\du**   
- list databases : **\list**   
- supprime la database ma_db : **DROP DATABASE ma_db**   
- info de connexion : **\conninfo**  


## CREER BASE DONNEE 
### CREER UN ROLE
- creer un role : **CREATE ROLE role_name WITH LOGIN PASSWORD 'password';**   
- donner le droit creer db au role : **ALTER ROLE role_name CREATEDB;**   
- sortir de postgres : **\q**  
- relier psql et role_name et se co avec role_name : **psql -d postgres -U role_name**   
(--> **postgres=#** se transforme en **postgres=>** (on est plus connecté en superuser)  

### CREER UNE DB
- créer une db : **CREATE DATABASE table_name;**    
- se co a la nouvelle db : **\c table_name**   

### CREER UNE TABLE 
- créer table :  
**CREATE TABLE users (  
ID SERIAL PRIMARY KEY,  
pseudo VARCHAR,   
email VARCHAR,   
password VARCHAR,   
token VARCHAR);**   

 - donner les privileges au role ( "." : toutes les bases de données): **GRANT privilege_list (ou) ALL ON table_name TO  role_name;** 
