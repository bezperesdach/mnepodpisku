import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "@/utils/cn";
import AppContext from "@/components/AppContextWrapper/AppContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "МнеПодписку.рф",
  description: "Сервис оформления подписок на различные сервис. Безопасно, быстро, дешево.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark">
      <AppContext>
        <body className={cn(inter.className, "font-sans flex flex-col min-h-screen")}>{children}</body>
      </AppContext>
    </html>
  );
}
