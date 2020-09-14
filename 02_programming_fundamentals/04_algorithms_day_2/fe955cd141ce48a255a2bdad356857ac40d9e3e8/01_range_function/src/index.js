function range(int1, int2) {
  const tableau = [];
  if (int2 > int1) { 
    for ( let i = int1; i < (int2 + 1); i++ ) {
      tableau.push(i);
    }
  } else if (int2 < int1) {
    for ( let y = int1; y > (int2 - 1); y-- ) {
      tableau.push(y);
    }
  } else {
    tableau.push (int1);
  }
  
  
  return tableau;
}
// Do not remove last lines, it is for tests
module.exports = range;

 