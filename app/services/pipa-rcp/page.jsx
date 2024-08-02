// "use client";
// import React, { useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// const PipaRCP = () => {
//   const slides = [
//     {
//       url: "/image/product/pipa-rcp-1.jpg",
//     },
//     {
//       url: "/image/product/pipa-rcp-2.jpg",
//     },
//     {
//       url: "/image/product/pipa-rcp-3.jpg",
//     },
//     {
//       url: "/image/product/pipa-rcp-4.jpg",
//     },
//     {
//       url: "/image/product/pipa-rcp-5.jpg",
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
//             Pipa <span className="text-red-600">RCP</span>
//           </p>
//           <div className="bg-red-600 w-full h-[2px] mb-4"></div>
//           <p className="text-paragraph3 mb-4">Descriptions</p>
//           <p className="text-paragraph text-justify">
//             Pipa RCP adalah jenis pipa yang terbuat dari beton bertulang,
//             dirancang untuk memberikan kekuatan dan daya tahan tinggi. Pipa ini
//             umumnya digunakan dalam berbagai aplikasi, termasuk saluran
//             pembuangan, saluran air hujan, sistem irigasi, dan drainase. Pipa
//             RCP terkenal karena kemampuannya menahan tekanan dan beban berat,
//             baik dari tanah maupun air yang mengalir melalui pipa.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PipaRCP;

"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PipaRCP = () => {
  const slides = [
    { url: "/image/product/pipa-rcp-1.jpg" },
    { url: "/image/product/pipa-rcp-2.jpg" },
    { url: "/image/product/pipa-rcp-3.jpg" },
    { url: "/image/product/pipa-rcp-4.jpg" },
    { url: "/image/product/pipa-rcp-5.jpg" },
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
            Pipa <span className="text-red-600">RCP</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-2 md:mb-4"></div>
          <p className="text-paragraph3 mb-2 md:mb-4">Descriptions</p>
          <p className="text-paragraph text-justify text-sm md:text-base lg:text-lg">
            Pipa RCP adalah jenis pipa yang terbuat dari beton bertulang,
            dirancang untuk memberikan kekuatan dan daya tahan tinggi. Pipa ini
            umumnya digunakan dalam berbagai aplikasi, termasuk saluran
            pembuangan, saluran air hujan, sistem irigasi, dan drainase. Pipa
            RCP terkenal karena kemampuannya menahan tekanan dan beban berat,
            baik dari tanah maupun air yang mengalir melalui pipa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PipaRCP;
