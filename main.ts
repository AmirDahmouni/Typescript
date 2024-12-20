/*
TypeScript est un language de prog typé de JavaScript qui compile en JavaScript pur.
Il ajoute des fonctionnalités comme les types statiques, les interfaces, les classes, et les énumérations,
ce qui permet de détecter des erreurs plus tôt et de rendre le code plus robuste et facile à maintenir.

typescript n'est pa sun language dynamique

En activant strict mode dans tsconfig.json, TypeScript applique un typage plus strict et prévient davantage d’erreurs
providing the --strictNullChecks flag to the TypeScript (tsc) compiler

le type des variables est vérifié au moment de la compilation. Cela permet de détecter les erreurs plus tôt dans le développement.

TypeScript doesn't support static classes

typage statiques ( primitive types: string, boolean, number, bigint, void, any)
typage générique
*/
import { User } from './module';

/*

Différence entre any, unknown, never et void ?
Réponse :
any : N'importe quel type, désactive le typage.
unknown : Type inconnu, nécessite une vérification avant usage.
never : Type pour les valeurs qui n’existent jamais (ex : une fonction qui lance une erreur).
void : Type pour les fonctions qui ne retournent rien.

*/

const obj = { name: "Alice", age: 25 } as const;

// définir un tableau avec un nombre fixe d’éléments de types spécifiques.
let tuple: [string, number] = ["Alice", 25];

// function
function add(a: number, b: number = 0): number {
  return a + b;
}


// surcharge
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
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


// Type Guards
function isString(value: any): value is string {
  return typeof value === 'string';
}


//decorators
function Log(target: any, propertyName: string) {
  console.log(`Property: ${propertyName}`);
}
class Person {
  @Log
  name: string;
}

// namespace
namespace Geometry {
  export interface Shape {
    area(): number;
  }
}