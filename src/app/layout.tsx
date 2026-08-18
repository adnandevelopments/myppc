import type { Metadata } from "next";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEFAULT_THEME } from "@/lib/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "medviCare — Private Care, Practical Plans",
  description:
    "medviCare connects you with licensed clinicians for personalized treatment plans, discreet delivery, and ongoing support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="min-h-full antialiased"
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <CartProvider>
          <Header />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
