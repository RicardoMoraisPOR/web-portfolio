import SvgGsapGreensock from '@assets/Icons/GsapGreensock';
import HatLogo from '@assets/Icons/HatLogo';
import SvgLottieFilesLogo from '@assets/Icons/LottieFilesLogo';
import SvgRadixUi from '@assets/Icons/RadixUi';
import SvgStyledComponentsLogo from '@assets/Icons/StyledComponentsLogo';
import TailwindJssLogo from '@assets/Icons/TailwindJssLogo';
import SvgVercelLogo from '@assets/Icons/VercelLogo';
import SvgVite from '@assets/Icons/Vite';
import Logo from '@components/Logo';
import {
  SiBun,
  SiJss,
  SiPnpm,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVitest,
} from '@icons-pack/react-simple-icons';
import Theme from '@theme/theme.types';
import { SVGProps } from 'react';

interface ProjectSkillProps {
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  iconComponent?: JSX.Element;
  name: string;
}

interface ProjectProps {
  title: string;
  icon: JSX.Element;
  link?: string | (() => void);
  description?: string;
  skills: Array<ProjectSkillProps>;
}

export const PROJECTS_LIST = (theme: Theme): Array<ProjectProps> => [
  {
    icon: <TailwindJssLogo fill={theme.palette.primary} height={90} />,
    title: 'Tailwind to JSS',
    link: 'https://tw-to-jss.vercel.app/',
    description:
      'tw2jss is an online utility tool that transforms Tailwind CSS classes into css-in-js style objects.',
    skills: [
      {
        name: 'Bun',
        iconComponent: (
          <SiBun height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Vite',
        icon: SvgVite,
      },
      {
        name: 'JSS',
        iconComponent: (
          <SiJss height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Tailwind',
        iconComponent: (
          <SiTailwindcss height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Vitest',
        iconComponent: (
          <SiVitest height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Testing Library',
        iconComponent: (
          <SiTestinglibrary
            height={15}
            width={15}
            fill={theme.palette.primary}
          />
        ),
      },
      { name: 'Vercel', icon: SvgVercelLogo },
      {
        name: 'React',
        iconComponent: (
          <SiReact height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Typescript',
        iconComponent: (
          <SiTypescript height={15} width={15} fill={theme.palette.primary} />
        ),
      },
    ],
  },
  {
    icon: <Logo fill={theme.palette.primary} $height={70} />,
    title: 'Portfolio Website',
    link: 'https://ricardomorais.dev',
    description:
      'This is my personal portfolio website, the one you are visiting right now, it was built using my favorite tools and technologies.',
    skills: [
      {
        name: 'pnpm',
        iconComponent: (
          <SiPnpm height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      { name: 'Radix UI', icon: SvgRadixUi },
      {
        name: 'Lottie',
        icon: SvgLottieFilesLogo,
      },
      { name: 'GSAP', icon: SvgGsapGreensock },
      {
        name: 'Vite',
        icon: SvgVite,
      },
      { name: 'Styled Components', icon: SvgStyledComponentsLogo },
      { name: 'Vercel', icon: SvgVercelLogo },
      {
        name: 'React',
        iconComponent: (
          <SiReact height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Typescript',
        iconComponent: (
          <SiTypescript height={15} width={15} fill={theme.palette.primary} />
        ),
      },
    ],
  },
  {
    icon: (
      <HatLogo
        fill={theme.palette.primary}
        secondaryfill={theme.palette.secondary}
        height={90}
      />
    ),
    title: 'HexAlphaTool',
    link: 'https://hex-alpha-tool.com/',
    description:
      'HexAlphaTool (HAT) is an online utility tool that allows users to add alpha transparency to hex color codes on the fly.',
    skills: [
      {
        name: 'Bun',
        iconComponent: (
          <SiBun height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Vite',
        icon: SvgVite,
      },
      { name: 'Vercel', icon: SvgVercelLogo },
      {
        name: 'React',
        iconComponent: (
          <SiReact height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Typescript',
        iconComponent: (
          <SiTypescript height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Shadcn',
        iconComponent: (
          <SiShadcnui height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      {
        name: 'Tailwind',
        iconComponent: (
          <SiTailwindcss height={15} width={15} fill={theme.palette.primary} />
        ),
      },
      { name: 'GSAP', icon: SvgGsapGreensock },
    ],
  },
];
