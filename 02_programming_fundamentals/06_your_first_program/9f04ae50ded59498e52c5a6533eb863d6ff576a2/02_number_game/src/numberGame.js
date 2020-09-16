function numberGame(reader, min = 1, max = 100) {
  const randomNnumber = Math.round(Math.ramdom() * (max - min) + min);

  reader.question ("Guess the number!\n> ", (answer) => { 
    if (answer < min || answer > max) { 
      console.log (``)
  reader.close();
  });
}


module.exports = numberGame;
