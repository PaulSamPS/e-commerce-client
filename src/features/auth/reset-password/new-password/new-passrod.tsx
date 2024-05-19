import { UiFormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { newPasswordSet, resetPasswordState } from "@/entities/user";
import { useAppDispatch } from "@/shared/hooks";
import { useSelector } from "react-redux";
import { NewPasswordFormProps, newPasswordSchema } from "./new-password.schema";

const inputFields = [
  {
    name: "password",
    type: "password",
    placeholder: "Введите пароль",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Повторите пароль",
  },
];

export const NewPassword = () => {
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);

  const onSubmit = async (formData: NewPasswordFormProps) => {
    const { password } = formData;
    dispatch(newPasswordSet({ email: state?.email!, password }));
  };

  return (
    <UiFormWithInputs
      isLoading={state?.loading!}
      inputs={inputFields}
      onSubmit={onSubmit}
      actionText={"Сохранить"}
      schema={newPasswordSchema}
    />
  );
};
