import { useForm, Path, FieldValues } from "react-hook-form";
import { UiInput } from "@/shared/ui/ui-input";
import { UiButton } from "@/shared/ui/ui-button";
import { UiSubhead } from "@/shared/ui/ui-subhead";

/**
 * Представляет конфигурацию одного поля ввода формы.
 * @template K - Тип объекта данных формы.
 */
interface FormInput<K> {
  name: keyof K; // Название поля в объекте данных формы.
  type: string; // Тип элемента ввода (например, 'text', 'password').
  placeholder: string; // Текст заполнителя для поля ввода.
  options: Record<string, any>; // Дополнительные параметры для поля ввода.
}

/**
 * Свойства компонента FormWithInputs.
 * @template T - Тип объекта данных формы.
 * @template K - Тип ключей объекта данных формы.
 */
interface FormWithInputsProps<T, K> {
  isLoading: boolean; // Указывает, находится ли форма в состоянии загрузки.
  error?: string; // Сообщение об ошибке для отображения над формой.
  inputs: FormInput<K>[]; // Конфигурация полей ввода в форме.
  onSubmit: (formData: T) => Promise<void>; // Функция для обработки отправки формы.
  className?: string; // CSS класс для стилизации формы.
  actionText: string; // Текст кнопки действия формы.
  errorClass?: string;
}

/**
 * Компонент формы с вводом данных, который рендерит поля ввода и обрабатывает отправку формы.
 * @template T - Тип объекта данных формы.
 * @template K - Тип ключей объекта данных формы.
 * @param {FormWithInputsProps<T, K>} props - Свойства компонента.
 */
export const FormWithInputs = <
  T extends FieldValues,
  K extends Record<string, unknown>,
>({
  isLoading,
  error,
  inputs,
  onSubmit,
  className,
  actionText,
  errorClass,
}: FormWithInputsProps<T, K>) => {
  const { register, handleSubmit, formState } = useForm<T>({
    mode: "onChange",
  });

  const { errors, isValid } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {error && (
        <UiSubhead weight="regular" className={errorClass}>
          {error}
        </UiSubhead>
      )}
      {inputs.map(({ name, type, placeholder, options }) => (
        <UiInput
          key={name.toString()}
          {...register(name as Path<T>, options)}
          type={type}
          placeholder={placeholder}
          error={errors[name as keyof T]?.message as string}
          readOnly={isLoading}
        />
      ))}
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
