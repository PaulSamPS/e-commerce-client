import { Slider } from "../widgets/slider";
import { Social } from "@/widgets/social/social";
import { Shares } from "@/shared/api/shares";
import styles from "./page.module.scss";

async function getShares(): Promise<Shares[]> {
  const data = await fetch("http://localhost:5500/shares");

  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

export default async function Home() {
  const shares = await getShares();

  return (
    <>
      <div className={styles["wrapper-top"]}>
        <div className={styles["slider-top"]}>
          <Slider width={600} height={300} shares={shares} title={"Акции"} />
        </div>
        <div className={styles["day-product"]}>DayProducts</div>
        <div className={styles.sidebar}>Sidebar</div>
      </div>
      TopProducts
      <Social />
    </>
  );
}
