# SQL

## Remind Useful
- Ne pas oublier le **;** a la fin de la ligne ca marque la fin de la query
## TERMES usefull
- clé primaire : La clé primaire est un index, chacune des tables ne peut contenir qu’une seule clé primaire, composée d’une ou plusieurs colonnes.

![table](https://github.com/becodeorg/BXL-Johnson-09/blob/main/2.The-Hill/Backend-sprint/1.Database/assets/dbschema.png)



## QUERY DATA FROM TABLE

**SELECT \***    
**FROM** table  
**WHERE** condition  
**GROUP BY** expression  
**HAVING** condition  
**{ UNION | INTERSECT | EXCEPT }**  
**ORDER BY** xpression  
**LIMIT** count  
**OFFSET** start;    
query aide mémoire   
___

| OPERATEUR | DESCRIPTION |
| ------------- | ------------- | 
| = | égale |
| <> | pas égale |
| != | égale |
| > | sup |
| < | inf |
| >= | sup ou égale |
| <= | inf ou égale |
| IN | égale |
| LIKE | recherche debut milieu ou fin de mot |
| BETWEEN | compris entre |
| IS NULL | valeur est nul |
| IS NOT NULL | valeur n'est pas nul |

___
**SELECT \***  
**FROM** employees;  
query all rows & columns from table employees  
___
**SELECT** first_name, last_name   
**FROM** employees;   
query first_name, last_name from table employees  
___
**SELECT** first_name, last_name   
**FROM** employees  
**ORDER BY** first_name **ASC/DESC**;  
query first_name, last_name from table employees order by ascendant ou descendant   
___
**SELECT SUM(** salary **)   
FROM** employees;  
query le total des salaires from table employees  
___
**SELECT MAX(** salary **), MIN(** salary **)   
FROM** employees;  
query le max et le min des salaires  
___
**SELECT** first_name   
**ROUND(** salary/12 **)  
AS** "salary by month"  
**FROM** employees;  
query salaire mensuel de chaque employees arrondi a .00  
___
**SELECT** first_name   
**FROM** employees  
**WHERE** salary  
**BETWEEN** 1000 **AND** 1500;  
query salaires employees entre 1000 et 1500  
___
**SELECT** first_name  
**FROM** employees  
**WHERE** salary  
**NOT BETWEEN** 1000 **AND** 1500  
**AND** department_id **IN**(30,100);    
query salaire employees qui nest pas compris entre 1000 et 1500 et qui sont dans le departement 30 ou 100  
___
**SELECT** last_name    
**FROM** employees  
**WHERE** last_name  
**LIKE** \'_ _e%'  
**OR** \'%e_';  
query le last_name des employees dont la 3eme lettre ou l'avant dernière lettre est un e  
% = joker qui remplace les lettres  
_ = compte ocmme une lettre  
___
**SELECT COUNT(DISTINCT** job_id **)  
FROM** employees;  
query le nombre de job possible  
COUNT = compte  
DISTINCT = evite les doublons  
___
**SELECT** department_id, **SUM(** salary **)   
FROM** employees     
**GROUP BY** department_id;   
query salaire payable dans chaque department   
___
**SELECT** job_id, **AVG(** salary **)   
FROM** employees    
**WHERE** job_id **<>** 'IT_PROG'  
**GROUP BY** job_id;  
query la moyenne des salaires pour tout les job_id excluant les IT_PROG   
___
**SELECT** department_id, AVG(salary), COUNT(\*)  
**FROM** employees    
**GROUP BY** epartment_id  
**HAVING** COUNT(\*) > 10  
query la moyenne de salaire pour chaque departement mployant plus de 10 personnes  
___
**SELECT** first_name, last_name, salary  
**FROM** employees  
**WHERE** salary > (SELECT salary FROM employees WHERE last_name="Bull")  
query les employees qui ont un meilleur salaire que Bull  
___
**SELECT** first_name   
**FROM** employees  
**WHERE** manager_id **IN** (SELECT employee_id FROM employees WHERE department_id  
**IN**(SELECT department_id FROM departments WHERE ocation_id  
**IN**(SELECT location_id FROM locations WHERE country_id="US")));  
query les employees qui ont un manager qui travaille dans un department basé au US  
___
**SELECT** first_name, last_name, department_id 
**FROM** employees
**JOIN** departments
**USING** (department);










