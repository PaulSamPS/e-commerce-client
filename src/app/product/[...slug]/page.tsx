import styles from "../product.module.scss";
import { IProduct } from "@/shared/types/product";
import Carousel from "@/shared/ui/ui-carousel/carousel";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";

type Params = {
  params: {
    slug: string;
  };
};

async function getProduct(
  name: string,
): Promise<{ product: IProduct; reviewCount: number }> {
  const res = await fetch(`http://localhost:5500/products/find/${name}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Product = async ({ params }: Params) => {
  const { product, reviewCount } = await getProduct(decodeURI(params.slug));
  console.log(product.name);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>
          <UiTitle weight="regular" size="h1">
            {product.name}
          </UiTitle>
          <div className={styles.rating}>
            {product.rating > 0 && <UiRating rating={product.rating} />}
            <UiReview reviews={reviewCount} />
          </div>
          <Carousel currentProduct={product} imageWidth={500} />
        </div>
      </div>
    </div>
  );
};

export default Product;
