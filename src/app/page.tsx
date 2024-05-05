import { UiSlider } from "@/shared/ui/ui-slider";
import { Social } from "@/widgets/social/social";
import styles from "./page.module.scss";
import { IDayProducts, IProduct } from "@/shared/types/product";
import { DayProducts } from "@/widgets/day-products/day-products";
import { Sidebar } from "@/widgets/sidebar/Sidebar";
import { TopProducts } from "@/widgets/top-products/top-products";
import { IShares } from "@/shared/types/shares";
import { RecentlyViewed } from "@/widgets/recently-viewed/recently-viewed";

async function getShares(): Promise<IShares[]> {
  const data = await fetch("http://localhost:5500/shares");

  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

async function getDayProducts(): Promise<IDayProducts[]> {
  const data = await fetch("http://localhost:5500/day-products");

  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

async function getTopProducts(): Promise<IProduct[]> {
  const data = await fetch("http://localhost:5500/products/top-products");

  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

async function getNewProducts(): Promise<IProduct[]> {
  const data = await fetch("http://localhost:5500/products/new");

  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

export default async function Home() {
  const shares = await getShares();
  const dayProducts = await getDayProducts();
  const topProducts = await getTopProducts();
  const newProducts = await getNewProducts();

  return (
    <>
      <div className={styles["wrapper-top"]}>
        <div className={styles["ui-slider-top"]}>
          <UiSlider width={700} height={300} shares={shares} title={"Акции"} />
        </div>
        <div className={styles["day-product"]}>
          <DayProducts products={dayProducts} />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
      <TopProducts topProducts={topProducts} newProducts={newProducts} />
      <RecentlyViewed />
      <Social />
    </>
  );
}
