"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  images: string[];
}

export const ImageSlider = ({ images }: iAppProps) => {
  const [mainImageIndex, setMainImagesIndex] = useState(0);

  function handlePreviousClick() {
    setMainImagesIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNextClick() {
    setMainImagesIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleImageClick(index: number) {
    setMainImagesIndex(index);
  }

  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[mainImageIndex]}
          alt="Product Image"
          width={600}
          height={600}
          className="object-cover w-[600px] h-[600px]"
        />

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button onClick={handlePreviousClick} variant="ghost" size="icon">
            <ChevronLeft className="size-6" />
          </Button>
          <Button onClick={handleNextClick} variant="ghost" size="icon">
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, i) => (
          <div
            className={cn(
              i === mainImageIndex
                ? "border-2 border-primary"
                : "border border-gray-200", "relative overflow-hidden rounded-lg cursor-pointer"
            )}
            key={i}
            onClick={() => handleImageClick(i)}>
            <Image
              src={image}
              alt="Product Image"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
