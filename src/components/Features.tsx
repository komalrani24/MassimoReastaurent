import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500 ">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4  hover:bg-fuchsia-100 
          transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl-h[90vw]"
          >
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300">
              {item.img && (
                <Image src={item.img} alt="" fill className="object-contain" />
              )}
            </div>
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p className="px-4">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add two cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
