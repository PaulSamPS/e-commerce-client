"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styles from "./step-order-confirmation.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { useAppDispatch } from "@/shared/hooks";
import { useStrictContext } from "@/shared/lib/react";
import { CartStepsContext } from "@/widgets/cart-steps/cart-steps-context";
import { cartState, Total } from "@/entities/cart";
import { UiButton } from "@/shared/ui/ui-button";
import { PersonalData } from "@/entities/user";

export const StepOrderConfirmation = () => {
  const dispatch = useAppDispatch();
  const { cart } = useSelector(cartState);
  const { deliveryMethod, step } = useStrictContext(CartStepsContext);
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
          productsLength={cart?.products.length!}
          discount={cart?.discount!}
          totalPrice={cart?.total_price!}
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
