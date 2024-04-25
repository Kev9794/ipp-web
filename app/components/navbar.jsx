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
    <Navbar className="h-32" onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className="hidden sm:flex">
        <Image src="logo/companylogonavbar.png" height={40} width={100} />
        <p className="font-bold text-inherit">PT Irkon Panelindo Produk</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Homepage
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Service
          </Link>
        </NavbarItem>
        <Dropdown className="bg-zinc-700">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaAngleDown />}
                radius="sm"
                variant="light"
              >
                Projects
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="ACME features" className="w-[340px]">
            <DropdownItem key="all_project">All Projects</DropdownItem>
            <DropdownItem key="usage_metrics">Pagar</DropdownItem>
            <DropdownItem key="production_ready">Pagar</DropdownItem>
            <DropdownItem key="99_uptime">Pagar</DropdownItem>
            <DropdownItem key="supreme_support">Pagar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
