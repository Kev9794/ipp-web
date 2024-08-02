// "use client";

// import { Image } from "@nextui-org/react";
// import React from "react";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// import { FaLink } from "react-icons/fa6";
// import { BsPersonFillCheck } from "react-icons/bs";
// import dynamic from "next/dynamic";
// const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
//   ssr: false,
// });

// const AboutUS = () => {
//   const fileUrl = "/companyProfile.pdf";
//   const cultureData = [
//     {
//       icon: <VscWorkspaceTrusted className="w-10 h-10" />,
//       title: "Trust",
//       description:
//         "Membangun kepercayaan di internal perusahaan dan konsumen dengan menjunjung tinggi perilaku kerja yang beretika dan bermartabat",
//     },
//     {
//       icon: <BsPersonFillCheck className="w-10 h-10" />,
//       title: "Proffesionality",
//       description:
//         "Mengedepankan keselamatan, mutu pekerjaan dan pelayanan serta produktivitas demi mencapai kepuasan customer",
//     },
//     {
//       icon: <FaLink className="w-10 h-10" />,
//       title: "Sinergy",
//       description:
//         "Membina dan meningkatkan kerjasama antar karyawan serta dengan customer untuk mencapai kinerja dan hasil yang optimal",
//     },
//   ];
//   return (
//     <div className="p-10 bg-zinc-800">
//       <div className="flex justify-center items-center">
//         <p className="text-4xl font-extrabold text-white">
//           About <span className="text-red-600">Us</span>
//         </p>
//       </div>
//       <div className="flex flex-col gap-12">
//         <div className="flex items-center justify-evenly text-justify gap-12 pt-4">
//           <p className="max-w-[50%]  font-light">
//             IRKON PANELINDO PRODUK berdiri sejak tahun 2006, selama 16 tahun
//             berkarya dan berperan aktif dalam bidang penjualan dan pemasangan
//             Pagar Panel Beton (Precast). Didirikan oleh praktisi di bidang
//             teknik dan konstruksi didukung dengan Sumber Daya Manusia (SDM) yang
//             mumpuni dan ahli di bidangnya.
//           </p>
//           <Image
//             src={"/image/about-1.jpeg"}
//             width={300}
//             radius="md"
//             isBlurred
//           />
//         </div>
//         <div className="flex items-center justify-evenly text-justify gap-12 pt-4">
//           <Image
//             src={"/image/about-2.jpeg"}
//             width={300}
//             radius="md"
//             isBlurred
//           />
//           <p className="max-w-[50%]  font-light">
//             Tujuan Utama dari IRKON, yaitu untuk menghadirkan produkproduk beton
//             pracetak yang berkualitas dengan harga yang kompetitif.
//             Produk-produk yang dipasarkan oleh IRKON adalah hasil produksi
//             sendiri disimpan dengan lahan 5.000 M2 dengan kapasitas produksi
//             panel 400 panel per hari dan 100 tiang panel perhari, tidak
//             diragukan dari segi kwalitas, komposisi-komposisi yang sesuai dengan
//             ISO dan SNI.
//           </p>
//         </div>
//         <div className="flex items-center justify-evenly text-justify gap-12 pt-4">
//           <p className="max-w-[50%]  font-light">
//             IRKON memasarkan produk yang diproduksi kepada perusahaan
//             kontraktor, developer perumahan, area publik dan melayani kebutuhan
//             perorangan (rumah tinggal, taman, dll). Berbagai kepercayaan dan
//             kerjasama seperti Pemerintah, BUMN, Perusahaan Swasta, Perusahaan
//             Perorangan dalam menyediakan dan pemasangan produk-produk seperti
//             panel beton, tiang panel, u-dicth, u-dicth cover, box culvert,
//             kanstin, buis beton, paving block dan berbagai produk beton lainnya.
//           </p>
//           <Image
//             src={"/image/about-3.jpeg"}
//             width={300}
//             radius="md"
//             isBlurred
//           />
//         </div>
//       </div>
//       <div className="py-20">
//         <div className="flex justify-center items-center">
//           <p className="text-4xl font-extrabold text-white">
//             Cul<span className="text-red-600">ture</span>
//           </p>
//         </div>
//         <div className="flex justify-center items-center pt-8">
//           <div className="grid grid-cols-3 grid-rows-1 gap-20">
//             {cultureData.map((item) => (
//               <div key={item}>
//                 <div className="flex items-center justify-center gap-4">
//                   {item.icon}
//                   <p className="text-xl font-bold">{item.title}</p>
//                 </div>
//                 <div className="w-full h-[2px] bg-red-600 my-4"></div>
//                 <p className="text-center w-72 font-light">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="flex justify-center items-center p-4">
//           <p className="text-4xl font-extrabold text-white">
//             Company <span className="text-red-600">Profile</span>
//           </p>
//         </div>
//         <PdfViewer fileUrl={fileUrl} />
//       </div>
//     </div>
//   );
// };

