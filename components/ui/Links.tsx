import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export type LinkProps = {
  url: string;
  caption: string;
};

export type LinksProps = {
  links: LinkProps[];
};

const Links: React.FC<LinksProps> = ({ links }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <h2 className="text-xl mt-8 mb-4">
        {t("linksHeader", "Links")}
      </h2>

      {links.map((link: LinkProps, i: number) => {
        return (
          <Link
            href={link.url}
            key={i}
            className="flex items-center p-2 hover:bg-gray-200 w-full"
          >
            <div className="flex items-center w-full">
              <Image
                src="/link.svg"
                alt={t("linkIconAlt", "Link icon")}
                width={30}
                height={30}
                className="mr-4 flex-shrink-0"
              />
              <div className="flex flex-col flex-1 min-w-0 justify-between">
                <h3 className="text-2xl break-words">{link.caption}</h3>
                <p className="text-lg break-words text-gray-600">{link.url}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Links;
