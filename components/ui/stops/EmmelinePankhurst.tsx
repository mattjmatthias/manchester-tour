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

const EmmelinePankhurst: React.FC<StopProps> = ({ musicIndex }) => {
  const { t } = useTranslation("common");
  const musicHref = MusicProvider({ songKey: "Emmeline Pankhurst", index: musicIndex });

  const images: MediaItemProps[] = [
    {
      href: "/emmeline-1913.jpg",
      caption: t("emmeline.imageCaption1913"),
      width: 1920,
      height: 2533,
      thumbnailWidth: 187,
      thumbnailHeight: 300,
    },
    {
      href: "/emily-davison.jpg",
      caption: t("emmeline.imageCaptionDavisonFuneral"),
      width: 2560,
      height: 1859,
      thumbnailWidth: 339,
      thumbnailHeight: 155,
    },
    {
      href: "/emmeline-in-prison.jpg",
      caption: t("emmeline.imageCaptionPrison"),
      width: 700,
      height: 1158,
      thumbnailWidth: 149,
      thumbnailHeight: 300,
    }
  ];

  const links: LinkProps[] = [
    {
      url: "https://www.pankhurstmuseum.com/",
      caption: t("emmeline.linkPankhurstCentre"),
    },
    {
      url: "https://beta.nationalarchives.gov.uk/explore-the-collection/stories/emmeline-pankhurst/",
      caption: t("emmeline.linkNationalArchives"),
    },
    {
      url: "https://youtu.be/7EMNDj_Ao3s?si=C1HQ2oAZxpQwNJEH",
      caption: t("emmeline.linkYouTubeSpeech"),
    },
    {
      url: "https://www.historyextra.com/period/edwardian/emily-wilding-davison-epsom-derby-suffragette/",
      caption: t("emmeline.linkHistoryExtra"),
    }
  ];

  const questions: QuestionProps[] = [
    {
      text: t("emmeline.questionUpbringing"),
    },
    {
      text: t("emmeline.questionDavisonRole"),
    },
    {
      text: t("emmeline.questionMilitantTactics"),
    },
    {
      text: t("emmeline.questionDavisonDeath"),
    },
    {
      text: t("emmeline.questionFutureMovements"),
    },
  ];

  const venues: VenueProps[] = [
    { title: t("emmeline.venueFoundersHall"), imgSrc: "/venues/founders.jpg", href: "https://www.foundershall.co.uk/" },
    { title: t("emmeline.venueAnthologist"), imgSrc: "/venues/anthologist.jpg", href: "https://www.drakeandmorgan.co.uk/the-anthologist-manchester" },
    { title: t("emmeline.venueVineInn"), imgSrc: "/venues/vine-inn.jpg", href: "https://www.thevineinnmanchester.co.uk/" }
  ];

  const attributions: AttributionProps[] = [
    {
      source: t("emmeline.attributionSource1913"),
      attribution: (
        <>
          <a href="https://commons.wikimedia.org/w/index.php?curid=3780583">
            {t("emmeline.attributionPublicDomain")}
          </a>{" "}
          {t("emmeline.attributionGrantedBy")}{" "}
          <a
            href="https://en.wikipedia.org/wiki/User:Adam_Cuerden"
            className="extiw"
            title="w:en:Adam Cuerden"
          >
            {t("emmeline.attributionAdamCuerden")}
          </a>
        </>
      ),
    },
    {
      source: t("emmeline.attributionSourcePrison"),
      attribution: (
        <>
          <a href="https://creativecommons.org/licenses/by-sa/2.0/">
            {t("emmeline.attributionCCBYSA")}
          </a>{" "}
          {t("emmeline.attributionUnknownAuthor")}
        </>
      ),
    }
  ];

  return (
    <>
      <div className="text-left text-xl mt-4">
        <Button label={t("viewOnMap")} href="https://maps.app.goo.gl/tXqp4aEkBQsZE1CK9?g_st=com.google.maps.preview.copy" />
        <p className="mt-4">
          {t("emmeline.mapInstructionsPrefix")}{" "}
          <a
            className="underline"
            href="https://maps.app.goo.gl/tXqp4aEkBQsZE1CK9?g_st=com.google.maps.preview.copy"
          >
            {t("emmeline.statueName")}
          </a>
          , {t("emmeline.mapInstructionsSuffix")}
        </p>
      </div>
      <Music
        title={t("emmeline.musicTitle")}
        artist={t("emmeline.musicArtist")}
        runtime={t("emmeline.musicRuntime")}
        image="/music/suffrage-sinfonia.jpg"
        href={typeof musicHref === 'string' ? musicHref : '#'}
      />
      <Media images={images} />
      <Links links={links} />
      <Questions questions={questions} location={t("emmeline.locationName")} />
      <Venues venues={venues} />
      <Attributions attributions={attributions} />
      <Divider />
    </>
  );
};

export default EmmelinePankhurst;