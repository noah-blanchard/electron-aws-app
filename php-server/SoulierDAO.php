<?php
require_once("Soulier.php");
require_once("SoulierSQL.php");

class Accesseur
{
  public static $baseDeDonnees = null;

  public static function initialiser()
  {
    $base = 'app-souliers';
    $hote = 'app-souliers.cvfetcrfoont.us-east-1.rds.amazonaws.com';
    $usager = 'noah';
    $motDePasse = 'soulier123';
    $nomDeSourceDeDonnees = 'mysql:dbname=' . $base . ';host=' . $hote;
    SoulierDAO::$baseDeDonnees = new PDO($nomDeSourceDeDonnees, $usager, $motDePasse);
    SoulierDAO::$baseDeDonnees->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }
}

class SoulierDAO extends Accesseur implements SoulierSQL
{
  public static function lister()
  {
    SoulierDAO::initialiser();

    $demandeListeSoulier = SoulierDAO::$baseDeDonnees->prepare(SoulierDAO::SQL_LISTER);
    $demandeListeSoulier->execute();
    $listeSoulierObjet = $demandeListeSoulier->fetchAll(PDO::FETCH_OBJ);
    //$contratsTableau = $demandeListeSoulier->fetchAll(PDO::FETCH_ASSOC);
    $listeSoulier = null;
    foreach($listeSoulierObjet as $soulierObjet) $listeSoulier[] = new Soulier($soulierObjet);
    return $listeSoulier;
  }

  public static function chercherParId($id)
  {
    SoulierDAO::initialiser();

    $demandeSoulier = SoulierDAO::$baseDeDonnees->prepare(SoulierDAO::SQL_CHERCHER_PAR_ID);
    $demandeSoulier->bindParam(':id', $id, PDO::PARAM_INT);
    $demandeSoulier->execute();
    $soulierObjet = $demandeSoulier->fetchAll(PDO::FETCH_OBJ)[0];
    //$contrat = $demandeSoulier->fetch(PDO::FETCH_ASSOC);
    return new Soulier($soulierObjet);
  }

  public static function ajouter($soulier)
  {
    SoulierDAO::initialiser();

    $demandeAjoutSoulier = SoulierDAO::$baseDeDonnees->prepare(SoulierDAO::SQL_AJOUTER);
    $demandeAjoutSoulier->bindValue(':nom', $soulier->nom, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':marque', $soulier->marque, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':description', $soulier->description, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':pointures', $soulier->pointures, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':fermeture', $soulier->fermeture, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':couleur', $soulier->couleur, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':materiaux', $soulier->materiaux, PDO::PARAM_STR);
    $demandeAjoutSoulier->bindValue(':pourQui', $soulier->pourQui, PDO::PARAM_STR);
    $demandeAjoutSoulier->execute();
    return SoulierDAO::$baseDeDonnees->lastInsertId();
  }

  public static function modifier($soulier)
  {
    $demandeModifSoulier = SoulierDAO::$baseDeDonnees->prepare(SoulierDAO::SQL_MODIFIER);
    $demandeModifSoulier->bindValue(':nom', $soulier->nom, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':marque', $soulier->marque, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':description', $soulier->description, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':pointures', $soulier->pointures, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':fermeture', $soulier->fermeture, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':couleur', $soulier->couleur, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':materiaux', $soulier->materiaux, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':pourQui', $soulier->pourQui, PDO::PARAM_STR);
    $demandeModifSoulier->bindValue(':id', $soulier->id, PDO::PARAM_INT);
    $demandeModifSoulier->execute();
  }
}
