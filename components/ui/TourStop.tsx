"use client";
import React, { useState } from "react";

type StopProps = {
  title: string;
  sub: string;
  children?: React.ReactNode;
};

const TourStop: React.FC<StopProps> = ({ title, sub, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-left mt-8">
      <div onClick={toggleAccordion} className="cursor-pointer">
        <h1 className="text-4xl">{title}</h1>
        <h2 className="text-lg uppercase">{sub}</h2>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TourStop;
