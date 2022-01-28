class VueAjouterSoulier{
    constructor(){
      this.html = document.getElementById("html-vue-ajouter-soulier").innerHTML;
      this.ajouterSoulier = null;
    }
  
    initialiserAjouterSoulier(ajouterSoulier){
      this.ajouterSoulier = ajouterSoulier;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }
  
    enregistrer(evenement){
      evenement.preventDefault();
  
      let nom = document.getElementById("soulier-nom").value;
      let marque = document.getElementById("soulier-marque").value;
      let description = document.getElementById("soulier-description").value;
  
      this.ajouterSoulier(new Soulier(nom, marque, description, null));
  
    }
  
  }