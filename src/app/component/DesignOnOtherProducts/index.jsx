import * as React from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Custom Drapes - Flat Panel",
    imageUrl: "/headingImages/heading1.webp",
  },
  {
    id: 2,
    name: "Custom Drapes - Pinch Pleat",
    imageUrl: "/headingImages/heading2.webp",
  },
  {
    id: 3,
    name: "Custom Drapes - Grommet",
    imageUrl: "/headingImages/heading3.webp",
  },
  {
    id: 4,
    name: "Custom Drapes - Ripple Folds",
    imageUrl: "/headingImages/heading4.webp",
  },
  {
    id: 5,
    name: "Custom Drapes - Tailored Pleats",
    imageUrl: "/headingImages/heading5.webp",
  },
  {
    id: 6,
    name: "Custom Drapes - Goblet",
    imageUrl: "/headingImages/heading6.webp",
  },
];

const DesignOnOtherProducts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-row gap-5 align-middle items-center">
        <h2 className="text-xl font-semibold md:text-2xl">
          Design On Other Products
        </h2>
        <Select defaultValue="curtains">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Product Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="curtains">Curtains</SelectItem>
            <SelectItem value="blinds">Blinds</SelectItem>
            <SelectItem value="shades">Shades</SelectItem>
            <SelectItem value="pillows">Pillows</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-md border border-gray-200 shadow-sm transition-shadow duration-200 hover:shadow-lg cursor-pointer"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.imageUrl}
                alt={`Product ${product.name}`}
                layout="fill"
                objectFit="cover"
                className="bg-gray-100"
              />
            </div>
            <p className="p-3 text-center text-sm font-medium text-gray-700">
              {product.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700 cursor-pointer">
          View All
        </Button>
      </div>
    </div>
  );
};

export default DesignOnOtherProducts;
