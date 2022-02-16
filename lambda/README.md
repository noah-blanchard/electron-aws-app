# Fonctions Lambda - Noah
## Lister
**API Gateway :** https://xmbtkfs4xi.execute-api.us-east-1.amazonaws.com/default/lister
**Utilisation :** effectuer une requête get sur l'URL
```js
console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
    console.log(event);

    const params = {
        Bucket: "app-souliers-noahblanchard",
        Key: "liste-soulier.json",
    };

    const data = await s3.getObject(params).promise();
    console.log("Raw text:\n" + data.Body.toString('utf-8'));
    const listeSoulierJson = data.Body.toString('utf-8');
    
    const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*"
        },        
        body: listeSoulierJson,
    };

    return response;
};
```
## Chercher par ID
**API Gateway :** https://ulofr45hp0.execute-api.us-east-1.amazonaws.com/default/chercher-par-id
**Utilisation :** ajouter le paramètre get ```?id={id_a_chercher}```
```js
console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
  const id = event.queryStringParameters && event.queryStringParameters.id;

  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    }, 
    body: 'Vous devez donner un id de soulier'
  };
  if (id == null) {
    return response;
  }

  const params = {
      Bucket: "app-souliers-noahblanchard",
      Key: "liste-soulier.json",
  };

  const data = await s3.getObject(params).promise();
  console.log("Raw text:\n" + data.Body.toString('utf-8'));
  const listeSoulierJson = data.Body.toString('utf-8');
  const listeSoulier = JSON.parse(listeSoulierJson);

  let soulier = listeSoulier.find(soulier => soulier.id == id);

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      }, 
      body: JSON.stringify(soulier).toString('utf-8')
  };
  
  return response;
};
```
## Ajouter
**API Gateway :** https://r6t9t63tck.execute-api.us-east-1.amazonaws.com/default/ajouter
**Utilisation :** faire une requête post avec les données suivantes
```json
{
	"nom":valeur,
	"marque":valeur,
	"description":valeur,
	"couleur":valeur,
	"materiaux":valeur,
	"pourQui":valeur,
	"pointure":valeur,
	"fermeture":valeur		
}
```
```js
console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const querystring = require('querystring');

exports.handler = async (event) => {
  const postdata = querystring.parse(event.body);
  
  let soulier = null;
  let soulierjson = postdata["soulierjson"];
  if(soulierjson){
    soulier = JSON.parse(soulierjson);
  }
  
  let response = {
    statusCode: 400,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body : "Pas de soulier reçu",
  };
  
  if (soulier == null) {
    return response;
  }

  soulier.id = Date.now();

  const params = {
      Bucket: "app-souliers-noahblanchard",
      Key: "liste-soulier.json",
  };

  let data = await s3.getObject(params).promise();
  let listeSoulierJson = data.Body.toString('utf-8');
  const listeSoulier = JSON.parse(listeSoulierJson);
  listeSoulier.push(soulier);
  listeSoulierJson = JSON.stringify(listeSoulier);
  params.Body  = listeSoulierJson;
  data = await s3.putObject(params).promise();

  response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: soulier.id
  };

  return response;
};

```
