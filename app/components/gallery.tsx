"use client";

import { TabGroup, TabList, TabPanels } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import React from "react";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full mx-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <div
            key={image.id}
            className="apsect-square relative h-full w-full sm:rounded-lg overflow-hidden"
          >
            <Image
              fill
              src={image.url}
              alt="image"
              className="object-cover object-center"
            />
          </div>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
