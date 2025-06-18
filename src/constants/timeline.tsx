import acinFavicon from '@assets/acin-logo.png';
import escoFavicon from '@assets/esco-logo.png';
import SvgStyledComponentsLogo from '@assets/Icons/StyledComponentsLogo';
import nextbittFavicon from '@assets/nextbitt-logo.png';
import santanderFavicon from '@assets/santander-logo.png';
import wigFavicon from '@assets/wig-logo.png';
import {
  IconType,
  SiBlazor,
  SiCsharp,
  SiCss3,
  SiDotnet,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiStorybook,
  SiTypescript,
  SiXamarin,
} from '@icons-pack/react-simple-icons';
import { SVGProps } from 'react';

type TimelineToolsProps = {
  iconComponent?: IconType;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  description: string;
};

type TimelineItemProps = {
  id: string;
  companyName?: string;
  companyLink?: string;
  companyJob: string;
  title?: string;
  jobArea?: string;
  companyFavicon?: string;
  companyStart: string;
  companyEnd: string;
  descriptionTexts: Array<string>;
  mainTools?: Array<TimelineToolsProps>;
};

export const TIMELINE_LIST: Array<TimelineItemProps> = [
  {
    id: 'santander',
    companyName: 'Santander Auto Software',
    companyLink: 'https://www.santanderconsumer.com/',
    companyJob: 'Front-end Engineer',
    title: 'Industry:',
    jobArea: 'Fintech',
    companyFavicon: santanderFavicon,
    companyStart: 'Jul 2025',
    companyEnd: 'Present',
    descriptionTexts: [
      'Working as a Front-end Engineer, collaborating with cross-functional teams to deliver high-quality user experiences and implement responsive, accessible interfaces.',
    ],
    mainTools: [
      { description: 'React', iconComponent: SiReact },
      { description: 'Typescript', iconComponent: SiTypescript },
    ],
  },
  {
    id: 'nextbitt',
    companyName: 'Nextbitt',
    companyLink: 'https://www.nextbitt.com/',
    companyJob: 'Software Engineer',
    title: 'Industry:',
    jobArea: 'Sustainability & Asset Management',
    companyFavicon: nextbittFavicon,
    companyStart: 'Mar 2024',
    companyEnd: 'Jul 2025',
    descriptionTexts: [
      'Worked as a Software Engineer on the Tech Innovation Team, leading Front-end development and architecting a new front-end framework and UI library.',
    ],
    mainTools: [
      { description: 'React', iconComponent: SiReact },
      { description: 'Typescript', iconComponent: SiTypescript },
      { description: 'Storybook', iconComponent: SiStorybook },
      { description: 'Next.js', iconComponent: SiNextdotjs },
      { description: 'MUI', iconComponent: SiMui },
    ],
  },
  {
    id: 'acin',
    companyName: 'ACIN Group',
    companyLink: 'https://acin.pt/',
    companyJob: 'Front-end Developer',
    title: 'Industry:',
    jobArea: 'Healthcare & Digital Signatures / Certifications',
    companyFavicon: acinFavicon,
    companyStart: 'Feb 2021',
    companyEnd: 'Mar 2024',
    descriptionTexts: [
      'During this time, I grew rapidly, starting as a Junior Front-end Developer on the internal UI Library and advancing to a Senior role in a span of 3 years.',
    ],
    mainTools: [
      { description: 'React', iconComponent: SiReact },
      { description: 'Typescript', iconComponent: SiTypescript },
      { description: 'Storybook', iconComponent: SiStorybook },
      { description: 'GraphQL', iconComponent: SiGraphql },
      { description: 'StyledComponents', icon: SvgStyledComponentsLogo },
    ],
  },
  {
    id: 'wig',
    companyName: 'WIG - Work is Good',
    companyLink: 'https://www.wig.pt/',
    companyJob: 'Software Developer',
    title: 'Industry:',
    jobArea: 'Real Estate & Logistics',
    companyFavicon: wigFavicon,
    companyStart: 'Sep 2018',
    companyEnd: 'Oct 2020',
    descriptionTexts: [
      'Worked as a Software Developer focused on web and mobile development within the Microsoft ecosystem.',
      'Starting as an intern, faced various challenges and gained valuable lessons.',
    ],
    mainTools: [
      { description: 'Xamarin', iconComponent: SiXamarin },
      { description: 'C#', iconComponent: SiCsharp },
      { description: 'Javascript', iconComponent: SiJavascript },
      { description: 'ASP.NET Core', iconComponent: SiDotnet },
      { description: 'Blazor', iconComponent: SiBlazor },
    ],
  },
  {
    id: 'esco',
    companyJob: 'CTE in CSMPT',
    jobArea: 'Education',
    companyFavicon: escoFavicon,
    companyStart: 'Sep 2015',
    companyEnd: 'Jun 2018',
    descriptionTexts: [
      'During this 3 years period, I completed the Computer Systems Management and Programming Technician (CSMPT), a comprehensive Technical Course Education (CTE) at ESCO in Torres Vedras.',
      'This provided me with a solid foundation in various aspects of system management, software development and technical troubleshooting.',
    ],
    mainTools: [
      { description: 'PHP', iconComponent: SiPhp },
      { description: 'C#', iconComponent: SiCsharp },
      { description: 'Javascript', iconComponent: SiJavascript },
      { description: 'CSS', iconComponent: SiCss3 },
      { description: 'HTML', iconComponent: SiHtml5 },
      { description: 'React', iconComponent: SiReact },
    ],
  },
];
