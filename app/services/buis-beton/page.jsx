"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BuisBeton = () => {
  const slides = [
    {
      url: "/image/product/buis-beton-1.jpg",
    },
    {
      url: "/image/product/buis-beton-2.jpg",
    },
    {
      url: "/image/product/buis-beton-3.jpg",
    },
    {
      url: "/image/product/buis-beton-4.jpg",
    },
    {
      url: "/image/product/buis-beton-5.jpg",
    },
    {
      url: "/image/product/buis-beton-6.jpg",
    },
    {
      url: "/image/product/buis-beton-7.jpg",
    },
    {
      url: "/image/product/buis-beton-8.jpg",
    },
    {
      url: "/image/product/buis-beton-9.jpg",
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
            Buis <span className="text-red-600">Beton</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-4"></div>
          <p className="text-paragraph3 mb-4">Descriptions</p>
          <p className="text-paragraph text-justify">
            Bahan konstruksi beton pracetak yang digunakan sebagai saluran
            drainase, septic tank, dan sumur resapan, atau yang sering dikenal
            sebagai gorong-gorong, dapat berupa buis beton. Buis beton ini
            memiliki dua jenis, yaitu buis beton bulat dan buis beton ½
            lingkaran, dengan berbagai ukuran yang berbeda.
          </p>
        </div>
      </div>
      <p className="text-heading4 mt-8">Ukuran Dimensi Buis Beton Bulat</p>
      <table className="min-w-full text-left text-xs whitespace-nowrap mt-4">
        <thead className="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Diameter
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Panjang
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Tebal
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Isi Per Meter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">20 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">100 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">2,5 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">1 Pcs</td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">30 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">100 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">3 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">1 Pcs</td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">40 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">100 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">4 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">1 Pcs</td>
          </tr>
        </tbody>
      </table>

      <p className="text-heading4 mt-8">
        Ukuran Dimensi Buis Beton Setengah Lingkaran
      </p>
      <table className="min-w-full text-left text-xs whitespace-nowrap mt-4">
        <thead className="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Diameter
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Panjang
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Tebal
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Isi Per Meter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">20 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">100 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">2,5 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">1 Pcs</td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">30 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">100 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">3 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">1 Pcs</td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600">40 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">100 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">4 cm</td>
            <td className="px-6 py-4 border-x border-neutral-600">1 Pcs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BuisBeton;
