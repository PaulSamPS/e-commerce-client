import {
  useForm,
  Path,
  FieldValues,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import { UiInput } from "@/shared/ui/ui-input";
import { UiButton } from "@/shared/ui/ui-button";
import { UiSubhead } from "@/shared/ui/ui-subhead";
import styles from "./ui-form-with-inputs.module.scss";
import clsx from "clsx";
import { UiPhoneNumber } from "@/shared/ui/ui-phone-number/ui-phone-number";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormInput<K> {
  name: keyof K; // Название поля в объекте данных формы.
  type: string; // Тип элемента ввода (например, 'text', 'password').
  placeholder: string; // Текст заполнителя для поля ввода.
}

export interface FormWithInputsProps<T extends FieldValues, K> {
  isLoading: boolean; // Указывает, находится ли форма в состоянии загрузки.
  error?: string; // Сообщение об ошибке для отображения над формой.
  inputs: FormInput<K>[]; // Конфигурация полей ввода в форме.
  onSubmit: SubmitHandler<T>; // Функция для обработки отправки формы.
  className?: string; // CSS класс для стилизации формы.
  actionText: string; // Текст кнопки действия формы.
  schema: ZodType<T>;
  phoneNumber?: string;
  withPhoneNumber?: boolean;
}

export const UiFormWithInputs = <
  T extends FieldValues,
  K extends Record<string, unknown>,
>({
  isLoading,
  error,
  inputs,
  onSubmit,
  className,
  actionText,
  phoneNumber,
  withPhoneNumber,
  schema,
}: FormWithInputsProps<T, K>) => {
  const { handleSubmit, formState, control } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const { errors, isValid } = formState;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(styles.wrapper, className)}
    >
      {error && (
        <UiSubhead weight="regular" className={styles.error}>
          {error}
        </UiSubhead>
      )}
      {inputs.map(({ name, type, placeholder }) => (
        <Controller
          key={name.toString()}
          name={name as Path<T>}
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <UiInput
              type={type}
              value={value}
              placeholder={placeholder}
              error={errors[name as keyof T]?.message as string}
              readOnly={isLoading}
              onChange={onChange}
            />
          )}
        />
      ))}
      {withPhoneNumber && (
        <UiPhoneNumber
          control={control}
          profileNumber={phoneNumber!}
          name={"phoneNumber"}
        />
      )}
      <UiButton
        size="l"
        appearance="primary"
        type="submit"
        isLoading={isLoading}
        disabled={!isValid || isLoading}
        stretched
      >
        {actionText}
      </UiButton>
    </form>
  );
};
