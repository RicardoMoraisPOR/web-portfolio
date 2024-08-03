import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import { alphaHexConverter } from '../theme/AppThemeUtils';
import FlareCard from '../components/FlareCard';
import GlowEffect from '../components/GlowEffect';
import {
  ChangeEventHandler,
  SVGProps,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import * as Select from '@radix-ui/react-select';
import SvgVite from '../assets/Icons/Vite';
import SvgGsapGreensock from '../assets/Icons/GsapGreensock';
import SvgLottieFilesLogo from '../assets/Icons/LottieFilesLogo';
import SvgStyledComponentsLogo from '../assets/Icons/StyledComponentsLogo';
import SvgVercelLogo from '../assets/Icons/VercelLogo';
import SvgStitches from '../assets/Icons/Stitches';
import {
  SiReact,
  SiMui,
  SiRollupdotjs,
  SiTestinglibrary,
  SiRadixui,
  IconType,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiBun,
  SiVitest,
  SiPlaywright,
  SiJavascript,
  SiJss,
  SiCss3,
  SiOpenai,
  SiLinear,
  SiVisualstudiocode,
  SiVisualstudio,
  SiJira,
  SiGit,
  SiAzuredevops,
  SiAzurepipelines,
  SiGitlab,
  SiGithub,
  SiSlack,
  SiMicrosoftteams,
  SiXamarin,
  SiDotnet,
  SiHtml5,
  SiPrettier,
  SiEslint,
  SiI18next,
  SiStorybook,
  SiJest,
  SiNotion,
  SiCsharp,
  SiWindowsterminal,
  SiFirebase,
  SiJquery,
  SiBlazor,
  SiUmbraco,
  SiWordpress,
  SiDocker,
  SiYarn,
  SiPnpm,
  SiNpm,
  SiWebpack,
  SiLinux,
  SiWindows11,
  SiDotenv,
  SiMapbox,
  SiLeaflet,
  SiShadcnui,
  SiGraphql,
  SiMdx,
  SiZod,
  SiLodash,
  SiReacthookform,
  SiReactrouter,
  SiReactquery,
  SiInsomnia,
  SiPostman,
  SiJson,
  SiFormik,
  SiDiscord,
  SiAndroidstudio,
} from '@icons-pack/react-simple-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const techs = () => {
  const shuffleArray = (array: Array<TechItemProps>) => {
    const shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  return shuffleArray([
    {
      iconComponent: SiTypescript,
      name: 'Typescript',
      category: ['lang', 'love', 'using'],
    },
    {
      iconComponent: SiReact,
      name: 'React',
      category: ['framework', 'love', 'using'],
    },
    {
      icon: SvgVite,
      name: 'Vite',
      category: ['framework', 'love', 'using'],
    },
    {
      name: 'Radix UI',
      iconComponent: SiRadixui,
      category: ['ui-ux', 'love', 'using'],
    },
    {
      name: 'Stitches',
      icon: SvgStitches,
      category: ['ui-ux', 'love', 'using'],
    },
    {
      name: 'Lottie',
      icon: SvgLottieFilesLogo,
      category: ['ui-ux', 'love', 'using'],
    },
    {
      name: 'GSAP',
      icon: SvgGsapGreensock,
      category: ['ui-ux', 'love', 'using'],
    },
    {
      name: 'Styled Components',
      icon: SvgStyledComponentsLogo,
      category: ['ui-ux', 'using'],
    },
    {
      name: 'Vercel',
      icon: SvgVercelLogo,
      category: ['cloud', 'love', 'using'],
    },
    {
      name: 'Testing Library',
      iconComponent: SiTestinglibrary,
      category: ['testing', 'love', 'using'],
    },
    {
      name: 'Rollup',
      iconComponent: SiRollupdotjs,
      category: ['bundler', 'love', 'using'],
    },
    {
      name: 'MUI',
      iconComponent: SiMui,
      category: ['ui-ux', 'using'],
    },
    {
      name: 'NextJS',
      iconComponent: SiNextdotjs,
      category: ['framework', 'not-using'],
    },
    {
      name: 'Tailwind',
      iconComponent: SiTailwindcss,
      category: ['ui-ux', 'not-using'],
    },
    {
      name: 'Node.js',
      iconComponent: SiNodedotjs,
      category: ['framework', 'using', 'hate'],
    },
    {
      name: 'Bun',
      iconComponent: SiBun,
      category: ['framework', 'not-using', 'love', 'bundler'],
    },
    {
      name: 'Vitest',
      iconComponent: SiVitest,
      category: ['testing', 'using', 'love'],
    },
    {
      name: 'Playwright',
      iconComponent: SiPlaywright,
      category: ['testing', 'using', 'love'],
    },
    {
      name: 'Javascript',
      iconComponent: SiJavascript,
      category: ['lang', 'using'],
    },
    {
      name: 'JSS',
      iconComponent: SiJss,
      category: ['ui-ux', 'using', 'love'],
    },
    {
      name: 'CSS',
      iconComponent: SiCss3,
      category: ['lang', 'using'],
    },
    {
      name: 'OpenAI',
      iconComponent: SiOpenai,
      category: ['web-tool', 'using', 'love'],
    },
    {
      name: 'Linear',
      iconComponent: SiLinear,
      category: ['web-tool', 'not-using', 'love'],
    },
    {
      name: 'VSCode',
      iconComponent: SiVisualstudiocode,
      category: ['env', 'using', 'love'],
    },
    {
      name: 'Visual Studio',
      iconComponent: SiVisualstudio,
      category: ['env', 'not-using', 'hate'],
    },
    {
      name: 'Android Studio',
      iconComponent: SiAndroidstudio,
      category: ['env', 'not-using', 'hate'],
    },
    {
      name: 'Jira',
      iconComponent: SiJira,
      category: ['web-tool', 'not-using', 'hate'],
    },
    {
      name: 'Git',
      iconComponent: SiGit,
      category: ['cloud', 'using'],
    },
    {
      name: 'Azure',
      iconComponent: SiAzuredevops,
      category: ['cloud', 'web-tool', 'using'],
    },
    {
      name: 'Azure Pipelines',
      iconComponent: SiAzurepipelines,
      category: ['cloud', 'using', 'love'],
    },
    {
      name: 'Gitlab',
      iconComponent: SiGitlab,
      category: ['cloud', 'not-using', 'love'],
    },
    {
      name: 'Github',
      iconComponent: SiGithub,
      category: ['cloud', 'using'],
    },
    {
      name: 'Slack',
      iconComponent: SiSlack,
      category: ['web-tool', 'not-using', 'love'],
    },
    {
      name: 'MS Teams',
      iconComponent: SiMicrosoftteams,
      category: ['web-tool', 'using', 'hate'],
    },
    {
      name: 'Xamarin',
      iconComponent: SiXamarin,
      category: ['framework', 'not-using'],
    },
    {
      name: 'ASP.NET core',
      iconComponent: SiDotnet,
      category: ['framework', 'not-using'],
    },
    {
      name: 'HTML',
      iconComponent: SiHtml5,
      category: ['lang', 'using'],
    },
    {
      name: 'Prettier',
      iconComponent: SiPrettier,
      category: ['framework', 'using'],
    },
    {
      name: 'Eslint',
      iconComponent: SiEslint,
      category: ['framework', 'using', 'love'],
    },
    {
      name: 'I18next',
      iconComponent: SiI18next,
      category: ['framework', 'using'],
    },
    {
      name: 'Storybook',
      iconComponent: SiStorybook,
      category: ['framework', 'testing', 'using', 'love'],
    },
    {
      name: 'Jest',
      iconComponent: SiJest,
      category: ['framework', 'testing', 'not-using'],
    },
    {
      name: 'Notion',
      iconComponent: SiNotion,
      category: ['web-tool', 'using'],
    },
    { name: 'C#', iconComponent: SiCsharp, category: ['lang', 'not-using'] },
    {
      name: 'Bash/Powershell',
      iconComponent: SiWindowsterminal,
      category: ['lang', 'using', 'love'],
    },
    {
      name: 'Firebase',
      iconComponent: SiFirebase,
      category: ['cloud', 'not-using'],
    },
    {
      name: 'Jquery',
      iconComponent: SiJquery,
      category: ['framework', 'not-using'],
    },
    {
      name: 'Blazor',
      iconComponent: SiBlazor,
      category: ['framework', 'not-using', 'hate'],
    },
    {
      name: 'Umbraco',
      iconComponent: SiUmbraco,
      category: ['framework', 'not-using', 'hate'],
    },
    {
      name: 'Wordpress',
      iconComponent: SiWordpress,
      category: ['framework', 'not-using', 'hate'],
    },
    {
      name: 'Docker',
      iconComponent: SiDocker,
      category: ['env', 'not-using', 'love'],
    },
    {
      name: 'yarn',
      iconComponent: SiYarn,
      category: ['framework', 'using'],
    },
    {
      name: 'pnpm',
      iconComponent: SiPnpm,
      category: ['framework', 'using', 'love'],
    },
    {
      name: 'npm',
      iconComponent: SiNpm,
      category: ['framework', 'not-using', 'hate'],
    },
    {
      name: 'Webpack',
      iconComponent: SiWebpack,
      category: ['bundler', 'not-using', 'hate'],
    },
    {
      name: 'Linux',
      iconComponent: SiLinux,
      category: ['env', 'not-using', 'love'],
    },
    {
      name: 'Windows',
      iconComponent: SiWindows11,
      category: ['env', 'using', 'love'],
    },
    {
      name: 'Dotenv',
      iconComponent: SiDotenv,
      category: ['framework', 'using'],
    },
    {
      name: 'Mapbox',
      iconComponent: SiMapbox,
      category: ['framework', 'not-using', 'love'],
    },
    {
      name: 'Leaflet',
      iconComponent: SiLeaflet,
      category: ['framework', 'not-using'],
    },
    {
      name: 'Shadcnui',
      iconComponent: SiShadcnui,
      category: ['ui-ux', 'not-using', 'love'],
    },
    {
      name: 'Graphql',
      iconComponent: SiGraphql,
      category: ['framework', 'not-using', 'love'],
    },
    {
      name: 'MDX',
      iconComponent: SiMdx,
      category: ['lang', 'using'],
    },
    {
      name: 'ZOD',
      iconComponent: SiZod,
      category: ['framework', 'using', 'love'],
    },
    {
      name: 'Lodash',
      iconComponent: SiLodash,
      category: ['framework', 'using', 'love'],
    },
    {
      name: 'React Hook Form',
      iconComponent: SiReacthookform,
      category: ['framework', 'not-using'],
    },
    {
      name: 'React Router',
      iconComponent: SiReactrouter,
      category: ['framework', 'using', 'love'],
    },
    {
      name: 'React Query',
      iconComponent: SiReactquery,
      category: ['framework', 'not-using', 'love'],
    },
    {
      name: 'Insomnia',
      iconComponent: SiInsomnia,
      category: ['web-tool', 'not-using'],
    },
    {
      name: 'Postman',
      iconComponent: SiPostman,
      category: ['web-tool', 'using'],
    },
    { name: 'JSON', iconComponent: SiJson, category: ['lang', 'using'] },
    {
      name: 'Formik',
      iconComponent: SiFormik,
      category: ['framework', 'using'],
    },
    {
      name: 'Discord',
      iconComponent: SiDiscord,
      category: ['web-tool', 'using', 'love'],
    },
  ] as Array<TechItemProps>);
};

const StyledInput = styled('input')(({ theme }) => ({
  flex: 1,
  background: 'none',
  border: '1px solid',
  padding: '10px',
  fontSize: '14px',
  outline: 'none',
  color: theme.palette.text,
  borderRadius: '4px',
  borderColor: alphaHexConverter(theme.palette.primary, 60),
  '&:hover': {
    borderColor: theme.palette.primary,
  },
  '&:focus-visible': {
    outline: `1px dashed ${alphaHexConverter(theme.palette.primary, 30)}`,
    outlineOffset: '2px',
    borderColor: theme.palette.primary,
  },
  '&::placeholder': {
    color: alphaHexConverter(theme.palette.text, 20),
  },
}));

const TechItem = styled('div')({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

const Trigger = styled(Select.Trigger)(({ theme }) => ({
  all: 'unset',
  height: '38px',
  minWidth: '200px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 15px',
  fontSize: '13px',
  lineHeight: '1',
  gap: '5px',
  backgroundColor: 'none',
  color: theme.palette.text,
  border: '1px solid',
  borderColor: alphaHexConverter(theme.palette.primary, 60),
  '&:hover': {
    borderColor: theme.palette.primary,
  },
  '&:focus-visible': {
    outline: `1px dashed ${alphaHexConverter(theme.palette.primary, 30)}`,
    outlineOffset: '2px',
    borderColor: theme.palette.primary,
  },
}));

const Content = styled(Select.Content)(({ theme }) => ({
  overflow: 'hidden',
  backgroundColor: theme.palette.primary,
  borderRadius: '6px',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.12)',
  zIndex: 2,
  minWidth: 'var(--radix-select-trigger-width)',
  maxHeight: 'var(--radix-select-content-available-height)',
}));

const Viewport = styled(Select.Viewport)({
  padding: '5px',
});

const Item = styled(Select.Item)(({ theme }) => ({
  all: 'unset',
  cursor: 'pointer',
  fontSize: '12px',
  lineHeight: '1',
  color: theme.palette.background,
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',
  '&[data-highlighted]': {
    backgroundColor: theme.palette.secondary,
    color: theme.palette.text,
  },
}));

const SearchWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  [theme.breakpoints.max.mobile]: {
    flexDirection: 'column',
  },
}));

