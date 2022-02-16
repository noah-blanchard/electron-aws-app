# Serverless App - Liste de souliers
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
à l'écoute des requêtes GET ou POST.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="drawing" width="100" style="margin:70px"/>
<img src="https://images.squarespace-cdn.com/content/v1/51814c87e4b0c1fda9c1fc50/1528473310893-RH0HG7R5C0QURMFQJBSU/600px-AWS_Lambda_logo.svg.png?format=500w" alt="drawing" width="100" style="margin:70px"/>
<img src="https://miro.medium.com/max/401/0*rOjzHpnCXl4iklVC.png" alt="drawing" width="300" style="margin:70px"/>
