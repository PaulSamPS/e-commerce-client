import { ICart } from "@/shared/api/types/cart";

export interface CartSchema {
  cart: ICart | null;
  error?: string;
  loading: boolean;
}
