<?php
class Soulier implements JsonSerializable
{
    public static $filtres =
    array(
        'id' => FILTER_VALIDATE_INT,
        'nom' => FILTER_SANITIZE_STRING,
        'marque' => FILTER_SANITIZE_STRING,
        'description' => FILTER_SANITIZE_STRING,
        'pointures' => FILTER_SANITIZE_STRING,
        'fermeture' => FILTER_SANITIZE_STRING,
        'couleur' => FILTER_SANITIZE_STRING,
        'materiaux' => FILTER_SANITIZE_STRING,
        'pourQui' => FILTER_SANITIZE_STRING
    );

    public $id;
    public $nom;
    public $marque;
    public $description;
    public $pointures;
    public $fermeture;
    public $couleur;
    public $materiaux;
    public $pourQui;

    public function __construct($soulierObjet)
    {
        $tableau = filter_var_array((array) $soulierObjet, Soulier::$filtres);
        $this->id = intval($tableau['id']);
        $this->nom = $tableau['nom'];
        $this->marque = $tableau['marque'];
        $this->description = $tableau['description'];
        $this->pointures = $tableau['pointures'];
        $this->fermeture = $tableau['fermeture'];
        $this->couleur = $tableau['couleur'];
        $this->materiaux = $tableau['materiaux'];
        $this->pourQui = $tableau['pourQui'];
        
    }

    public function __set($propriete, $valeur)
    {
        switch ($propriete) {
            case 'id':
                $this->id = $valeur;
                break;
            case 'nom':
                $this->nom = $valeur;
                break;
            case 'marque':
                $this->marque = $valeur;
                break;
            case 'description':
                $this->description = $valeur;
                break;
            case 'pointures':
                $this->pointures = $valeur;
                break;
            case 'fermeture':
                $this->fermeture = $valeur;
                break;
            case 'couleur':
                $this->couleur = $valeur;
                break;
            case 'materiaux':
                $this->materiaux = $valeur;
                break;
            case 'pourQui':
                $this->pourQui = $valeur;
                break;
        }
    }

    public function __get($propriete)
    {
        $self = get_object_vars($this);
        return $self[$propriete];
    }

    public function jsonSerialize()
    {
        //Define the fields we need
        return array(
            "id" => $this->id,
            "nom" => $this->nom,
            "marque" => $this->marque,
            "description" => $this->description,
            "pointures" => $this->pointures,
            "fermeture" => $this->fermeture,
            "couleur" => $this->couleur,
            "materiaux" => $this->materiaux,
            "pourQui" => $this->pourQui
        );
    }
}
?>