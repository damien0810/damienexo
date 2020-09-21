function numberGame(reader, min = 1, max = 100) {
  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //Utilisation
  //La variable contient un nombre aléatoire compris entre 1 et 10

  const nombreMystere = entierAleatoire(min, max);

  reader.question("quel est le nombre\n>", function callback(reponsedeutilisateur) {
    if (nombreMystere < reponsedeutilisateur) {
      console.log("plus petit");
    } else if (nombreMystere > reponsedeutilisateur) {
      console.log("essaye un nombre plus grand");
    } else if (nombreMystere == reponsedeutilisateur) {
      console.log("tu as gagner");
    }
  });
}

module.exports = numberGame;
