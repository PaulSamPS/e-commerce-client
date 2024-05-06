import { ImageType } from "@/shared/api/types/image";

export interface IShares {
  id: number;
  images: ImageType;
  name: string;
  path: string;
}

// Интерфейсы для параметров запросов API
export interface SharesProps {
  image: File;
  name: string;
  path: string;
}
