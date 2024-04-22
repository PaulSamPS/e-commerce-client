import { Header } from "@/widgets/header/header";
import { Auth } from "@/features/auth/auth";
import { Social } from "@/widgets/social/social";

export default function Home() {
  return (
    <div>
      <Header />
      <Auth />
      <Social />
    </div>
  );
}
