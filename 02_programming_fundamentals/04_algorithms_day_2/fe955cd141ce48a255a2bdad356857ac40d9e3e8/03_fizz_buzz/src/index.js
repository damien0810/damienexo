function fizzBuzz(list) {
  const NewArray = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      NewArray.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      NewArray.push("Fizz");
    } else if (list[i] % 5 === 0) {
      NewArray.push("Buzz");
    } else {
      NewArray.push(list[i]);
    }
  }
  return NewArray;
}

module.exports = fizzBuzz;
