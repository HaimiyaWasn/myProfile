import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MobileMenuFAB from "./components/MobileMenuFAB";
import NavbarFixedPortfolio from "./components/NavbarFixedPortfolio";

export default function Home() {
  return (
    <section id="top">
      <NavbarFixedPortfolio />

      <HeroSection />
      <AboutMe />

      {/* Mobile Menu FLoating App Button */}
      <MobileMenuFAB />
    </section>
  );
}
