export type IncreaseCountProps = {
  productId: number;
  productInStock: number;
};

export type DecreaseCountProps = {
  productId: number;
  count: number;
};

export type DeleteProductProps = {
  productId: number;
};
