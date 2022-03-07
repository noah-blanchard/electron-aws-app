<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

require_once "Soulier.php";
require_once "SoulierDAO.php";

$soulierJSON = file_get_contents('php://input');
print_r("JSON : " . $soulierJSON);
$soulierObjet = json_decode( $soulierJSON );
var_dump($soulierObjet);

$soulier = new Soulier($soulierObjet);
print_r($soulier);
SoulierDAO::modifier($soulier);
echo $soulier->id;

?>