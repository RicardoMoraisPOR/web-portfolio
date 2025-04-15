import MetaTag from '@components/MetaTag';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ProjectsPageWrapper } from './projects.styles';
import ProjectsSection from './ProjectsSection';

const ProjectsPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          zIndex: 2,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <ProjectsPageWrapper ref={projectsRef}>
      <MetaTag />
      <h1>Projects</h1>
      <ProjectsSection />
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
