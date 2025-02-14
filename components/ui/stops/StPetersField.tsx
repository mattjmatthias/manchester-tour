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

const StPetersField: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  const musicHref = MusicProvider({ songKey: "St Peter's Field", index: musicIndex });

  const images: MediaItemProps[] = [
    {
      href: "/peterloo-massacre.jpg",
      caption: t("stPetersField.imageCaptionMassacre"),
      width: 1280,
      height: 853,
      thumbnailWidth: 300,
      thumbnailHeight: 187,
    },
    {
      href: "/peters-field.jpg",
      caption: t("stPetersField.imageCaptionFieldMap"),
      width: 788,
      height: 542,
      thumbnailWidth: 290,
      thumbnailHeight: 187,
    },
    {
      href: "/monument.jpg",
      caption: t("stPetersField.imageCaptionMonument"),
      width: 788,
      height: 542,
      thumbnailWidth: 265,
      thumbnailHeight: 187,
    },
    {
      href: "/peterloo-smithfield.jpg",
      caption: t("stPetersField.imageCaptionHuntsArrest"),
      width: 2000,
      height: 1596,
      thumbnailWidth: 251,
      thumbnailHeight: 187,
    }
  ];

  const links: LinkProps[] = [
    {
      url: "https://www.imdb.com/title/tt4614612/",
      caption: t("stPetersField.linkIMDB"),
    },
    {
      url: "https://www.bbc.co.uk/newsround/49098500",
      caption: t("stPetersField.linkBBCNewsround"),
    }
  ];

  const questions: QuestionProps[] = [
    { text: t("stPetersField.questionPoliticalReform") },
    { text: t("stPetersField.questionGovernmentForce") },
    { text: t("stPetersField.questionReformAchievement") },
    { text: t("stPetersField.questionMediaEyewitness") },
    { text: t("stPetersField.questionLongTermConsequences") }
  ];

  const venues: VenueProps[] = [
    { title: t("stPetersField.venueSociety"), imgSrc: "/venues/society.jpg", href: "http://www.societymanchester.com/" },
    { title: t("stPetersField.venueTemple"), imgSrc: "/venues/temple.jpg", href: "https://www.facebook.com/pages/The-Temple-of-Convenience/156811607675271?fref=ts" },
    { title: t("stPetersField.venueEzraGil"), imgSrc: "/venues/ezra.jpg", href: "http://www.ezraandgil.co.uk/" },
    { title: t("stPetersField.venueAlbertsSchloss"), imgSrc: "/venues/alberts-schloss.jpg", href: "https://albertsschloss.com/" },
    { title: t("stPetersField.venuePeakyBlinders"), imgSrc: "/venues/peaky.jpg", href: "https://www.peakyblindersmanchester.com/" }
  ];

  const attributions: AttributionProps[] = [
    {
      source: t("stPetersField.attributionSourceMassacre"),
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">
            {t("stPetersField.attributionPublicDomainLicense")}
          </a>{" "}
          {t("stPetersField.attributionGrantedBy")}{" "}
          <a
            href="https://en.wikipedia.org/wiki/en:Richard_Carlile"
            className="extiw"
            title="w:en:Richard Carlile"
          >
            <span title={t("stPetersField.attributionRichardCarlileTitle")}>
              {t("stPetersField.attributionRichardCarlile")}
            </span>
          </a>{" "}
          -{" "}
          <a
            href="https://en.wikipedia.org/wiki/en:Manchester_Library_%26_Information_Service"
            className="extiw"
            title="w:en:Manchester Library & Information Service"
          >
            <span title={t("stPetersField.attributionManchesterLibrariesTitle")}>
              {t("stPetersField.attributionManchesterLibraries")}
            </span>
          </a>
        </>
      ),
    },
    {
      source: t("stPetersField.attributionSourcePrint"),
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">
            {t("stPetersField.attributionPublicDomainLicense")}
          </a>, {t("stPetersField.attributionPrintPublisher")}
        </>
      )
    },
    {
      source: t("stPetersField.attributionSourceMonument"),
      attribution: (
        <>
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">
            {t("stPetersField.attributionCCBYSA")}
          </a>{" "}
          {t("stPetersField.attributionGrantedBy")}{" "}
          <a href="https://www.geograph.org.uk/photo/6240951">
            {t("stPetersField.attributionGeraldEngland")}
          </a>
        </>
      )
    }
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button
          label={t("viewOnMap")}
          href="https://maps.app.goo.gl/iGH5kYa1q4h7BAiCA?g_st=com.google.maps.preview.copy"
        />
        <p className="mt-4">
          {t("stPetersField.instructionsPrefix")}{" "}
          <a className="underline" href="https://maps.app.goo.gl/iGH5kYa1q4h7BAiCA?g_st=com.google.maps.preview.copy">
            {t("stPetersField.memorialLinkText")}
          </a>, {t("stPetersField.instructionsSuffix")}
        </p>
      </div>
      <Music
        title={t("stPetersField.musicTitle")}
        artist={t("stPetersField.musicArtist")}
        runtime={t("stPetersField.musicRuntime")}
        image="/music/spiegel-em-spiegel.jpg"
        href={typeof musicHref === "string" ? musicHref : "#"}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location={t("stPetersField.locationName")} />
      <Venues venues={venues} />
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default StPetersField;