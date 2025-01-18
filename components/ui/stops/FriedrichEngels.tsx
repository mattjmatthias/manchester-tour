import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Attributions, { AttributionProps } from "../Attributions";
import Venues, { VenueProps } from "../Venues";

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
    {
      href: "/young-engels.jpg",
      caption: "Photo of Friedrich Engels in his youth",
      width: 800,
      height: 531,
      thumbnailWidth: 300,
      thumbnailHeight: 187,
    },
  ];
  const links: LinkProps[] = [
    {
      url: "https://library.chethams.com",
      caption: "Chetham Library",
    },
    {
      url: "https://confidentials.com/manchester/friedrich-engels-HOME-first-street-manchester-was-his-return-right-or-wrong",
      caption: "Confidentials: The return of Friedrich Engels - right or wrong?"
    },
    {
      url: "https://youtu.be/ZAhceJjX8iQ?si=O1e4NMqzBsQ4KiII",
      caption: "YouTube: Karl Marx and Friedrich Engels"
    },
    {
      url: "http://news.bbc.co.uk/local/manchester/hi/people_and_places/history/newsid_8233000/8233388.stm",
      caption: "BBC: Angel Meadow: 'Hell upon Earth'"
    }
  ];
  const questions: QuestionProps[] = [
    {
      text: "How did Engels’ experiences in Manchester shape his views on industrial capitalism?",
    },
    {
      text: "What role did Engels play in documenting the lives of Manchester’s working class?",
    },
    {
      text: "How did Engels balance his role as a mill owner with his socialist beliefs?",
    },
    {
      text: "In what ways did Engels’ observations of Manchester’s slums influence his later work with Marx?",
    },
    {
      text: "How did Engels’ time in Manchester affect his personal development and political ideology?",
    },
  ];
  
  const venues: VenueProps[] = [
    { title: "Briton's Protection", imgSrc: "/venues/britons-protection.jpg", href: "https://www.facebook.com/thebritonsprotection/" },
    { title: "Home", imgSrc: "/venues/home.jpg", href: "http://homemcr.org/" },
    { title: "Indian Tiffin Room", imgSrc: "/venues/indian-tiffin.jpg", href: "http://indiantiffinroom.com/" },
    { title: "Gas Works Brew Bar and Kitchen", imgSrc: "/venues/gasworks.jpg", href: "https://gasworksbrewbar.co.uk/" },
    { title: "Atlas Bar", imgSrc: "/venues/atlas.jpg", href: "http://www.atlasbarmanchester.com/ "}
  ]
  
  
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
        <Button label="View on map" href="https://maps.app.goo.gl/deNTGd9yYp1pPPy87?g_st=com.google.maps.preview.copy" />
        <p className="mt-4">
          Go to the <a className="underline" href="https://maps.app.goo.gl/deNTGd9yYp1pPPy87?g_st=com.google.maps.preview.copy">Friedrich Statue</a>, play the song below and when you’re near say to the AI &ldquo;I’m arriving at the Friedrich Engels statue&rdquo;
        </p>
      </div>
      <Music
        title="The World Turned Upside Down"
        artist="Billy Bragg"
        runtime="2:36 mins"
        image="/music/friedrich-engels.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="Friedrich Engels" /> 
      <Venues venues={venues}/>
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default FriedrichEngels;
