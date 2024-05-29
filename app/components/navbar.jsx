"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Image,
} from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa6";

export const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="h-28" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className="hidden sm:flex">
        <Image src="/logo/companylogonavbar.png" height={40} width={100} />
        <p className="font-bold text-inherit">PT Irkon Panelindo Produk</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link href="/" color="foreground">
            Homepage
          </Link>
        </NavbarItem>
        <Dropdown className="bg-zinc-700">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaAngleDown />}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ACME features" className="w-[340px]">
            <DropdownItem key="all_project" href="/services">
              All Services
            </DropdownItem>
            <DropdownItem key="pagar_beton" href="/services/pagar-beton">
              Pagar Panel Beton
            </DropdownItem>
            <DropdownItem key="u_ditch" href="/services/u-ditch">
              U-Ditch
            </DropdownItem>
            <DropdownItem key="box_culvert" href="/services/box-culvert">
              Box Culvert
            </DropdownItem>
            <DropdownItem key="kanstin" href="/services/kanstin">
              Kanstin
            </DropdownItem>
            <DropdownItem key="buis_beton" href="/services/buis-beton">
              Buis Beton
            </DropdownItem>
            <DropdownItem key="pipa_rcp" href="/services/pipa-rcp">
              Pipa RCP
            </DropdownItem>
            <DropdownItem key="paving_block" href="/services/paving-block">
              Paving Block
            </DropdownItem>
            <DropdownItem key="pagar_duri" href="/services/pagar-kawat">
              Pagar Kawat Berduri
            </DropdownItem>
            <DropdownItem key="pagar_brc" href="/services/pagar-brc">
              Pagar BRC
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/about-us">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact-us">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src="logo/companylogonavbar.png" height={40} width={100} />
          <p className="font-bold text-inherit">PT Irkon Panelindo Produk</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
