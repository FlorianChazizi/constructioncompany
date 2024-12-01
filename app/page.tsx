import Head from 'next/head';

import Hero from "./components/Hero";
import { OurServices } from "./components/OurServices";
import OurWorks from "./components/OurWorks";
import { Footer } from './components/Footer';
import WhoWeAre from './components/WhoWeAre';
import ContactUs from './components/ContanctUs';
import Map from './components/Map';
export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <Head>
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.example.com/my-page" />
      </Head>

      <Hero />
      <WhoWeAre />
      <OurServices />
      <OurWorks /> 
      <ContactUs />
      <Map />

      <Footer />
</div>
  );
}
