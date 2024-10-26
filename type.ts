// ********************* Type peut etre défini et combine differents type + interesection et union

// Les types de base incluent number, string, boolean, null, undefined, symbol, et bigint
let nom: string = 'Alice';
let age: number = 30;
let symbol: symbol;
let bigint: bigint;
let isActive: boolean = true;

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

// ******* types utilitaires

// Rend toutes les propriétés d’un type optionnelles.
type User = { name: string; age: number };
type PartialUser = Partial<User>;  // { name?: string; age?: number }

// Rend toutes les propriétés obligatoires.
type OptionalUser = { name?: string; age?: number };
type CompleteUser = Required<OptionalUser>; // { name: string; age: number }

// Rend toutes les propriétés en lecture seule.
type Admin = { name: string; age: number };
type ReadonlyUser = Readonly<Admin>; // { readonly name: string; readonly age: number }


// Sélectionne un sous-ensemble de propriétés d’un type.
type SuperAdmin = { name: string; age: number; role: string };
type UserBasicInfo = Pick<SuperAdmin, "name" | "age">; // { name: string; age: number }

//  Exclut certaines propriétés d’un type.
type UserB = { name: string; age: number; role: string };
type UserWithoutRole = Omit<UserB, "role">; // { name: string; age: number }

// accéder au type d'une propriété spécifique dans un type existant.
type UserA = { name: string; age: number };
type AgeType = UserA["age"]; // number

// créer un type en appliquant une transformation sur chaque propriété d'un type existant.
type UserC = { name: string; age: number };
type ReadonlyUserC = { [K in keyof UserC]: UserC[K] }; // { name: string; age: number }


// tempalte literla types

type Name = "Alice" | "Bob";
type Greeting = `Hello, ${Name}`; // "Hello, Alice" | "Hello, Bob"





