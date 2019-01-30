class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.tellMeta = () => {
      console.log(this.name);
    };
  }

  // this form need support, currently by babel //#endregion
  // tellMeta = () => {}

  tellInfo() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

class Student extends People {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

// let p = new People("hlcao", 32)
let p = new Student("ran", 3);

setTimeout(p.tellInfo.bind(p), 1000);
setTimeout(p.tellMeta, 1000);
