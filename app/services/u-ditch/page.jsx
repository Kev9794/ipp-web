"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const UDitch = () => {
  const slides = [
    {
      url: "/image/product/uditch-1.jpg",
    },
    {
      url: "/image/product/uditch-2.jpg",
    },
    {
      url: "/image/product/uditch-3.jpg",
    },
    {
      url: "/image/product/uditch-4.jpg",
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
            U-<span className="text-red-600">Ditch</span>
          </p>
          <div className="bg-red-600 w-full h-[2px] mb-4"></div>
          <p className="text-paragraph3 mb-4">Descriptions</p>
          <p className="text-paragraph text-justify">
            U-Dicth merupakan salah satu saluran air beton bertulang yang
            memiliki bentuk penampang menyerupai huruf “U” serta bisa diberi
            penutup di atasnya yang disebut dengan tutup u-dicth. Pada umumnya,
            jenis saluran air ini dipakai sebagai saluran drainase atau saluran
            irigasi. Ketinggian u-dicth memiliki variasi yang berbeda dan
            mengikuti sesuai dengan kebutuhan pada saluran yang dipasang.
          </p>
        </div>
      </div>
      <p className="text-heading4 mt-8">Ukuran Dimensi U-Ditch</p>
      <table class="min-w-full text-left text-xs whitespace-nowrap mt-4">
        <thead class="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Tipe
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Dimensi (Lebar x tinggi x Panjang)
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Ketebalan
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Berat
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 3.3</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              300 x 300 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">50 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">185 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 3.4</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              300 x 400 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">50 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">215 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 3.5</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              300 x 500 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">45 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">235 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 4.4</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              400 x 400 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">45 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">231 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 4.5</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              400 x 500 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">45 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">240 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 4.6</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              400 x 600 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">45 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">310 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 5.5</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              500 x 500 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">60 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">370 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 5.6</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              500 x 600 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">60 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">435 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 5.7</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              500 x 700 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">60 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">455 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 6.6</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              600 x 600 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">70 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">490 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 6.7</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              600 x 700 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">70 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">580 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 6.8</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              600 x 800 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">70 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">605 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 8.8</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              800 x 800 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">70 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">640 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 8.9</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              800 x 900 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">70 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">690 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 8.10</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              800 x 1000 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">70 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">722 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 10.10</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1000 x 1000 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">75 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">865 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 10.12</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1000 x 1200 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">75 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">965 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 12.12</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1200 x 1200 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">75 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">1160 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 12.14</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1200 x 1400 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">75 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">1285 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 14.14</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1400 x 1400 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">90 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">1457 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 15.15</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1500 x 1500 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">95 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">1616 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 18.18</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1800 x 1800 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">110 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">2439 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">U-Dicth 20.20</td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1200 x 1200 x 1200 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">120 mm</td>
            <td class="px-6 py-4 border-x border-neutral-600">2440 kg</td>
          </tr>
        </tbody>
      </table>
      <p className="text-heading4 mt-8">Ukuran Dimensi Cover U-Ditch</p>
      <table class="min-w-full text-left text-xs whitespace-nowrap mt-4">
        <thead class="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Tipe
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Dimensi (Lebar x tinggi x Panjang)
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Berat
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 3.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              300 x 600 x 60 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">37 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 4.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              400 x 600 x 70 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">56 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 5.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              500 x 600 x 75 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">73 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 6.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              600 x 600 x 80 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">91 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 8.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              800 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">132 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 10.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1000 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">172 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 12.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1200 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">213 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 14.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1400 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 15.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1500 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 18.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1800 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 20.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              2000 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
        </tbody>
      </table>
      <p className="text-heading4 mt-8">Ukuran Dimensi Cover U-Ditch</p>
      <table class="min-w-full text-left text-xs whitespace-nowrap mt-4">
        <thead class="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Tipe
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Dimensi (Lebar x tinggi x Panjang)
            </th>
            <th scope="col" class="px-6 py-4 border-x border-neutral-600">
              Berat
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 3.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              300 x 600 x 60 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">50 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 4.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              400 x 600 x 70 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">80 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 5.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              500 x 600 x 75 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">126 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 6.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              600 x 600 x 80 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">160 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 8.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              800 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">222 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 10.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1000 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">276 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 12.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1200 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">232 kg</td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 14.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1400 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 15.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1500 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 18.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              1800 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
          <tr class="border-b border-neutral-600 hover:bg-neutral-600">
            <td class="px-6 py-4 border-x border-neutral-600">
              Cover U-Dicth LD 20.6
            </td>
            <td class="px-6 py-4 border-x border-neutral-600">
              2000 x 600 x 100 mm
            </td>
            <td class="px-6 py-4 border-x border-neutral-600"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UDitch;
