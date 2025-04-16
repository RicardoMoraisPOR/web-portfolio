import SvgCareerRaise from '@assets/Icons/CareerRaise';
import SvgCertificationFile from '@assets/Icons/CertificationFile';
import SvgGraduation from '@assets/Icons/Graduation';
import SvgInterview from '@assets/Icons/Interview';
import acinFavicon from '@assets/acin-logo.png';
import escoFavicon from '@assets/esco-logo.png';
import nextbittFavicon from '@assets/nextbitt-logo.png';
import wigFavicon from '@assets/wig-logo.png';

type TimelineAchievementsProps = {
  iconComponent: JSX.Element;
  year: number;
  description: string;
};

type TimelineItemProps = {
  id: string;
  companyName?: string;
  companyLink?: string;
  companyJob: string;
  companyFavicon?: string;
  companyStart: string;
  companyEnd: string;
  descriptionTexts: Array<string>;
  achievementsTexts?: Array<TimelineAchievementsProps>;
};

export const TIMELINE_LIST: Array<TimelineItemProps> = [
  {
    id: 'nextbitt',
    companyName: 'Nextbitt',
    companyLink: 'https://www.nextbitt.com/',
    companyJob: 'Software Engineer',
    companyFavicon: nextbittFavicon,
    companyStart: 'Mar 2024',
    companyEnd: 'Present',
    descriptionTexts: [
      'The place where I am currently working as a Software Engineer on the Tech Innovation Team, leading Frontend development and architecting a new front-end framework and UI library.',
      "I'm excited to contribute to projects that emphasize sustainability, a cause I am devoted about.",
    ],
  },
  {
    id: 'acin',
    companyName: 'ACIN Group',
    companyLink: 'https://acin.pt/',
    companyJob: 'Front-end Developer',
    companyFavicon: acinFavicon,
    companyStart: 'Feb 2021',
    companyEnd: 'Mar 2024',
    descriptionTexts: [
      'During this time, I grew rapidly, starting as a Junior Front-end Developer on the internal UI Library and advancing to a Senior Front-end Team Leader role in a span of 3 years.',
      'I’m grateful to Sofia for the invaluable opportunities she provided.',
    ],
    achievementsTexts: [
      {
        iconComponent: <SvgCareerRaise />,
        year: 2023,
        description:
          'Promoted to second-in-command of the team and leader of the Front-end',
      },
      {
        iconComponent: <SvgCareerRaise />,
        year: 2023,
        description: 'Promoted to Maintainer of the Internal UI Library.',
      },
      {
        iconComponent: <SvgInterview />,
        year: 2023,
        description:
          'Responsible for independently conducting candidate interviews as a Senior Developer.',
      },
      {
        iconComponent: <SvgCareerRaise />,
        year: 2023,
        description: 'Promoted from Mid to Senior Front-end Developer',
      },
      {
        iconComponent: <SvgInterview />,
        year: 2022,
        description:
          'Responsible for assisting a Senior Developer in interviewing new candidates.',
      },
      {
        iconComponent: <SvgCareerRaise />,
        year: 2022,
        description: 'Promoted from Junior to Mid Front-end Developer',
      },
    ],
  },
  {
    id: 'wig',
    companyName: 'WIG - Work is Good',
    companyLink: 'https://www.wig.pt/',
    companyJob: 'Software Developer',
    companyFavicon: wigFavicon,
    companyStart: 'Sep 2018',
    companyEnd: 'Oct 2020',
    descriptionTexts: [
      'Worked as a Software Developer focused on web and mobile development within the Microsoft ecosystem.',
      'Starting as an intern, faced various challenges, and gained valuable lessons with the support and patience of João, for which I am grateful.',
    ],
    achievementsTexts: [
      {
        iconComponent: <SvgCareerRaise />,
        year: 2019,
        description: 'Promoted from Intern to Junior Developer',
      },
    ],
  },
  {
    id: 'esco',
    companyJob: 'CTE in CSMPT',
    companyFavicon: escoFavicon,
    companyStart: 'Sep 2015',
    companyEnd: 'Jun 2018',
    descriptionTexts: [
      'During this 3 years period, I completed the Computer Systems Management and Programming Technician (CSMPT), a comprehensive Technical Course Education (CTE) at ESCO in Torres Vedras.',
      'This provided me with a solid foundation in various aspects of system management, software development and technical troubleshooting.',
    ],
    achievementsTexts: [
      {
        iconComponent: <SvgGraduation />,
        year: 2018,
        description: 'CTE Graduation',
      },
      {
        iconComponent: <SvgCertificationFile />,
        year: 2018,
        description: 'Cisco Networking Academy® - CCNA1 Routing and Switching',
      },
      {
        iconComponent: <SvgCertificationFile />,
        year: 2018,
        description:
          'Letter of Recommendation by Chuck Robbins, CEO at Cisco Systems.',
      },
    ],
  },
];
