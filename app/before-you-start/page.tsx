"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useTranslation } from "next-i18next";
import i18n from "../../i18n";

export default function BeforeYouStart() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [musicServer, setMusicServer] = useState<number>(0); // 0: Spotify, 1: Apple Music, 2: YouTube
  const [language, setLanguage] = useState("en");

  // Initialize state from URL query params and localStorage
  useEffect(() => {
    let updated = false;
    const query = new URLSearchParams(window.location.search);

    // Handle music parameter
    let newMusic: number;
    const mParam = query.get("m");
    if (
      mParam &&
      !isNaN(parseInt(mParam, 10)) &&
      parseInt(mParam, 10) >= 0 &&
      parseInt(mParam, 10) <= 2
    ) {
      newMusic = parseInt(mParam, 10);
    } else {
      const storedMusic = localStorage.getItem("music");
      newMusic = storedMusic ? parseInt(storedMusic, 10) : 0;
      query.set("m", newMusic.toString());
      updated = true;
    }
    setMusicServer(newMusic);
    localStorage.setItem("music", newMusic.toString());

    // Handle language parameter
    const supportedLanguages = ["en", "fr", "cn", "jp", "es", "de", "it"];
    let currentLanguage = query.get("l");
    if (!currentLanguage || !supportedLanguages.includes(currentLanguage)) {
      currentLanguage = localStorage.getItem("language") || "en";
      query.set("l", currentLanguage);
      updated = true;
    }
    setLanguage(currentLanguage);
    localStorage.setItem("language", currentLanguage);

    if (updated) {
      router.replace(`?${query.toString()}`);
    }
  }, [router]);

  // Ensure i18n uses the query string language
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const langFromQuery = query.get("l");
    if (langFromQuery && langFromQuery !== i18n.language) {
      i18n.changeLanguage(langFromQuery);
    }
  }, []);

  // Update state without immediate reload
  const handleMusicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMusic = parseInt(e.target.value, 10);
    setMusicServer(newMusic);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
  };

  // Save Changes button updates both language and music query parameters, then reloads the page.
  const handleSaveChanges = () => {
    const query = new URLSearchParams(window.location.search);

    localStorage.setItem("language", language);
    localStorage.setItem("music", musicServer.toString());
    query.set("l", language);
    query.set("m", musicServer.toString());
    
    i18n.changeLanguage(language).then(() => {
      window.location.href = `./?${query.toString()}`;
    });
  };

  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 h-full w-full">
        {/* Top buttons: Back and Save Changes */}
        <div className="md:flex w-fit gap-x-2 items-center">
          <div className="text-left">
            <Button className="text-xl" href="/" label={t("back")} />
          </div>
          <div>
            <Button
              className="text-xl"
              onClick={handleSaveChanges}
              label={t("saveChanges", "Save Changes")}
            />
          </div>
        </div>

        <h1 className="text-4xl mt-8">{t("pageTitle")}</h1>
        <h2 className="md:text-md text-md uppercase">{t("pageSubtitle")}</h2>

        <div className="text-lg mt-8">
          <p>{t("instructionsText")}</p>

          {/* ChatGPT Account Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">{t("chatgptTitle")}</h2>
            <p className="text-base">
              {t("chatgptText")}{" "}
              <a
                href="https://chat.openai.com/signup"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("chatgptAccountLinkText")}
              </a>{" "}
              ({t("chatgptAccountFree")}). {t("chatgptOptOutText")}
            </p>
            <p className="text-base mt-2">{t("chatgptVoiceText")}</p>
            <div className="flex space-x-4 items-center">
              <a href="https://apps.apple.com/us/app/chatgpt/id6448311069">
                <Image
                  src="/appstore.svg"
                  height={70}
                  width={120}
                  alt={t("downloadAppStoreAlt")}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.openai.chatgpt">
                <Image
                  src="/google-play.png"
                  height={95}
                  width={156}
                  alt={t("downloadGooglePlayAlt")}
                />
              </a>
            </div>
            <p className="text-base">{t("openaiSupportText")}</p>
          </section>

          {/* Music Setup Section */}
          <section className="mb-8">
            <h2 className="text-2xl mb-2">{t("musicSetupTitle")}</h2>
            <p className="text-base">{t("musicSetupText")}</p>
            <select
              className="mt-2 p-2 border rounded"
              value={musicServer.toString()}
              onChange={handleMusicChange}
            >
              <option value="0">{t("musicOptionSpotify")}</option>
              <option value="1">{t("musicOptionApple")}</option>
              <option value="2">{t("musicOptionYouTube")}</option>
            </select>
          </section>

          {/* Language Setup Section */}
          <section className="mb-8">
            <h2 className="text-2xl mb-2">{t("languageSetupTitle")}</h2>
            <select
              className="mt-2 p-2 border rounded"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">{t("languageOptionEnglish")}</option>
              <option value="fr">{t("languageOptionFrench")}</option>
              <option value="cn">{t("languageOptionChinese")}</option>
              <option value="jp">{t("languageOptionJapanese")}</option>
              <option value="es">{t("languageOptionSpanish")}</option>
              <option value="de">{t("languageOptionGerman")}</option>
              <option value="it">{t("languageOptionItalian")}</option>
            </select>
          </section>

          <Divider />

          {/* Call to Action */}
          <div className="text-left">
            <p className="text-xl mb-4">{t("readyText")}</p>
          </div>
          <Button
            className="text-xl"
            href="https://chatgpt.com/g/g-GGeTTmmjw-manchester-ai-tour-guide"
            label={t("openAiLabel")}
          />
        </div>
      </div>
      <footer className="md:p-16 p-8 text-sm">
        <p>{t("footerText")}</p>
      </footer>
    </div>
  );
}
