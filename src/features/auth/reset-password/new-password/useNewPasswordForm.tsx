import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/User";
import { useForm } from "react-hook-form";
import { newPasswordSet } from "@/entities/User/reset-password-api";

interface NewPasswordFormValues {
  newPassword: string;
  repeatPassword: string;
}

export const useNewPasswordForm = () => {
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<NewPasswordFormValues>({ mode: "onChange" });

  const onSubmit = async (formData: NewPasswordFormValues) => {
    const { newPassword } = formData;
    dispatch(newPasswordSet({ email: state?.email!, password: newPassword }));
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    newPassword: watch("newPassword", ""),
    onSubmit,
  };
};
