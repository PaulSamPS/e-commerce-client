"use client";

import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UiButton } from "@/shared/ui/ui-button";

const SOCIAL_LINKS = [
  {
    id: 0,
    img: "/whatsapp.png",
    name: "Whatsapp",
    href: "yandex.ru",
  },
  {
    id: 1,
    img: "/telegram.png",
    name: "Telegram",
    href: "yandex.ru",
  },
  {
    id: 2,
    img: "/vk-icon.svg",
    name: "Вконтакте",
    href: "yandex.ru",
  },
];

const ANIMATION_CHILDREN = {
  variants: {
    closed: { y: 16, opacity: 0 },
    open: { y: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

// Компонент для отображения списка социальных ссылок
export const SocialList: FC = () => (
  <>
    {SOCIAL_LINKS.map((item) => (
      <motion.a
        href={item.href}
        target="_blank"
        key={item.id}
        {...ANIMATION_CHILDREN}
      >
        <UiButton size="s" appearance="clear">
          {item.name}
          <Image src={item.img} alt={item.name} width={30} height={30} />
        </UiButton>
      </motion.a>
    ))}
  </>
);
