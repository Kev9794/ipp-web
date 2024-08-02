// "use client";
// import { ImOffice } from "react-icons/im";
// import {
//   FaFax,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaTiktok,
// } from "react-icons/fa";
// import { IoMdMailOpen } from "react-icons/io";
// import { IoCall } from "react-icons/io5";
// import Link from "next/link";

// export default function ContactUs() {
//   return (
//     <>
//       <div className="flex flex-col p-14 bg-zinc-800">
//         <div className="w-full flex flex-col justify-center items-center pb-8">
//           <div className="flex items-center ">
//             <p className="text-title">
//               Contact <span className="text-red-600">Us</span>
//             </p>
//           </div>

//           <p className="text-2xl">Lets Work Together!</p>
//         </div>
//         <div className="flex ">
//           <div className="w-1/2 flex flex-col gap-y-7">
//             <div className="flex pb-8 gap-x-2">
//               <p className="text-title">
//                 PT <span className="text-red-600">IRKON PANELINDO PRODUK</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <ImOffice className="text-3xl" />
//               <p className="text-lg">
//                 Jl. Perkutut, Bojong Nangka,
//                 <br />
//                 Kelapa Dua, Tangerang – Banten 15810
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <IoCall className="text-3xl" />
//               <p className="text-lg">(021) 546 1180</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaFax className="text-3xl" />
//               <p className="text-lg">(021) 546 1181</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <IoMdMailOpen className="text-3xl" />
//               <p className="text-lg">irkonpanelindo@yahoo.com</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaInstagram className="text-3xl" />
//               <Link href={"https://www.instagram.com/irkon_panelindo_produk/"}>
//                 <p className="text-lg">irkon panelindo produk</p>
//               </Link>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaFacebook className="text-3xl" />
//               <Link
//                 href={
//                   "https://www.facebook.com/irkon.panelindoproduk?locale=id_ID"
//                 }
//               >
//                 <p className="text-lg">irkon_panelindo_produk</p>
//               </Link>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaLinkedin className="text-3xl" />
//               <Link
//                 href={
//                   "https://www.linkedin.com/company/pt-irkon-panelindo-produk/"
//                 }
//               >
//                 <p className="text-lg">Irkon Panelindo Produk</p>
//               </Link>
//             </div>
//             <div className="flex items-center gap-4">
//               <FaTiktok className="text-3xl" />
//               <Link
//                 href={
//                   "https://www.tiktok.com/@irkonpanelindoproduk?_t=8lvfq15MORe&_r=1"
//                 }
//               >
//                 <p className="text-lg">irkonpanelindoproduk</p>
//               </Link>
//             </div>
//           </div>
//           <div className="w-1/2 flex flex-col gap-y-4">
//             <p className="text-title">
//               Find <span className="text-red-600">Us</span>
//             </p>
//             {/* <MapComponent apiKey={googleMapsApiKey} /> */}
//             <div className="flex">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.085688125347!2d106.60180978433627!3d-6.252440045049562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd9af88ba04d%3A0x2d27a090eaba59bf!2sPT.IRKON%20PANELINDO%20PRODUK!5e0!3m2!1sid!2sid!4v1714309718147!5m2!1sid!2sid"
//                 height={400}
//                 width={900}
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { ImOffice } from "react-icons/im";
import {
  FaFax,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <div className="flex flex-col p-4 md:p-10 lg:p-14 bg-zinc-800">
        <div className="w-full flex flex-col justify-center items-center pb-8">
          <div className="flex items-center">
            <p className="text-3xl md:text-4xl font-extrabold text-white">
              Contact <span className="text-red-600">Us</span>
            </p>
          </div>

          <p className="text-xl md:text-2xl text-white">Let's Work Together!</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-y-7">
            <div className="flex pb-8 gap-x-2">
              <p className="text-2xl md:text-3xl font-extrabold text-white">
                PT <span className="text-red-600">IRKON PANELINDO PRODUK</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ImOffice className="text-3xl text-white" />
              <p className="text-lg text-white">
                Jl. Perkutut, Bojong Nangka,
                <br />
                Kelapa Dua, Tangerang – Banten 15810
              </p>
            </div>
            <div className="flex items-center gap-4">
              <IoCall className="text-3xl text-white" />
              <p className="text-lg text-white">(021) 546 1180</p>
            </div>
            <div className="flex items-center gap-4">
              <FaFax className="text-3xl text-white" />
              <p className="text-lg text-white">(021) 546 1181</p>
            </div>
            <div className="flex items-center gap-4">
              <IoMdMailOpen className="text-3xl text-white" />
              <p className="text-lg text-white">irkonpanelindo@yahoo.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram className="text-3xl text-white" />
              <Link
                href={"https://www.instagram.com/irkon_panelindo_produk/"}
                className="text-lg text-white"
              >
                irkon panelindo produk
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-3xl text-white" />
              <Link
                href={
                  "https://www.facebook.com/irkon.panelindoproduk?locale=id_ID"
                }
                className="text-lg text-white"
              >
                irkon_panelindo_produk
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-3xl text-white" />
              <Link
                href={
                  "https://www.linkedin.com/company/pt-irkon-panelindo-produk/"
                }
                className="text-lg text-white"
              >
                Irkon Panelindo Produk
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaTiktok className="text-3xl text-white" />
              <Link
                href={
                  "https://www.tiktok.com/@irkonpanelindoproduk?_t=8lvfq15MORe&_r=1"
                }
                className="text-lg text-white"
              >
                irkonpanelindoproduk
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-4 mt-10 md:mt-0">
            <p className="text-2xl md:text-3xl font-extrabold text-white">
              Find <span className="text-red-600">Us</span>
            </p>
            {/* <MapComponent apiKey={googleMapsApiKey} /> */}
            <div className="flex">
              <iframe
                className="w-full h-64 md:h-80 lg:h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.085688125347!2d106.60180978433627!3d-6.252440045049562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd9af88ba04d%3A0x2d27a090eaba59bf!2sPT.IRKON%20PANELINDO%20PRODUK!5e0!3m2!1sid!2sid!4v1714309718147!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
