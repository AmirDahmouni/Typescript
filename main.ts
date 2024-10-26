/*
TypeScript est un language de prog typé de JavaScript qui compile en JavaScript pur.
Il ajoute des fonctionnalités comme les types statiques, les interfaces, les classes, et les énumérations,
ce qui permet de détecter des erreurs plus tôt et de rendre le code plus robuste et facile à maintenir.
En activant strict mode dans tsconfig.json, TypeScript applique un typage plus strict et prévient davantage d’erreurs

le type des variables est vérifié au moment de la compilation. Cela permet de détecter les erreurs plus tôt dans le développement.
*/
import { User } from './module';




// définir un tableau avec un nombre fixe d’éléments de types spécifiques.
let tuple: [string, number] = ["Alice", 25];

// function
function add(a: number, b: number = 0): number {
  return a + b;
}

//function generique
function identity<T>(arg: T): T {
  return arg;
}


// Type assertion
let someValue: unknown = "Hello";
let strLength: number = (someValue as string).length;

// Nullable Types et Optionnalité
function greet(name?: string) {
  return `Hello, ${name ?? "stranger"}`;
}

// Fonctions et Propriétés Asynchrones
async function fetchData(): Promise<string> {
  return await Promise.resolve("Data");
}

// Compatibilité des Types
interface Pet { name: string; }
class Dog { name: string; }
let pet: Pet = new Dog(); // Compatible car même structure