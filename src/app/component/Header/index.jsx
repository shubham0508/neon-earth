import React from "react";
import NavBar from "../NavBar";
import Head from "next/head";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart, User, Truck, Gift } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" bg-white">
      <div className="bg-[#fff2d8] text-center py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <Truck className="h-4 w-4 mr-2" />
            <p className="text-xs sm:text-sm">Free Shipping Above $60</p>
          </div>
          <div className="hidden sm:block">{"|"}</div>
          <div className="flex items-center">
            <Gift className="h-4 w-4 mr-2" />
            <p className="text-xs sm:text-sm">
              Up to 20% OFF Sitewide. Use Code: REFRESH
            </p>
          </div>
        </div>
      </div>

      <Head>
        <title>Custom Drapes - Flat Panel | Neon Earth</title>
        <meta
          name="description"
          content="Custom drapes with flat panel design and premium fabrics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-gray-200">
        <div className="container mx-auto py-4 border-b border-gray-200 w-full px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <div className="flex items-center w-full md:w-auto md:justify-start md:mr-4">
              <Link href="/" className="flex items-center">
                <div className="relative h-15 w-[150px] ml-10">
                  <Image
                    src="/logo/companyLogo.webp"
                    alt="Neon Earth Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="flex items-center space-x-4 md:hidden">
                <button className="p-1" aria-label="Search">
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-1 relative" aria-label="Cart">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    0
                  </span>
                </button>
              </div>
            </div>

            <div className="relative w-full md:w-2/3 lg:w-1/2 md:mr-4">
              <Input
                type="text"
                placeholder="Find What Brings You Joy"
                className="pl-3 w-full py-3 sm:py-5 border-3 sm:border-[5px] border-gray-200 hover:outline-none"
              />
              <Button
                className="absolute right-0 top-0 h-full w-12 bg-pink-500 text-white hover:bg-pink-700 cursor-pointer"
                aria-label="Search"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <div className="relative p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                <Heart className="h-5 w-5 text-gray-600 hover:text-pink-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
              <div className="relative p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
              <div className="text-gray-700 flex flex-row gap-2 items-center">
                <User className="h-5 w-5 text-gray-600" />
                <span className="cursor-pointer hover:text-pink-700 text-sm lg:text-base">
                  Join/Login
                </span>
              </div>
            </div>
          </div>
        </div>

        <NavBar />
      </header>
    </div>
  );
};

export default Header;
