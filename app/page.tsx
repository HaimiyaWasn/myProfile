import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MobileMenuFAB from "./components/MobileMenuFAB";
import NavbarFixedPortfolio from "./components/NavbarFixedPortfolio";
import TechStack from "./components/TechStack";
import ProjectPortfolio from "./components/ProjectPortfolio";
import PersonalJourney from "./components/PersonalJourney";

export default function Home() {
  return (
    <section id="top">
      <NavbarFixedPortfolio />

      <HeroSection />
      <AboutMe />
      <TechStack />
      <ProjectPortfolio />
      <PersonalJourney />

      {/* Mobile Menu FLoating App Button */}
      <MobileMenuFAB />
    </section>
  );
}
