// Enum pour les statuts de la commande
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

// Interface générique pour les utilisateurs
interface User {
  id: string;
  name: string;
  email: string;
}

// Interface générique pour les produits
interface Product<T> {
  id: string;
  name: string;
  price: T;
}

// Type combiné pour les produits avec une remise
type DiscountedProduct<T> = Product<T> & { discount: number };

// Interface générique pour les commandes
interface Order<T extends Product<U>, U> {
  id: string;
  user: User;
  products: T[];
  status: OrderStatus;
  totalPrice: () => U; // Méthode générique pour obtenir le prix total
}

// Classe générique pour gérer les commandes
class OrderManager<T extends Product<U>, U> {
  private orders: Order<T, U>[] = [];

  // Méthode pour créer une nouvelle commande
  createOrder(user: User, products: T[]): Order<T, U> {
    const newOrder: Order<T, U> = {
      id: this.generateOrderId(),
      user,
      products,
      status: OrderStatus.Pending,
      totalPrice: () => products.reduce((total, product) => total + (product.price as any), 0) as U, // Calcule le total en fonction du type
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  // Méthode pour changer le statut d'une commande
  updateOrderStatus(orderId: string, status: OrderStatus): void {
    const order = this.orders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
    } else {
      console.error(`Commande avec ID ${orderId} introuvable.`);
    }
  }

  // Méthode pour lister toutes les commandes
  listOrders(): Order<T, U>[] {
    return this.orders;
  }

  // Méthode pour générer un ID de commande unique
  private generateOrderId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Classe représentant un produit spécifique
class Book<T> implements Product<T> {
  constructor(public id: string, public name: string, public price: T) { }
}

// Classe représentant un produit électronique spécifique
class Electronic<T> implements Product<T> {
  constructor(public id: string, public name: string, public price: T) { }
}

// Utilisation des classes et de la généricité
const orderManager = new OrderManager<Product<number>, number>();

// Création d'un utilisateur
const user: User = { id: "u1", name: "Alice", email: "alice@example.com" };

// Création de produits
const book1 = new Book("p1", "1984", 15);
const laptop = new Electronic("p2", "MacBook Pro", 2000);

// Création d'une commande
const order = orderManager.createOrder(user, [book1, laptop]);

// Mise à jour du statut de la commande
orderManager.updateOrderStatus(order.id, OrderStatus.Shipped);


const total = order.totalPrice();
console.log(`Total de la commande ${order.id} : ${total}`); // Output: Total de la commande : 2015

// Liste des commandes
console.log("Commandes :", orderManager.listOrders());


const discountedBook: DiscountedProduct<number> = { id: "p3", name: "The Hobbit", price: 12, discount: 20 };


const discountedOrder = orderManager.createOrder(user, [discountedBook]);


orderManager.updateOrderStatus(discountedOrder.id, OrderStatus.Delivered);
console.log("Commandes avec produits en promotion :", orderManager.listOrders());