// export default AboutUS;

"use client";

import { Image } from "@nextui-org/react";
import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaLink } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import dynamic from "next/dynamic";
const PdfViewer = dynamic(() => import("../components/PdfViewer"), {
  ssr: false,
});

const AboutUs = () => {
  const fileUrl = "/companyProfile.pdf";
  const cultureData = [
    {
      icon: <VscWorkspaceTrusted className="w-10 h-10" />,
      title: "Trust",
      description:
        "Membangun kepercayaan di internal perusahaan dan konsumen dengan menjunjung tinggi perilaku kerja yang beretika dan bermartabat",
    },
    {
      icon: <BsPersonFillCheck className="w-10 h-10" />,
      title: "Professionalism",
      description:
        "Mengedepankan keselamatan, mutu pekerjaan dan pelayanan serta produktivitas demi mencapai kepuasan customer",
    },
    {
      icon: <FaLink className="w-10 h-10" />,
      title: "Synergy",
      description:
        "Membina dan meningkatkan kerjasama antar karyawan serta dengan customer untuk mencapai kinerja dan hasil yang optimal",
    },
  ];

  return (
    <div className="p-4 md:p-10 bg-zinc-800">
      <div className="flex justify-center items-center mb-8">
        <p className="text-3xl md:text-4xl font-extrabold text-white">
          About <span className="text-red-600">Us</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center justify-evenly text-justify gap-6 md:gap-12 pt-4">
          <Image
            src={"/image/about-1.jpeg"}
            width={300}
            height={200}
            radius="md"
            isBlurred
          />
          <p className="w-full md:w-[50%] font-light text-sm md:text-base">
            IRKON PANELINDO PRODUK berdiri sejak tahun 2006, selama 16 tahun
            berkarya dan berperan aktif dalam bidang penjualan dan pemasangan
            Pagar Panel Beton (Precast). Didirikan oleh praktisi di bidang
            teknik dan konstruksi didukung dengan Sumber Daya Manusia (SDM) yang
            mumpuni dan ahli di bidangnya.
          </p>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-evenly text-justify gap-6 md:gap-12 pt-4">
          <Image
            src={"/image/about-2.jpeg"}
            width={300}
            height={200}
            radius="md"
            isBlurred
          />
          <p className="w-full md:w-[50%] font-light text-sm md:text-base">
            Tujuan Utama dari IRKON, yaitu untuk menghadirkan produkproduk beton
            pracetak yang berkualitas dengan harga yang kompetitif.
            Produk-produk yang dipasarkan oleh IRKON adalah hasil produksi
            sendiri disimpan dengan lahan 5.000 M2 dengan kapasitas produksi
            panel 400 panel per hari dan 100 tiang panel perhari, tidak
            diragukan dari segi kwalitas, komposisi-komposisi yang sesuai dengan
            ISO dan SNI.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-evenly text-justify gap-6 md:gap-12 pt-4">
          <Image
            src={"/image/about-3.jpeg"}
            width={300}
            height={200}
            radius="md"
            isBlurred
          />
          <p className="w-full md:w-[50%] font-light text-sm md:text-base">
            IRKON memasarkan produk yang diproduksi kepada perusahaan
            kontraktor, developer perumahan, area publik dan melayani kebutuhan
            perorangan (rumah tinggal, taman, dll). Berbagai kepercayaan dan
            kerjasama seperti Pemerintah, BUMN, Perusahaan Swasta, Perusahaan
            Perorangan dalam menyediakan dan pemasangan produk-produk seperti
            panel beton, tiang panel, u-dicth, u-dicth cover, box culvert,
            kanstin, buis beton, paving block dan berbagai produk beton lainnya.
          </p>
        </div>
      </div>
      <div className="py-20">
        <div className="flex justify-center items-center mb-8">
          <p className="text-3xl md:text-4xl font-extrabold text-white">
            Cul<span className="text-red-600">ture</span>
          </p>
        </div>
        <div className="flex justify-center items-center pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-4">
                  {item.icon}
                  <p className="text-lg md:text-xl font-bold">{item.title}</p>
                </div>
                <div className="w-full h-[2px] bg-red-600 my-4"></div>
                <p className="text-center w-60 md:w-72 font-light text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center p-4">
          <p className="text-3xl md:text-4xl font-extrabold text-white">
            Company <span className="text-red-600">Profile</span>
          </p>
        </div>
        <PdfViewer fileUrl={fileUrl} />
      </div>
    </div>
  );
};

export default AboutUs;
