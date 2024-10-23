import MusicProvider from "@/components/MusicProvider";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";

const Castlefield: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "Castlefield", index: 0 });

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label="View on map" href="/" />
        <p className="mt-4">Say to the AI &ldquo;I’m arriving at Castlefield&rdquo;</p>
      </div>
      <Music
        title="Dirty Old Town"
        artist="Ewan MacColl"
        runtime="1:03 mins"
        image="/music/dirty-old-town.png"
        href={typeof musicHref === 'string' ? musicHref : '#'}
      />
      <Divider />
    </>
  );
};

export default Castlefield;
