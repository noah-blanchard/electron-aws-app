# Serverless App - Liste de souliers

## Le projet

Une application de bureau construite avec Electron et un backend tournant sur Amazon Web Services.
<br><br>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" alt="drawing" width="100" style="margin:70px"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" alt="drawing" width="100" style="margin:70px"/>

## Fonctionnalités

Le projet propose quatres écrans distincts.

### Lister

Afficher tous les souliers présents dans le compartiment S3. On ne montre sur cet écran que le nom du soulier.
On peut cliquer sur chaque soulier afin d'accéder au second écran.

### Détail des souliers

Chaque soulier dipose de détail supplémentaire (marque, pointure, à qui il est destiné, les matériaux, la couleur...).
En cliquant sur un des souliers listé sur la première page, on accède à la page correspondant à ses détails.

### Ajouter un soulier

Il est possible d'ajouter un nouveau soulier à la liste qui sera alors sauvegardé dans le compartiment S3.
L'utilisateur entre toutes les informations relatives au soulier et valide avec le bouton prévu à cet effet.

### Modifier un soulier

Lorsqu'on accède à la page des détails d'un soulier, un bouton propose à l'utilisateur de modifier le soulier en question
en cas de changement à faire sur les infos du souliers (nom, marque, pointures...)

<details close>
<summary>Ancienne version</summary>
<br>
## Le projet

Une application de bureau construite avec Electron et un backend serverless AWS
<br><br>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" alt="drawing" width="100" style="margin:70px"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" alt="drawing" width="100" style="margin:70px"/>

## Fonctionnalités

Le projet propose trois écrans distincts.

### Lister

Afficher tous les souliers présents dans le compartiment S3. On ne montre sur cet écran que le nom du soulier.
On peut cliquer sur chaque soulier afin d'accéder au second écran.

### Détail des souliers

Chaque soulier dipose de détail supplémentaire (marque, pointure, à qui il est destiné, les matériaux, la couleur...).
En cliquant sur un des souliers listé sur la première page, on accède à la page correspondant à ses détails.

### Ajouter un soulier

Il est possible d'ajouter un nouveau soulier à la liste qui sera alors sauvegardé dans le compartiment S3.
L'utilisateur entre toutes les informations relatives au soulier et valide avec le bouton prévu à cet effet.

## Backend serverless avec AWS

### Fonctions Lambda

Trois fonctions Lambda (Node.js) sont stockées sur AWS. Pour chacune, un déclencheur du type API Gateway est activé,
à l'écoute des requêtes GET ou POST. Pour accéder au fonctions lambdas, visitez <a href="https://github.com/noah-blanchard/electron-aws-app/tree/master/lambda">ce dossier</a>.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="drawing" width="100" style="margin:70px"/>
<img src="https://images.squarespace-cdn.com/content/v1/51814c87e4b0c1fda9c1fc50/1528473310893-RH0HG7R5C0QURMFQJBSU/600px-AWS_Lambda_logo.svg.png?format=500w" alt="drawing" width="100" style="margin:70px"/>
<img src="https://s3-us-west-2.amazonaws.com/assertible/blog/aws-api-gateway-icon.png" alt="drawing" width="100" style="margin:70px"/>

### Bucket S3

La liste de soulier est stockée dans un compartiment S3, dans un fichier JSON.
Ce fichier est lu ou édité selon la fonction lambda déclenchée.

Exemple de données contenues dans le fichie JSON.

```json
[
    {
        "nom": "SuperFast",
        "marque": "Geox",
        "description": "les chaussures qui respirent",
        "couleur": "bleu",
        "materiaux": "plastique 90%, coton 10%",
        "pourQui": "enfant",
        "pointure": "32-37",
        "fermeture": "zip",
        "id": 0
    },
    {
        "nom": "Air Max 97",
        "marque": "Nike",
        "description": "Ceci est une chaussure Nike",
        "couleur": "rouge",
        "materiaux": "plastique 80%, coton 20%",
        "pourQui": "homme",
        "pointure": "40-45",
        "fermeture": "lacet",
        "id": 1
    }
]
```
### API Gateway

Pour ce projet, des déclencheurs ont été mis en place pour les fonctions Lambdas.
Ce sont des API à l'écoute des requêtes HTTP.
* L'API de la fonction d'ajout écoute les requêtes POST
* L'API des fonctions pour lister et chercher par id écoute les requêtes GET

Lorsque ces portes d'entrée reçoivent une requête, elle déclenche les fonctions Lambda et
renvoient du contenu au client (l'application électron).
</details>
