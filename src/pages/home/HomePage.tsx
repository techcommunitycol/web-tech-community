import Page from "../../app/layout/Page";
import Hero from "./Hero";
import AboutSection from "../../features/about/AboutSection";
import WhatWeDoSection from "../../features/what-we-do/WhatWeDoSection";
import AlliesSection from "../../features/allies/AlliesSection";
import TeamSection from "../../features/team/TeamSection";

export default function HomePage() {
  return (
    <Page>
      <Hero />
      <AboutSection />
      <WhatWeDoSection />
      <AlliesSection />
      <TeamSection />
    </Page>
  );
}
