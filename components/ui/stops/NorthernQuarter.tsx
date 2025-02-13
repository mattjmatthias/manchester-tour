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
import { useTranslation } from "next-i18next";

const NorthernQuarter: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  const musicHref = MusicProvider({ songKey: "Northern Quarter", index: musicIndex });

  const images: MediaItemProps[] = [
    {
      href: "/dale-house.jpg",
      caption: t("northernQuarter.imageCaptionDaleHouse"),
      width: 623,
      height: 421,
      thumbnailWidth: 280,
      thumbnailHeight: 187,
    },
    {
      href: "/smithfield.jpg",
      caption: t("northernQuarter.imageCaptionSmithfield"),
      width: 816,
      height: 642,
      thumbnailWidth: 240,
      thumbnailHeight: 187,
    },
  ];

  const links: LinkProps[] = [
    {
      url: "https://historicengland.org.uk/images-books/publications/manchesters-northern-quarter/manchesters-northern-quarter/",
      caption: t("northernQuarter.linkHistoricEngland"),
    },
    {
      url: "https://en.wikipedia.org/wiki/Northern_Quarter_(Manchester)",
      caption: t("northernQuarter.linkWikipedia"),
    },
  ];

  const questions: QuestionProps[] = [
    {
      text: t("northernQuarter.questionStevensonSquare"),
    },
    {
      text: t("northernQuarter.questionGentrification"),
    },
    {
      text: t("northernQuarter.questionAfflecksHistory"),
    },
    {
      text: t("northernQuarter.questionDeclineTiming"),
    },
    {
      text: t("northernQuarter.questionIdentityPreservation"),
    },
  ];

  const venues: VenueProps[] = [
    {
      title: t("northernQuarter.venue7Sins"),
      imgSrc: "/venues/7sins.jpg",
      href: "https://www.7sins.co.uk/",
    },
    {
      title: t("northernQuarter.venueEnglishLounge"),
      imgSrc: "/venues/english-lounge.jpg",
      href: "https://www.craftunionpubs.com/english-lounge-manchester",
    },
    {
      title: t("northernQuarter.venueLostCat"),
      imgSrc: "/venues/lost-cat.jpg",
      href: "https://lostcatnq.co.uk/",
    },
    {
      title: t("northernQuarter.venueJuniorJacksons"),
      imgSrc: "/venues/junior-jacksons.jpg",
      href: "https://bunnyjacksons.co.uk/",
    },
    {
      title: t("northernQuarter.venueTibStreetTavern"),
      imgSrc: "/venues/tib-street.jpg",
      href: "https://www.tibstreettavern.co.uk/",
    },
    {
      title: t("northernQuarter.venueUnicornManchester"),
      imgSrc: "/venues/unicorn.jpg",
      href: "https://www.craftunionpubs.com/unicorn-manchester",
    },
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button
          label={t("northernQuarter.viewOnMap")}
          href="https://maps.app.goo.gl/v4mwD9izrU62AmK47?g_st=com.google.maps.preview.copy"
        />
        <p className="mt-4">
          {t("northernQuarter.instructionsPrefix")}{" "}
          <a
            className="underline"
            href="https://maps.app.goo.gl/v4mwD9izrU62AmK47?g_st=com.google.maps.preview.copy"
          >
            {t("northernQuarter.daleHouseLinkText")}
          </a>, {t("northernQuarter.instructionsSuffix")}
        </p>
      </div>
      <Music
        title={t("northernQuarter.musicTitle")}
        artist={t("northernQuarter.musicArtist")}
        runtime={t("northernQuarter.musicRuntime")}
        image="/music/northern-quarter.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions
        questions={questions}
        location={t("northernQuarter.locationName")}
      />
      <Venues venues={venues} />
      <Divider />
    </>
  );
};

export default NorthernQuarter;