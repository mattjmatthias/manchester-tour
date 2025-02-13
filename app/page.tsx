"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import TourStop from "@/components/ui/TourStop";
import Castlefield from "@/components/ui/stops/Castlefield";
import FriedrichEngels from "@/components/ui/stops/FriedrichEngels";
import StPetersField from "@/components/ui/stops/StPetersField";
import EmmelinePankhurst from "@/components/ui/stops/EmmelinePankhurst";
import NorthernQuarter from "@/components/ui/stops/NorthernQuarter";
import Ancoats from "@/components/ui/stops/Ancoats";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Goodbye from "@/components/ui/stops/Goodbye";
import { useTranslation } from "next-i18next";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tourStopRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [music, setMusic] = useState<number>(1);
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    let updated = false;
    const query = new URLSearchParams(window.location.search);

    // Handle music parameter (valid values: 0, 1, or 2)
    let newMusic: number;
    const mParam = query.get("m");
    if (mParam && !isNaN(parseInt(mParam, 10)) && parseInt(mParam, 10) >= 0 && parseInt(mParam, 10) <= 2) {
      newMusic = parseInt(mParam, 10);
    } else {
      const storedMusic = localStorage.getItem("music");
      newMusic = storedMusic ? parseInt(storedMusic, 10) : 1;
      query.set("m", newMusic.toString());
      updated = true;
    }

    // Handle language parameter
    const supportedLanguages = ["en", "fr", "de", "es", "it", "cn", "jp"];
    let newLanguage: string;
    const lParam = query.get("l");
    if (lParam && supportedLanguages.includes(lParam.toLowerCase())) {
      newLanguage = lParam.toLowerCase();
    } else {
      const storedLanguage = localStorage.getItem("language");
      newLanguage = storedLanguage && supportedLanguages.includes(storedLanguage)
        ? storedLanguage
        : "en";
      query.set("l", newLanguage);
      updated = true;
    }

    // Update state and localStorage
    setMusic(newMusic);
    setLanguage(newLanguage);
    localStorage.setItem("music", newMusic.toString());
    localStorage.setItem("language", newLanguage);

    // If missing query params were added, update the URL
    if (updated) {
      router.replace(`?${query.toString()}`);
    }
  }, [searchParams, router]);

  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const tourStops = [
    {
      title: t("castlefieldTitle"),
      sub: t("castlefieldSubtitle"),
      component: <Castlefield language={language} musicIndex={music} />,
    },
    {
      title: t("friedrichEngelsTitle"),
      sub: t("friedrichEngelsSubtitle"),
      component: <FriedrichEngels language={language} musicIndex={music} />,
    },
    {
      title: t("stPetersFieldTitle"),
      sub: t("stPetersFieldSubtitle"),
      component: <StPetersField language={language} musicIndex={music} />,
    },
    {
      title: t("emmelinePankhurstTitle"),
      sub: t("emmelinePankhurstSubtitle"),
      component: <EmmelinePankhurst language={language} musicIndex={music} />,
    },
    {
      title: t("northernQuarterTitle"),
      sub: t("northernQuarterSubtitle"),
      component: <NorthernQuarter language={language} musicIndex={music} />,
    },
    {
      title: t("ancoatsTitle"),
      sub: t("ancoatsSubtitle"),
      component: <Ancoats language={language} musicIndex={music} />,
    },
    {
      title: t("goodbyeTitle"),
      sub: t("goodbyeSubtitle"),
      component: <Goodbye language={language} musicIndex={music} />,
    },
  ];

  useEffect(() => {
    if (activeIndex !== null && tourStopRefs.current[activeIndex]) {
      const element = tourStopRefs.current[activeIndex];
      const topOffset = 30; // e.g. height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 h-full w-full">
        {/* Left section with text */}
        <div className="md:flex w-full md:justify-between">
          <div className="text-left">
            <h1 className="text-4xl">
              {t("headerTitle")} <span className="whitespace-nowrap">{t("headerYears")}</span>
            </h1>
            <h2 className="md:text-xl text-md">{t("tourTitle")}</h2>
            <p className="mt-2 flex items-center justify-start">
              <Image
                src="/walking.png"
                alt={t("walkingAlt")}
                width={20}
                height={20}
                className="mr-2 filter grayscale brightness-0"
              />
              {t("walkingInfo")}
            </p>
          </div>

          {/* Right section with buttons */}
          <div className="flex md:flex-col md:text-xl text-lg flex-row md:gap-y-2 md:gap-x-0 gap-x-4 mt-8 md:mt-0 md:mb-0 mb-4 md:ml-8">
            <Button href="./before-you-start" label={t("startButton")} />
            <Button href="https://maps.app.goo.gl/jqzBWwiNLsRHJngLA" label={t("tourRouteButton")} />
          </div>
        </div>

        {/* Render TourStops and pass down music and language params */}
        {tourStops.map((stop, index) => (
          <TourStop
            key={index}
            title={stop.title}
            sub={stop.sub}
            isOpen={activeIndex === index}
            onClick={() => handleToggle(index)}
            musicIndex={music}
            language={language}
            ref={(el) => {
              tourStopRefs.current[index] = el;
            }}
          >
            {stop.component}
          </TourStop>
        ))}
      </div>
      <footer className="md:p-16 p-8">
        <Link href="/privacy" className="mr-8">
          {t("privacy")}
        </Link>
        <Link href="/before-you-start" className="mr-8">
          {t("support")}
        </Link>
        <Link href="https://www.mattjmatthias.co" className="mr-8">
          {t("by")}
        </Link>
      </footer>
    </div>
  );
}