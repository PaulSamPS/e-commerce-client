import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/shared/lib/localstorage";
import { toast } from "react-toastify";
import { FavoriteSchema, IFavoriteItem } from "@/shared/config/store";

const initialState: FavoriteSchema = {
  favorites: [],
};

export const favoriteStore = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    getFavorites: (state) => {
      const data = loadFromLocalStorage("favorites");

      if (data) {
        state.favorites = data;
      }
    },
    addToFavorite: (state, action: PayloadAction<IFavoriteItem>) => {
      const newFavorite: IFavoriteItem = {
        id: action.payload.id,
        name: action.payload.name,
        images: action.payload.images,
      };

      const isDuplicate = state.favorites.some(
        (prevItem) => prevItem.id === newFavorite.id,
      );

      if (isDuplicate) {
        return;
      }

      const updatedData = [
        newFavorite,
        ...state.favorites.filter((prevItem) => prevItem.id !== newFavorite.id),
      ];

      saveToLocalStorage("favorites", updatedData);

      state.favorites = updatedData;
      toast.success("Товар добавлен в избранное");
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      const updatedData = state.favorites.filter(
        (item) => item.id !== action.payload,
      );

      saveToLocalStorage("favorites", updatedData);

      state.favorites = updatedData;
      toast.warn("Товар удален из избранного");
    },
  },
});

export const { actions: favoriteActions, reducer: favoriteReducer } =
  favoriteStore;
