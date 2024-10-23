// pages/index.js

import Image from 'next/image';
import TourStop from '@/components/ui/TourStop';
import Castlefield from '@/components/ui/stops/Castlefield';
import Link from 'next/link';
import FriedrichEngels from '@/components/ui/stops/FriedrichEngels';
import StPetersField from '@/components/ui/stops/StPetersField';
import EmmelinePankhurst from '@/components/ui/stops/EmmelinePankhurst';
import NorthernQuarter from '@/components/ui/stops/NorthernQuarter';
import Ancoats from '@/components/ui/stops/Ancoats';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:p-16 p-8 h-full w-full">
        {/* Container for content and buttons */}
        <div className="md:flex w-full md:justify-between">
          {/* Left section with text */}
          <div className="text-left">
            <h1 className="text-4xl">MANCHESTER <span className="whitespace-nowrap">1750–1920</span></h1>
            <h2 className="md:text-xl text-md">
              AN AI TOUR OF INDUSTRY AND SOCIAL ACTIVISM
            </h2>
            <p className="mt-2 flex items-center justify-start">
              <Image
                  src="/walking.png"
                  alt="Walking Icon"
                  width={20}
                  height={20}
                  className="mr-2 filter grayscale brightness-0"
                />
                2 hours walking, mostly flat
            </p>
          </div>

          {/* Right section with buttons */}
          <div className="flex md:flex-col md:text-xl text-lg flex-row md:gap-y-2 md:gap-x-0 gap-x-4 mt-8 md:mt-0 md:mb-0 mb-4 md:ml-8">
            <Button href="./before-you-start" label="Before you start"/>
            <Button href="./before-you-start" label="View tour route"/>
          </div>
        </div>

        <TourStop title="Castlefield" sub="The Industrial Revolution"><Castlefield/></TourStop>
        <TourStop title="Friedrich Engels" sub="A Statue To Social Progress"><FriedrichEngels/></TourStop>
        <TourStop title="St. Peter's Field" sub="The Peterloo Massacre"><StPetersField/></TourStop>
        <TourStop title="Emmeline Pankhurst" sub="The Suffragettes"><EmmelinePankhurst/></TourStop>
        <TourStop title="Northern Quarter" sub="The Old Mills of Cottonopolis"><NorthernQuarter/></TourStop>
        <TourStop title="Ancoats" sub="The World's 1st Industrial Suburb"><Ancoats/></TourStop>
      </div>
      <footer className="md:p-16 p-8">
        <Link href="/privacy" className="mr-8">Privacy Policy</Link>        
        <Link href="/before-you-start" className="mr-8">Support</Link>
      </footer>
    </div>
  );
}
