import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "@/utils/cn";
import AppContext from "@/components/AppContextWrapper/AppContextWrapper";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "МнеПодписку.рф",
  description: "Сервис оформления подписок на различные сервис. Безопасно, быстро, дешево.",
  metadataBase: new URL("https://mnepodpisku.ru"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Get theme based on the cookie "theme".
  const themeCookie = cookies().get("theme");
  // If the cookie "theme" does not exist, set theme to the first index of Themes.
  const currentTheme = themeCookie ? themeCookie.value : "light";

  return (
    <html lang="ru" data-theme={currentTheme}>
      <AppContext>
        <body className={cn(inter.className, "font-sans flex flex-col min-h-screen")}>{children}</body>
      </AppContext>
    </html>
  );
}
