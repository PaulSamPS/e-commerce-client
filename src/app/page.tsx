import { Header } from "@/widgets/header/header";
import { Auth } from "@/features/auth/auth";
import { Social } from "@/widgets/social/social";
import { EnterResetCode } from "@/features/auth/reset-password/enter-code/enter-reset-code";

export default function Home() {
  return (
    <div>
      <Header />
      <Auth />
      <Social />
      <EnterResetCode />
    </div>
  );
}
