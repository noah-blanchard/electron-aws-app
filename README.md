# Electron App - Liste de souliers

## Le projet

Une application de bureau construite avec Electron et un backend tournant sur Amazon Web Services.
<br><br>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" alt="drawing" width="100" style="margin:70px"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" alt="drawing" width="100" style="margin:70px"/>

## Amazon Elastic Compute Cloud (EC2)

Une migration vers EC2 a été faite, le projet tourne maintenant sur un VPS ubuntu sur lequel PHP et Apache sont installés.
Nous n'utilisons donc plus les services Lambdas et API Gateway d'AWS mais seulement une adresse IP Elastique pointant sur le dossier
public de la machine ubuntu. Les endpoints sont donc des fichiers PHP chargés de faire une des requêtes SQL vers une base de données
relationnelle.

<img src="https://pedalsup.com/wp-content/uploads/2021/08/b57774c.png" alt="Logo EC2"></img>

## Amazon Relational Database Service (RDS)

Une base de donnée relationnelle fournie par Amazon RDS a été installée sur la machine ubuntu, elle représente dorénavant la méthode de
stockage de la liste de soulier. Nous n'utilisons donc plus de bucket S3 et de fichier JSON. Les base de données relationnelles représente un
réel avantage pour le stockage de données, et la possibilité de trier, modifier ou supprimer ces données sans difficulté par le biais de
requête SQL.

<img src="https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1640851977/hevo-blog/Redshift-vs-RDS-RDS-Logo.png" alt="Logo RDS"></img>

### Requête SQL de créationd de la table "soulier"

```sql
CREATE TABLE `soulier` (
  `id` int NOT NULL,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marque` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pointures` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fermeture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `couleur` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `materiaux` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pourQui` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
```

### Requête SQL d'insertion d'un soulier dans la table "soulier"


### Requête SQL de recherche par ID

```sql
SELECT * FROM `soulier` WHERE id = 1;
```
## Fonctionnalités

Le projet propose quatres écrans distincts.

### Lister

Afficher tous les souliers présents dans la base de données. On ne montre sur cet écran que le nom du soulier.
On peut cliquer sur chaque soulier afin d'accéder au second écran.

### Détail des souliers

Chaque soulier dipose de détail supplémentaire (marque, pointure, à qui il est destiné, les matériaux, la couleur...).
En cliquant sur un des souliers listé sur la première page, on accède à la page correspondant à ses détails.

#### Requête SQL de recherche par ID
```sql
SELECT * FROM `soulier` WHERE id = {ID du Soulier};
```

### Ajouter un soulier

Il est possible d'ajouter un nouveau soulier à la liste qui sera alors sauvegardé dans le compartiment S3.
L'utilisateur entre toutes les informations relatives au soulier et valide avec le bouton prévu à cet effet.

#### Requête SQL d'insertion de soulier

```sql
INSERT INTO `soulier`
    (`id`, `nom`, `marque`, `description`, `pointures`, `fermeture`, `couleur`, `materiaux`, `pourQui`)
    VALUES (1, 'Air Max 95', 'Nike','De beaux souliers', 'Du 34 au 48', 'Lacets', 'Bleu, Rouge, Jaune, Blanc, Noir, Gris',
    'Plastique, Tissus, Cotton, Polyester', 'Hommes, Femmes, Enfants'
);
```

### Modifier un soulier

Lorsqu'on accède à la page des détails d'un soulier, un bouton propose à l'utilisateur de modifier le soulier en question
en cas de changement à faire sur les infos du souliers (nom, marque, pointures...)

## Ancienne version de l'application
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
