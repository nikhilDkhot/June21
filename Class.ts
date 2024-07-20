class Person {
    name: string;
  }
  
  const person = new Person();
  person.name = "osho"
  console.log(person.name);

  class Person1 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person1 = new Person1("osho  ccc");
  console.log(person1.getName()); // person.name isn't accessible from outside the class since it's private

/****************************/
class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("rajanish");
console.log(person2.getName());  

/************************/
class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("sachidanand");
console.log(person3.getName());

/*******************************/
//Inheritance: Implements
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

/*
Override
When a class extends another class, it can replace the members of the parent class with the 
same name.
Newer versions of TypeScript allow explicitly marking this with the override keyword.
*/
interface Shape {
  getArea: () => number;
}

class Rectangle1 implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle1[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle1 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}