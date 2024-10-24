import React from "react";

type MusicData = {
  [key: string]: [string, string, string];
};

const musicData: MusicData = {
  Castlefield: [
    "https://open.spotify.com/track/44YYUK3r5WAA1F5gU1Wk6n?si=fc0890aa17984cfb",
    "https://music.apple.com/gb/album/dirty-old-town/1617186034?i=1617186540",
    "https://youtu.be/o7wc-mSVbhk?si=bDTPZyXu7Ie-Ht-J",
  ],
  "Friedrich Engels": [
    "https://open.spotify.com/track/7lBirStriJlmSTvPzHByal?si=74fe29e827ad4188",
    "https://music.apple.com/gb/album/the-world-turned-upside-down/1169783065?i=1169783582",
    "https://youtu.be/SWRpl2S9iwk?si=T9JVatXlwNkj02PG"
  ],  
  "St Peter's Field": [
    "https://open.spotify.com/track/2KMr9cGZCqmc7CArKuqnK6?si=cba4eb9d44774b95",
    "https://music.apple.com/gb/album/spiegel-im-spiegel-chillout-excerpt/1166174548?i=1166177286",
    "https://youtu.be/fXq6GGeyvcI?si=2SHzT3-9-pcu_HcN"
  ],
  "Emmeline Pankhurst": [
    "https://open.spotify.com/track/3Qf0WeE4W3ZxaSWfSYFUWy?si=3da8ce0623574245",
    "https://music.apple.com/gb/album/march-of-the-women/1454019222?i=1454019225",
    "https://youtu.be/7pvmID2QBB4?si=SLDOuXhwYBVZKikW",
  ],
  Ancoats: [
    "https://open.spotify.com/track/45mJPRQEif8wyDxCbm6ER2?si=c64720e54f214f37",
    "https://music.apple.com/gb/album/the-doffing-mistress/1617409976?i=1617409979",
    "https://youtu.be/pN1A0MOfuyg?si=PguzvemwInm0BXuv",
  ],
  "Northern Quarter": [
    "https://open.spotify.com/track/4j2b4CQLnAIh8MnZBGAvBR?si=b4f6a4f7a1cc4177",
    "https://music.apple.com/gb/album/captain-ward/1197455179?i=1197455459",
    "https://youtu.be/XdSp2DWN8pg?si=UueU2XPWDdq3By6u",
  ],
  End: [
    "https://open.spotify.com/track/2Wslp0K41bLatiyWzrPoBt?si=9f521a7fdbef4fe9",
    "https://music.apple.com/gb/album/song-of-choice/128344586?i=128351692",
    "https://youtu.be/okas_K7g89s?si=VyWVOA204POVeplj",
  ],
  // Add more songs as needed
};

export const MusicProvider: React.FC<{
  songKey: string;
  index: number;
}> = ({ songKey, index }) => {
  const getLink = (key: string, idx: number): string => {
    if (!musicData[key]) {
      return "";
    }

    if (isNaN(idx) || idx < 0 || idx > 2) {
      return "";
    }

    return musicData[key][idx];
  };

  return getLink(songKey, index);
};

export default MusicProvider;
