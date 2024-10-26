/********************* Interface est une définition d'une strucutre d'object, fonction ou classes et elle peut etre extensible et combiné*/
interface User {
  name: string;
  age?: number;   //optinal
}
const user: User = { name: "Alice", age: 25 };


// héritage
interface Person {
  name: string;
}
interface Employee extends Person {
  role: string;
}

const employee: Employee = { name: "Alice", role: "Developer" };

// héritage multiple
interface Person {
  name: string;
}
interface Identifiable {
  readonly id: number;
}

interface Employee extends Person, Identifiable {
  role: string;
  greet(): string;
}
const employee: Employee = {
  id: 1,
  name: "Alice",
  role: "Developer",
  greet() {
    return `Hello, ${this.name}`;
  },
};


// index signature
interface StringDictionary {
  [key: string]: string;
}
const dictionary: StringDictionary = {
  hello: "world",
  foo: "bar",
};


// Définir des méthodes et leurs signatures sans implémentation.
interface User {
  name: string;
  greet(): string;
}
const user: User = {
  name: "Alice",
  greet() {
    return `Hello, ${this.name}`;
  },
};


// Combinaison d'Interfaces et de Types
type Identifiable = { id: number };
interface User extends Identifiable {
  name: string;
}
const user: User = { id: 1, name: "Alice" };


//interface pour les fonctions
interface GreetFunction {
  (name: string): string;
}
const greet: GreetFunction = (name) => `Hello, ${name}`;



// interface comme contrat pour les classes
interface User {
  name: string;
  greet(): string;
}
class Person implements User {
  constructor(public name: string) { }
  greet() {
    return `Hello, ${this.name}`;
  }
}


//  Fusion d'Interfaces (Declaration Merging)
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = { name: "Alice", age: 25 }; // User contient les propriétés `name` et `age`




