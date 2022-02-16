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
