import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppContextProvider } from "@/components/AppContextWrapper/AppContextWrapper";
import NextTopLoader from "@/components/next-top-loader";

import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { AprilDeals } from "@/components/AprilDeals";

const inter = Inter({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "mnepodpisku.ru",
  description: "Сервис оформления подписок на различные сервис. Безопасно, быстро, дешево.",
  metadataBase: new URL("https://mnepodpisku.ru"),
  icons: {
    icon: [
      { url: "favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "favicon.svg", type: "image/svg+xml" },
      { url: "favicon.png", sizes: "64x64", type: "image/png" },
    ],
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
};

const yandexMetrica = `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(${process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
  });
  `;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={cn(inter.className, "dark")} style={{ colorScheme: "dark" }}>
      <AppContextProvider>
        <head>
          <meta name="apple-mobile-web-app-title" content="МнеПодписку" />
        </head>
        <body className="bg-background font-sans antialiased">
          <NextTopLoader color="#6d28d9" height={4} crawlSpeed={300} crawl={false} showSpinner={false} speed={300} zIndex={9999} />
          {/* <script
            id="theme-switcher"
            dangerouslySetInnerHTML={{
              __html: setInitialTheme,
            }}
          /> */}
          {/* <WeAreOnBrakerBanner /> */}
          <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <div vaul-drawer-wrapper="" className="bg-background min-h-[100vh]">
              <AprilDeals />
              {children}
            </div>
          </ThemeProvider>
          <noscript>
            <div>
              <img src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}?ut=noindex`} alt="" />
              {/* <img src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_YANDEX_METRIKA_REKLAMA_ID}?ut=noindex`} alt="" /> */}
            </div>
          </noscript>
        </body>
      </AppContextProvider>

      <Script id="Yandex-Metrica" strategy="afterInteractive">
        {yandexMetrica}
      </Script>
      <Script id="Copy-Code">{`window.CopyToClipboard = async function(text) {

let scrollPos;

let copySuccess = false;

var textArea,
    copy;

function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
}

function createTextArea(text) {
    textArea = document.createElement('textArea');
    textArea.value = text;
    document.body.appendChild(textArea);
}

async function selectText() {
    var range,
        selection;

    if (navigator.clipboard) {
      const clipboard = await navigator.clipboard;
      try{
        await clipboard.writeText(textArea.value);
        copySuccess = true;
      }catch(err){
        document.body.removeChild(textArea);
        throw new Error('Wasnt able to copy'+err);
        
      }
    }else{
      if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
        copySuccess = true;
    } else {
        textArea.select();
        copySuccess = true;
    }
    }
}

function copyToClipboard() {        
  document.execCommand('copy');
  document.body.removeChild(textArea);
}



createTextArea(text);
await selectText();
copyToClipboard();


return {
    copySuccess
};

};`}</Script>
    </html>
  );
}
