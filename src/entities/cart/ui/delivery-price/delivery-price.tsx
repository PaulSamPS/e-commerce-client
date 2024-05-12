import React from "react";
import { UiText } from "@/shared/ui/ui-text";

type DeliveryPriceProps = {
  deliverySum: number;
  description: string;
  periodMin: number;
  periodMax: number;
};

export const DeliveryPrice = ({
  deliverySum,
  description,
  periodMax,
  periodMin,
}: DeliveryPriceProps) => {
  return (
    <div>
      <UiText weight={"regular"}>{description}</UiText>
      <UiText weight={"regular"}>{deliverySum}</UiText>
      <UiText weight={"regular"}>{periodMin}</UiText>
      <UiText weight={"regular"}>{periodMax}</UiText>
    </div>
  );
};
