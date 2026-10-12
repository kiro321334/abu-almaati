import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Identity from "@/components/sections/Identity";
import Collaborators from "@/components/sections/Collaborators";
import Reels from "@/components/sections/Reels";
import Services from "@/components/sections/Services";
import Pipeline from "@/components/sections/Pipeline";
import Packages from "@/components/sections/Packages";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Identity />
        <Collaborators />
        <Reels />
        <Services />
        <Pipeline />
        {/* <Packages /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
