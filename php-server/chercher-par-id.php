<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json; charset=utf-8');

$id = $_GET["id"];
$listeSoulierJson = file_get_contents("liste-soulier.json");

if(strlen($listeSoulierJson) > 0){
  $listeSoulier = json_decode($listeSoulierJson);
  foreach($listeSoulier as $soulier) {
      if ($id == $soulier->id) {
          echo json_encode($soulier);
          die();
      }
  }
}
echo json_encode([]);

