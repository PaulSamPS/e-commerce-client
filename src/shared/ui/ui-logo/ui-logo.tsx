import { FC, HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import styles from "./ui-logo.module.scss";
import { UiTitle } from "../ui-title";
import { UiSubhead } from "../ui-subhead";
import clsx from "clsx";

interface UiLogoProps extends HTMLAttributes<HTMLDivElement> {
  logoSrc?: string;
  companyName: string;
  slogan: string;
}

export const UiLogo: FC<UiLogoProps> = ({
  logoSrc,
  companyName,
  slogan,
  className,
  ...restProps
}) => (
  <div className={clsx(styles.logo, className)} {...restProps}>
    {logoSrc && <Image src={logoSrc} alt={"logo"} width={40} height={40} />}
    <div className={styles["logo-text"]}>
      <div className={styles["company-name"]}>
        <UiTitle size="h1" weight="regular">
          {companyName.split("-")[0]}-
        </UiTitle>
        <UiTitle size="h1" weight="regular" className={styles["title-color"]}>
          {companyName.split("-")[1]}
        </UiTitle>
      </div>
      <UiSubhead weight="regular">{slogan}</UiSubhead>
    </div>
  </div>
);
