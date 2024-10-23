import Link from "next/link";
import Image from "next/image";

type MusicProps = {
  title: string;
  artist: string;
  runtime: string;
  image: string;
  href: string;
};

const Music: React.FC<MusicProps> = ({
  title,
  artist,
  runtime,
  image,
  href,
}) => {
  return (
    <>
      <h2 className="text-xl mt-8 mb-4">Music</h2>
      <Link
        href={href}
        className="flex items-center p-2 hover:bg-gray-200 w-fit"
      >
        <div className="flex items-center">
          <Image
            src={image}
            alt={`${title} by ${artist}`}
            width={100}
            height={100}
            className="mr-4"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-3xl">{title}</h3>
            <p className="text-xl">{artist}</p>
            <p className="text-sm font-italic">{runtime}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Music;
