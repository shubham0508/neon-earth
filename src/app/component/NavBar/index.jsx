"use client";

import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "All",
    icon: "/tabImages/all.webp",
  },
  {
    title: "Wall Arts",
    icon: "/tabImages/wallArts.webp",
    children: [
      { title: "Canvas Prints", href: "#" },
      { title: "Posters", href: "#" },
    ],
  },
  {
    title: "Tapestries",
    icon: "/tabImages/tapestries.webp",
    children: [
      { title: "Bohemian", href: "#" },
      { title: "Abstract", href: "#" },
    ],
  },
  {
    title: "Rugs & Mats",
    icon: "/tabImages/rugsAndMats.webp",
    children: [
      { title: "Door Mats", href: "#" },
      { title: "Area Rugs", href: "#" },
    ],
  },
  {
    title: "Pillows",
    icon: "/tabImages/pillows.webp",
    children: [
      { title: "Decorative", href: "#" },
      { title: "Floor Pillows", href: "#" },
    ],
  },
  {
    title: "Curtains",
    icon: "/tabImages/curtains.webp",
    children: [
      { title: "Blackout", href: "#" },
      { title: "Sheer", href: "#" },
    ],
  },
  {
    title: "Custom Fabric",
    icon: "/tabImages/customFabric.webp",
    children: [
      { title: "By Yard", href: "#" },
      { title: "Pre-cut", href: "#" },
    ],
  },
  {
    title: "Pet Zone",
    icon: "/tabImages/petZone.webp",
    children: [
      { title: "Pet Beds", href: "#" },
      { title: "Pet Blankets", href: "#" },
    ],
  },
  {
    title: "Clothing",
    icon: "/tabImages/clothing.webp",
    children: [
      { title: "T-Shirts", href: "#" },
      { title: "Hoodies", href: "#" },
    ],
  },
  {
    title: "More",
    icon: "/tabImages/more.webp",
    children: [
      { title: "Accessories", href: "#" },
      { title: "Gift Cards", href: "#" },
    ],
  },
  {
    title: "Theme",
    icon: "/tabImages/theme.webp",
    isCircle: true,
    children: [
      { title: "Light", href: "#" },
      { title: "Dark", href: "#" },
    ],
  },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <nav className="container mx-auto px-4 sm:px-6 py-2 sm:py-4">
      <div className="md:hidden flex justify-between items-center py-2">
        <Button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center text-gray-700"
        >
          <Menu className="h-6 w-6 mr-2" />
          <span>Menu</span>
        </Button>
      </div>

      <ul className="hidden md:flex justify-between">
        {navItems.map((item) => (
          <li key={item.title} className="group relative text-center">
            <a
              href="#"
              className="flex flex-col items-center px-1 sm:px-2"
              onMouseEnter={() => setActiveSubmenu(item.title)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${
                  item.isCircle ? "bg-pink-500 rounded-full" : ""
                } mb-1 sm:mb-2 flex items-center justify-center`}
              >
                <Image
                  src={item.icon}
                  alt={`Icon representing ${item.title}`}
                  width={item.isCircle ? 30 : 50}
                  height={item.isCircle ? 30 : 50}
                  className={`${item.isCircle ? "invert" : ""} w-auto h-auto`}
                />
              </div>

              <span className="flex items-center text-xs sm:text-sm">
                {item.title}
                {item?.children && (
                  <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:rotate-180" />
                )}
              </span>
            </a>

            {item?.children && (
              <ul
                className={`absolute left-1/2 transform -translate-x-1/2 ${
                  activeSubmenu === item.title ? "block" : "hidden"
                } bg-white shadow-lg rounded-md min-w-[160px] sm:min-w-[200px] py-2 z-10`}
              >
                {item.children.map((child) => (
                  <li key={child.title}>
                    <a
                      href={child.href}
                      className="block px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.title} className="border-b border-gray-100 pb-2">
                <div
                  className="flex justify-between items-center py-2"
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === item.title ? null : item.title
                    )
                  }
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 ${
                        item.isCircle ? "bg-pink-500 rounded-full" : ""
                      } mr-2 flex items-center justify-center`}
                    >
                      <Image
                        src={item.icon}
                        alt={`Icon representing ${item.title}`}
                        width={item.isCircle ? 20 : 30}
                        height={item.isCircle ? 20 : 30}
                        className={`${item.isCircle ? "invert" : ""}`}
                      />
                    </div>
                    <span className="text-sm">{item.title}</span>
                  </div>
                  {item?.children && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeSubmenu === item.title ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {item?.children && activeSubmenu === item.title && (
                  <ul className="pl-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.title}>
                        <a
                          href={child.href}
                          className="block py-1 text-sm text-gray-700 hover:text-pink-500"
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
