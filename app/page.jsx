import { MainNavbar } from "./components/navbar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Link,
  Button,
} from "@nextui-org/react";

export default function Home() {
  const divStyle = {
    backgroundImage: "url(image/bg1.jpg)", // path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "900px", // Adjust height as needed
  };
  return (
    <div>
      <MainNavbar />
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
    </div>
  );
}
