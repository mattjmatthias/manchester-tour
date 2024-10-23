// pages/index.js

import Divider from "@/components/ui/Divider";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function BeforeYouStart() {
  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 h-full w-full">
        {/* Container for content and buttons */}
        <div className="md:flex w-full md:justify-between">
          {/* Left section with text */}
          <div className="text-left">
            <Button className="text-xl" href="/" label="&lt; Back" />
            <h1 className="text-4xl mt-8">Before you start</h1>
            <h2 className="md:text-md text-md uppercase">
              Instructions for what you need
            </h2>
          </div>
        </div>

        <div className="text-lg mt-8">
          <p>
            To follow this AI tour and get the most interactive, engaging
            experience from it, you will need :
          </p>

          {/* ChatGPT Account Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">1. A ChatGPT Account</h2>
            <p className="text-base">
              We use a <strong>custom GPT</strong> to provide personalised
              tours, so you’ll need a{" "}
              <a
                href="https://chat.openai.com/signup"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChatGPT account
              </a>{" "}
              (it’s free). For privacy-minded individuals, you can{" "}
              <a
                href="https://openai.com/index/start-using-chatgpt-instantly/"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                opt out of training
              </a>{" "}
              if you prefer your conversations not to be used for improving
              ChatGPT models.
            </p>
            <p className="text-base mt-2">
              So you can speak to the AI using voice, we recommend installing
              the app on your phone.
            </p>
            <div className="flex space-x-4 items-center">
              <a href="https://apps.apple.com/us/app/chatgpt/id6448311069">
                <Image
                  src="/appstore.svg"
                  height={70}
                  width={120}
                  layout="intrinsic"
                  alt="Download with App Store"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.openai.chatgpt">
                <Image
                  src="/google-play.png"
                  height={95}
                  width={156}
                  layout="intrinsic"
                  alt="Download with App Store"
                />
              </a>
            </div>
            <p className="text-base">
              You can read more about how to talk to the AI using voice in the
              app on{" "}
              <a
                href="https://help.openai.com/en/articles/8400625-voice-mode-faq%3F.flac"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI’s support page
              </a>
              .
            </p>
          </section>

          {/* Music Setup Section */}
          <section className="mb-8">
            <h2 className="text-2xl mb-2">2. Music Setup</h2>
            <p className="text-base">
              To enhance your tour with music, we provide links to either{" "}
              <a
                href="https://www.spotify.com"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>{" "}
              or{" "}
              <a
                href="https://www.apple.com/apple-music/"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Music
              </a>{" "}
              account. If you don’t use either service we also provide music
              links using through{" "}
              <a
                href="https://www.youtube.com"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              , though you might encounter some ads if you’re using a free
              account.
            </p>
          </section>

          <Divider />

          {/* Call to Action */}
          <div className="text-left">
            <p className="text-xl mb-4">Ready to get started?</p>
          </div>
          <Button
            className="text-xl"
            href="https://chatgpt.com/g/g-GGeTTmmjw-manchester-ai-tour-guide"
            label="Open the AI in ChatGPT"
          />
        </div>
      </div>
      <footer className="md:p-16 p-8 text-sm">
        <p>
          Google Play and the Google Play logo are trademarks of Google LLC.
          &ldquo;Download on the App Store&rdquo; is a trademark of Apple Inc.
        </p>
      </footer>
    </div>
  );
}
