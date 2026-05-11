import SideNav from '@/components/SideNav';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import WritingSection from '@/components/sections/WritingSection';
import ExperimentsSection from '@/components/sections/ExperimentsSection';

const Index = () => {
  return (
    <div className="relative">
      <SideNav />
      <MobileNav />
      <main className="lg:ml-16">
        <HeroSection />
        <ProcessSection />
        <SkillsSection />
        <ProjectsSection />
        <WritingSection />
        <ExperimentsSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
