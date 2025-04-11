"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus, Heart, ShoppingCart, Search, User } from "lucide-react";
import NavBar from "../NavBar";
import BreadCrumb from "../BreadCrumb";
import Breadcrumbs from "../BreadCrumb";
import ProductSpecification from "../ProductSpecification";
import ProductDetail from "../ProductDescription";
import RatingAndReview from "../Review";
import FaqSection from "../FAQs";
import ProductInsights from "../ProductInsights";
import ProductCarousel from "../Personalize";
import Footer from "../Footer";
import DesignOnOtherProducts from "../DesignOnOtherProducts";

// Fabric options
const fabricOptions = [
  { id: 1, name: "Cruze Daizy", color: "bg-slate-100" },
  { id: 2, name: "Cruze Tortilla", color: "bg-amber-100" },
  { id: 3, name: "Charms Frost", color: "bg-gray-200" },
  { id: 4, name: "Nevada Malabar", color: "bg-stone-200" },
  { id: 5, name: "Daventry Coconut", color: "bg-neutral-100" },
  { id: 6, name: "Austin Desert Tan", color: "bg-stone-400", active: true },
];

// Heading style options
const headingStyles = [
  { id: 1, name: "Flat Panel", image: "/images/flat-panel.jpg", active: true },
  { id: 2, name: "Pinch Pleat", image: "/images/pinch-pleat.jpg" },
  { id: 3, name: "Grommet", image: "/images/grommet.jpg" },
  { id: 4, name: "Ripple Folds", image: "/images/ripple-folds.jpg" },
  { id: 5, name: "Tailored Pleats", image: "/images/tailored-pleats.jpg" },
  { id: 6, name: "Goblet", image: "/images/goblet.jpg" },
];

// Placement options
const placementOptions = [
  {
    id: 1,
    name: "Window Cover",
    image: "/images/window-cover.jpg",
    active: true,
  },
  { id: 2, name: "Between Windows", image: "/images/between-windows.jpg" },
];

const HeroSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeHeadingStyle, setActiveHeadingStyle] = useState("Flat Panel");
  const [activePlacement, setActivePlacement] = useState("Window Cover");
  const [activeFabric, setActiveFabric] = useState("Austin Desert Tan");
  const [width, setWidth] = useState(48);
  const [height, setHeight] = useState(48);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" bg-white">
      <div className="bg-[#fff2d8] text-center py-2">
        <div className="container mx-auto flex justify-center items-center space-x-2">
          <div className="flex items-center">
            <span className="mr-2">🚚</span>
            <p className="text-sm">Free Shipping Above $60</p>
          </div>
          <div>{"|"}</div>
          <div className="flex items-center">
            <span className="mr-2">🎁</span>
            <p className="text-sm">Up to 20% OFF Sitewide. Use Code: REFRESH</p>
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
        <div className="container mx-auto px-10 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center mr-10">
              <a href="/" className="flex items-center">
                <Image
                  src="/logo/companyLogo.webp"
                  alt="Neon Earth Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto mr-10"
                />
              </a>
            </div>
            <div className="relative w-full mr-10">
              <Input
                type="text"
                placeholder="Find What Brings You Joy"
                className="pl-3 w-full py-5 border-4 border-gray-200 hover:outline-none"
              />
              <Button className="absolute right-0 top-0 h-full w-15 bg-pink-500 text-white hover:bg-pink-700 cursor-pointer" aria-label="Search">
                <Search className="h-7 w-7" />
              </Button>
            </div>
            <div className="flex items-center space-x-6 align-middle">
              <div className="relative bg-white hover:bg-white cursor-pointer">
                <Heart className="h-5 w-5 text-gray-600 hover:text-pink-500" />
                <span className="absolute -top-3.5 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
              <div className="relative bg-white hover:bg-white cursor-pointer">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </div>
              <div className="text-gray-700 flex flex-row gap-2 align-middle">
                <User className="h-5 w-5 text-gray-600" />
                <span className="cursor-pointer hover:text-pink-500">
                  Join/Login
                </span>
              </div>
            </div>
          </div>
        </div>

        <NavBar />
      </header>

      <div className="p-10">
        <Breadcrumbs />
        <ProductSpecification />
        <ProductDetail />
        <RatingAndReview />
        <FaqSection />
        <ProductInsights />
        <DesignOnOtherProducts />
        <ProductCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
