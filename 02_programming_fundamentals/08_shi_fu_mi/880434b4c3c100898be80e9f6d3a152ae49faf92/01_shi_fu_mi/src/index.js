const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const moves = {
    rock: [
      "    ________        ",
      "---'   _ ,  |       ",
      "      (__(__)       ",
      "      (_____)       ",
      "      (____)        ",
      "---.__(___)         ",
    ],
    paper: [
      "      _______       ",
      "----'    ____)____  ",
      "            _______)",
      "            _______)",
      "           _______) ",
      "----.__________)    ",
    ],
    scissors: [
      "    ____           ",
      "---'    |________  ",
      "     (__)________) ",
      "        _________) ",
      "      (____)       ",
      "---.__(___)        ",
    ],
  };
  ​
  console.log("Welcome to ShiFuMi");
  ​
  const welcome = () => {
    Object.keys(moves).forEach((move, index) => {
      console.log(`${index + 1} - ${move}`);
    });
  };
  ​
  welcome();
  ​
  const reloadGame = (result, theRobotSpeak) => {
    reader.question(theRobotSpeak, (playerAnswer) => {
      if (playerAnswer === "y" || playerAnswer === "Y") {
        clear();
        console.log("C'est reparti, mon kiki 😎");
        welcome();
        startTheGame();
      } else if (playerAnswer === "n" || playerAnswer === "N") {
        clear();
        console.log(`je comprend.. Ce n'est pas marrant de ${result} comme ça. A la prochaine 😘`);
        reader.close();
      }
    });
  };
  