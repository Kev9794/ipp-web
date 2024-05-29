"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Kanstin = () => {
  const slides = [
    {
      url: "/image/product/kanstin-1.png",
    },
    {
      url: "/image/product/kanstin-2.png",
    },
    {
      url: "/image/product/kanstin-3.png",
    },
    {
      url: "/image/product/kanstin-4.png",
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
          <p className="text-heading2 text-white">Kanstin</p>
          <div className="bg-red-600 w-full h-[2px] mb-4"></div>
          <p className="text-paragraph3 mb-4">Descriptions</p>
          <p className="text-paragraph text-justify">
            Kanstin adalah material beton pracetak yang digunakan sebagai
            pembatas jalan/trotoar, bahu jalan, dan lain sebagainya. Kanstin
            memiliki tipe dengan bentuk yang berbeda sesuai dengan kebutuhan.
          </p>
        </div>
      </div>
      <table className="min-w-full text-left text-xs mt-8">
        <thead className="uppercase tracking-wider border-b-2 border-neutral-600 border-t bg-zinc-900">
          <tr>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Jenis Kanstin
            </th>
            <th scope="col" className="px-6 py-4 border-x border-neutral-600">
              Keterangan
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600 whitespace-nowrap">
              Kanstin Taman
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              <p className="text-justify">
                Merupakan material pracetak yang sering digunakan di area
                perumahan, dan juga untuk penahan tanah agar tidak tercecer ke
                badan jalan, sehingga terlihat lebih rapi dan indah. Sehubungan
                dengan jalanan dari paving, jenis kastin ini berfungsi menjepit
                paving block agar tetap rapat di tempatnya dan tidak bergeser.
                Ukuran kanstin taman lebih tipis dan lebih rendah dibandingkan
                tinggi kanstin lainnya. Ukuran kanstin taman yaitu 40 x 20 x 10
                cm dengan isi per meter 2,5 pcs.
              </p>
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600 whitespace-nowrap">
              Kanstin Troroar
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              <p className="text-justify">
                Berfungsi untuk memisahkan badan jalan dengan trotoar, sehingga
                area pejalan kaki lebih tinggi dari pada area kendaran. Ukuran
                kanstin trotoar yaitu 40 x 25 cm isi per meter 2,5 pcs, dan 40 x
                28 cm isi per meter 2,5 pcs.
              </p>
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600 whitespace-nowrap">
              Kanstin S / Kanstin Tali Air
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              <p className="text-justify">
                Model kanstin S digunakan untuk menahan dan mengarahkan air ke
                saluran pembuangan, memiliki tekstur bergelombang seperti tali
                air memiliki ukuran 40 cm x 15 cm x 30 cm dengan nisi per meter
                2,5 pcs.
              </p>
            </td>
          </tr>
          <tr className="border-b border-neutral-600 hover:bg-neutral-600">
            <td className="px-6 py-4 border-x border-neutral-600 whitespace-nowrap">
              Kanstin DKI / Jalan
            </td>
            <td className="px-6 py-4 border-x border-neutral-600">
              <p className="text-justify">
                Kanstin DKI/Jalan berfungsi sebagai pembatas jalan maupun
                pemisah dengan trotoar, perbedaan dengan ukuran kanstin jalan
                ini lebih besar dibandingkan dengan ukuran kanstin trotoar
                memiliki ukuran 60 x 15 x 22 cm dengan isi per meter 1,6 pcs.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Kanstin;
