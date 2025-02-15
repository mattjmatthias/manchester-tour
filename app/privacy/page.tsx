// pages/privacy.js
"use client";
import Divider from "@/components/ui/Divider";
import { useTranslation } from "next-i18next";
import Button from "@/components/ui/Button";
import i18n from "../../i18n";

export default function PrivacyPolicy() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 min-h-screen w-full">
        {/* Container for content */}
        <div className="md:flex w-full md:justify-between">
          {/* Left section with navigation */}
          <div className="text-left">
            <Button
              href="/"              
              label={t("back", "< Back")}
            />
            <h1 className="text-4xl mt-8">{t("privacyPageTitle")}</h1>
            <h2 className="md:text-md text-md uppercase">
              {t("privacyPageSubtitle")}
            </h2>
          </div>
        </div>

        <div className="text-lg mt-8">
          <p>{t("privacyIntro")}</p>

          {/* Privacy Details Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">{t("privacySectionChatGPTTitle")}</h2>
            <p className="text-base">
              {t("privacySectionChatGPTText")}
            </p>
          </section>

          {/* Analytics Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">{t("privacySectionAnalyticsTitle")}</h2>
            <p className="text-base">
              {t("privacySectionAnalyticsText")}
            </p>
          </section>

          {/* Free Service Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">{t("privacySectionFreeServiceTitle")}</h2>
            <p className="text-base">
              {t("privacySectionFreeServiceText")}
            </p>
          </section>

          {/* OpenAI Data Usage Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">{t("privacySectionOpenAIDataTitle")}</h2>
            <p className="text-base">
              {t("privacySectionOpenAIDataText")}{" "}
              <a
                href="https://openai.com/privacy"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("openaiLink")}
              </a>.
            </p>
          </section>

          <Divider />

          {/* Contact Information */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">{t("privacySectionContactTitle")}</h2>
            <p className="text-base">
              {t("privacySectionContactText")}{" "}
              <a
                href="mailto:work@mattjmatthias.co"
                className="text-blue-500 underline hover:text-blue-700"
              >
                work@mattjmatthias.co
              </a>
              {i18n.language === 'jp' ?
                t("privacySectionContactText2")
                : "."
              }
            </p>
          </section>

          {/* Closing Statement */}
          <div className="text-left">
            <p className="text-xl">{t("privacyClosing")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
