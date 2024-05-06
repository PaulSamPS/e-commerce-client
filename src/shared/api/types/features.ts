export type IFeaturesProps = {
  productId: number;
};

export interface FeaturesItem {
  name: string;
  value: string;
}

export interface IFeatures {
  features: FeaturesItem[];
}
