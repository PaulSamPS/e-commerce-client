export type IFavoriteItem = {
  id: number;
  name: string;
  images: string;
};

export interface FavoriteSchema {
  favorites: IFavoriteItem[];
  loading: boolean;
  error: string | undefined;
}
