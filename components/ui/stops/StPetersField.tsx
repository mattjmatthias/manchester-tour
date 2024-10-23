import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";

const StPetersField: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "St Peter's Field", index: 0 });

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="/" />
        <p className="mt-4">Say to the AI &ldquo;I’m arriving at the Peterloo Memorial&rdquo; (ideally 4 mins before you do)</p>
      </div>
      <Music
        title="Spiegel im Spiegel (Excerpt)"
        artist="Arvo Pärt, Tasmin Little, Martin Roscoe"
        runtime="4:05 mins"
        image="/music/spiegel-em-spiegel.png"
        href={typeof musicHref === 'string' ? musicHref : '#'}
      />
      <Divider />
    </>
  );
};

export default StPetersField;
