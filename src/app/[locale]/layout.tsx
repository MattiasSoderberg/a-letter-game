import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Background from "./components/containers/Background/Background";
import { AppContextProvider } from "@/context/AppContext";
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const locales = ["sv", "en"];

export const metadata: Metadata = {
  title: "A Letter Game",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale} className={`${roboto.className} overflow-hidden`}>
      <body className="w-screen h-screenDynamic relative overflow-hidden">
        <Background />
        <AppContextProvider>
          <Navbar />
          <DrawerMenu />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
