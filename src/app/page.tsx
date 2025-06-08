import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
    </>
  );
}