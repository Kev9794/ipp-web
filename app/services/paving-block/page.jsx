// "use client";
// import React, { useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// const PavingBlock = () => {
//   const slides = [
//     {
//       url: "/image/product/paving-block-1.jpg",
//     },
//     {
//       url: "/image/product/paving-block-2.jpg",
//     },
//     {
//       url: "/image/product/paving-block-3.jpg",
//     },
//     {
//       url: "/image/product/paving-block-4.jpg",
//     },
//     {
//       url: "/image/product/paving-block-5.jpg",
//     },
//     {
//       url: "/image/product/paving-block-6.jpg",
//     },
//     {
//       url: "/image/product/paving-block-7.png",
//     },
//     {
//       url: "/image/product/paving-block-8.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const nextSlide = () => {
//     const nextIndex = (currentIndex + 1) % slides.length;
//     goToSlide(nextIndex);
//   };

//   const prevSlide = () => {
//     const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
//     goToSlide(prevIndex);
//   };

//   const renderDots = () => {
//     return slides.map((slide, slideIndex) => (
//       <div
//         key={slideIndex}
//         onClick={() => goToSlide(slideIndex)}
//         className={`w-3 h-3 2xl:w-4 2xl:h-4 rounded-full border mx-2 cursor-pointer ${
//           slideIndex === currentIndex ? "bg-white" : ""
//         }`}
//       ></div>
//     ));
//   };

//   const renderImages = () => {
//     return slides.map((slide, slideIndex) => (
//       <div
//         key={slideIndex}
//         className={`mx-auto aspect-w-[4] aspect-h-[3]  ${
//           slideIndex === currentIndex ? "block" : "hidden"
//         }`}
//         style={{ width: "500px", height: "375px" }}
//       >
//         <img
//           src={slide.url}
//           alt={`Slide ${slideIndex}`}
//           className="object-cover w-full h-full"
//         />
//       </div>
//     ));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   return (
//     <div className="p-20 bg-zinc-800">
//       <div className="flex items-start justify-center gap-12">
//         <div className="w-1/2 flex flex-col">
//           <div className="relative mx-auto">
//             {renderImages()}
//             <button
//               className="absolute top-1/2 -translate-y-1/2 left-5 p-3 bg-black bg-opacity-50 rounded-full"
//               onClick={prevSlide}
//             >
//               <FaAngleLeft />
//             </button>
//             <button
//               className="absolute top-1/2 -translate-y-1/2 right-5 p-3 bg-black bg-opacity-50 rounded-full"
//               onClick={nextSlide}
//             >
//               <FaAngleRight />
//             </button>
//           </div>
//           <div className="flex mx-auto mt-6 mb-6">{renderDots()}</div>
//         </div>
//         <div className="w-1/2">
//           <p className="text-heading2 text-white">
//             Paving <span className="text-red-600">Block</span>
//           </p>
//           <div className="bg-red-600 w-full h-[2px] mb-4"></div>
//           <p className="text-paragraph3 mb-4">Descriptions</p>
//           <p className="text-paragraph text-justify">
//             Paving Block adalah salah satu produk kontruksi yang biasa digunakan
//             untuk perkerasan jalan, halaman rumah, trotoar dan lainnya. Dalam
//             pembuatan paving block menggunakan susunan bahan sama seperti beton
//             yaitu semen, agregat (pasir) dan air.Bata beton (paving block)
//             adalah suatu komposisi bahan bangunan yang dibaut dari campuran
//             semen Portland atau bahan perekat hidrolis sejenisnya, air dan
//             agregat dengan atau tanpa bahan tambahan lainnya yang tidak
//             mengurangi mutu bata beton (SNI 030691-1996). Macam-macam bentuk
//             tipe paving block, tipe bata, tipe cacing, tipe hexagon, tipe
//             trihex, tipe kubus, tipe ubin set, tipe topi uskup yang memiliki
//             ukuran yang berbeda.
//           </p>
//         </div>
//       </div>
//       <table className="min-w-full text-left text-xs mt-8">
//         <thead className="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
//           <tr>
//             <th scope="col" className="px-6 py-4 border-x border-neutral-600">
//               Dimensi
//             </th>
//             <th scope="col" className="px-6 py-4 border-x border-neutral-600">
//               Tebal
//             </th>
//             <th scope="col" className="px-6 py-4 border-x border-neutral-600">
//               Isi Per M²
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Bata
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               10,5 x 21 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">44 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               10,5 x 21 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">8 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">44 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               10,5 x 21 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">10 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">44 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Cacing
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               22,5 x 11,2 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">39 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               22,5 x 11,2 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">8 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">39 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Hexagon
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               20 x 20 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">27 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               20 x 20 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">8 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">27 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Trihex
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               19,7 x 9,6 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">39 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               19,7 x 9,6 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">8 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">39 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Kubus
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               10,5 x 10,5 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">88 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Ubin Set
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               21 x 21 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">22 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               10,5 x 10,5 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">5,5 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
//             <td
//               colspan="3"
//               className="text-center py-2 border-x border-neutral-600"
//             >
//               Tipe Topi Uskup
//             </td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               30 x 21 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">6 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">3,3 Pcs</td>
//           </tr>
//           <tr className="border-b border-neutral-600 hover:bg-neutral-600">
//             <td className="px-6 py-4 border-x border-neutral-600">
//               30 x 21 cm
//             </td>
//             <td className="px-6 py-4 border-x border-neutral-600">8 cm</td>
//             <td className="px-6 py-4 border-x border-neutral-600">3,3 Pcs</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PavingBlock;

