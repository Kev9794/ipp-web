"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PagarBRC = () => {
  const slides = [
    {
      url: "/image/product/pagar-brc-1.jpg",
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
        className={`w-3 h-3 2xl:w-4 2xl:h-4 rounded-full border mx-2 cursor-pointer ${
          slideIndex === currentIndex ? "bg-white" : ""
        }`}
      ></div>
    ));
  };

  const renderImages = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        className={`mx-auto aspect-w-[4] aspect-h-[3]  ${
          slideIndex === currentIndex ? "block" : "hidden"
        }`}
        style={{ width: "500px", height: "375px" }}
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
    <div className="p-20 bg-zinc-800">
      <div className="flex items-start justify-center gap-12">
        <div className="w-1/2 flex flex-col">
          <div className="relative mx-auto">
            {renderImages()}
            <button
              className="absolute top-1/2 -translate-y-1/2 left-5 p-3 bg-black bg-opacity-50 rounded-full"
              onClick={prevSlide}
            >
              <FaAngleLeft />
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-5 p-3 bg-black bg-opacity-50 rounded-full"
              onClick={nextSlide}
            >
              <FaAngleRight />
            </button>
          </div>
          <div className="flex mx-auto mt-6 mb-6">{renderDots()}</div>
        </div>
        <div className="w-1/2">
          <p className="text-heading2 text-white">
            Pagar <span className="text-red-600">BRC</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-4"></div>
          <p className="text-paragraph3 mb-4">Descriptions</p>
          <p className="text-paragraph text-justify">
            Pagar BRC, singkatan dari British Reinforced Concrete atau juga
            dikenal sebagai pagar roll top, adalah jenis pagar wire mesh khusus
            yang dilas dengan struktur seitiga gulung di bagian atas dan
            bawahnya. Pagar BRC terbuat dari baja ringan atau stainless steel.
            Fitur strukturnya yang unik, pada beberapa produk diwarnai untuk
            memberikan tampilan visual yang menarik. Material pagar ini sangat
            keras sehingga memberikan tingkat keamanan yang lebih baik. Pagar
            BRC sering digunakan di berbagai tempat seperti sekolah, taman
            bermain, kolam renang, lapangan olahraga, bandara, area perkantoran,
            perumahan, pembatas jalan tol, dan sebagainya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagarBRC;
