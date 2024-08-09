// import { Inter } from "next/font/google";
// import "./globals.css";
// import { NextUIProvider } from "@nextui-org/react";
// import { MainNavbar } from "./components/navbar";
// import MainFooter from "./components/footer";
// import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "PT Irkon Panelindo Produk",
//   description: "Company Website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         {/* <!-- Google Analytics (gtag.js) --> */}
//         <script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=AW-16661703442"
//         ></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-16661703442');
//             `,
//           }}
//         />
//         {/* <!-- Event snippet for Purchase conversion page -->  */}
//         <script> gtag('event', 'conversion', { 'send_to': 'AW-16661703442/WnSBCJy7l8gZEJLW9Yg-', 'transaction_id': '' }); </script>
//         {/* <!-- Google Tag Manager --> */}
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){
//                 w[l]=w[l]||[];
//                 w[l].push({'gtm.start':
//                 new Date().getTime(),event:'gtm.js'});
//                 var f=d.getElementsByTagName(s)[0],
//                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//                 j.async=true;
//                 j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//                 f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-MDVJF8Q6');
//             `,
//           }}
//         />
//         {/* <!-- End Google Tag Manager --> */}
//       </Head>
//       <body className={inter.className}>
//         {/* <!-- Google Tag Manager (noscript) --> */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-MDVJF8Q6"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         {/* <!-- End Google Tag Manager (noscript) --> */}
//         <NextUIProvider>
//           <main className="dark text-foreground bg-background">
//             <MainNavbar />
//             {children}
//             <MainFooter />
//           </main>
//         </NextUIProvider>
//       </body>
//     </html>
//   );
// }
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
        {/* <!-- Google Analytics (gtag.js) --> */}
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
        {/* <!-- End Google Analytics --> */}
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
