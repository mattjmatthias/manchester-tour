// components/ui/TourStop.tsx

"use client";
import React, { forwardRef } from "react";

type StopProps = {
  title: string;
  sub: string;
  children?: React.ReactNode;
  isOpen: boolean;
  musicIndex: number;
  language: string;
  onClick: () => void;
};

const TourStop = forwardRef<HTMLDivElement, StopProps>(
  ({ title, sub, children, isOpen, onClick }, ref) => {
    return (
      <div className="text-left mt-8" ref={ref}>
        <div onClick={onClick} className="cursor-pointer">
          <h1 className="text-4xl">{title}</h1>
          <h2 className="text-lg uppercase">{sub}</h2>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
);

TourStop.displayName = "TourStop";

export default TourStop;
