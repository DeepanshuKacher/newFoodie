interface Dish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  // addOns: { id: string; name: string; price: number; dishId: string }[];
  available: boolean;
  price: {
    large: { half: number; full: number };
    medium: { half: number; full: number };
    small: { half: number; full: number };
  };
}

interface DishSections {
  dishesh: Dish[];
  sectionName: string;
}

// interface PriceStructure {
//   Large?: { full?: number; half?: number };
//   Medium?: { full?: number; half?: number };
//   Small?: { full?: number; half?: number };
// }

interface Order {
  dishId: string;
  orderId: string;
  tableNumber: number;
  tableSectionId: string;
  user_description?: string;
  orderedBy: string;
  size: "large" | "medium" | "small";
  fullQuantity?: string;
  halfQuantity?: string;
  chefAssign?: string;
  completed?: string;
  createdAt: string;
}

export type { Dish, DishSections, Order };
