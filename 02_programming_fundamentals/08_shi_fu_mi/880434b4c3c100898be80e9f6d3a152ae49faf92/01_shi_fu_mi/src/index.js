const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Bonjour ShiFuMi");

function ask(question, callback) {
  reader.question(`${question}\n>`, callback);
}
const generateIAChoice = (min, max) => Math.round(Math.random() * (max - min) + min);
const choiceOfIA = generateIAChoice(1, 3);
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
const reverseLine = (line) => {
  const changedLine = line
    .split("")
    .map((char) => {
      if (char == ")") {
        return "(";
      } else if (char == "(") {
        return ")";
      }
      return char;
    })
    .join("");
  return changedLine.split("").reverse().join("");
};

function shiFuMi() {
  ask("comment activer shifumi", (reponseutilisateur) => {
    if (reponseutilisateur == "je sais pas") {
      console.log(reverseLine(moves.rock));
      reader.close();
    } else {
      console.log("j'ai pas compris");
      reader.close();
    }
  });
}
shiFuMi();
