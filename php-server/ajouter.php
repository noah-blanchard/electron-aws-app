<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$soulierJSON = file_get_contents('php://input');
$soulier= json_decode( $soulierJSON );
print_r($soulier);

$listeSoulier = [];
$listeSoulierJson = file_get_contents("liste-soulier.json");

if(strlen($listeSoulierJson) > 0){
  $listeSoulier = json_decode($listeSoulierJson);
  $nombreSoulier = count($listeSoulier);

  $soulier->id = $nombreSoulier;
  array_push($listeSoulier, $soulier);
  print_r($listeSoulier);
}

$listeSoulierJson = json_encode($listeSoulier);

/* Linux
sudo chgrp www-data liste-soulier.json
sudo chmod g+w liste-soulier.json
*/

file_put_contents("liste-soulier.json", $listeSoulierJson);
