import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";

const NorthernQuarter: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Northern Quarter", index: 0 });
  const images: MediaItemProps[] = [
    {
      href: "/map-1801.png",
      caption: "Map of Castlefield, 1801",
      width: 795,
      height: 508,
      thumbnailWidth: 293,
      thumbnailHeight: 187,
    },
    {
      href: "/castlefield-basin.jpg",
      caption: "Bridgewater Canal Basin, Castlefield, Manchester",
      width: 1024,
      height: 768,
      thumbnailWidth: 250,
      thumbnailHeight: 187,
    },
  ];
  const links: LinkProps[] = [
    {
      url: "https://historicengland.org.uk/images-books/publications/manchesters-northern-quarter/manchesters-northern-quarter/",
      caption: "Historic England: Manchester's Northern Quarter (pdf)",
    },
  ];
  const questions: QuestionProps[] = [
    {
      text: "How long did it take for the railway to replace the canals?",
    },
    {
      text: "What was Manchester's main industry before the industrial revolution?",
    },
    {
      text: "How did industrialisation influence the rise of labour movements and social reform?",
    },
    {
      text: "What role did Manchester play in global cotton production during the 19th century?",
    },
    {
      text: "How did the arrival of the railway change the layout of Manchester?",
    },
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="/" />
        <p className="mt-4">
          Say to the AI &ldquo;I’m arriving at the Northern Quarter&rdquo;
        </p>
      </div>
      <Music
        title="Captain Ward"
        artist="Spiers & Boden"
        runtime="4:13 mins"
        image="/music/northern-quarter.png"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="Castlefield" />
      
      <Divider />
    </>
  );
};

export default NorthernQuarter;
