abstract class Tree {
  age: number = 0;
  height: number = 0;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    if (this.age > 0 && this.age <= 9) {
      this.height = this.height + 25 * this.age;
    } else if (age >= 10 && age <= 20) {
      this.height = 9 * 25 + (this.age - 9) * 10;
    } else if (age > 20) {
      this.height = 335;
    }
  }
  abstract ageOneYear(): void;
  abstract isAlive(): boolean;

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

export { Tree };
