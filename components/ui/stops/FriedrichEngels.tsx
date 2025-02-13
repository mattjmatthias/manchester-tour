"use client";

import React from "react";
import MusicProvider from "@/components/MusicProvider";
import StopProps from "@/components/ui/stops/StopProps";
import Button from "../Button";
import Divider from "../Divider";
import Music from "../Music";
import Media, { MediaItemProps } from "../Media";
import Links, { LinkProps } from "../Links";
import Questions, { QuestionProps } from "../Questions";
import Venues, { VenueProps } from "../Venues";
import Attributions, { AttributionProps } from "../Attributions";
import { useTranslation } from "next-i18next";

const FriedrichEngels: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  const musicHref = MusicProvider({ songKey: "Friedrich Engels", index: musicIndex });

  const images: MediaItemProps[] = [
    {
      href: "/friedrich-engels.jpg",
      caption: t("friedrich.imageCaptionStatue"),
      width: 3000,
      height: 4000,
      thumbnailWidth: 150,
      thumbnailHeight: 200,
    },
    {
      href: "/young-engels.jpg",
      caption: t("friedrich.imageCaptionYoung"),
      width: 800,
      height: 531,
      thumbnailWidth: 300,
      thumbnailHeight: 187,
    }
  ];

  const links: LinkProps[] = [
    {
      url: "https://library.chethams.com",
      caption: t("friedrich.linkChethamLibrary"),
    },
    {
      url: "https://confidentials.com/manchester/friedrich-engels-HOME-first-street-manchester-was-his-return-right-or-wrong",
      caption: t("friedrich.linkConfidentials"),
    },
    {
      url: "https://youtu.be/ZAhceJjX8iQ?si=O1e4NMqzBsQ4KiII",
      caption: t("friedrich.linkYouTube"),
    },
    {
      url: "http://news.bbc.co.uk/local/manchester/hi/people_and_places/history/newsid_8233000/8233388.stm",
      caption: t("friedrich.linkBBC"),
    }
  ];

  const questions: QuestionProps[] = [
    { text: t("friedrich.questionExperiences") },
    { text: t("friedrich.questionDocumentation") },
    { text: t("friedrich.questionMillOwner") },
    { text: t("friedrich.questionObservations") },
    { text: t("friedrich.questionPersonalDevelopment") }
  ];

  const venues: VenueProps[] = [
    { title: t("friedrich.venueBritonsProtection"), imgSrc: "/venues/britons-protection.jpg", href: "https://www.facebook.com/thebritonsprotection/" },
    { title: t("friedrich.venueHome"), imgSrc: "/venues/home.jpg", href: "http://homemcr.org/" },
    { title: t("friedrich.venueIndianTiffin"), imgSrc: "/venues/indian-tiffin.jpg", href: "http://indiantiffinroom.com/" },
    { title: t("friedrich.venueGasWorks"), imgSrc: "/venues/gasworks.jpg", href: "https://gasworksbrewbar.co.uk/" },
    { title: t("friedrich.venueAtlasBar"), imgSrc: "/venues/atlas.jpg", href: "http://www.atlasbarmanchester.com/" }
  ];

  const attributions: AttributionProps[] = [
    {
      source: t("friedrich.attributionSource"),
      attribution: (
        <>
          <a href="https://creativecommons.org/publicdomain/zero/1.0/">
            {t("friedrich.attributionPublicDomain")}
          </a>{" "}
          {t("friedrich.attributionGranted")}{" "}
          <a href="https://flickr.com/photos/53921762@N00/40809508363">
            {t("friedrich.attributionAlanStanton")}
          </a>
        </>
      ),
    }
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button
          label={t("friedrich.viewOnMap")}
          href="https://maps.app.goo.gl/deNTGd9yYp1pPPy87?g_st=com.google.maps.preview.copy"
        />
        <p className="mt-4">
          {t("friedrich.instructionsPrefix")}{" "}
          <a className="underline" href="https://maps.app.goo.gl/deNTGd9yYp1pPPy87?g_st=com.google.maps.preview.copy">
            {t("friedrich.statueName")}
          </a>, {t("friedrich.instructionsSuffix")}
        </p>
      </div>
      <Music
        title={t("friedrich.musicTitle")}
        artist={t("friedrich.musicArtist")}
        runtime={t("friedrich.musicRuntime")}
        image="/music/friedrich-engels.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location={t("friedrich.locationName")} />
      <Venues venues={venues} />
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default FriedrichEngels;