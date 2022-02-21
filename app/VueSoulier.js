class VueSoulier{
    constructor(){
      this.html = document.getElementById("html-vue-soulier").innerHTML;
      this.soulier = null;
    }
  
    initialiserSoulier(soulier){
      this.soulier = soulier;
    }
  
    afficher(){

      /*let HTMLReplacement = document.getElementById("modifier-soulier").innerHTML;
      console.log(HTMLReplacement);
      HTMLReplacement = HTMLReplacement.replace("{Soulier.id}", this.soulier.id);
      document.getElementById("modifier-soulier").innerHTML = HTMLReplacement;*/

      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("soulier-nom").innerHTML = this.soulier.nom;
      document.getElementById("soulier-marque").innerHTML = this.soulier.marque;
      document.getElementById("soulier-description").innerHTML = this.soulier.description;
      document.getElementById("soulier-pointures").innerHTML = this.soulier.pointures;
      document.getElementById("soulier-pourQui").innerHTML = this.soulier.pourQui;
      document.getElementById("soulier-fermeture").innerHTML = this.soulier.fermeture;
      document.getElementById("soulier-materiaux").innerHTML = this.soulier.materiaux;
      document.getElementById("soulier-couleur").innerHTML = this.soulier.couleur;
      document.getElementById("modifier-soulier").innerHTML.replace("{Soulier.id}", this.soulier.id);
      let HTMLReplacement = document.getElementById("modifier-soulier").innerHTML;
      console.log(HTMLReplacement);
      HTMLReplacement = HTMLReplacement.replace("{Soulier.id}", this.soulier.id);
      document.getElementById("modifier-soulier").innerHTML = HTMLReplacement;

    }
  
  }
  