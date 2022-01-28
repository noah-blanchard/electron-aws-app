class Application {
    constructor(window, vueListeCadeau, vueCadeau, vueAjouterCadeau, cadeauDAO){
  
      this.window = window;
  
      this.vueListeCadeau = vueListeCadeau;
  
      this.vueCadeau = vueCadeau;
  
      this.vueAjouterCadeau = vueAjouterCadeau;
      // C'est l'équivalent de function(cadeau){this.ajouterCadeau(cadeau)}
      this.vueAjouterCadeau.initialiserAjouterCadeau(cadeau =>this.ajouterCadeau(cadeau));
  
      this.cadeauDAO = cadeauDAO;
  
      // C'est l'équivalent de function(){this.naviguer()}
      this.window.addEventListener("hashchange", () =>this.naviguer());
  
      this.naviguer();
    }
}    