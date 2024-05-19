import { CardCart } from "@/entities/cart";
import styles from "@/widgets/cart-steps/step-product-list/step-products-list.module.scss";
import { IncreaseCount } from "@/features/increase-count";
import { DecreaseCount } from "@/features/decrease-count";
import { DeleteProduct } from "@/features/delete-product";
import { ProductCart } from "@/shared/api/types";

type ProductListProps = {
  products: ProductCart[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      {products.map((product) => (
        <CardCart
          key={product.productId}
          product={product}
          className={styles.card}
          IncreaseCount={IncreaseCount}
          DecreaseCount={DecreaseCount}
          DeleteProduct={DeleteProduct}
        />
      ))}
    </>
  );
};
