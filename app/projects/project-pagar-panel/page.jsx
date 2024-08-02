// "use client";
// import React, { useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// export default function ProjectPagarPanel() {
//   const slides = [
//     {
//       url: "/image/projects/pagar.jpg",
//     },
//     {
//       url: "/image/projects/pagar2.jpg",
//     },
//     {
//       url: "/image/projects/pagar3.jpg",
//     },
//     {
//       url: "/image/projects/pagar4.jpg",
//     },
//     {
//       url: "/image/projects/pagar5.jpg",
//     },
//     {
//       url: "/image/projects/pagar6.jpg",
//     },
//     {
//       url: "/image/projects/pagar7.jpg",
//     },
//     {
//       url: "/image/projects/pagar8.jpg",
//     },
//     {
//       url: "/image/projects/pagar9.jpg",
//     },
//     {
//       url: "/image/projects/pagar10.jpg",
//     },
//     {
//       url: "/image/projects/pagar11.jpg",
//     },
//     {
//       url: "/image/projects/pagar12.jpg",
//     },
//     {
//       url: "/image/projects/pagar13.jpg",
//     },
//     {
//       url: "/image/projects/pagar14.jpg",
//     },
//     {
//       url: "/image/projects/pagar15.jpg",
//     },
//     {
//       url: "/image/projects/pagar16.jpg",
//     },
//     {
//       url: "/image/projects/pagar17.jpg",
//     },
//     {
//       url: "/image/projects/pagar18.jpg",
//     },
//     {
//       url: "/image/projects/pagar19.jpg",
//     },
//     {
//       url: "/image/projects/pagar20.jpg",
//     },
//     {
//       url: "/image/projects/pagar21.jpg",
//     },
//     {
//       url: "/image/projects/pagar22.jpg",
//     },
//     {
//       url: "/image/projects/pagar23.jpg",
//     },
//     {
//       url: "/image/projects/pagar24.jpg",
//     },
//     {
//       url: "/image/projects/pagar25.jpg",
//     },
//     {
//       url: "/image/projects/pagar26.jpg",
//     },
//     {
//       url: "/image/projects/pagar27.jpg",
//     },
//     {
//       url: "/image/projects/pagar28.jpg",
//     },
//     {
//       url: "/image/projects/pagar29.jpg",
//     },
//     {
//       url: "/image/projects/pagar30.jpg",
//     },
//     {
//       url: "/image/projects/pagar31.jpg",
//     },
//     {
//       url: "/image/projects/pagar32.jpg",
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

//   //   const renderDots = () => {
//   //     return slides.map((slide, slideIndex) => (
//   //       <div
//   //         key={slideIndex}
//   //         onClick={() => goToSlide(slideIndex)}
//   //         className={`w-3 h-3 2xl:w-4 2xl:h-4 rounded-full border mx-2 cursor-pointer ${
//   //           slideIndex === currentIndex ? "bg-white" : ""
//   //         }`}
//   //       ></div>
//   //     ));
//   //   };

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
//             Project Pagar <span className="text-red-600">Panel</span>
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
//             {/* <div className="flex mx-auto mt-6 mb-6">{renderDots()}</div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function ProjectPagarPanel() {
  const slides = [
    {
      url: "/image/projects/pagar.jpg",
    },
    {
      url: "/image/projects/pagar2.jpg",
    },
    {
      url: "/image/projects/pagar3.jpg",
    },
    {
      url: "/image/projects/pagar4.jpg",
    },
    {
      url: "/image/projects/pagar5.jpg",
    },
    {
      url: "/image/projects/pagar6.jpg",
    },
    {
      url: "/image/projects/pagar7.jpg",
    },
    {
      url: "/image/projects/pagar8.jpg",
    },
    {
      url: "/image/projects/pagar9.jpg",
    },
    {
      url: "/image/projects/pagar10.jpg",
    },
    {
      url: "/image/projects/pagar11.jpg",
    },
    {
      url: "/image/projects/pagar12.jpg",
    },
    {
      url: "/image/projects/pagar13.jpg",
    },
    {
      url: "/image/projects/pagar14.jpg",
    },
    {
      url: "/image/projects/pagar15.jpg",
    },
    {
      url: "/image/projects/pagar16.jpg",
    },
    {
      url: "/image/projects/pagar17.jpg",
    },
    {
      url: "/image/projects/pagar18.jpg",
    },
    {
      url: "/image/projects/pagar19.jpg",
    },
    {
      url: "/image/projects/pagar20.jpg",
    },
    {
      url: "/image/projects/pagar21.jpg",
    },
    {
      url: "/image/projects/pagar22.jpg",
    },
    {
      url: "/image/projects/pagar23.jpg",
    },
    {
      url: "/image/projects/pagar24.jpg",
    },
    {
      url: "/image/projects/pagar25.jpg",
    },
    {
      url: "/image/projects/pagar26.jpg",
    },
    {
      url: "/image/projects/pagar27.jpg",
    },
    {
      url: "/image/projects/pagar28.jpg",
    },
    {
      url: "/image/projects/pagar29.jpg",
    },
    {
      url: "/image/projects/pagar30.jpg",
    },
    {
      url: "/image/projects/pagar31.jpg",
    },
    {
      url: "/image/projects/pagar32.jpg",
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
          Project Pagar <span className="text-red-600">Panel</span>
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
        </div>
      </div>
    </div>
  );
}
