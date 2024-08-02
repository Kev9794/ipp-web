// "use client";
// import Link from "next/link";
// import { Image, Button } from "@nextui-org/react";

// export default function OurService() {
//   const catalogueData = [
//     {
//       title: "Pagar Panel Beton",
//       image: "pagar-beton-1.jpg",
//       redirectUrl: "/pagar-beton",
//     },
//     { title: "U-Ditch", image: "uditch-1.jpg", redirectUrl: "/u-ditch" },
//     {
//       title: "Box Culvert",
//       image: "box-culvert-1.jpg",
//       redirectUrl: "/box-culvert",
//     },
//     { title: "Kanstin", image: "kanstin-5.jpeg", redirectUrl: "/kanstin" },
//     {
//       title: "Buis Beton",
//       image: "buis-beton-1.jpg",
//       redirectUrl: "/buis-beton",
//     },
//     { title: "Pipa RCP", image: "pipa-rcp-1.jpg", redirectUrl: "/pipa-rcp" },
//     {
//       title: "Paving Block",
//       image: "paving-block-1.jpg",
//       redirectUrl: "/paving-block",
//     },
//     {
//       title: "Pagar Kawat Berduri",
//       image: "pagar-kawat-1.jpg",
//       redirectUrl: "/pagar-kawat",
//     },
//     { title: "Pagar BRC", image: "pagar-brc-1.jpg", redirectUrl: "/pagar-brc" },
//   ];
//   return (
//     <>
//       <div className="flex flex-col p-14 bg-zinc-800">
//         <div className="w-full flex flex-col justify-center items-center pb-8">
//           <p className="text-title">
//             Our <span className="text-red-600">Service</span>
//           </p>
//         </div>
//         <div className="flex flex-row flex-wrap justify-center gap-4">
//           {catalogueData.map((item) => (
//             <div key={item} className="card w-1/5 bg-base-100 shadow-xl ">
//               <div className="relative bg-red10 w-full h-[190px] rounded-t-[16px]">
//                 <div
//                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-w-[3] aspect-h-[3]"
//                   style={{ width: "150px", height: "150px" }}
//                 >
//                   <img
//                     src={`/image/product/${item.image}`}
//                     alt={item.title}
//                     className="object-cover w-full h-full rounded-[8px]"
//                   />
//                 </div>
//               </div>
//               <div className="card flex flex-col flex-1 p-4 flex-grow">
//                 <h2 className="card-title whitespace-nowrap mb-2">
//                   {item.title}
//                 </h2>
//                 <div className="card-actions justify-end">
//                   <Link href={`/services/${item.redirectUrl}`}>
//                     <Button color="primary">Learn More</Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import Link from "next/link";
import { Image, Button } from "@nextui-org/react";

export default function OurService() {
  const catalogueData = [
    {
      title: "Pagar Panel Beton",
      image: "pagar-beton-1.jpg",
      redirectUrl: "/services/pagar-beton",
    },
    { title: "U-Ditch", image: "uditch-1.jpg", redirectUrl: "/u-ditch" },
    {
      title: "Box Culvert",
      image: "box-culvert-1.jpg",
      redirectUrl: "/services/box-culvert",
    },
    { title: "Kanstin", image: "kanstin-5.jpeg", redirectUrl: "/kanstin" },
    {
      title: "Buis Beton",
      image: "buis-beton-1.jpg",
      redirectUrl: "/services/buis-beton",
    },
    { title: "Pipa RCP", image: "pipa-rcp-1.jpg", redirectUrl: "/pipa-rcp" },
    {
      title: "Paving Block",
      image: "paving-block-1.jpg",
      redirectUrl: "/services/paving-block",
    },
    {
      title: "Pagar Kawat Berduri",
      image: "pagar-kawat-1.jpg",
      redirectUrl: "/services/pagar-kawat",
    },
    {
      title: "Pagar BRC",
      image: "pagar-brc-1.jpg",
      redirectUrl: "/services/pagar-brc",
    },
  ];

  return (
    <div className="flex flex-col p-4 sm:p-14 bg-zinc-800">
      <div className="w-full flex flex-col justify-center items-center pb-8">
        <p className="text-title text-center">
          Our <span className="text-red-600">Service</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {catalogueData.map((item) => (
          <div
            key={item.title}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <div className="card bg-base-100 shadow-xl h-full flex flex-col">
              <div className="relative w-full h-[190px] rounded-t-[16px]">
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    src={`/image/product/${item.image}`}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-[8px]"
                  />
                </div>
              </div>
              <div className="card-body flex flex-col flex-1 p-4">
                <h2 className="card-title whitespace-nowrap mb-2">
                  {item.title}
                </h2>
                <div className="card-actions justify-end mt-auto">
                  <Link href={item.redirectUrl}>
                    <Button color="primary">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
