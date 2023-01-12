# JWT authentification stateless 


composé de 3 parties 
Un JWT est composé de trois parties, chacune contenant des informations différentes :

    un header,
    un payload (les “claims”),
    la signature.

Le header et le payload sont structurés en JSON. Ces trois parties sont chacunes encodées en base64url, puis concaténées en utilisant des points (“.”).

Le header identifie quel algorithme a été utilisé pour générer la signature, ainsi que le type de token dont il s’agit 
