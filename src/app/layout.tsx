import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "@/utils/cn";
import { AppContextProvider } from "@/components/AppContextWrapper/AppContextWrapper";

import Script from "next/script";

const inter = Inter({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "МнеПодписку.рф",
  description: "Сервис оформления подписок на различные сервис. Безопасно, быстро, дешево.",
  metadataBase: new URL("https://mnepodpisku.ru"),
};

const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }

    document.documentElement.dataset.theme = getUserPreference();
  `;

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
    <html lang="ru">
      <AppContextProvider>
        <body className={cn(inter.className, "font-sans flex flex-col min-h-screen")}>
          <script
            id="theme-switcher"
            dangerouslySetInnerHTML={{
              __html: setInitialTheme,
            }}
          />
          {/* <WeAreOnBrakerBanner /> */}
          {children}
        </body>
      </AppContextProvider>

      <Script id="Yandex-Metrica" strategy="afterInteractive">
        {yandexMetrica}
      </Script>
      <Script id="Copy-Code">{`window.Clipboard = (function(window, document, navigator) {

let scrollPos;

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

function selectText() {
    var range,
        selection;

    if (navigator.clipboard) {
      (navigator.clipboard).writeText(textArea.value).then(
        function () {
          // console.log('Text successfully copied to clipboard');
        },
        function (err) {
          console.error('Unable to copy text to clipboard', err);
        }
      );
    }else{
      if (isOS()) {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
    } else {
        textArea.select();
    }
    }
}

function copyToClipboard() {        
  document.execCommand('copy');
  document.body.removeChild(textArea);
}


copy = function(text) {
    createTextArea(text);
    selectText();
    copyToClipboard();
};

return {
    copy: copy
};
})(window, document, navigator);`}</Script>
    </html>
  );
}
