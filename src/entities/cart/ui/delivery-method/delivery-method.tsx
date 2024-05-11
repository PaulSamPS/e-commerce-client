import { ReactNode } from "react";
import styles from "./delivery-method.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";

type MethodProps = {
  total: ReactNode;
  setDeliveryMethod: (deliveryMethod: string) => string;
  deliveryMethod: string;
};
export const DeliveryMethod = ({
  total,
  deliveryMethod,
  setDeliveryMethod,
}: MethodProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <UiTitle size="h2" weight="medium">
          Выберите способ получения заказа
        </UiTitle>
        <label htmlFor="self-delivery">
          <input
            type="radio"
            name="self-delivery"
            checked={deliveryMethod === "self-delivery"}
            onChange={(e) => setDeliveryMethod(e.target.name)}
          />
          <span>Самовывоз</span>
        </label>
        <label htmlFor="delivery">
          <input
            type="radio"
            name="delivery"
            checked={deliveryMethod === "delivery"}
            onChange={(e) => setDeliveryMethod(e.target.name)}
          />
          <span>Доставка</span>
        </label>
      </div>
      <div className={styles.right}>{total}</div>
    </div>
  );
};
