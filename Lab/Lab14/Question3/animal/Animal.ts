interface IAnimal {
    name: string;
    speed: number;
    run(additionalSpeed: number): void;
  }
  
  class Animal implements IAnimal {
    constructor(public name: string, public speed: number = 0) {}
  
    run(additionalSpeed: number): void {
      this.speed += additionalSpeed;
      console.log(`${this.name} is running at speed ${this.speed}`);
    }
  
    static compareBy(a1: Animal, a2: Animal): number {
      return a1.speed - a2.speed;
    }
  }
  
  interface IRabbit extends IAnimal {
    hide(): void;
  }
  
  class Rabbit extends Animal implements IRabbit {
    constructor(name: string, speed: number = 0) {
      super(name, speed);
    }
  
    hide(): void {
      console.log(`${this.name} hides`);
    }
  }
  
  // Usage
  let animal: Animal = new Animal('Tiger', 20);
  animal.run(10);
  
  let rabbit: Rabbit = new Rabbit('Bunny', 5);
  rabbit.run(15);
  rabbit.hide();
  
  let animal2: Animal = new Animal('Cheetah', 40);
  console.log(Animal.compareBy(animal, animal2));