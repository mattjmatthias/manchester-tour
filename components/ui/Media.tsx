import SimpleGallery from "@/components/SimpleGallery";
import { useTranslation } from "next-i18next";

export type MediaItemProps = {
  href: string;
  caption: string;
  width: number;
  height: number;
  thumbnailWidth: number;
  thumbnailHeight: number;
};

export type MediaProps = {
  images: MediaItemProps[];
};

const Media: React.FC<MediaProps> = ({ images }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="text-xl mt-8 mb-4">{t("media")}</h2>
      <>
        <SimpleGallery
          galleryID="image-gallery"
          maxWidth={10}
          images={images.map((i) => ({
            largeURL: i.href,
            thumbnailURL: i.href,
            captionContent: i.caption,
            width: i.width,
            height: i.height,
            thumbnailWidth: i.thumbnailWidth,
            thumbnailHeight: i.thumbnailHeight,
          }))}
        />
      </>
    </>
  );
};

export default Media;
