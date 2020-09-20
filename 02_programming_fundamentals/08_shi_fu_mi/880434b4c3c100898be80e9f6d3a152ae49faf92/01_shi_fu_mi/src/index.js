const readline = require("readline");

const clear = ()=>console.log("\x1B[2]\x1b[0f");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moves ={
rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],

paper :[
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],

scissors :[
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],

clear();
console.log("Good Game!");
  Object.keys(moves).forEach((moveName, index) => {
      console.log(`${index + 1} - ${moveName}`);
  });

  const reverseLine = (line) => {
      const changedLine = line
      .split("")
      .map((char) => {
          if (char === ")") {
              return "(";
          } else if (char === "(") {
              return char;
        })
        .join("");
        return changedline.split("").reverse().join("");
    };


    reader.question("Select a move \n>", (playerMove)=> {
      const index = parseInt(playMove - 1);
      const move = Object.keys (moves)[index];
      const playerSymbol = moves[move];

     console.log(playerSymbol.join("\n"));

      const aiIndex = Math.floor(Math.random() * 3);
      const aiMove = Object.keys(moves)[aiIndex];
      const aiSymbol = moves[aiMove];

      console.log(playerSymbol.join("\n"));



  reader.close();
});
