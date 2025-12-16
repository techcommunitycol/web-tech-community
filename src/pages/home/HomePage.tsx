import Page from "../../app/layout/Page";
import Hero from "./Hero";
import AboutSection from "../../features/events/sections/AboutSection";
import WhatWeDoSection from "../../features/what-we-do/sections/WhatWeDoSection";
import AlliesSection from "../../features/allies/AlliesSection";
import TeamSection from "../../features/team/TeamSection";
import Connect from "../../features/connect/connectSection";

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <AlliesSection />
      <TeamSection />
      <Connect />
    </Page>
  );
}
