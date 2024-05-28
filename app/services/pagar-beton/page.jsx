"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PagarBeton = () => {
  const slides = [
    {
      url: "/image/product/pagar-beton-1.jpg",
    },
    {
      url: "/image/product/pagar-beton-2.jpg",
    },
    {
      url: "/image/product/pagar-beton-3.jpg",
    },
    {
      url: "/image/product/pagar-beton-4.jpg",
    },
    {
      url: "/image/product/pagar-beton-5.jpg",
    },
    {
      url: "/image/product/pagar-beton-6.jpg",
    },
    {
      url: "/image/product/pagar-beton-7.jpg",
    },
    {
      url: "/image/product/pagar-beton-8.jpg",
    },
    {
      url: "/image/product/pagar-beton-9.jpg",
    },
    {
      url: "/image/product/pagar-beton-10.jpg",
    },
    {
      url: "/image/product/pagar-beton-11.jpg",
    },
    {
      url: "/image/product/pagar-beton-12.jpg",
    },
    {
      url: "/image/product/pagar-beton-13.jpg",
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
            Pagar Panel <span className="text-red-600">Beton</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-4"></div>
          <p className="text-paragraph3 mb-4">Descriptions</p>
          <p className="text-paragraph text-justify">
            Pagar Panel Beton berfungsi sebagai konstruksi pelindung/pembatas
            lahan dan sangat cocok digunakan untuk perlindungan rumah, kantor,
            dan kawasan industri. Keunggulan pagar panel beton terletak pada
            kekuatan, kekokohan, dan harga yang lebih ekonomis dibandingkan
            dengan pagar biasa. Pagar beton pracetak memiliki mutu yang berbeda,
            yang didasarkan pada bahan material pembuatannya. Mutu pagar panel
            beton antara lain K250 - K300. Dimensi panel beton umumnya adalah
            panjang 240 cm, tinggi 40 - 45 cm, dan lebar 5 cm.
          </p>
        </div>
      </div>
      <table className="min-w-full text-left text-xs mt-8">
        <thead className="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Panel
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Dimensi Panel
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Dimensi Tiang
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              160 cm (4 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 40 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              220 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              180 cm (4 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 45 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              200 cm (5 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 40 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              270 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              225 cm (5 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 45 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              300 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              240 cm (6 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 40 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              320 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              270 cm (6 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 45 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              370 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              280 cm (7 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 40 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              370 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              315 cm (7 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 45 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              420 x 18 x 18 cm
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">
              320 cm (8 Panel)
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              240 x 40 x 5 cm
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              420 x 18 x 18 cm
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PagarBeton;
