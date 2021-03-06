class SoulierDAO {
  constructor() {
    this.URL = 'http://52.6.196.189/souliers/'
  }

  lister(action) {
    fetch(this.URL + 'lister.php')
      .then(response => response.json())
      .then(data => {
        let listeSoulier = [];
        for (let position in data) {
          let soulier = new Soulier(data[position].nom,
            data[position].marque,
            data[position].description,
            data[position].couleur,
            data[position].materiaux,
            data[position].pourQui,
            data[position].pointures,
            data[position].fermeture,
            data[position].id);

          listeSoulier.push(soulier);
        }
        action(listeSoulier);
      });
  }

  chercher(id, action) {
    fetch(this.URL + 'chercher-par-id.php' + '?id=' + id)
      .then(response => response.json())
      .then(data => {
        let soulier = new Soulier(data.nom,
          data.marque,
          data.description,
          data.couleur,
          data.materiaux,
          data.pourQui,
          data.pointures,
          data.fermeture,
          data.id);
        action(soulier);
      });
  }

  ajouter(soulier, action) {
    console.log(JSON.stringify(soulier));
    fetch(this.URL + 'ajouter.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(soulier),
      })
      .then(response => response.text())
      .then(data => {
        action();
      });
  }

  modifier(soulier, action) {
    fetch(this.URL + 'modifier.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(soulier),
      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        action();
      });
  }

}
