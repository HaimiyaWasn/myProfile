import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

export const metadata = {
  title: "Wasn Portfolio"
}

export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutMe />
    </section>
  );
}
