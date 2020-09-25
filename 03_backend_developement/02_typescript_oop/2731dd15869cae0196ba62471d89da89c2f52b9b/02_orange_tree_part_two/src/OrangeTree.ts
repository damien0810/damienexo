import { Tree } from "./Tree";

class OrangeTree extends Tree {
  oranges: [] = [];

  constructor(age: number, height: number, alive: boolean, oranges: []) {
    super(age);
  }

  ageOneYear(): void {
    this.age + 1;
  }
}

export { OrangeTree };
