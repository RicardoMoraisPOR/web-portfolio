import FlareCard from '@components/FlareCard/FlareCard';
import GlowEffect from '@components/GlowEffect/GlowEffect';
import Tooltip from '@components/Tooltip/Tooltip';
import { PROJECTS_LIST } from '@constants/projects';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';
import {
  ProjectContentWrapper,
  ProjectDescription,
  ProjectImageWrapper,
  ProjectInnerWrapper,
  ProjectLayout,
  ProjectSkills,
  ProjectsWrapper,
  ProjectTitle,
  ProjectWrapper,
} from './projects.styles';

const ProjectsSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useGSAP(() => {
    if (projectsRef.current) {
      const items = projectsRef.current.children;
      gsap
        .timeline({
          paused: true,
        })
        .from(items, {
          opacity: 0,
          y: 100,
          stagger: 0.15,
          duration: 0.4,
          ease: 'circ.out',
          delay: 0.1,
        })
        .to(items, {
          y: 0,
          opacity: 1,
        })
        .play();
    }
  }, []);

  const projects = useMemo(() => {
    return PROJECTS_LIST(theme);
  }, [theme]);

  return (
    <ProjectsWrapper ref={projectsRef}>
      {projects.map((projectData) => (
        <div style={{ width: '100%' }} key={projectData.title}>
          <ProjectWrapper>
            <GlowEffect $transparency={15}>
              <FlareCard $intensity={70} $borderRadius={5} $disableTouch>
                <ProjectLayout>
                  <ProjectImageWrapper>{projectData.icon}</ProjectImageWrapper>
                  <ProjectInnerWrapper>
                    <ProjectContentWrapper>
                      {projectData.link &&
                        typeof projectData.link === 'string' && (
                          <ProjectTitle to={projectData.link} target="_blank">
                            {projectData.title}
                          </ProjectTitle>
                        )}
                      <ProjectDescription>
                        {projectData.description}
                      </ProjectDescription>
                    </ProjectContentWrapper>
                    <ProjectSkills>
                      {projectData.skills.map((skillData) => (
                        <Tooltip
                          name={`${projectData.title}-${skillData.name}`}
                          tooltipContent={skillData.name}
                          key={skillData.name}
                        >
                          {skillData.iconComponent ??
                            skillData.icon?.({
                              height: 15,
                              width: 15,
                              fill: theme.palette.primary,
                            })}
                        </Tooltip>
                      ))}
                    </ProjectSkills>
                  </ProjectInnerWrapper>
                </ProjectLayout>
              </FlareCard>
            </GlowEffect>
          </ProjectWrapper>
        </div>
      ))}
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
