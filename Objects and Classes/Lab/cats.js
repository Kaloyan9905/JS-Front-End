function solve(array) {
  let cats = [];
  let result = [];

  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }

  for (let element of array) {
    let [name, age] = element.split(" ");
    cats.push(new Cat(name, age));
  }

  for (let cat of cats) {
    result.push(cat.meow(cat.name, cat.age))
  }

  return result.join("\n")
}

console.log(solve(["Mellow 2", "Tom 5"]));
