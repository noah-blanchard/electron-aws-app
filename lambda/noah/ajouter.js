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
