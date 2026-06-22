import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import MobileMenuFAB from "./components/MobileMenuFAB";

export const metadata = {
  title: "Wasn Portfolio | Frontend Developer Specialist",
};

export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutMe />

      {/* Mobile Menu FLoating App Button */}
      <MobileMenuFAB />
    </section>
  );
}
