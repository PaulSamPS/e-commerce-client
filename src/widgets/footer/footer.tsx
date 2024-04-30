import Image from "next/image";
import styles from "./footer.module.scss";
import { UiAppLink } from "@/shared/ui/ui-app-link";
import { UiText } from "@/shared/ui/ui-text";

const socialLinks = [
  {
    id: 0,
    img: "/whatsapp.png",
    name: "Whatsapp",
  },
  {
    id: 1,
    img: "/telegram.png",
    name: "Telegram",
  },
  {
    id: 2,
    img: "/vk.png",
    name: "Вконтакте",
  },
];

type SocialLinkProps = {
  href: string;
  img: string;
  name: string;
};

const SocialLink = ({ href, img, name }: SocialLinkProps) => (
  <a href={href} className={styles.link}>
    <Image src={img} alt={name} width={32} height={32} />
  </a>
);

const SocialLinks = () => (
  <div className={styles.links}>
    {socialLinks.map((link) => (
      <SocialLink href={""} key={link.id} {...link} />
    ))}
  </div>
);
export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.info}>
        <UiAppLink to={"http://localhost:5500"}>Доставка</UiAppLink>
        <UiAppLink to={"http://localhost:5500"}>Оплата</UiAppLink>
        <UiAppLink to={"http://localhost:5500"}>Обмен и возврат</UiAppLink>
      </div>
      <div className={styles.contacts}>
        <UiText weight="regular" className={styles["social-text"]}>
          На связи 24/7 :
        </UiText>
        <SocialLinks />
      </div>
    </div>
    <div className={styles.bottom}>
      <UiText weight="regular" className={styles.copyright}>
        © Мебель-стильно
      </UiText>
      <UiText
        weight="regular"
        style={{ marginLeft: "10px" }}
        className={styles.copyright}
      >
        {new Date().getFullYear()}
      </UiText>
    </div>
  </footer>
);
