// pages/index.js

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TourStop from "@/components/ui/TourStop";
import Castlefield from "@/components/ui/stops/Castlefield";
import FriedrichEngels from "@/components/ui/stops/FriedrichEngels";
import StPetersField from "@/components/ui/stops/StPetersField";
import EmmelinePankhurst from "@/components/ui/stops/EmmelinePankhurst";
import NorthernQuarter from "@/components/ui/stops/NorthernQuarter";
import Ancoats from "@/components/ui/stops/Ancoats";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Goodbye from "@/components/ui/stops/Goodbye";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tourStopRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const tourStops = [
    { title: "Castlefield", sub: "The Industrial Revolution", component: <Castlefield /> },
    { title: "Friedrich Engels", sub: "A Statue To Social Progress", component: <FriedrichEngels /> },
    { title: "St. Peter's Field", sub: "The Peterloo Massacre", component: <StPetersField /> },
    { title: "Emmeline Pankhurst", sub: "The Suffragettes", component: <EmmelinePankhurst /> },
    { title: "Northern Quarter", sub: "The Old Mills of Cottonopolis", component: <NorthernQuarter /> },
    { title: "Ancoats", sub: "The World's 1st Industrial Suburb", component: <Ancoats /> },
    { title: "The End", sub: "And 1 Last Song", component: <Goodbye /> },
  ];

  useEffect(() => {
    if (activeIndex !== null && tourStopRefs.current[activeIndex]) {
      const element = tourStopRefs.current[activeIndex];
      const topOffset = 30; // Adjust this value to match your desired top margin (e.g., height of fixed header)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 h-full w-full">
        {/* Container for content and buttons */}
        <div className="md:flex w-full md:justify-between">
          {/* Left section with text */}
          <div className="text-left">
            <h1 className="text-4xl">
              MANCHESTER <span className="whitespace-nowrap">1750–1920</span>
            </h1>
            <h2 className="md:text-xl text-md">AN AI TOUR OF INDUSTRY AND SOCIAL ACTIVISM</h2>
            <p className="mt-2 flex items-center justify-start">
              <Image
                src="/walking.png"
                alt="Walking Icon"
                width={20}
                height={20}
                className="mr-2 filter grayscale brightness-0"
              />
              1 hour’s walking, wheelchair accessible
            </p>
          </div>

          {/* Right section with buttons */}
          <div className="flex md:flex-col md:text-xl text-lg flex-row md:gap-y-2 md:gap-x-0 gap-x-4 mt-8 md:mt-0 md:mb-0 mb-4 md:ml-8">
            <Button href="./before-you-start" label="Before you start" />
            <Button href="https://maps.app.goo.gl/jqzBWwiNLsRHJngLA" label="View tour route" />
          </div>
        </div>

        {/* Render TourStops */}
        {tourStops.map((stop, index) => (
          <TourStop
            key={index}
            title={stop.title}
            sub={stop.sub}
            isOpen={activeIndex === index}
            onClick={() => handleToggle(index)}
            ref={(el) => { tourStopRefs.current[index] = el; }} // Updated to avoid returning a value
          >
            {stop.component}
          </TourStop>
        ))}
      </div>
      <footer className="md:p-16 p-8">
        <Link href="/privacy" className="mr-8">
          Privacy Policy
        </Link>
        <Link href="/before-you-start" className="mr-8">
          Support
        </Link>                
        <Link href="https://www.mattjmatthias.co" className="mr-8">
          by Matt Matthias
        </Link>
      </footer>
    </div>
  );
}
