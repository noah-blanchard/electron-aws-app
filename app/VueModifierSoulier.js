class VueModifierSoulier{
    constructor(){
      this.html = document.getElementById("html-modifier-soulier").innerHTML;
      this.soulier = null;
    }
  
    initialiserSoulier(soulier){
      this.soulier = soulier;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("soulier-nom").value = this.soulier.nom;
      document.getElementById("soulier-marque").value = this.soulier.marque;
      document.getElementById("soulier-description").value = this.soulier.description;
      document.getElementById("soulier-pointures").value = this.soulier.pointures;
      document.getElementById("soulier-pourQui").value = this.soulier.pourQui;
      document.getElementById("soulier-fermeture").value = this.soulier.fermeture;
      document.getElementById("soulier-materiaux").value = this.soulier.materiaux;
      document.getElementById("soulier-couleur").value = this.soulier.couleur;
    }
  
  }
  