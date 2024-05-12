import React, { ReactNode } from "react";
import styles from "./total.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { UiTitle } from "@/shared/ui/ui-title";
import { endOf } from "@/shared/lib/enfOf";
import { UiText } from "@/shared/ui/ui-text";
import { UiSubhead } from "@/shared/ui/ui-subhead";

type TotalProps = {
  productsLength?: number;
  discount: number;
  totalPrice: number;
  nextStep?: ReactNode;
  title: string;
  offer?: boolean;
  delivery?: string;
  step: number;
};

export const Total = ({
  totalPrice,
  nextStep,
  productsLength,
  discount,
  title,
  offer,
  delivery,
  step,
}: TotalProps) => (
  <div className={styles.wrapper}>
    <UiTitle size="h2" weight="medium" className={styles.title}>
      {title}
    </UiTitle>
    <ul className={styles["total-block"]}>
      <li>
        <UiText weight={"regular"}> {productsLength}</UiText>
        <UiText weight={"regular"} className={styles.text}>
          {endOf(productsLength || 0, "товар", "товара", "товаров")}
          <UiText weight={"regular"}>на</UiText>
        </UiText>
        <UiText weight={"medium"} className={styles.value}>
          {priceRu(totalPrice + discount)}
        </UiText>
      </li>
      {discount > 0 && (
        <li>
          <UiSubhead weight={"regular"} className={styles.text}>
            Ваша выгода
          </UiSubhead>
          <UiText weight={"medium"} className={styles.value}>
            {priceRu(discount)}
          </UiText>
        </li>
      )}
      {step > 0 && (
        <li>
          <UiSubhead weight={"regular"}>Доставка</UiSubhead>
          <UiText weight={"medium"} className={styles.value}>
            {delivery}
          </UiText>
        </li>
      )}
      <li className={styles.total}>
        <UiSubhead weight={"regular"}>Всего к оплате</UiSubhead>
        {totalPrice > 0 && (
          <UiText weight={"medium"} className={styles["total-value"]}>
            {priceRu(totalPrice)}
          </UiText>
        )}
      </li>
      {nextStep}
      {offer && (
        <UiText weight={"regular"} className={styles.offer}>
          Нажимая кнопку Подтвердить заказ, я соглашаюсь с условиями Оферты,
          включающей условия обработки персональных данных.
        </UiText>
      )}
    </ul>
  </div>
);
