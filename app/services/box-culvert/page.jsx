"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BoxCulvert = () => {
  const slides = [
    {
      url: "/image/product/box-culvert-1.jpg",
    },
    {
      url: "/image/product/box-culvert-2.jpg",
    },
    {
      url: "/image/product/box-culvert-3.jpg",
    },
    {
      url: "/image/product/box-culvert-4.jpg",
    },
    {
      url: "/image/product/box-culvert-5.jpg",
    },
    {
      url: "/image/product/box-culvert-6.jpg",
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
            Box <span className="text-red-600">Culvert</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-4"></div>
          <p className="text-paragraph3 mb-4">Descriptions</p>
          <p className="text-paragraph text-justify">
            Box Culvert adalah produk beton pracetak berbentuk kotak yang
            diproduksi dengan menggunakan cetakan besi dengan tujuan
            pembuatannya untuk saluran dalam tanah atau gorong-gorong, beton ini
            juga merupakan salah satu dari jenis reinforced concrete yaitu beton
            bertulang yang memiliki kekuatan tarik beton yang relatif rendah
            serta diimbangi dengan penulangan besi yang memiliki kekuatan tarik
            yang lebih tinggi. Fungsi Box Culvert digunakan untuk pembuatan
            gorong-gorong, jembatan, kontruksi jalur pejalan kaki, terowongan
            utilitas, sistem pengisian air tanah.
          </p>
        </div>
      </div>
      <table class="min-w-full text-left text-xs whitespace-nowrap mt-8">
        <thead class="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Tipe
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Dimensi (Lebar x tinggi x Panjang)
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Tebal Atas
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Tebal Bawah
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Berat
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">4.4</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              400 x 400 x 1000 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">90 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">90 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">483 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">5.5</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              500 x 500 x 1000 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">100 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">100 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">657 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">6.6</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              600 x 600 x 1000 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">110 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">100 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">773 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">8.8</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              800 x 800 x 1000 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">120 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">100 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">1024 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">10.10</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1000 x 1000 x 1000 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">140 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">125 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">1560 kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoxCulvert;
