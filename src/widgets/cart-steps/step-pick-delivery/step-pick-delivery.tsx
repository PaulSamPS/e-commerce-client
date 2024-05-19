import { DeliveryMethod, NextStep, Total } from "@/entities/cart";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { apiCdekLogin } from "@/entities/cdek";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/shared/lib/localstorage";
import {
  apiProfileGet,
  apiProfileUpdate,
  PersonalData,
  profileState,
} from "@/entities/profile";
import { ProfileFormProps } from "@/entities/profile";
import { useAppDispatch } from "@/shared/hooks";
import styles from "./step-pick-delivery.module.scss";
import { $api } from "@/shared/api";
import { useCartState } from "../useCartState";
import { useCartSteps } from "../useCartSteps";

export const StepPickDelivery = () => {
  const { products, totalPrice, discount } = useCartState();
  const { deliveryMethod, nextStep, setDeliveryMethod, step } = useCartSteps();
  const { data } = useSelector(profileState);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    async (formData: ProfileFormProps) => {
      dispatch(apiProfileUpdate(formData))
        .then(async () => {
          const res = await $api.get(`location/cities/?city=${formData.city}`);
          saveToLocalStorage("locationCode", res.data[0].code);
          console.log(res.data[0].code);
        })
        .then(async () => {
          const res = await $api.post("/calculator/tarifflist", {
            currency: 1,
            type: 2,
            from_location: {
              code: 261,
            },
            to_location: {
              code: loadFromLocalStorage("locationCode"),
            },
            packages: [
              {
                height: 90,
                length: 210,
                weight: 50000,
                width: 80,
              },
              {
                height: 90,
                length: 210,
                weight: 50000,
                width: 80,
              },
            ],
          });
          console.log(res);
        });
    },
    [dispatch],
  );

  useEffect(() => {
    if (deliveryMethod === "Доставка") {
      const cdekUserLogin = async () => {
        const res = await apiCdekLogin();
        saveToLocalStorage("cdekToken", res.access_token);
      };

      cdekUserLogin();
    }
  }, [deliveryMethod]);

  useEffect(() => {
    dispatch(apiProfileGet());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {deliveryMethod === "Доставка" && (
        <PersonalData
          profile={data!}
          onSubmit={onSubmit}
          className={styles.personal}
        />
      )}
      <DeliveryMethod
        total={
          <Total
            productsLength={products?.length}
            totalPrice={totalPrice!}
            title={"Итого"}
            discount={discount!}
            nextStep={<NextStep text={"Продолжить"} nextStep={nextStep} />}
            delivery={deliveryMethod}
            step={step}
          />
        }
        deliveryMethod={deliveryMethod}
        setDeliveryMethod={setDeliveryMethod}
      />
    </div>
  );
};
