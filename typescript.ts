/*

TypeScript est un language de prog typé de JavaScript qui compile en JavaScript pur.
Il ajoute des fonctionnalités comme les types statiques, les interfaces, les classes, et les énumérations,
ce qui permet de détecter des erreurs plus tôt et de rendre le code plus robuste et facile à maintenir.
En activant strict mode dans tsconfig.json, TypeScript applique un typage plus strict et prévient davantage d’erreurs
*/

let name: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;


// ********************* Type peut etre défini et combine differents type + interesection et union
// union
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";

// interesection
type Person = { name: string; age: number };
type Employee = Person & { role: string };  // Combinaison avec intersection

// Alias
type Point = { x: number; y: number };
const p1: Point = { x: 10, y: 20 };

// type condiational
type IsString<T> = T extends string ? "yes" : "no";

type Test1 = IsString<string>; // "yes"
type Test2 = IsString<number>; // "no"


/********************* Interface est une définition d'une strucutre d'object et elle peut etre extensible et combiné*/
interface Employee extends Person {
  role: string;
}

