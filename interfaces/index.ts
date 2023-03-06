export interface Dish {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  // addOns: { id: string; name: string; price: number; dishId: string }[];
  FullLarge_Price: number;
  FullMedium_Price: number;
  FullSmall_Price: number;
  HalfLarge_Price: number;
  HalfMedium_Price: number;
  HalfSmall_Price: number;
  available: boolean;
}

export interface DishSections {
  dishesh: Dish[];
  sectionName: string;
}

export interface PriceStructure {
  Large?: { full?: number; half?: number };
  Medium?: { full?: number; half?: number };
  Small?: { full?: number; half?: number };
}

export interface Order {
  dishId: string;
  orderId: string;
  tableNumber: number;
  tableSectionId: string;
  user_description?: string;
  orderedBy: string;
  size: "Large" | "Medium" | "Small";
  fullQuantity?: number;
  halfQuantity?: number;
  chefAssign?: string;
  completed?: string;
  createdAt: string;
}
