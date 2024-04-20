import WhatsApp from "./assets/whatsapp.png";
import Telegram from "./assets/telegram.png";
import Vk from "./assets/vk.png";

export const SOCIAL_LINKS = [
  {
    id: 0,
    img: WhatsApp,
    name: "Whatsapp",
    href: "yandex.ru",
  },
  {
    id: 1,
    img: Telegram,
    name: "Telegram",
    href: "yandex.ru",
  },
  {
    id: 2,
    img: Vk,
    name: "Вконтакте",
    href: "yandex.ru",
  },
];

export const ANIMATION_CHILDREN = {
  variants: {
    closed: { y: 16, opacity: 0 },
    open: { y: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

export const ANIMATION_VARIANTS = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 50 },
};
