<?php
interface SoulierSQL
{
  public const SQL_LISTER          = "SELECT * FROM soulier;";
  public const SQL_CHERCHER_PAR_ID = "SELECT * FROM soulier WHERE id = :id;";
  public const SQL_AJOUTER         = "INSERT INTO soulier (nom, marque, description, pointures, fermeture, couleur, materiaux, pourQui) VALUES (:nom, :marque, :description, :pointures, :fermeture, :couleur, :materiaux, :pourQui);";
  public const SQL_MODIFIER        = "UPDATE soulier SET nom = :nom, marque = :marque, pointures = :pointures, fermeture = :fermeture, couleur = :couleur, materiaux = :materiaux, pourQui = :pourQui where id = :id;"; //TODO
}
?>