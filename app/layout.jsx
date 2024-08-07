import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { MainNavbar } from "./components/navbar";
import MainFooter from "./components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PT Irkon Panelindo Produk",
  description: "Company Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16661703442"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16661703442');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <MainNavbar />
            {children}
            <MainFooter />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
