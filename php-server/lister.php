<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$listeSoulierJson = file_get_contents("liste-soulier.json");

if(strlen($listeSoulierJson) > 0){
  $listeSoulier = json_decode($listeSoulierJson);
  echo json_encode($listeSoulier);
}else{
  echo json_encode([]);
}