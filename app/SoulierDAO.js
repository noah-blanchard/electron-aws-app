class SoulierDAO{
    lister(action){
      fetch("", {mode:'cors'})
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let listeSoulier = [];
            for(let position in data){
              let soulier = new Soulier(data[position].nom,
                                        data[position].marque,
                                        data[position].description,
                                        data[position].couleur,
                                        data[position].materiaux,
                                        data[position].pourQui,
                                        data[position].pointure,
                                        data[position].fermeture,
                                        data[position].id);
  
              console.log(soulier);
              listeSoulier.push(soulier);
            }
            action(listeSoulier);
          });
    }
    chercher(id, action){
      fetch("https://rm69nms37l.execute-api.us-east-1.amazonaws.com/default/chercher-par-id-soulier" + '?id=' + id , {mode:'cors'})
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let soulier = new Soulier(data[position].nom,
                                        data[position].marque,
                                        data[position].description,
                                        data[position].couleur,
                                        data[position].materiaux,
                                        data[position].pourQui,
                                        data[position].pointure,
                                        data[position].fermeture,
                                        data[position].id);
            action(soulier);
          });
    }
    ajouter(soulier, action){
      fetch("",
        {
          method: 'POST',
          headers: {
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body: "soulierjson=" + JSON.stringify(soulier),
          mode:'cors',
        })
        .then(response => response.text())
        .then(data =>
          {
            console.log('Détail:', data);
            action();
          });
    }
  }
  