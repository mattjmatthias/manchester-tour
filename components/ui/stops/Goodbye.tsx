import MusicProvider from "@/components/MusicProvider";
import Divider from "../Divider";
import Music from "../Music";

const Goodbye: React.FC = () => {
  const musicHref = MusicProvider({ songKey: "End", index: 0 });

  return (
    <>
      <div className="text-left text-xl mt-4">        
        <p className="mt-4">
          We hope you’ve enjoyed this tour and learned something new about Manchester and its history. We’d like to leave you with one last song, one which we feel captures the fighting spirit of Manchester and the fight for what’s fair and right.
        </p>
      </div>
      <Music
        title="Song of Choice"
        artist="Peggy Seeger and Ewan MacColl"
        runtime="3:48 mins"
        image="/music/choice.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />

      <Divider />
    </>
  );
};

export default Goodbye;
