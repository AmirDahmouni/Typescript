// Déclaration d'une énumération Direction avec des valeurs par défaut
enum Direction {
  Up,       // Valeur implicite 0
  Down,     // Valeur implicite 1
  Left,     // Valeur implicite 2
  Right     // Valeur implicite 3
}

// Énumération de type chaîne
enum ResponseStatus {
  OK = "OK",
  ERROR = "ERROR",
  LOADING = "LOADING"
}

// Utilisation de l'énumération
function move(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Moving Up";
    case Direction.Down:
      return "Moving Down";
    case Direction.Left:
      return "Moving Left";
    case Direction.Right:
      return "Moving Right";
    default:
      return "Unknown direction";
  }
}

console.log(move(Direction.Up));        // "Moving Up"
console.log(move(Direction.Right));     // "Moving Right"

// Récupération des valeurs d'énumération
console.log(Direction[0]);              // "Up"
console.log(Direction[Direction.Down]); // "Down"

// Enumérations avec valeurs numériques et accès inverse
enum Role {
  Admin = 1,
  User,
  Guest
}

console.log(Role.Admin);        // 1
console.log(Role[1]);           // "Admin"
console.log(Role[Role.User]);   // "User"

// Enum avec valeurs de chaîne
console.log(ResponseStatus.OK); // "OK"

// Énumération avec valeurs personnalisées

// Combinaison d'enums avec logique conditionnelle
namespace Direction {
  export enum Status {
    Success = 200,
    NotFound = 404,
    Unauthorized = 401
  }
  export function getStatusMessage(status: Status): string {
    if (status === status[0]) return "Request succeeded!";
    if (status === status[1]) return "Resource not found!";
    if (status === status[2]) return "Unauthorized access!";
    return "Unknown status";
  }
}
console.log(Direction.getStatusMessage(Direction.Status.Success));        // "Request succeeded!"


// Enumération comme type de retour
function parseDirection(input: string): Direction | null {
  switch (input) {
    case "up":
      return Direction.Up;
    case "down":
      return Direction.Down;
    case "left":
      return Direction.Left;
    case "right":
      return Direction.Right;
    default:
      return null;
  }
}
console.log(parseDirection("up"));     // Direction.Up (0)
console.log(parseDirection("unknown")); // null
// Boucler sur un enum numérique
for (let direction in Direction) {
  if (isNaN(Number(direction))) {
    console.log(`Direction key: ${direction}, value: ${Direction[direction]}`);
  }
}


