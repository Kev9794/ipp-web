import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";

export const MainFooter = () => {
  return (
    <footer className="py-12 bg-zinc-950 flex justify-center">
      <div className="container flex flex-col gap-20 lg:gap-28 lg:px-28">
        <div className="flex flex-col gap-12 items-center lg:items-start md:flex-row w-full ">
          <div className="md:flex-[1_1_100px]">
            <img
              src={"logo/companylogo.png"}
              alt="logo"
              className="w-[165px]"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center gap-8 text-white md:flex-row md:flex-[4_1_100px] md:items-start md:justify-between">
            <div className="flex flex-col items-center gap-6 md:items-start">
              <h4 className="text-heading4">Learn More</h4>
              <ul className="flex flex-col gap-2 text-paragraph6Res">
                <li>
                  <Link href={"#"}>About Us</Link>
                </li>
                <li>
                  <Link href={"#"}>Our Products</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start gap-6">
              <h4 className="text-heading4">Contact Us</h4>
              <ul className="flex flex-col items-center gap-2 md:items-start text-paragraph6Res">
                <li className="flex items-center gap-2">
                  <FaBuilding />
                  Jl. Perkutut, Bojong Nangka, Kelapa Dua, Tangerang – Banten
                  15810
                </li>
                <li className="flex items-center gap-2">
                  <IoMail />
                  irkonpanelindo@yahoo.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone />
                  0812 1007 032
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone />
                  0821 7495 0006
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <h4 className="text-heading4">Social</h4>
              <div className="flex items-center gap-2 text-xl">
                <Link
                  href={"https://www.instagram.com/irkon_panelindo_produk/"}
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/irkon.panelindoproduk?locale=id_ID"
                  }
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-7 text-white">
          <hr className="opacity-20 w-full" />
          <p className="text-paragraph10 text-center">
            &copy; 2023 PT Irkon Panelindo Produk | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
