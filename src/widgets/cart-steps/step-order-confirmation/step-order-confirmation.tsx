"use client";

import { useRouter } from "next/navigation";
import styles from "./step-order-confirmation.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { useAppDispatch } from "@/shared/hooks";
import { Total } from "@/entities/cart";
import { UiButton } from "@/shared/ui/ui-button";
import { useCartState } from "../useCartState";
import { useCartSteps } from "../useCartSteps";

export const StepOrderConfirmation = () => {
  const dispatch = useAppDispatch();
  const { products, discount, totalPrice } = useCartState();
  const { deliveryMethod, step } = useCartSteps();
  const { push } = useRouter();
  // const {
  //   control,
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  // } = useForm<ProfileFormProps>({
  //   values: {
  //     firstname: profile?.firstname!,
  //     lastname: profile?.lastname!,
  //     middleName: profile?.middleName!,
  //     region: profile?.region!,
  //     city: profile?.city!,
  //     address: profile?.address!,
  //     phoneNumber: profile?.phoneNumber!,
  //   },
  // });

  // useEffect(() => {
  //   dispatch(fetchProfileData());
  // }, [dispatch]);

  // const onSubmit = async (formData: ProfileFormProps) => {
  //   await dispatch(updateProfileData(formData));
  //
  //   const res = await $apiAuth.post<IPayment>("/order/create", {
  //     amount: totalPrice,
  //     products,
  //     userInfo: [formData],
  //     discount,
  //   });
  //   if (res) {
  //     sessionStorage.setItem("paymentId", res.data.id);
  //     push(res.data.confirmation.confirmation_url);
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <UiTitle size="h2" weight="regular">
        Контактное лицо
      </UiTitle>
      <span className={styles.subtitle}>
        все поля формы обязательны для заполнения
      </span>
      <form className={styles.form}>
        {/*<PersonalData*/}
        {/*  register={register}*/}
        {/*  profile={profile!}*/}
        {/*  control={control}*/}
        {/*  errors={errors}*/}
        {/*/>*/}
        <Total
          delivery={deliveryMethod}
          productsLength={products?.length}
          discount={discount!}
          totalPrice={totalPrice!}
          step={step}
          nextStep={
            <UiButton
              appearance="primary"
              size="m"
              type="submit"
              // disabled={!isValid}
            >
              Перейти к оплате
            </UiButton>
          }
          title="Ваш заказ"
          offer
        />
      </form>
    </div>
  );
};
