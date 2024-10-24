import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Attributions, { AttributionProps } from "../Attributions";

const FriedrichEngels: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Friedrich Engels", index: 0 });
  const images: MediaItemProps[] = [
    {
      href: "/friedrich-engels.jpg",
      caption: "Statue of Friedrich Engels, Tony Wilson Square, 2019",
      width: 3000,
      height: 4000,
      thumbnailWidth: 150,
      thumbnailHeight: 200,
    },
  ];
  const links: LinkProps[] = [
    {
      url: "https://library.chethams.com",
      caption: "Chetham Library",
    }
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
  
  const attributions: AttributionProps[] = [
    {
      source: "Image of Friedrich Engels Statue",
      attribution: (
        <>
          <a href="https://creativecommons.org/publicdomain/zero/1.0/">Public Domain license</a>
          {" "}granted by <a href="https://flickr.com/photos/53921762@N00/40809508363">Alan Stanton on Flickr</a>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="/" />
        <p className="mt-4">
          Say to the AI &ldquo;I’m arriving at the Friedrich Engels statue&rdquo;
        </p>
      </div>
      <Music
        title="The World Turned Upside Down"
        artist="Billy Bragg"
        runtime="2:36 mins"
        image="/music/friedrich-engels.png"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="Castlefield" />    
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default FriedrichEngels;
