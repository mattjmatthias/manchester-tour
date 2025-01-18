import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Attributions, { AttributionProps } from "../Attributions";
import Venues, { VenueProps } from "../Venues";

const Ancoats: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Ancoats", index: 0 });
  const images: MediaItemProps[] = [
    {
      href: "/ancoats-mills.jpg",
      caption: "Ancoats Mills, Manchester, 1913",
      width: 1200,
      height: 609,
      thumbnailWidth: 370,
      thumbnailHeight: 187,
    },
    {
      href: "/cuttingroom-square.jpg",
      caption: "Cutting Room Square, Ancoats, Manchester",
      width: 1024,
      height: 768,
      thumbnailWidth: 317,
      thumbnailHeight: 217,
    },
    {
      href: "/mcconnels-mills.jpg",
      caption: "McConnel's Mills, 1820",
      width: 2268,
      height: 1258,
      thumbnailWidth: 338,
      thumbnailHeight: 187,
    },
    {
      href: "/ancoats-dispensary.jpg",
      caption: "Ancoats Dispensary Renovation",
      width: 1200,
      height: 820,
      thumbnailWidth: 275,
      thumbnailHeight: 187,
    },
  ];
  const links: LinkProps[] = [
    {
      url: "https://historicengland.org.uk/images-books/publications/ancoats/ancoats/",
      caption: "Historic England: Ancoats Cradle of Industrialisation (pdf)",
    },
    {
      url: "https://en.wikipedia.org/wiki/Ancoats",
      caption: "Wikipedia: Ancoats"
    }
  ];
  const questions: QuestionProps[] = [
    {
      text: "What challenges did Italian immigrants face in Ancoats, and how did they organise to support their community?",
    },
    {
      text: "What led to Ancoats’ decline after the Industrial Revolution, and how has it been regenerated in recent years?",
    },
    {
      text: "What other positive impacts did immigration have in Ancoats?",
    },
    {
      text: "What role did Manchester play in global cotton production during the 19th century?",
    },
    {
      text: "How did the arrival of the railway change the layout of Manchester?",
    },
  ];
  
  const venues: VenueProps[] = [
    { title: "Mackie Mayor", imgSrc: "/venues/mackie-mayor.jpg", href: "https://maps.app.goo.gl/oQaYmPQ6BrD4ADNt9" },
    { title: "The Crown & Kettle", imgSrc: "/venues/crown.jpg", href: "https://www.thecrownandkettle.com/" },
    { title: "The Edinburgh Castle", imgSrc: "/venues/edinburgh.jpg", href: "https://www.ec-ancoats.com/" },
    { title: "The Jayne Eyre", imgSrc: "/venues/jane-eyre.jpg", href: "https://www.thejaneeyre.co.uk/" },
    { title: "Jimmy's Manchester", imgSrc: "/venues/jimmys.jpg", href: "https://www.jimmys.group/manchester/" },
    { title: "Cask", imgSrc: "/venues/cask.jpg", href: "https://www.caskbars.co.uk/" }    
  ]
  
  
  const attributions: AttributionProps[] = [
    {
      source: "Ancoats, Manchester. McConnel & Company's mills, about 1913",
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">Public Domain license</a> Scanned by Mr Stephen - Scanned from A Century of fine Cotton Spinning, 1790-1913. McConnel & Co. Ltd. Facing p 24.
        </>
      ),
    },
    {
      source: "Ancoats, Manchester. McConnel & Company's mills, about 1820. From an old water-colour drawing of the period",
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">Public Domain license</a> Scanned by Mr Stephen - Scanned from A Century of fine Cotton Spinning, 1790-1913. McConnel & Co. Ltd. Frontispiece
        </>
      ),
    }
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="https://maps.app.goo.gl/sev2T3htxvHW8JQM6?g_st=com.google.maps.preview.copy" />
        <p className="mt-4">Go to the <a className="underline" href="https://maps.app.goo.gl/sev2T3htxvHW8JQM6?g_st=com.google.maps.preview.copy">Cutting Room Square</a> in Ancoats, play the music below and when you’re near say to the AI &ldquo;I’m arriving at Ancoats&rdquo;</p>
      </div>
      <Music
        title="The Doffing Mistress"
        artist="Anne Briggs"
        runtime="1:28 mins"
        image="/music/ancoats.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="Ancoats" />    
      <Venues venues={venues}/>
      <Attributions attributions={attributions} />
      
      <Divider />
    </>
  );
};

export default Ancoats;
