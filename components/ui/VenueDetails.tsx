import type { NextPage } from "next";
import Image from "next/image";

export type VenueDetailsType = {
  imgSrc?: string;
  title?: string;
  href?: string;
};

const VenueDetails: NextPage<VenueDetailsType> = ({ imgSrc, title, href }) => {
  return (
    <div className="flex flex-col text-left text-md w-full max-w-[99%] mx-auto">
      <a
        href={href}
        className="no-underline text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Image Container */}
        <div className="relative w-full h-[28vw] md:h-[30vw] lg:h-[40vw] max-h-[250px] md:max-h-[300px] lg:max-h-[150px] xl:max-h-[250px] overflow-hidden">
          <Image
            src={imgSrc || "/placeholder.jpg"}
            alt={title || "Venue Image"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <div className="pt-1 italic text-sm">
          {title}
        </div>
      </a>
    </div>
  );
};

export default VenueDetails;
