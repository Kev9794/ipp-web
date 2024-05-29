"use client";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function OurProjects() {
  const list = [
    {
      title: "Area Perkantoran",
      img: "/image/projects/area_perkantoran.jpg",
      link: "/projects/area-perkantoran",
    },
    {
      title: "Area Perumahan",
      img: "/image/projects/area_perumahan.jpg",
      link: "/projects/area-perumahan",
    },
    {
      title: "Bekasi",
      img: "/image/projects/bekasi.jpg",
      link: "/projects/bekasi",
    },
    {
      title: "Bogor",
      img: "/image/projects/bogor.jpg",
      link: "/projects/bogor",
    },
    // {
    //   title: "Kawasan Industri",
    //   img: "/image/projects/kawasan_industri.jpg",
    //   link: "/projects/kawasan-industri",
    // },
    {
      title: "Marunda Center",
      img: "/image/projects/marunda_center2.jpg",
      link: "/projects/marunda-center",
    },
    // {
    //   title: "Paramount Gading Serpong",
    //   img: "/image/projects/paramount_gs.jpg",
    //   link: "/projects/paramount-gs",
    // },
    // {
    //   title: "Perum Peruri Karawang",
    //   img: "/image/projects/perum_peruri_karawang.jpg",
    //   link: "/projects/perum-peruri-karawang",
    // },
    {
      title: "Project BI Karawang",
      img: "/image/projects/project_bi1.jpg",
      link: "/projects/project-bi-karawang",
    },
    {
      title: "Project Modern Cikande Serang",
      img: "/image/projects/project_modern_cikande.jpg",
      link: "/projects/project-modern-cikande",
    },
    {
      title: "Project Tangerang",
      img: "/image/projects/project_tangerang.jpg",
      link: "/projects/project-tangerang",
    },
    {
      title: "Project Pagar Panel",
      img: "/image/projects/pagar.jpg",
      link: "/projects/project-pagar-panel",
    },
    {
      title: "Project Uditch dan Box Culvert",
      img: "/image/projects/uditch.jpg",
      link: "/projects/project-uditch-box-culvert",
    },
    {
      title: "Tambun",
      img: "/image/projects/tambun.jpg",
      link: "/projects/tambun",
    },
    {
      title: "Tol Bitung Tangerang",
      img: "/image/projects/tol_bitung_tangerang.jpg",
      link: "/projects/tol-bitung-tangerang",
    },
    {
      title: "Tol Semarang Demak",
      img: "/image/projects/tol_semarang_demak.jpg",
      link: "/projects/tol-semarang-demak",
    },
    {
      title: "Tol Serpong Balaraja",
      img: "/image/projects/tol_serpong_balaraja.jpg",
      link: "/projects/tol-serpong-balaraja",
    },
    {
      title: "Tol Serpong Cinere",
      img: "/image/projects/tol_serpong_cinere.jpg",
      link: "/projects/tol-serpong-cinere",
    },
  ];

  return (
    <>
      <div className="flex flex-col p-14 bg-zinc-800">
        <div className="w-full flex flex-col justify-center items-center pb-8">
          <p className="text-title">
            Our <span className="text-red-600">Projects</span>
          </p>
        </div>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Link href={item.link}>
              <Card shadow="sm" key={index} isPressable className="w-full">
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[200px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
