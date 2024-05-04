import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AuthModalAppContextProvider } from "@/shared/context/authModalAppContext";
import { StoreProvider } from "@/shared/providers/store-provider";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/widgets/header/header";
import styles from "./layout.module.scss";
import { Footer } from "@/widgets/footer/footer";
import { UiNavigation } from "@/shared/ui/ui-navigation/ui-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme="colored" hideProgressBar autoClose={3000} />
        <StoreProvider>
          <AuthModalAppContextProvider>
            <Header />
            <div className={styles.main}>
              <UiNavigation />
              {children}
            </div>
            <Footer />
          </AuthModalAppContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