const Label = styled(Select.Label)(({ theme }) => ({
  padding: '0 25px',
  fontSize: '12px',
  lineHeight: '25px',
  color: alphaHexConverter(theme.palette.secondary, 50),
}));

const Separator = styled(Select.Separator)(({ theme }) => ({
  height: '1px',
  backgroundColor: alphaHexConverter(theme.palette.secondary, 20),
  margin: '5px',
  border: 'none',
}));

const ItemText = styled(Select.Separator)({
  fontSize: '12px',
});

type Category =
  | 'all'
  | 'using'
  | 'not-using'
  | 'love'
  | 'hate'
  | 'lang'
  | 'framework'
  | 'cloud'
  | 'ui-ux'
  | 'env'
  | 'web-tool'
  | 'testing'
  | 'bundler';

type TechItemProps = {
  name: string;
  category: Array<Exclude<Category, 'all'>>;
  iconComponent?: IconType;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

interface State {
  firstAnimation: boolean;
  animateSearch: boolean;
  searchValue: string;
  selectedValue: Category;
  searched: Array<TechItemProps>;
}

type Action =
  | { type: 'SET_FIRST_ANIMATION'; payload: boolean }
  | { type: 'SET_ANIMATE_SEARCH'; payload: boolean }
  | { type: 'SET_SEARCH_VALUE'; payload: string }
  | { type: 'SET_SELECTED_VALUE'; payload: Category }
  | { type: 'SET_SEARCHED'; payload: Array<TechItemProps> };

const UsesPage = () => {
  const theme = useTheme();
  const techRef = useRef<HTMLDivElement>(null);
  const debounceTimeout = useRef<NodeJS.Timeout>();

  const techMemo = useMemo(() => techs(), []);

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'SET_FIRST_ANIMATION':
        return { ...state, firstAnimation: action.payload };
      case 'SET_ANIMATE_SEARCH':
        return { ...state, animateSearch: action.payload };
      case 'SET_SEARCH_VALUE':
        return { ...state, searchValue: action.payload };
      case 'SET_SELECTED_VALUE':
        return { ...state, selectedValue: action.payload };
      case 'SET_SEARCHED':
        return { ...state, searched: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    firstAnimation: false,
    animateSearch: false,
    searchValue: '',
    selectedValue: 'all',
    searched: techMemo,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSelectedValue = useCallback(
    (value: Category) => {
      const searchedItems = techMemo.filter((tech) =>
        tech.name.toLowerCase().includes(state.searchValue.toLowerCase())
      );

      dispatch({ type: 'SET_SELECTED_VALUE', payload: value });

      if (techRef.current) {
        gsap.to(techRef.current.children, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          onComplete: () => {
            dispatch({ type: 'SET_ANIMATE_SEARCH', payload: true });
            if (value === 'all') {
              dispatch({ type: 'SET_SEARCHED', payload: searchedItems });
            } else {
              dispatch({
                type: 'SET_SEARCHED',
                payload: searchedItems.filter((tech) =>
                  tech.category.includes(value)
                ),
              });
            }
          },
        });
      }
    },
    [state.searchValue, techMemo]
  );

  const onInputValue = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      // Clear the previous timeout if it exists
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const value = e.target.value.toLowerCase();
        dispatch({ type: 'SET_SEARCH_VALUE', payload: value });

        const filteredItems = techs().filter(
          (item) =>
            (state.selectedValue === 'all'
              ? true
              : item.category.includes(state.selectedValue)) &&
            item.name.toLowerCase().includes(value)
        );

        if (techRef.current) {
          gsap.to(techRef.current.children, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
              dispatch({ type: 'SET_ANIMATE_SEARCH', payload: true });
              dispatch({ type: 'SET_SEARCHED', payload: filteredItems });
            },
          });
        }
      }, 500);
    },
    [state.selectedValue]
  );

  useEffect(() => {
    if (state.firstAnimation && state.animateSearch && techRef.current) {
      dispatch({ type: 'SET_ANIMATE_SEARCH', payload: false });
      const items = techRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, x: 30 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.2,
          stagger: 0.01,
          ease: 'power2.out',
        }
      );
    }
  }, [state.searched, state.firstAnimation, state.animateSearch]);

  useGSAP(() => {
    if (techRef.current) {
      const items = techRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, x: 30 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.5,
          stagger: 0.02,
          ease: 'power2.out',
          delay: 0.3,
          onComplete: () => {
            dispatch({ type: 'SET_FIRST_ANIMATION', payload: true });
          },
        }
      );
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px 0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          maxWidth: '700px',
          flexDirection: 'column',
          gap: '30px',
          padding: '40px 0px',
        }}
      >
        <h1>Uses Tech</h1>
        <span>
          Here's a collection of the tools, products and technologies I relied
          on to build software. Inspired by{' '}
          <Link to="https://uses.tech/" target="_blank">
            uses.tech
          </Link>
        </span>
        <SearchWrapper>
          <StyledInput
            placeholder="Search for a technology"
            onChange={onInputValue}
          />
          <Select.Root onValueChange={onSelectedValue}>
            <Trigger aria-label="Techs">
              <Select.Value placeholder="Select an category" />
            </Trigger>
            <Content position="popper" sideOffset={10}>
              <Viewport>
                <Item value="all">
                  <Select.ItemText>All</Select.ItemText>
                </Item>
                <Select.Group>
                  <Separator />
                  <Label>Personal Preference</Label>
                  <Separator />
                  <Item value="using">
                    <Select.ItemText>Using</Select.ItemText>
                  </Item>
                  <Item value="not-using">
                    <Select.ItemText>Not using</Select.ItemText>
                  </Item>
                  <Item value="love">
                    <Select.ItemText>Love it.</Select.ItemText>
                  </Item>
                  <Item value="hate">
                    <Select.ItemText>Hate it.</Select.ItemText>
                  </Item>
                </Select.Group>
                <Separator />
                <Select.Group>
                  <Label>Tech Type</Label>
                  <Separator />
                  <Item value="lang">
                    <Select.ItemText>Languages</Select.ItemText>
                  </Item>
                  <Item value="cloud">
                    <Select.ItemText>Cloud</Select.ItemText>
                  </Item>
                  <Item value="framework">
                    <Select.ItemText>Tools & Frameworks</Select.ItemText>
                  </Item>
                  <Item value="ui-ux">
                    <Select.ItemText>Styling</Select.ItemText>
                  </Item>
                  <Item value="testing">
                    <Select.ItemText>Testing</Select.ItemText>
                  </Item>
                  <Item value="bundler">
                    <Select.ItemText>Bundlers</Select.ItemText>
                  </Item>
                  <Item value="env">
                    <Select.ItemText>IDE / OS / ENV</Select.ItemText>
                  </Item>
                  <Item value="web-tool">
                    <Select.ItemText>Web Tools</Select.ItemText>
                  </Item>
                </Select.Group>
              </Viewport>
            </Content>
          </Select.Root>
        </SearchWrapper>
      </div>
      <div
        ref={techRef}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {state.searched.length === 0 && <ItemText>I never used that!</ItemText>}
        {state.searched.map(({ name, icon, iconComponent: Icon }) => {
          return (
            <GlowEffect key={name} $transparency={20}>
              <FlareCard $intensity={15} $borderRadius={4} $disableTouch>
                <TechItem>
                  {Icon ? (
                    <Icon width={16} height={16} fill={theme.palette.primary} />
                  ) : (
                    icon?.({
                      width: 16,
                      height: 16,
                      fill: theme.palette.primary,
                    })
                  )}
                  <ItemText
                    style={{
                      transform:
                        name === 'CSS'
                          ? 'translateX(-10px) skew(3deg, -4deg)'
                          : undefined,
                    }}
                  >
                    {name}
                  </ItemText>
                </TechItem>
              </FlareCard>
            </GlowEffect>
          );
        })}
      </div>
    </div>
  );
};

export default UsesPage;
