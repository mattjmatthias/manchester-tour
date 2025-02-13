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

const Castlefield: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  const musicHref = MusicProvider({ songKey: "Castlefield", index: musicIndex });

  const images: MediaItemProps[] = [
    {
      href: "/map-1801.jpg",
      caption: t("castlefield.mapCaption"),
      width: 795,
      height: 508,
      thumbnailWidth: 293,
      thumbnailHeight: 187,
    },
    {
      href: "/castlefield-basin.jpg",
      caption: t("castlefield.basinsCaption"),
      width: 1024,
      height: 768,
      thumbnailWidth: 250,
      thumbnailHeight: 187,
    },
    {
      href: "/stephenson-lmr-map.jpg",
      caption: t("castlefield.stephensonCaption"),
      width: 900,
      height: 599,
      thumbnailWidth: 281,
      thumbnailHeight: 187,
    }
  ];

  const links: LinkProps[] = [
    {
      url: "https://historicengland.org.uk/images-books/publications/manchester-warehouse-legacy/manchester-the-warehouse-legacy/",
      caption: t("castlefield.linkHistoryEngland"),
    },
    {
      url: "https://www.railwaymuseum.org.uk/objects-and-stories/stephensons-rocket-rainhill-and-rise-locomotive",
      caption: t("castlefield.linkRailwayMuseum"),
    },
    {
      url: "https://www.scienceandindustrymuseum.org.uk/objects-and-stories/making-the-liverpool-and-manchester-railway",
      caption: t("castlefield.linkScienceIndustryMuseum"),
    },
  ];

  const questions: QuestionProps[] = [
    {
      text: t("castlefield.questionRailwayCanals"),
    },
    {
      text: t("castlefield.questionMainIndustry"),
    },
    {
      text: t("castlefield.questionIndustrialisation"),
    },
    {
      text: t("castlefield.questionCottonProduction"),
    },
    {
      text: t("castlefield.questionRailwayLayout"),
    },
  ];
  
  const venues: VenueProps[] = [
    { title: t("castlefield.venueDukes92"), imgSrc: "/venues/dukes.jpg", href: "https://dukes92.com/" },
    { title: t("castlefield.venueAlbertsShed"), imgSrc: "/venues/alberts-shed.jpg", href: "https://alberts-restaurants.com/shed/" },
    { title: t("castlefield.venueBarca"), imgSrc: "/venues/barca.jpg", href: "http://barca-manchester.co.uk/" },
    { title: t("castlefield.venueTheWharf"), imgSrc: "/venues/thewharf.jpg", href: "https://www.thewharf-castlefield.co.uk/" },
  ];
  
  const attributions: AttributionProps[] = [
    {
      source: t("castlefield.attributionSource"),
      attribution: (
        <>
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">
            {t("castlefield.attributionLicense")}
          </a>{" "}
          {t("castlefield.attributionGranted")}{" "}
          <a href="https://www.geograph.org.uk/photo/6966336">
            {t("castlefield.attributionPhotographer")}
          </a>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label={t("castlefield.viewOnMap")} href="https://maps.app.goo.gl/KE1GrChFpa9WJU24A?g_st=ic" />
        <p className="mt-4">
          {t("castlefield.instructionsPrefix")}{" "}
          <a href="https://maps.app.goo.gl/KE1GrChFpa9WJU24A?g_st=ic" className="underline">
            {t("castlefield.visitorsCentre")}
          </a>, {t("castlefield.instructionsSuffix")}
        </p>
      </div>
      <Music
        title={t("castlefield.musicTitle")}
        artist={t("castlefield.musicArtist")}
        runtime={t("castlefield.musicRuntime")}
        image="/music/dirty-old-town.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location={t("castlefield.locationName")} />
      <Venues venues={venues} />
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default Castlefield;