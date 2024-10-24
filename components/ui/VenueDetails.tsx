// components/VenueDetails.tsx

import type { NextPage } from "next";
import Image from "next/image";

export type VenueDetailsType = {
  imgSrc?: string;
  title?: string;
  href?: string;
};

const VenueDetails: NextPage<VenueDetailsType> = ({ imgSrc, title, href }) => {
  return (
    <div className="flex flex-col text-left text-md max-w-[150px] md:max-w-[200px]">
      <a
        href={href}
        className="no-underline text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Image Container */}
        <div className="relative w-[190px] h-[130px] md:w-[200px] md:h-[140px] overflow-hidden">
          <Image
            src={imgSrc || "/placeholder.jpg"}
            alt={title || "Venue Image"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <div className="pt-1 italic">
          {title}
        </div>
      </a>
    </div>
  );
};

export default VenueDetails;
