import { MainNavbar } from "./components/navbar";
import { Image } from "@nextui-org/react";
import {
  FaHotTubPerson,
  FaAccessibleIcon,
  FaArrowRightToCity,
} from "react-icons/fa6";

export default function Home() {
  const imageName = [
    "ciputra",
    "wika",
    "pp",
    "jababeka-residence",
    "duta-anggada",
    "abipraya",
    "krakatau-steel",
    "paramount-petals",
    "paramount-lands",
    "jababeka-co",
    "gna-group",
    "asiacon",
    "metland",
    "mas-group",
    "golden-park",
    "aldiron-hero",
  ];
  const solutionCardData = [
    {
      icon: <FaHotTubPerson className="text-black w-10 h-10" />,
      title: "Test 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nulla!",
    },
    {
      icon: <FaAccessibleIcon className="text-black w-10 h-10" />,
      title: "Test 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nulla!",
    },
    {
      icon: <FaArrowRightToCity className="text-black w-10 h-10" />,
      title: "Test 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nulla!",
    },
    {
      icon: <FaHotTubPerson className="text-black w-10 h-10" />,
      title: "Test 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nulla!",
    },
    {
      icon: <FaAccessibleIcon className="text-black w-10 h-10" />,
      title: "Test 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nulla!",
    },
    {
      icon: <FaArrowRightToCity className="text-black w-10 h-10" />,
      title: "Test 6",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nulla!",
    },
  ];
  const imageRows = [
    imageName.slice(0, 5),
    imageName.slice(5, 11),
    imageName.slice(11, 16),
  ];
  const divStyle = {
    backgroundImage: "url(image/bg1.jpg)", // path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "900px", // Adjust height as needed
  };
  return (
    <>
      <MainNavbar />
    <section id="hero-section">
    <div className="flex w-full">
        <div style={divStyle}>
          <div className="flex items-center justify-between px-12 py-10">
            <div className="w-1/2">
              <p className="text-5xl font-thin ">
                Kami berkomitmen untuk selalu meningkatkan produk kami,
                <br /> dengan menjaga kualitas produk,
                <br /> dan pengerjaan tepat waktu.
              </p>
              <p className="pt-10 font-extralight">
                Kami menjual Pagar Beton dan Pagar BRC kualitas terbaik dan
                kokoh.
              </p>
            </div>
            <div>
              <Image src="image/worker.png" width={650} radius="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
      <section id="our-partner">
        <div className="flex flex-col items-center justify-center bg-slate-50 py-12 px-48">
          <p className="text-4xl font-extrabold text-black">
            Our <span className="text-red-600">Partner</span>
          </p>
          {imageRows.map((row, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-around py-6"
            >
              {row.map((item) => (
                <div key={item}>
                  <Image
                    src={`/logo/partner-${item}.png`}
                    width={70}
                    height={50}
                    radius="none"
                    // className="filter grayscale"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section id="our-solution">
        <div className="flex flex-col items-center justify-center bg-slate-200 py-12 px-48">
          <p className="text-4xl font-extrabold text-black">
            Our <span className="text-red-600">Solution</span>
          </p>
          <p className="text-medium font-bold text-black pt-6">
            We have various solutions for pagar beton
          </p>
          <a href="" className="text-medium font-bold text-red-600 pt-6">
            Learn More →
          </a>
          <div className="grid grid-cols-3 grid-rows-2 gap-8 pt-6">
            {solutionCardData.map((item) => (
              <div className="relative w-48 h-48 p-4 bg-white group" key={item}>
                <div className="absolute top-0 left-0 w-full bg-red-600 h-1 group-hover:h-0 transition-all"></div>
                {item.icon}
                <p className="text-xl font-normal text-black pt-6">
                  {item.title}
                </p>
                <p className="text-xs font-normal text-black pt-1">
                  {item.description}
                </p>
                <div className="flex">
                  <div className="absolute bottom-0 left-0 w-[60%] bg-black h-0 group-hover:h-[6px]"></div>
                  <div className="absolute bottom-0 left-[65%] w-[10%] bg-red-600 h-0 group-hover:h-[6px]"></div>
                  <div className="absolute bottom-0 left-[80%] w-[20%] bg-black h-0 group-hover:h-[6px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
