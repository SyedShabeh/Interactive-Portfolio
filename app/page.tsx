"use client";
import LetterGlitch from "@/components/LetterGlitch";
import ProfileCard from "@/components/ProfileCard";
import TextType from "@/components/TextType";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollingRobot from "@/components/ScrollingRobot";

export default function Home() {
  return (
    <div className="px-5 scroll-smooth bg-black">
      {/* Hero Section with Glitch Background */}
      <div id="home" className="font-sans min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 relative overflow-hidden">
        {/* Background for Home only */}
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchSpeed={50}
            glitchColors={["#00ff41", "#00ff00", "#008f11", "#00ffff"]}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center gap-12 max-w-6xl w-full relative z-10">
          {/* LEFT: Profile Card */}
          <div className="flex-1 flex justify-center md:justify-start">
            <ProfileCard
              name="Syed Shabeh"
              title="Frontend Engineer"
              handle="shabeh"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/shabeh.png"
              iconUrl="/code.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          {/* RIGHT: Text + Buttons */}
          <div className="flex-1 text-center md:text-left text-5xl font-extrabold">
            <h1 className="text-xl text-white/80 mb-2">Syed Shabeh ul Hassan Naqvi</h1>
            <TextType
              text={[
                "Frontend Developer!",
                "Frontend Designer!",
                "Frontend Engineer!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-white"
            />
          </div>
        </div>
      </div>

      {/* New Sections with solid black background */}
      <div className="relative z-10 bg-black">
        <ScrollingRobot />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-white/40 border-t border-white/10 bg-black">
        <p>© {new Date().getFullYear()} Syed Shabeh. All rights reserved.</p>
      </footer>
    </div>
  );
}
