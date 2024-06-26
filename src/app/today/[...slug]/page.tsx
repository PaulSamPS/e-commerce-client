import React from "react";
import {
  IDayProducts,
  IOneDayProducts,
  IYesterdayProducts,
} from "@/shared/api/types/product";
import styles from "./today.module.scss";
import { TodayProductDetails } from "@/widgets/today-product-details";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiTimer } from "@/shared/ui/ui-timer/ui-timer";
import { OtherDay } from "@/widgets/other-today-products";
import { FeaturesItem } from "@/shared/api/types/features";
import { AddToCart } from "@/features/add-to-cart";
import { YesterdayProduct } from "@/widgets/yesterday-product";
import dynamic from "next/dynamic";
import { UiSpinner } from "@/shared/ui/ui-spinner";

type Params = {
  params: {
    slug: string;
  };
  searchParams: any;
};

async function getOneDayProduct(productName: string): Promise<IOneDayProducts> {
  const res = await fetch(
    `http://localhost:5500/day-products/find/${productName}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getDayProducts(): Promise<IDayProducts[]> {
  const res = await fetch(`http://localhost:5500/day-products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getYesterdayProducts(): Promise<IYesterdayProducts[]> {
  const res = await fetch(`http://localhost:5500/day-products/yesterday`);

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

const Carousel = dynamic(
  () => import("@/entities/carousel-with-preview/carousel-with-preview"),
  {
    loading: () => (
      <div style={{ height: "400px" }}>
        <UiSpinner
          color={"var(--blue-themed"}
          position={"relative"}
          bg={"transparent"}
        />
      </div>
    ),
    ssr: false,
  },
);

const Product = async ({ params, searchParams }: Params) => {
  const oneDayProduct = await getOneDayProduct(decodeURI(params.slug));
  const dayProducts = await getDayProducts();
  const yesterdayProducts = await getYesterdayProducts();
  const productFeatures = await getFeatures(
    decodeURI(params.slug[params.slug.length - 1]),
  );

  return (
    <div className={styles.wrapper}>
      <OtherDay
        currentProduct={oneDayProduct}
        dayProducts={dayProducts}
        className={styles.otherDay}
      />
      <YesterdayProduct
        productsYesterday={yesterdayProducts}
        className={styles.yesterday}
      />
      <div className={styles.main}>
        <UiTitle weight="medium" size="h2" className={styles.title}>
          Только сегодня!
        </UiTitle>
        <div className={styles.top}>
          <UiTitle weight="medium" size="h2">
            Товар дня
          </UiTitle>
          <div className={styles["end-action"]}>
            <span className={styles.text}>
              До конца действия супер-цены осталось:
            </span>
            <UiTimer className={styles.timer} />
          </div>
        </div>
        <TodayProductDetails
          product={oneDayProduct}
          addToCart={
            <AddToCart productId={oneDayProduct.id} variant={"primary"} />
          }
          features={productFeatures}
          carousel={<Carousel product={oneDayProduct} imageWidth={400} />}
        />
      </div>
    </div>
  );
};

export default Product;
