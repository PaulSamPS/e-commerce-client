export const emailOptions = {
  required: { value: true, message: "Введите email" },
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: "Некорректный email",
  },
};

export const passwordOptions = {
  required: { value: true, message: "Введите пароль" },
  minLength: { value: 5, message: "Пароль короче 5 символов" },
};

export const usernameOptions = {
  required: { value: true, message: "Введите имя пользователя" },
  minLength: { value: 3, message: "Не короче 3 символов" },
  maxLength: {
    value: 15,
    message: "Имя не должно превышать 20 символов",
  },
};
