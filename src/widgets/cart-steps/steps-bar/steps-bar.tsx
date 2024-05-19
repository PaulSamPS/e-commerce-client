import clsx from "clsx";
import styles from "./steps-bar.module.scss";
import { useCartSteps } from "../useCartSteps";

const navItems = [
  { id: 0, name: "Ваша корзина" },
  { id: 1, name: "Доставка" },
  { id: 2, name: "Способ оплаты" },
  { id: 3, name: "Подтверждение заказа" },
];

export const StepsBar = () => {
  const { step, setStep } = useCartSteps();

  return (
    <div className={styles.wrapper}>
      {navItems.map((n, index) => (
        <div
          key={n.id}
          onClick={index < step ? () => setStep(index) : undefined}
          style={{ cursor: index < step ? "pointer" : "unset" }}
          className={clsx(styles.triangles, {
            [styles["active-white"]]: step === index,
            [styles["active-gray"]]: index < step,
          })}
        >
          <div>
            <span>{n.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
