// "use client";
// import React, { useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// export default function TolBitungTangerang() {
//   const slides = [
//     {
//       url: "/image/projects/tol_bitung_tangerang.jpg",
//     },
//     {
//       url: "/image/projects/tol_bitung_tangerang2.jpg",
//     },
//     {
//       url: "/image/projects/tol_bitung_tangerang3.jpg",
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
//     <>
//       <div className="flex flex-col p-14 bg-zinc-800">
//         <div className="w-full flex flex-col justify-center items-center pb-8">
//           <p className="text-title">
//             Project Tol <span className="text-red-600">Bitung-Tangerang</span>
//           </p>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="w-1/2 flex flex-col">
//             <div className="relative mx-auto">
//               {renderImages()}
//               <button
//                 className="absolute top-1/2 -translate-y-1/2 left-5 p-3 bg-black bg-opacity-50 rounded-full"
//                 onClick={prevSlide}
//               >
//                 <FaAngleLeft />
//               </button>
//               <button
//                 className="absolute top-1/2 -translate-y-1/2 right-5 p-3 bg-black bg-opacity-50 rounded-full"
//                 onClick={nextSlide}
//               >
//                 <FaAngleRight />
//               </button>
//             </div>
//             <div className="flex mx-auto mt-6 mb-6">{renderDots()}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function TolBitungTangerang() {
  const slides = [
    {
      url: "/image/projects/tol_bitung_tangerang.jpg",
    },
    {
      url: "/image/projects/tol_bitung_tangerang2.jpg",
    },
    {
      url: "/image/projects/tol_bitung_tangerang3.jpg",
    },
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
        className={`mx-auto aspect-w-[4] aspect-h-[3] ${
          slideIndex === currentIndex ? "block" : "hidden"
        }`}
        style={{ width: "100%", maxWidth: "500px", height: "auto" }}
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
    <div className="flex flex-col p-4 sm:p-14 bg-zinc-800">
      <div className="w-full flex flex-col justify-center items-center pb-8">
        <p className="text-title text-center">
          Project Tol <span className="text-red-600">Bitung-Tangerang</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col">
          <div className="relative mx-auto">
            {renderImages()}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-5 p-2 sm:p-3 bg-black bg-opacity-50 rounded-full"
              onClick={prevSlide}
            >
              <FaAngleLeft />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 p-2 sm:p-3 bg-black bg-opacity-50 rounded-full"
              onClick={nextSlide}
            >
              <FaAngleRight />
            </button>
          </div>
          <div className="flex justify-center mt-6 mb-6">{renderDots()}</div>
        </div>
      </div>
    </div>
  );
}
