import styles from "../product.module.scss";
import { IProduct } from "@/shared/api/product";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { FeaturesItem } from "@/shared/api/types/features";
import dynamic from "next/dynamic";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import React from "react";
import { AddToCart } from "@/features/add-to-cart";
import { ProductDetails } from "@/entities/product-details";

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

async function getFeatures(productName: string): Promise<FeaturesItem[]> {
  const res = await fetch(`http://localhost:5500/features/${productName}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Carousel = dynamic(() => import("@/shared/ui/ui-carousel/ui-carousel"), {
  loading: () => (
    <div style={{ height: "100%" }}>
      <UiSpinner
        color={"var(--blue-themed"}
        position={"relative"}
        bg={"transparent"}
      />
    </div>
  ),
  ssr: false,
});

const Product = async ({ params }: Params) => {
  const { product, reviewCount } = await getProduct(
    decodeURI(params.slug[params.slug.length - 1]),
  );
  const productFeatures = await getFeatures(
    decodeURI(params.slug[params.slug.length - 1]),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <UiTitle weight="regular" size="h1">
          {product.name}
        </UiTitle>
        <div className={styles.rating}>
          {product.rating > 0 && <UiRating rating={product.rating} />}
          <UiReview reviews={reviewCount} />
        </div>
      </div>
      <Carousel
        product={product}
        imageWidth={500}
        className={styles.carousel}
      />
      <div className={styles.right}>
        <ProductDetails
          product={product}
          addToCart={<AddToCart productId={product.id} variant={"primary"} />}
          features={productFeatures}
        />
      </div>
    </div>
  );
};

export default Product;
