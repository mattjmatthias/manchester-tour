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
import Attributions, { AttributionProps } from "../Attributions";
import Venues, { VenueProps } from "../Venues";
import { useTranslation } from "next-i18next";

const Ancoats: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  
  const musicHref = MusicProvider({ songKey: "Ancoats", index: musicIndex });

  const images: MediaItemProps[] = [
    {
      href: "/ancoats-mills.jpg",
      caption: t("ancoats.imageCaptionMills"),
      width: 1200,
      height: 609,
      thumbnailWidth: 370,
      thumbnailHeight: 187,
    },
    {
      href: "/cuttingroom-square.jpg",
      caption: t("ancoats.imageCaptionCuttingRoom"),
      width: 1024,
      height: 768,
      thumbnailWidth: 317,
      thumbnailHeight: 217,
    },
    {
      href: "/mcconnels-mills.jpg",
      caption: t("ancoats.imageCaptionMcConnels"),
      width: 2268,
      height: 1258,
      thumbnailWidth: 338,
      thumbnailHeight: 187,
    },
    {
      href: "/ancoats-dispensary.jpg",
      caption: t("ancoats.imageCaptionDispensary"),
      width: 1200,
      height: 820,
      thumbnailWidth: 275,
      thumbnailHeight: 187,
    },
  ];

  const links: LinkProps[] = [
    {
      url: "https://historicengland.org.uk/images-books/publications/ancoats/ancoats/",
      caption: t("ancoats.linkHistoricEngland"),
    },
    {
      url: "https://en.wikipedia.org/wiki/Ancoats",
      caption: t("ancoats.linkWikipedia"),
    },
  ];

  const questions: QuestionProps[] = [
    {
      text: t("ancoats.questionItalianImmigrants"),
    },
    {
      text: t("ancoats.questionDeclineRegeneration"),
    },
    {
      text: t("ancoats.questionPositiveImmigration"),
    },
    {
      text: t("ancoats.questionCottonProduction"),
    },
    {
      text: t("ancoats.questionRailwayImpact"),
    },
  ];

  const venues: VenueProps[] = [
    {
      title: t("ancoats.venueMackieMayor"),
      imgSrc: "/venues/mackie-mayor.jpg",
      href: "https://maps.app.goo.gl/oQaYmPQ6BrD4ADNt9",
    },
    {
      title: t("ancoats.venueCrownKettle"),
      imgSrc: "/venues/crown.jpg",
      href: "https://www.thecrownandkettle.com/",
    },
    {
      title: t("ancoats.venueEdinburghCastle"),
      imgSrc: "/venues/edinburgh.jpg",
      href: "https://www.ec-ancoats.com/",
    },
    {
      title: t("ancoats.venueJayneEyre"),
      imgSrc: "/venues/jane-eyre.jpg",
      href: "https://www.thejaneeyre.co.uk/",
    },
    {
      title: t("ancoats.venueJimmysManchester"),
      imgSrc: "/venues/jimmys.jpg",
      href: "https://www.jimmys.group/manchester/",
    },
    {
      title: t("ancoats.venueCask"),
      imgSrc: "/venues/cask.jpg",
      href: "https://www.caskbars.co.uk/",
    },
  ];

  const attributions: AttributionProps[] = [
    {
      source: t("ancoats.attributionSource1913"),
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">
            {t("ancoats.attributionPublicDomain")}
          </a>{" "}
          {t("ancoats.attributionScannedText1")}
        </>
      ),
    },
    {
      source: t("ancoats.attributionSource1820"),
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">
            {t("ancoats.attributionPublicDomain")}
          </a>{" "}
          {t("ancoats.attributionScannedText2")}
        </>
      ),
    },
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button
          label={t("viewOnMap")}
          href="https://maps.app.goo.gl/sev2T3htxvHW8JQM6?g_st=com.google.maps.preview.copy"
        />
        <p className="mt-4">
          {t("ancoats.introTextBeforeMap")}{" "}
          <a
            className="underline"
            href="https://maps.app.goo.gl/sev2T3htxvHW8JQM6?g_st=com.google.maps.preview.copy"
          >
            {t("ancoats.cuttingRoomSquare")}
          </a>{" "}
          {t("ancoats.introTextAfterMap")}
        </p>
      </div>
      <Music
        title={t("ancoats.musicTitle")}
        artist={t("ancoats.musicArtist")}
        runtime={t("ancoats.musicRuntime")}
        image="/music/ancoats.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location={t("ancoats.locationName")} />
      <Venues venues={venues} />
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default Ancoats;