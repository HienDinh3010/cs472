class Animal {
    constructor(name, speed = 0) {
      this.name = name;
      this.speed = speed;
    }
  
    run(additionalSpeed) {
      this.speed += additionalSpeed;
      console.log(`${this.name} is running at speed ${this.speed}`);
    }
  
    static compareBy(a1, a2) {
      return a1.speed - a2.speed;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name, speed = 0) {
      super(name, speed);
    }
  
    hide() {
      console.log(`${this.name} hides`);
    }
  }
  
  let animal = new Animal('Tiger', 20);
  animal.run(10);
  
  let rabbit = new Rabbit('Bunny', 5);
  rabbit.run(15);
  rabbit.hide();
  
  let animal2 = new Animal('Cheetah', 40);
  console.log(Animal.compareBy(animal, animal2));
  