// fonction générique
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(42));    // Output: 42

// tableau générique
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(getFirstElement<number>([1, 2, 3])); // Output: 1

// Classes Génériques
class Box<T> {
  private contents: T;
  constructor(value: T) {
    this.contents = value;
  }
  getContents(): T {
    return this.contents;
  }
}
const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // Output: 123


// interface générique
interface Pair<T, U> {
  first: T;
  second: U;
}
const coordinates: Pair<number, number> = { first: 10, second: 20 };


//type de fonction
interface Transformer<T, U> {
  (input: T): U;
}
const stringToNumber: Transformer<string, number> = (input) => parseInt(input, 10);
console.log(stringToNumber("123")); // Output: 123


// restreindre les types acceptés
function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
printLength("Hellooo");           // Output: 5


// type utilitaire  Partial, Readonly, Record, et Pick utilisent la généricité pour créer des types avancés
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;      // Toutes les propriétés sont optionnelles
type ReadOnlyUser = Readonly<User>;    // Toutes les propriétés sont en lecture seule
type NameOnly = Pick<User, "name">;    // Type avec seulement la propriété `name`
type RecordUser = Record<string, User>; // Utilise les valeurs comme des User et les clés comme string

// enum & genericité
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
function paint<T extends Color>(color: T): void {
  console.log(`Peindre avec la couleur ${color}`);
}
paint(Color.Red);


// Combinaison de plusieurs Types Génériques
function swap<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]];
}
const swapped = swap<string, number>(["hello", 42]);
console.log(swapped); // Output: [42, "hello"]


// type de retour et inférence avec généricité
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}
const strings = createArray<string>(3, "hello");
console.log(strings); // Output: ["hello", "hello", "hello"]


//type générique conditionnels
type IsString<T> = T extends string ? "Yes" : "No";
type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"


//type mappé générique
type Optional<T> = {
  [K in keyof T]?: T[K];
};
interface User {
  id: number;
  name: string;
  email: string;
}
type OptionalUser = Optional<User>; // Toutes les propriétés deviennent optionnelles



