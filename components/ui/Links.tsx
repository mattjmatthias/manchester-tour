import Link from "next/link";
import Image from "next/image";

export type LinkProps = {
  url: string;
  caption: string;
};

export type LinksProps = {
  links: LinkProps[]
}

const Links: React.FC<LinksProps> = ({links}) => {
  return (
    <>
      <h2 className="text-xl mt-8 mb-4">Links</h2>

      {links.map((link: LinkProps, i: number) => {
        return <Link
        href={link.url}
        key={i}
        className="flex items-center p-2 hover:bg-gray-200 w-fit"      >
        <div className="flex items-center">
          <Image
            src="/link.svg"
            alt="Link icon"
            width={30}
            height={30}
            className="mr-4"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl">{link.caption}</h3>
            <p className="text-lg">{link.url}</p>
          </div>
        </div>
      </Link>
      })}
      
    </>
  );
};

export default Links;
