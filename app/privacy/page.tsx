// pages/privacy.js

import Divider from "@/components/ui/Divider";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 min-h-screen w-full">
        {/* Container for content */}
        <div className="md:flex w-full md:justify-between">
          {/* Left section with navigation */}
          <div className="text-left">
            <Link
              href="/"
              className="bg-black h-fit min-w-[100px] text-white py-2 md:px-4 flex-1 hover:bg-gray-800 mb-8"
            >
              &lt; Back
            </Link>
            <h1 className="text-4xl mt-8">Privacy Policy</h1>
            <h2 className="md:text-md text-md uppercase">
              Privacy Matters
            </h2>
          </div>
        </div>

        <div className="text-lg mt-8">
          <p>
            This privacy policy outlines how information is handled and protected.
          </p>

          {/* Privacy Details Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">1. ChatGPT Conversations</h2>
            <p className="text-base">
              ChatGPT conversations remain private between you and OpenAI and are not accessible to this website.
            </p>
          </section>

          {/* Analytics Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">2. Google Analytics</h2>
            <p className="text-base">
              Google Analytics is used to monitor the service’s usage and popularity. This data helps in understanding user engagement and improving the service. Only anonymous data is collected; personal information is not tracked.
            </p>
          </section>

          {/* Free Service Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">3. Free and Ad-Free Service</h2>
            <p className="text-base">
              The service is completely free to use and does not contain any advertisements. This isn’t magic, we’ve just been careful to design the service to be able to use free hosting services and we don’t believe everything should be about making money.
            </p>
          </section>

          {/* OpenAI Data Usage Section */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">4. OpenAI Data Usage</h2>
            <p className="text-base">
              Unless opted out, OpenAI may use conversation data to enhance and improve their models. For more detailed information, refer to <a href="https://openai.com/privacy" className="text-blue-500 underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">OpenAI’s Privacy Policy</a>.
            </p>
          </section>

          <Divider />

          {/* Contact Information */}
          <section className="my-8">
            <h2 className="text-2xl mb-2">5. Contact Information</h2>
            <p className="text-base">
              For any privacy-related inquiries, please send an email to <a href="mailto:work@mattjmatthias.co" className="text-blue-500 underline hover:text-blue-700">work@mattjmatthias.co</a>.
            </p>
          </section>

          {/* Closing Statement */}
          <div className="text-left">
            <p className="text-xl">
              Thank you for trying this service 💛
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
