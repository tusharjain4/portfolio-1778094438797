'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import portfolioData from "@/data/portfolio.json"; // Adjusted path to be relative to tsconfig paths

export default function Home() {
  const data = portfolioData; // Directly use imported JSON data

  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar name={data.name} />
      <main>
        <Hero name={data.name} tagline={data.tagline} />
        <About
          name={data.name}
          about={data.about}
          experience={data.experience}
          currentRole={data.currentRole}
          highlights={data.highlights}
        />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Journey highlights={data.highlights} />
        <Contact email={data.contact.email} />
      </main>
      <Footer
        email={data.contact.email}
        linkedin={data.contact.linkedin}
        github={data.contact.github}
        name={data.name}
      />
    </div>
  );
}