"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PavingBlock = () => {
  const slides = [
    { url: "/image/product/paving-block-1.jpg" },
    { url: "/image/product/paving-block-2.jpg" },
    { url: "/image/product/paving-block-3.jpg" },
    { url: "/image/product/paving-block-4.jpg" },
    { url: "/image/product/paving-block-5.jpg" },
    { url: "/image/product/paving-block-6.jpg" },
    { url: "/image/product/paving-block-7.png" },
    { url: "/image/product/paving-block-8.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  };

  const renderDots = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border mx-2 cursor-pointer ${
          slideIndex === currentIndex ? "bg-white" : ""
        }`}
      ></div>
    ));
  };

  const renderImages = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        className={`mx-auto ${
          slideIndex === currentIndex ? "block" : "hidden"
        }`}
        style={{ width: "100%", height: "auto", maxWidth: "500px" }}
      >
        <img
          src={slide.url}
          alt={`Slide ${slideIndex}`}
          className="object-cover w-full h-full"
        />
      </div>
    ));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="p-4 md:p-10 lg:p-20 bg-zinc-800">
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="relative mx-auto">
            {renderImages()}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-2 md:left-5 p-2 md:p-3 bg-black bg-opacity-50 rounded-full"
              onClick={prevSlide}
            >
              <FaAngleLeft />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-2 md:right-5 p-2 md:p-3 bg-black bg-opacity-50 rounded-full"
              onClick={nextSlide}
            >
              <FaAngleRight />
            </button>
          </div>
          <div className="flex mx-auto mt-4 mb-4 md:mt-6 md:mb-6">
            {renderDots()}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <p className="text-heading2 text-white text-lg md:text-xl lg:text-2xl">
            Paving <span className="text-red-600">Block</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-2 md:mb-4"></div>
          <p className="text-paragraph3 mb-2 md:mb-4">Descriptions</p>
          <p className="text-paragraph text-justify text-sm md:text-base lg:text-lg">
            Paving Block adalah salah satu produk kontruksi yang biasa digunakan
            untuk perkerasan jalan, halaman rumah, trotoar dan lainnya. Dalam
            pembuatan paving block menggunakan susunan bahan sama seperti beton
            yaitu semen, agregat (pasir) dan air.Bata beton (paving block)
            adalah suatu komposisi bahan bangunan yang dibaut dari campuran
            semen Portland atau bahan perekat hidrolis sejenisnya, air dan
            agregat dengan atau tanpa bahan tambahan lainnya yang tidak
            mengurangi mutu bata beton (SNI 030691-1996). Macam-macam bentuk
            tipe paving block, tipe bata, tipe cacing, tipe hexagon, tipe
            trihex, tipe kubus, tipe ubin set, tipe topi uskup yang memiliki
            ukuran yang berbeda.
          </p>
        </div>
      </div>
      <table className="min-w-full text-left text-xs mt-8">
        <thead className="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th
              scope="col"
              className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600"
            >
              Dimensi
            </th>
            <th
              scope="col"
              className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600"
            >
              Tebal
            </th>
            <th
              scope="col"
              className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600"
            >
              Isi Per M²
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Bata
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              10,5 x 21 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              44 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              10,5 x 21 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              8 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              44 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              10,5 x 21 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              10 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              44 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Cacing
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              22,5 x 11,2 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              39 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              22,5 x 11,2 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              8 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              39 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Hexagon
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              20 x 20 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              27 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              20 x 20 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              8 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              27 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Trihex
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              19,7 x 9,6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              39 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              19,7 x 9,6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              8 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              39 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Kubus
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              10,5 x 10,5 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              88 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Ubin Set
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              21 x 21 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              22 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              10,5 x 10,5 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              5,5 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600 bg-zinc-700">
            <td
              colSpan="3"
              className="text-center py-2 border-x border-neutral-600"
            >
              Tipe Topi Uskup
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              30 x 21 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              6 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              3,3 Pcs
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              30 x 21 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              8 cm
            </td>
            <td className="px-3 md:px-6 py-2 md:py-4 border-x border-neutral-600">
              3,3 Pcs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PavingBlock;
