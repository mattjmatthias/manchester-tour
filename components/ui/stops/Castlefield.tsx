import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Venues, { VenueProps } from "../Venues";
import Attributions, { AttributionProps } from "../Attributions";

const Castlefield: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Castlefield", index: 0 });
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
    {
      href: "/stephenson-lmr-map.jpg",
      caption: "Plan of the proposed route of the Liverpool to Manchester Railway by George Stephenson, 1824",
      width: 900,
      height: 599,
      thumbnailWidth: 281,
      thumbnailHeight: 187,
    }
  ];
  const links: LinkProps[] = [
    {
        url: "https://historicengland.org.uk/images-books/publications/manchester-warehouse-legacy/manchester-the-warehouse-legacy/",
        caption: "History England: Manchester The Warehouse Legacy, page 15"
    },
    {
      url: "https://www.railwaymuseum.org.uk/objects-and-stories/stephensons-rocket-rainhill-and-rise-locomotive",
      caption: "Railway Museum: Stephenson's Rocket, Rainhill and the Rise of the Locomotive",
    },
    {
      url: "https://www.scienceandindustrymuseum.org.uk/objects-and-stories/making-the-liverpool-and-manchester-railway",
      caption: "Science + Industry Museum: First in the World: The Making of the Liverpool and Manchester Railway",
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
  
  const venues: VenueProps[] = [
    { title: "Dukes 92", imgSrc: "/venues/dukes.png", href: "https://dukes92.com/" },
    { title: "Albert's Shed", imgSrc: "/venues/alberts-shed.png", href: "https://alberts-restaurants.com/shed/" },
    { title: "Barça", imgSrc: "/venues/barca.png", href: "http://barca-manchester.co.uk/" },
    { title: "The Wharf", imgSrc: "/venues/thewharf.png", href: "https://www.thewharf-castlefield.co.uk/" },
  ]
  
  const attributions: AttributionProps[] = [
    {
      source: "Bridgewater Canal, Castlefield Basin image",
      attribution: (
        <>
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0 license</a>
          {" "}granted by <a href="https://www.geograph.org.uk/photo/6966336">David Dixon on Geograph.org.uk</a>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="https://maps.app.goo.gl/KE1GrChFpa9WJU24A?g_st=ic" />
        <p className="mt-4">
          Head for <a href="https://maps.app.goo.gl/KE1GrChFpa9WJU24A?g_st=ic" className="underline">Castlefield Viaduct Visitors Centre</a>, play the song below and when you’re near
          say to the AI &ldquo;I’m arriving at Castlefield&rdquo;
        </p>
      </div>
      <Music
        title="Dirty Old Town"
        artist="Ewan MacColl"
        runtime="1:03 mins"
        image="/music/dirty-old-town.png"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="Castlefield" />
      <Venues venues={venues}/>
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default Castlefield;
