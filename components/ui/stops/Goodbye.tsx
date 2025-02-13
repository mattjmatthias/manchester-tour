"use client";

import MusicProvider from "@/components/MusicProvider";
import StopProps from "@/components/ui/stops/StopProps";
import Divider from "../Divider";
import Music from "../Music";
import { useTranslation } from "next-i18next";

const Goodbye: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  const musicHref = MusicProvider({ songKey: "End", index: musicIndex });

  return (
    <>
      <div className="text-left text-xl mt-4">
        <p className="mt-4">
          {t("goodbye.text")}
        </p>
      </div>
      <Music
        title={t("goodbye.musicTitle")}
        artist={t("goodbye.musicArtist")}
        runtime={t("goodbye.musicRuntime")}
        image="/music/choice.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Divider />
    </>
  );
};

export default Goodbye;