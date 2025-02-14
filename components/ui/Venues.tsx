import VenueDetails, { VenueDetailsType } from "./VenueDetails";
import { useTranslation } from "next-i18next";

export type VenueProps = {
  imgSrc: string;
  title: string;
  href: string;
};

export type VenueGridProps = {
  venues: VenueDetailsType[];
};

const Venues: React.FC<VenueGridProps> = ({ venues }) => {
  const { t } = useTranslation("common");

  return (
    <div className="mb-8">
      <h2 className="text-xl mt-8 mb-4">{t("places")}</h2>      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {venues.map((venue, index) => (
          <VenueDetails
            key={index}
            imgSrc={venue.imgSrc || ""}
            title={venue.title}
            href={venue.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Venues;
