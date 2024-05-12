import {
  cartState,
  DeliveryMethod,
  getCartApi,
  NextStep,
  Total,
} from "@/entities/cart";
import { useStrictContext } from "@/shared/lib/react";
import { CartStepsContext } from "@/widgets/cart-steps";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { apiCdekLogin } from "@/entities/cdek";
import { saveToLocalStorage } from "@/shared/lib/localstorage";
import {
  apiProfileGet,
  apiProfileUpdate,
  PersonalData,
  profileState,
} from "@/entities/profile";
import { ProfileFormProps } from "@/entities/profile";
import { useAppDispatch } from "@/shared/hooks";

export const StepPickDelivery = () => {
  const { nextStep, deliveryMethod, setDeliveryMethod, step } =
    useStrictContext(CartStepsContext);
  const { cart } = useSelector(cartState);
  const { data } = useSelector(profileState);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    async (formData: ProfileFormProps) => {
      dispatch(apiProfileUpdate(formData));
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
    <>
      <DeliveryMethod
        total={
          <Total
            productsLength={cart?.products.length}
            totalPrice={cart?.total_price!}
            title={"Итого"}
            discount={cart?.discount!}
            nextStep={<NextStep text={"Продолжить"} nextStep={nextStep} />}
            delivery={deliveryMethod}
            step={step}
          />
        }
        deliveryMethod={deliveryMethod}
        setDeliveryMethod={setDeliveryMethod}
      />
      {deliveryMethod === "Доставка" && (
        <PersonalData profile={data!} onSubmit={onSubmit} />
      )}
    </>
  );
};
