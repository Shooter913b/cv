import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import ExperiencePreview from '@/components/sections/ExperiencePreview';
import SkillsSection from '@/components/sections/SkillsSection';
import Contact from '@/components/Contact';
import { getFeaturedProjects } from '@/lib/projects';

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <ProjectsPreview projects={projects} />
        <ExperiencePreview />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
