import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Venues, { VenueProps } from "../Venues";

const NorthernQuarter: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Northern Quarter", index: 0 });
  const images: MediaItemProps[] = [
    {
      href: "/dale-house.jpg",
      caption: "Dale House, Dale Street",
      width: 623,
      height: 421,
      thumbnailWidth: 280,
      thumbnailHeight: 187,
    },
    {
      href: "/smithfield.jpg",
      caption: "Smithfield Market, Northern Quarter, 1907",
      width: 816,
      height: 642,
      thumbnailWidth: 240,
      thumbnailHeight: 187,
    },
  ];
  const links: LinkProps[] = [
    {
      url: "https://historicengland.org.uk/images-books/publications/manchesters-northern-quarter/manchesters-northern-quarter/",
      caption: "Historic England: Manchester's Northern Quarter (pdf)",
    },
    {
      url: "https://en.wikipedia.org/wiki/Northern_Quarter_(Manchester)",
      caption: "Wikipedia: Northern Quarter (Manchester)"
    }
  ];
  const questions: QuestionProps[] = [    
    {
      text: "Is it true that Stevenson Square was originally planned to be a middle-class park with gardens?",
    },
    {
      text: "What role does the Northern Quarter play in addressing issues like gentrification and the displacement of working-class communities in Manchester?",
    },
    {
      text: "How does the history of Affleck’s reflect the shift from Manchester’s industrial past to its creative present?",
    },
    {
      text: "When did the Northern Quarter start to decline from its peak as an industrial hub?",
    },
    {
      text: "How has the Northern Quarter maintained its identity as a place for activism and creativity while undergoing commercial development?",
    }
  ];
  
  const venues: VenueProps[] = [
    { title: "7Sins, Northern Quarter", imgSrc: "/venues/7sins.jpg", href: "https://www.7sins.co.uk/" },
    { title: "English Lounge NQ", imgSrc: "/venues/english-lounge.jpg", href: "https://www.craftunionpubs.com/english-lounge-manchester" },
    { title: "Lost Cat", imgSrc: "/venues/lost-cat.jpg", href: "https://lostcatnq.co.uk/" },
    { title: "Junior Jackon's", imgSrc: "/venues/junior-jacksons.jpg", href: "https://bunnyjacksons.co.uk/" },
    { title: "Tib Street Tavern", imgSrc: "/venues/tib-street.jpg", href: "https://www.tibstreettavern.co.uk/" },
    { title: "Unicorn Manchester", imgSrc: "/venues/unicorn.jpg", href: "https://www.craftunionpubs.com/unicorn-manchester" },
  ]
  
  return (
    <>      
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="https://maps.app.goo.gl/v4mwD9izrU62AmK47?g_st=com.google.maps.preview.copy" />
        <p className="mt-4">Go to the <a className="underline" href="https://maps.app.goo.gl/v4mwD9izrU62AmK47?g_st=com.google.maps.preview.copy">Dale House in the Northern Quarter</a>, play the music below and when you’re near say to the AI &ldquo;I’m arriving at the Northern Quarter&rdquo;</p>
      </div>
      <Music
        title="Captain Ward"
        artist="Spiers & Boden"
        runtime="4:13 mins"
        image="/music/northern-quarter.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="the Northern Quarter" />      
      <Venues venues={venues}/>
      
      <Divider />
    </>
  );
};

export default NorthernQuarter;
