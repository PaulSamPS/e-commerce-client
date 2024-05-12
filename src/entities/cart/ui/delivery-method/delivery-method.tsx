import { ReactNode } from "react";
import styles from "./delivery-method.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiRadioGroup } from "@/shared/ui/ui-radio-group/ui-radio-group";

type MethodProps = {
  total: ReactNode;
  setDeliveryMethod: (deliveryMethod: string) => void;
  deliveryMethod: string;
};

const RADIO_ITEMS = [{ value: "Самовывоз" }, { value: "Доставка" }];

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
        <UiRadioGroup
          items={RADIO_ITEMS}
          nameGroup={"delivery"}
          onChangeRadio={setDeliveryMethod}
          value={deliveryMethod}
        />
      </div>
      <div className={styles.right}>{total}</div>
    </div>
  );
};
