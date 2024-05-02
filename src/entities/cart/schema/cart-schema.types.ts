import { ICart } from "@/shared/types/cart";

export interface CartSchema {
  cart: ICart | null;
  error?: string;
  loading: boolean;
}
