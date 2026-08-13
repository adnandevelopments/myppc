import type { Metadata } from "next";
import Script from "next/script";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEFAULT_THEME, THEME_IDS, THEME_STORAGE_KEY } from "@/lib/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "myPPC — Private Care, Practical Plans",
  description:
    "myPPC connects you with licensed clinicians for personalized treatment plans, discreet delivery, and ongoing support.",
};

const themeBootScript = `
(function(){
  try {
    var key = ${JSON.stringify(THEME_STORAGE_KEY)};
    var fallback = ${JSON.stringify(DEFAULT_THEME)};
    var allowed = ${JSON.stringify(THEME_IDS)};
    var saved = localStorage.getItem(key);
    var theme = allowed.indexOf(saved) !== -1 ? saved : fallback;
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", ${JSON.stringify(DEFAULT_THEME)});
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <Script id="myppc-theme-boot" strategy="beforeInteractive">
          {themeBootScript}
        </Script>
        <CartProvider>
          <Header />
          <main className="flex-1 overflow-x-hidden pt-[64px]">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
