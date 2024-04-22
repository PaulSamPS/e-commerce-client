import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ThunkConfig } from '@/shared/providers/store-provider';
import { IProductsSearchData } from '@/shared/types/search-product';

interface ISearchProduct {
    search: string
}
export const searchProductApi =
    createAsyncThunk<IProductsSearchData, ISearchProduct, ThunkConfig<string>>(
        'product/search',
        async ({ search }, thunkAPI) => {
            const { rejectWithValue } = thunkAPI;
            try {
                const data = await api.search({ data: search });

                if (!data) {
                    throw new Error();
                }

                return data;
            } catch (e: any) {
                const err: AxiosError<{ message: string }> = e;
                return rejectWithValue(err.response ? err.response.data.message : 'error');
            }
        }
    );
