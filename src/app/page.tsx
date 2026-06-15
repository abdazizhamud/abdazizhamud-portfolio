import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/sections/Hero";
import ProfessionalExperience from "@/src/components/sections/ProfessionalExperience";
import OrganizationalExperience from "@/src/components/sections/OrganizationalExperience";
import SkillsMatrix from "@/src/components/sections/SkillsMatrix";
import Projects from "@/src/components/sections/Projects";
import Certificates from "@/src/components/sections/Certificates";
import About from "@/src/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ProfessionalExperience />
        <OrganizationalExperience />
        <SkillsMatrix />
        <Projects />
        <Certificates />
      </main>

      <Footer />
    </>
  );
}