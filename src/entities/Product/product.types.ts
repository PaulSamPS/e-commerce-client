import { IProductsSearchData } from '@/shared/types/search-product';

export interface ProductsSearchSchema {
    data: IProductsSearchData
    isLoading: boolean
    error?: string
    readonly: boolean
}
