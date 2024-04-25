import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PT Irkon Panelindo Produk",
  description: "Company Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
