"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Custom Wall Tapestry - Velvet Satin",
    price: "$17.96",
    imageUrl: "/otherProductImages/otherProductImages1.webp",
    alt: "Custom wall tapestry with dogs",
  },
  {
    id: 2,
    title: "Photo Print - Framing",
    price: "$27.19",
    imageUrl: "/otherProductImages/otherProductImages2.webp",
    alt: "Framed photo print on a wall above a sofa",
  },
  {
    id: 3,
    title: "Hanging Canvas - Natural",
    price: "$36.00",
    imageUrl: "/otherProductImages/otherProductImages3.webp",
    alt: "Hanging canvas with sunset design",
  },
  {
    id: 4,
    title: "Custom Square Throw Pillow - Velvet Satin",
    price: "$16.95",
    imageUrl: "/otherProductImages/otherProductImages4.webp",
    alt: "Blue throw pillow with seashell design on a sofa",
  },
  {
    id: 5,
    title: "Custom Monogram Arm Tote Bag",
    price: "$27.50",
    imageUrl: "/otherProductImages/otherProductImages5.webp",
    alt: "Person holding a custom monogram tote bag",
  },
  {
    id: 6,
    title: "Photo Print - Framing",
    price: "$27.19",
    imageUrl: "/otherProductImages/otherProductImages2.webp",
    alt: "Framed photo print on a wall above a sofa",
  },
  {
    id: 7,
    title: "Hanging Canvas - Natural",
    price: "$36.00",
    imageUrl: "/otherProductImages/otherProductImages3.webp",
    alt: "Hanging canvas with sunset design",
  },
];

const ProductCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center md:text-left">
          Personalized Living Starts Here
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className="pb-16"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative w-full aspect-square mb-3 overflow-hidden rounded">
                  <Image
                    src={product.imageUrl}
                    alt={product.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-700 mb-1 px-2">
                  {product.title}
                </h3>
                <p className="text-sm font-semibold text-gray-900 bg-gray-100 p-2">
                  {product.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 text-center">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-5 px-8 rounded-md transition duration-300 ease-in-out cursor-pointer">
            Start Creating
          </Button>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #4b5563; /* gray-600 */
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          width: 40px; /* Adjust size */
          height: 40px; /* Adjust size */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional shadow */
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px; /* Adjust arrow icon size */
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background-color: #9ca3af; /* gray-400 */
          opacity: 0.8;
        }
        .swiper-pagination-bullet-active {
          background-color: #ec4899; /* pink-500 */
          opacity: 1;
        }
        .swiper-pagination {
          position: static;
          margin-top: 1rem; /* space between slides and dots */
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;
