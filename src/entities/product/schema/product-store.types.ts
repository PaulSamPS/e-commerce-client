import { IProductsSearchData } from "@/shared/types/product";

export interface ProductsSearchSchema {
  data: IProductsSearchData;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
