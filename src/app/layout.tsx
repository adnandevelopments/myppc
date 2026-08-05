import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "myPPC — Private Care, Practical Plans",
  description:
    "myPPC connects you with licensed clinicians for personalized treatment plans, discreet delivery, and ongoing support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#12201f]">
        {children}
      </body>
    </html>
  );
}
