import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Attributions, { AttributionProps } from "../Attributions";
import Venues, { VenueProps } from "../Venues";

const EmmelinePankhurst: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Emmeline Pankhurst", index: 0 });

  const images: MediaItemProps[] = [
    {
      href: "/emmeline-1913.jpg",
      caption: "Emmeline Pankhurst, 1913",
      width: 1920,
      height: 2533,
      thumbnailWidth: 187,
      thumbnailHeight: 300,
    },
    {
      href: "/emily-davison.jpg",
      caption: "Part of Emily Davison's funeral procession, 1913",
      width: 2560,
      height: 1859,
      thumbnailWidth: 339,
      thumbnailHeight: 155,
    },
    {
      href: "/emmeline-in-prison.jpg",
      caption: "Emmeline Pankhurst in Prison, 1911",
      width: 700,
      height: 1158,
      thumbnailWidth: 149,
      thumbnailHeight: 300,
    }
  ];
  const links: LinkProps[] = [
    {
      url: "https://www.pankhurstmuseum.com/",
      caption: "Pankhurst Centre, Manchester",
    },
    {
      url: "https://beta.nationalarchives.gov.uk/explore-the-collection/stories/emmeline-pankhurst/",
      caption: "National Archives: Emmeline Pankhurst"
    },
    {
        url: "https://youtu.be/7EMNDj_Ao3s?si=C1HQ2oAZxpQwNJEH",
        caption: "YouTube: Emmeline Pankhurst | 'I incite this meeting to rebellion' speech, October 1912 | Women's Suffrage"
    },
    {
        url: "https://www.historyextra.com/period/edwardian/emily-wilding-davison-epsom-derby-suffragette/",
        caption: "History Extra: Emily Davison: the suffragette who stepped in front of the king's horse"
    }
  ];

  const questions: QuestionProps[] = [
    {
      text: "How did Emmeline Pankhurst’s upbringing in Manchester influence her activism for women's suffrage?",
    },
    {
      text: "What role did Emily Davison’s actions play in drawing attention to the suffragette movement?",
    },
    {
      text: "How did the militant tactics of the suffragettes, led by Pankhurst, impact public perception of the women's movement?",
    },
    {
      text: "How did Emily Davison’s death at the Derby shape the suffrage movement’s strategy and legacy?",
    },
    {
      text: "In what ways did the work of Pankhurst and Davison influence future civil rights movements in the UK and beyond?",
    },
  ];
  
  const venues: VenueProps[] = [
    { title: "Founders Hall", imgSrc: "/venues/founders.png", href: "https://www.foundershall.co.uk/" },
    { title: "The Anthologist St Peter's Square", imgSrc: "/venues/anthologist.png", href: "https://www.drakeandmorgan.co.uk/the-anthologist-manchester" },
    { title: "The Vine Inn", imgSrc: "/venues/vine-inn.png", href: "https://www.thevineinnmanchester.co.uk/" }    
  ]
  
  
  const attributions: AttributionProps[] = [
    {
      source: "Restored image of Emmeline Pankhurst, 1913",
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">Public Domain license</a> granted by <a href="https://en.wikipedia.org/wiki/User:Adam_Cuerden" className="extiw" title="w:en:Adam Cuerden"><span>Adam Cuerden</span></a>
        </>
      ),
    },
    {
      source: "Image of Emmeline Pankhurst in Prison clothes, 1911",
      attribution: (
        <>
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA 2.0 license</a>
          {" "}Unknown author - The Suffragette by Sylvia Pankhurst. New York: Source Book Press, 1970. First published by Sturgis & Walton Company (New York), 1911. Facing p. 330.
        </>
      )
    }
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="https://maps.app.goo.gl/tXqp4aEkBQsZE1CK9?g_st=com.google.maps.preview.copy" />
        <p className="mt-4">Go to the <a className="underline" href="https://maps.app.goo.gl/tXqp4aEkBQsZE1CK9?g_st=com.google.maps.preview.copy">Emmeline Pankhurst Statue</a>, play the music below and when you’re near say to the AI &ldquo;I’m arriving at the Emmeline Pankhurst Statue&rdquo;</p>
      </div>
      <Music
        title="March of the Women"
        artist="Suffrage Sinfonia"
        runtime="3:15 mins"
        image="/music/suffrage-sinfonia.jpg"
        href={typeof musicHref === 'string' ? musicHref : '#'}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location="Emmeline Pankhurst" /> 
      <Venues venues={venues}/>
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default EmmelinePankhurst;
