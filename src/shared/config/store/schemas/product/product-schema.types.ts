import { IProductsSearchData } from "@/shared/api/types/product";

export interface ProductsSearchSchema {
  data: IProductsSearchData;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
