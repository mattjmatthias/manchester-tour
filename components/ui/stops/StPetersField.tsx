import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Attributions, { AttributionProps } from "../Attributions";
import Venues, { VenueProps } from "../Venues";

const StPetersField: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "St Peter's Field", index: 0 });

  const images: MediaItemProps[] = [
    {
      href: "/peterloo-massacre.png",
      caption: "Statue of Friedrich Engels, Tony Wilson Square, 2019",
      width: 1280,
      height: 853,
      thumbnailWidth: 300,
      thumbnailHeight: 187,
    },
    {
      href: "/peters-field.png",
      caption: "Map of St Peter's Field, 1801",
      width: 788,
      height: 542,
      thumbnailWidth: 290,
      thumbnailHeight: 187,
    },
    {
      href: "/monument.jpg",
      caption: "Map of St Peter's Field, 1801",
      width: 788,
      height: 542,
      thumbnailWidth: 265,
      thumbnailHeight: 187,
    },
    {
      href: "/peterloo-smithfield.jpg",
      caption: "A print published on 27 August 1819 depicting Hunt's arrest by the constables",
      width: 2000,
      height: 1596,
      thumbnailWidth: 251,
      thumbnailHeight: 187,
    }
  ];
  const links: LinkProps[] = [
    {
      url: "https://www.imdb.com/title/tt4614612/",
      caption: "Peterloo (2018), a film by Mike Leigh",
    },
    {
      url: "https://www.bbc.co.uk/newsround/49098500",
      caption: "BBC Newsround: Peterloo Massacre: How the industrial revolution changed history"
    }
  ];
  const questions: QuestionProps[] = [
    {
      text: "How did the Peterloo Massacre influence public opinion about political reform in Britain?",
    },
    {
      text: "How did the government justify the use of force against peaceful protesters at Peterloo?",
    },
    {
      text: "When did the reformists achieve the reform they wanted?",
    },
    {
      text: "How did media coverage and eyewitness accounts affect the aftermath of the Peterloo Massacre?",
    },
    {
      text: "What were the long-term consequences of the Peterloo Massacre for Manchester and its political landscape?",
    },
  ];
  
  const venues: VenueProps[] = [
    { title: "Society", imgSrc: "/venues/society.png", href: "http://www.societymanchester.com/" },
    { title: "The Temple (Temple of Convenience)", imgSrc: "/venues/temple.png", href: "https://www.facebook.com/pages/The-Temple-of-Convenience/156811607675271?fref=ts" },
    { title: "Ezra & Gil - Peter Street", imgSrc: "/venues/ezra.png", href: "http://www.ezraandgil.co.uk/" },
    { title: "Albert's Schloss", imgSrc: "/venues/alberts-schloss.png", href: "https://albertsschloss.com/" },   
    { title: "Peaky Blinders Manchester", imgSrc: "/venues/peaky.png", href: "https://www.peakyblindersmanchester.com/" }
  ]
  
  
  const attributions: AttributionProps[] = [
    {
      source: "Image of the Peterloo Massacre",
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">Public Domain license</a> granted by <a href="https://en.wikipedia.org/wiki/en:Richard_Carlile" className="extiw" title="w:en:Richard Carlile"><span title="British social reformer">Richard Carlile</span></a> - <a href="https://en.wikipedia.org/wiki/en:Manchester_Library_%26_Information_Service" className="extiw" title="w:en:Manchester Library &amp; Information Service"><span title="public library service in Manchester, UK">Manchester Libraries</span></a>
        </>
      ),
    },
    {
      source: "Print published 27 August 1819",
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">Public Domain license</a>, Published by J.Evans and Sons, 42 Long Lane West, Smithfield
        </>
      )
    },
    {
      source: "Image of Peterloo Massacre Monument",
      attribution: (
        <>
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0 license</a>
          {" "}granted by <a href="https://www.geograph.org.uk/photo/6240951">Gerald England on Geograph.org.uk</a>
        </>
      )
    }
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="https://maps.app.goo.gl/iGH5kYa1q4h7BAiCA?g_st=com.google.maps.preview.copy" />
        <p className="mt-4">Go to the <a href="https://maps.app.goo.gl/iGH5kYa1q4h7BAiCA?g_st=com.google.maps.preview.copy">Peterloo Memorial</a>, play the music below and when you’re near say to the AI &ldquo;I’m arriving at the Peterloo Memorial&rdquo;</p>
      </div>
      <Music
        title="Spiegel im Spiegel (Excerpt)"
        artist="Arvo Pärt, Tasmin Little, Martin Roscoe"
        runtime="4:05 mins"
        image="/music/spiegel-em-spiegel.png"
        href={typeof musicHref === 'string' ? musicHref : '#'}
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

export default StPetersField;
