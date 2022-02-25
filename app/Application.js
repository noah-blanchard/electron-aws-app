class Application {
  constructor(window, vueListeSoulier, vueSoulier, vueAjouterSoulier, vueModifierSoulier, soulierDAO){

    this.window = window;

    this.vueListeSoulier = vueListeSoulier;

    this.vueSoulier = vueSoulier;

    this.vueModifierSoulier = vueModifierSoulier

    // C'est l'équivalent de function(soulier){this.ajouterSoulier(soulier)}
    //this.vueModifierSoulier.initialiserSoulier(soulier => this.modifierSoulier(soulier));

    this.vueAjouterSoulier = vueAjouterSoulier;

    // C'est l'équivalent de function(soulier){this.ajouterSoulier(soulier)}
    this.vueAjouterSoulier.initialiserAjouterSoulier(soulier =>this.ajouterSoulier(soulier));
    

    this.soulierDAO = soulierDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    console.log(hash);

    if(!hash){

      this.soulierDAO.lister((listeSoulier) => this.afficherNouvelleListeSoulier(listeSoulier));

    }else if(hash.match(/^#ajouter-soulier/)){

      this.vueAjouterSoulier.afficher();
    
    }else if(hash.match(/^#modifier-soulier\/[0-9]/)){

      let idSoulier = parseInt(hash.split("/")[1]);


      this.soulierDAO.chercher(idSoulier, (soulier) => this.affichierModifierSoulier(soulier));

    }else{

      let navigation = hash.match(/^#soulier\/([0-9]+)/);
      let idSoulier = navigation[1];

      this.soulierDAO.chercher(idSoulier, (soulier) => this.afficherNouveauSoulier(soulier));
    }
  }

  affichierModifierSoulier(soulier){
    console.log("Changement de Page");
    this.vueModifierSoulier.initialiserSoulier(soulier);
    this.vueModifierSoulier.afficher();
  }

  afficherNouvelleListeSoulier(listeSoulier){

    console.log(listeSoulier);
    this.vueListeSoulier.initialiserListeSoulier(listeSoulier);
    this.vueListeSoulier.afficher();
  }

  afficherNouveauSoulier(soulier){
    console.log(soulier);
    this.vueSoulier.initialiserSoulier(soulier);
    this.vueSoulier.afficher();
  }

  ajouterSoulier(soulier){
    this.soulierDAO.ajouter(soulier, () => this.afficherListeSoulier());
  }

  afficherListeSoulier(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeSoulier(), new VueSoulier(), new VueAjouterSoulier(), new VueModifierSoulier(), new SoulierDAO());

