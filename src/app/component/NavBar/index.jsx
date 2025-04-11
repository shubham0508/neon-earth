"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "All",
    icon: "/tabImages/all.webp",
    href: "#",
  },
  {
    title: "Wall Arts",
    icon: "/tabImages/wallArts.webp",
    children: [
      { title: "Canvas Prints", href: "#" },
      { title: "Framed Prints", href: "#" },
      { title: "Posters", href: "#" },
    ]
  },
  {
    title: "Tapestries",
    icon: "/tabImages/tapestries.webp",
    children: [
      { title: "Wall Tapestries", href: "#" },
      { title: "Hanging Tapestries", href: "#" },
      { title: "Bohemian", href: "#" },
    ]
  },
  {
    title: "Rugs & Mats",
    icon: "/tabImages/rugsAndMats.webp",
    children: [
      { title: "Area Rugs", href: "#", 
        arrow: true,
        subItems: [
          { title: "Rectangle Rug", href: "#" },
          { title: "Square Rug", href: "#" },
          { title: "Round Rug", href: "#" },
        ]
      },
      { title: "Hallway Runners", href: "#", 
        arrow: true,
        subItems: [
          { title: "Long Runners", href: "#" },
          { title: "Short Runners", href: "#" },
        ]
      },
      { title: "Doormats", href: "#", 
        arrow: true,
        subItems: [
          { title: "Indoor", href: "#" },
          { title: "Outdoor", href: "#" },
        ]
      },
      { title: "Rectangle Rug", href: "#" },
      { title: "Square Rug", href: "#" },
      { title: "Round Rug", href: "#" },
      { title: "Oval Rug", href: "#" },
      { title: "Capsule Rug", href: "#" },
      { title: "Hexagon Rug", href: "#" },
      { title: "Octagon Rug", href: "#" },
    ]
  },
  {
    title: "Pillows",
    icon: "/tabImages/pillows.webp",
    children: [
      { title: "Throw Pillows", href: "#" },
      { title: "Floor Pillows", href: "#" },
      { title: "Pillow Covers", href: "#" },
    ]
  },
  {
    title: "Curtains",
    icon: "/tabImages/curtains.webp",
    children: [
      { title: "Window Curtains", href: "#" },
      { title: "Sheer Curtains", href: "#" },
      { title: "Blackout Curtains", href: "#" },
      { title: "Pinch Pleat", href: "#" },
    ]
  },
  {
    title: "Custom Fabric",
    icon: "/tabImages/customFabric.webp",
    children: [
      { title: "Cotton", href: "#" },
      { title: "Silk", href: "#" },
      { title: "Polyester", href: "#" },
    ]
  },
  {
    title: "Pet Zone",
    icon: "/tabImages/petZone.webp",
    children: [
      { title: "Pet Beds", href: "#" },
      { title: "Pet Blankets", href: "#" },
      { title: "Pet Accessories", href: "#" },
    ]
  },
  {
    title: "Clothing",
    icon: "/tabImages/clothing.webp",
    children: [
      { title: "T-shirts", href: "#" },
      { title: "Hoodies", href: "#" },
      { title: "Accessories", href: "#" },
    ]
  },
  {
    title: "More",
    icon: "/tabImages/more.webp",
    children: [
      { title: "Gift Cards", href: "#" },
      { title: "Accessories", href: "#" },
      { title: "Sale Items", href: "#" },
    ]
  },
  {
    title: "Theme",
    icon: "/tabImages/theme.webp",
    isCircle: true,
    children: [
      { title: "Nature", href: "#" },
      { title: "Abstract", href: "#" },
      { title: "Geometric", href: "#" },
    ]
  },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMainMenu, setActiveMainMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMainMenuEnter = (title) => {
    setActiveMainMenu(title);
  };

  const handleMainMenuLeave = () => {
    setActiveMainMenu(null);
    setActiveSubMenu(null);
  };

  const handleSubMenuEnter = (title) => {
    setActiveSubMenu(title);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  // Function to toggle mobile menu items
  const toggleMobileMenuItem = (itemTitle) => {
    if (activeMainMenu === itemTitle) {
      setActiveMainMenu(null);
    } else {
      setActiveMainMenu(itemTitle);
    }
    setActiveSubMenu(null);
  };

  // Function to toggle mobile submenu items
  const toggleMobileSubItem = (itemTitle) => {
    if (activeSubMenu === itemTitle) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(itemTitle);
    }
  };

  return (
    <header className="border-b border-gray-100">
      <nav className="container mx-auto relative">
        <div className="md:hidden flex justify-between items-center py-4 px-4">
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            className="flex items-center text-gray-700"
          >
            <span className="mr-2">☰</span>
            <span>Menu</span>
          </Button>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMainMenuEnter(item.title)}
                onMouseLeave={handleMainMenuLeave}
              >
                <a
                  href={item.href || "#"}
                  className="flex flex-col items-center px-2 py-2 text-center hover:text-pink-500 transition-colors"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${
                      item.isCircle ? "bg-pink-500 rounded-full" : ""
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className={item.isCircle ? "invert" : ""}
                    />
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium">{item.title}</span>
                    {item.children && (
                      <ChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </div>
                </a>

                {/* Dropdown Menu */}
                {item.children && activeMainMenu === item.title && (
                  <div className={`absolute mt-1 bg-white shadow-lg rounded z-20 min-w-max ${
                    // Adjust position for items near the right edge
                    index >= navItems.length - 3 ? "right-0" : "left-0"
                  }`}>
                    <div className="flex">
                      {/* Left side with menu options */}
                      <div className="py-2 border-r border-gray-100 w-48">
                        {item.children.map((child) => (
                          <div 
                            key={child.title}
                            className="relative"
                            onMouseEnter={() => handleSubMenuEnter(child.title)}
                            onMouseLeave={() => handleSubMenuLeave()}
                          >
                            <a
                              href={child.href}
                              className={`px-6 py-2 text-sm hover:text-pink-500 flex justify-between items-center ${
                                activeSubMenu === child.title ? "text-pink-500" : "text-gray-700"
                              }`}
                            >
                              <span>{child.title}</span>
                              {child.arrow && (
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                              )}
                            </a>

                            {/* Third-level submenu */}
                            {child.subItems && activeSubMenu === child.title && (
                              <div className="absolute top-0 left-48 bg-white shadow-lg rounded min-w-max z-30 py-2 w-48">
                                {child.subItems.map((subItem) => (
                                  <a
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="block px-6 py-2 text-sm text-gray-700 hover:text-pink-500"
                                  >
                                    {subItem.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Right side with category image and title */}
                      <div className="p-4 w-64">
                        <div className="text-center mb-4">
                          <h3 className="text-gray-700">Discover our</h3>
                          <h2 className="text-pink-500 text-xl font-medium">{item.title}</h2>
                        </div>
                        
                        <div className="mt-4">
                          <div className="w-full h-48 rounded overflow-hidden">
                            <Image
                              src={item.icon}
                              alt={`${item.title} preview`}
                              width={300}
                              height={300}
                              className="object-cover"
                            />
                          </div>
                          {item.title === "Rugs & Mats" && (
                            <div className="mt-4 text-center">
                              <p className="text-gray-700">Rugs to floor</p>
                              <p className="text-pink-500 text-lg">your guests</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg p-4 absolute top-16 left-0 right-0 z-50 max-h-screen overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.title} className="border-b border-gray-100 pb-2">
                  <div
                    className="flex justify-between items-center py-2"
                    onClick={() => toggleMobileMenuItem(item.title)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 ${
                          item.isCircle ? "bg-pink-500 rounded-full" : ""
                        } mr-2 flex items-center justify-center`}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                          className={item.isCircle ? "invert" : ""}
                        />
                      </div>
                      <span>{item.title}</span>
                    </div>
                    {item.children && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeMainMenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {item.children && activeMainMenu === item.title && (
                    <ul className="pl-8 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <div>
                            <div
                              className="flex justify-between items-center py-1"
                              onClick={() => toggleMobileSubItem(child.title)}
                            >
                              <a
                                href={child.href}
                                className="block text-sm text-gray-700 hover:text-pink-500"
                              >
                                {child.title}
                              </a>
                              {child.subItems && (
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${
                                    activeSubMenu === child.title ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </div>

                            {child.subItems && activeSubMenu === child.title && (
                              <ul className="pl-4 mt-1 space-y-1">
                                {child.subItems.map((subItem) => (
                                  <li key={subItem.title}>
                                    <a
                                      href={subItem.href}
                                      className="block py-1 text-xs text-gray-600 hover:text-pink-500"
                                    >
                                      {subItem.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
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
    </header>
  );
};

export default NavBar;