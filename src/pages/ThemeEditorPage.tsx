import styled, { ThemeProvider, useTheme } from 'styled-components';
import ColorPicker from '../components/ColorPicker';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
  darkTheme as defaultDark,
  lightTheme as defaultLight,
} from '../theme/AppThemes';
import { CSSObject, DefaultTheme } from 'styled-components/dist/types';
import GlowEffect from '../components/GlowEffect';
import FlareCard from '../components/FlareCard';
import { SiReact } from '@icons-pack/react-simple-icons';
import { getLuminanceLevel, isColorLight } from '../theme/AppThemeUtils';
import Tooltip from '../components/Tooltip';
import isEqual from 'lodash/isEqual';
import { useCustomThemeContext } from '../hooks/useCustomTheme';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MetaTag from '../components/MetaTag';

const PageContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '40px',
  padding: '40px 0px',
  [theme.breakpoints.max.desktop]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const ThemeExample = styled('div')(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.isDarkTheme ? 'white' : 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.background,
  color: theme.palette.text,
  padding: '50px',
  flexDirection: 'column',
  gap: '15px',
}));

const ThemeExampleCard = styled('div')({
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const ThemeExampleText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const ColorsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  alignItems: 'end',
  flexWrap: 'wrap',
  [theme.breakpoints.max.tablet]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.max.mobile]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const ApplyButton = styled('button')(({ theme }) => ({
  fontFamily: theme.fonts.lato,
  fontSize: '12px !important',
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '0',
  font: 'inherit',
  cursor: 'pointer',
  width: 'fit-content',
  lineHeight: 1.6,
  letterSpacing: '0.5px',
  color: theme.palette.text,
  position: 'relative',
  transition: `color ${theme.transitions.fast}ms linear`,
  textDecoration: 'none', // Remove the default underline
  '&:hover': {
    color: theme.palette.primary,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-1px', // Adjust this value to move the underline lower
    height: '1px', // Adjust the thickness of the underline
    backgroundColor: 'currentColor', // Use the text color for the underline
  },
}));

const RuleItem = styled('span')<{ $valid: boolean }>(({ theme, $valid }) => {
  const validColor: CSSObject['color'] = theme.isDarkTheme
    ? 'lightgreen'
    : 'green';
  const invalidColor: CSSObject['color'] = theme.isDarkTheme
    ? 'lightcoral'
    : 'coral';

  return {
    fontSize: '12px',
    fontWeight: '600',
    color: $valid ? validColor : invalidColor,
  };
});

const ThemeTitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const ThemeDisplayTitleWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
});

const ThemeTitleType = styled('span')({
  fontSize: '10px',
  opacity: '0.5',
});

const ThemeDisplayWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const RulesWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '10px',
  textAlign: 'center',
  gridTemplateColumns: 'repeat(5, 1fr)',
  flexWrap: 'wrap',
  [theme.breakpoints.max.tablet]: {
    padding: '10px',
    gap: '20px',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '& > button': {
    alignSelf: 'center',
    justifySelf: 'center',
  },
}));

const checkThemeRules = (
  rule: keyof DefaultTheme['palette'],
  theme: DefaultTheme['palette']
): boolean => {
  const { primary, secondary, accent, text, background } = theme;

  // Check if the colors are light or dark
  const isPrimaryLight = isColorLight(primary);
  const isTextLight = isColorLight(text);
  const isBackgroundLight = isColorLight(background);

  // Calculate luminance level for accent
  const primaryLuminance = getLuminanceLevel(primary);
  const secondaryLuminance = getLuminanceLevel(secondary);
  const accentLuminance = getLuminanceLevel(accent);
  const backgroundLuminance = getLuminanceLevel(background);
  const textLuminance = getLuminanceLevel(text);

  switch (rule) {
    case 'primary':
      return (
        isPrimaryLight !== isBackgroundLight && // Rule 1: Different luminance type from background
        primaryLuminance > 15 &&
        primaryLuminance < 235 // Rule 2: Avoid extreme luminance values
      );

    case 'secondary':
      return (
        secondaryLuminance > 15 &&
        secondaryLuminance < 235 && // Rule 2: Avoid extreme luminance values
        Math.abs(secondaryLuminance - primaryLuminance) >= 15 // Rule 1: Slightly different luminance from primary
      );

    case 'accent':
      return (
        accentLuminance > 100 &&
        accentLuminance < 200 && // Rule 1: Mid to slightly high luminance values
        Math.abs(accentLuminance - secondaryLuminance) >= 15 && // Rule 2: Slightly different from secondary
        Math.abs(accentLuminance - primaryLuminance) >= 15 // Rule 2: Slightly different from primary
      );

    case 'background':
      return (
        isBackgroundLight !== isTextLight && // Rule 1: Different luminance type from text
        (backgroundLuminance < 50 || backgroundLuminance > 220) // Rule 2: Towards high or low luminance values
      );

    case 'text':
      return (
        isBackgroundLight !== isTextLight && // Rule 1: Different luminance type from background
        (textLuminance < 50 || textLuminance > 220) && // Rule 2: Towards high or low luminance values
        Math.abs(textLuminance - secondaryLuminance) >= 15 // Rule 3: Different enough from secondary
      );

    default:
      return false;
  }
};

const ThemeEditorPage = () => {
  const theme = useTheme();
  const pageRef = useRef<HTMLDivElement | null>(null);
  const { customDarkTheme, customLightTheme, setCustomTheme } =
    useCustomThemeContext();

  useGSAP(() => {
    if (pageRef.current) {
      const sections = pageRef.current.children;
      gsap.fromTo(
        sections,
        { opacity: 0, y: 70, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const darkTheme = useMemo(() => {
    return customDarkTheme ?? defaultDark.palette;
  }, [customDarkTheme]);

  const lightTheme = useMemo(() => {
    return customLightTheme ?? defaultLight.palette;
  }, [customLightTheme]);

  const [lightThemeColors, setLightThemeColorsColor] =
    useState<DefaultTheme['palette']>(lightTheme);
  const [darkThemeColors, setDarkThemeColorsColor] =
    useState<DefaultTheme['palette']>(darkTheme);

  const onColorChange = useCallback(
    (key: keyof DefaultTheme['palette'], type: 'dark' | 'light') =>
      (color: string) => {
        switch (type) {
          case 'dark':
            setDarkThemeColorsColor((palette) => {
              if (palette !== undefined) {
                return {
                  ...palette,
                  [key]: color,
                };
              }
              return palette;
            });
            break;
          case 'light':
            setLightThemeColorsColor((palette) => {
              if (palette !== undefined) {
                return {
                  ...palette,
                  [key]: color,
                };
              }
              return palette;
            });
            break;
        }
      },
    []
  );

  const canChangeTheme = useCallback(
    (newTheme: DefaultTheme['palette'], oldTheme: DefaultTheme['palette']) => {
      return (
        !isEqual(newTheme, oldTheme) &&
        checkThemeRules('accent', newTheme) &&
        checkThemeRules('background', newTheme) &&
        checkThemeRules('primary', newTheme) &&
        checkThemeRules('secondary', newTheme) &&
        checkThemeRules('text', newTheme)
      );
    },
    []
  );

  const changeTheme = useCallback(
    (type: 'dark' | 'light', theme: DefaultTheme['palette']) => () => {
      setCustomTheme(type, theme);
    },
    [setCustomTheme]
  );

  return (
    <PageContainer ref={pageRef}>
      <MetaTag />
      <div>
        <ThemeTitleWrapper>
          <h3>Theme 1</h3>
          <ThemeTitleType>light theme</ThemeTitleType>
        </ThemeTitleWrapper>
        <ColorsWrapper>
          <ColorPicker
            title="Primary"
            color={lightThemeColors?.primary}
            defaultColor={defaultLight.palette.primary}
            onColorChange={onColorChange('primary', 'light')}
          />
          <ColorPicker
            title="Secondary"
            color={lightThemeColors?.secondary}
            defaultColor={defaultLight.palette.secondary}
            onColorChange={onColorChange('secondary', 'light')}
          />
          <ColorPicker
            title="Accent"
            color={lightThemeColors?.accent}
            defaultColor={defaultLight.palette.accent}
            onColorChange={onColorChange('accent', 'light')}
          />
          <ColorPicker
            title="Background"
            color={lightThemeColors?.background}
            defaultColor={defaultLight.palette.background}
            onColorChange={onColorChange('background', 'light')}
          />
          <ColorPicker
            title="Text"
            color={lightThemeColors?.text}
            defaultColor={defaultLight.palette.text}
            onColorChange={onColorChange('text', 'light')}
          />
        </ColorsWrapper>
      </div>
      <ThemeDisplayWrapper>
        <ThemeDisplayTitleWrapper>
          <h3>Theme 1 Display</h3>
          {canChangeTheme(lightThemeColors, lightTheme) && (
            <ApplyButton onClick={changeTheme('light', lightThemeColors)}>
              Apply Theme
            </ApplyButton>
          )}
        </ThemeDisplayTitleWrapper>
        <ThemeProvider
          theme={{ ...theme, palette: lightThemeColors, isDarkTheme: false }}
        >
          <ThemeExampleComponent themeType={lightThemeColors} />
        </ThemeProvider>
        <RuleSetComponent themeType={lightThemeColors} />
      </ThemeDisplayWrapper>
      <div>
        <ThemeTitleWrapper>
          <h3>Theme 2</h3>
          <ThemeTitleType>dark theme</ThemeTitleType>
        </ThemeTitleWrapper>
        <ColorsWrapper>
          <ColorPicker
            title="Primary"
            color={darkThemeColors.primary}
            defaultColor={defaultDark.palette.primary}
            onColorChange={onColorChange('primary', 'dark')}
          />
          <ColorPicker
            title="Secondary"
            color={darkThemeColors.secondary}
            defaultColor={defaultDark.palette.secondary}
            onColorChange={onColorChange('secondary', 'dark')}
          />
          <ColorPicker
            title="Accent"
            color={darkThemeColors.accent}
            defaultColor={defaultDark.palette.accent}
            onColorChange={onColorChange('accent', 'dark')}
          />
          <ColorPicker
            title="Background"
            color={darkThemeColors.background}
            defaultColor={defaultDark.palette.background}
            onColorChange={onColorChange('background', 'dark')}
          />
          <ColorPicker
            title="Text"
            color={darkThemeColors.text}
            defaultColor={defaultDark.palette.text}
            onColorChange={onColorChange('text', 'dark')}
          />
        </ColorsWrapper>
      </div>
      <ThemeDisplayWrapper>
        <ThemeDisplayTitleWrapper>
          <h3>Theme 2 Display</h3>
          {canChangeTheme(darkThemeColors, darkTheme) && (
            <ApplyButton onClick={changeTheme('dark', darkThemeColors)}>
              Apply Theme
            </ApplyButton>
          )}
        </ThemeDisplayTitleWrapper>
        <ThemeProvider
          theme={{ ...theme, palette: darkThemeColors, isDarkTheme: true }}
        >
          <ThemeExampleComponent themeType={darkThemeColors} />
        </ThemeProvider>
        <RuleSetComponent themeType={darkThemeColors} />
      </ThemeDisplayWrapper>
    </PageContainer>
  );
};

const ThemeExampleComponent = ({
  themeType,
}: {
  themeType: DefaultTheme['palette'];
}) => {
  return (
    <ThemeExample>
      <ThemeExampleText>
        <SiReact fill={themeType.accent} />
        Lorem ipsum dolor sit amet
      </ThemeExampleText>
      <GlowEffect $transparency={20}>
        <FlareCard $borderRadius={4} $intensity={40}>
          <ThemeExampleCard>
            <SiReact fill={themeType.primary} />
            Lorem ipsum dolor sit amet
          </ThemeExampleCard>
        </FlareCard>
      </GlowEffect>
    </ThemeExample>
  );
};

const RuleSetComponent = ({
  themeType,
}: {
  themeType: DefaultTheme['palette'];
}) => {
  return (
    <RulesWrapper>
      <Tooltip
        name="primary-rules"
        tooltipContent={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>
              Rule 1 - Primary luminance type (light/dark) should be different
              from the background
            </span>
            <span>
              Rule 2 - Primary luminance should not reach extreme values
            </span>
          </div>
        }
        side="bottom"
      >
        <RuleItem $valid={checkThemeRules('primary', themeType)}>
          primary
        </RuleItem>
      </Tooltip>
      <Tooltip
        name="secondary-rules"
        tooltipContent={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>
              Rule 1 - Secondary luminance level should be slightly different
              from the primary
            </span>
            <span>
              Rule 2 - Secondary luminance should not reach extreme values (even
              less than primary)
            </span>
          </div>
        }
        side="bottom"
      >
        <RuleItem $valid={checkThemeRules('secondary', themeType)}>
          secondary
        </RuleItem>
      </Tooltip>
      <Tooltip
        name="accent-rules"
        tooltipContent={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>
              Rule 1 - Accent luminance level should be towards mid to slightly
              high values
            </span>
            <span>
              Rule 2 - Accent luminance level should be slightly different from
              the secondary and primary
            </span>
          </div>
        }
        side="bottom"
      >
        <RuleItem $valid={checkThemeRules('accent', themeType)}>
          accent
        </RuleItem>
      </Tooltip>
      <Tooltip
        name="background-rules"
        tooltipContent={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>
              Rule 1 - Rule 1 - Background luminance type (light/dark) should be
              different from the text
            </span>
            <span>
              Rule 2 - Background luminance level should be towards the high and
              low values
            </span>
          </div>
        }
        side="bottom"
      >
        <RuleItem $valid={checkThemeRules('background', themeType)}>
          background
        </RuleItem>
      </Tooltip>
      <Tooltip
        name="text-rules"
        tooltipContent={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>
              Rule 1 - Text luminance type (light/dark) should be different from
              the background
            </span>
            <span>
              Rule 2 - Text luminance level should be towards the high and low
              values
            </span>
            <span>
              Rule 3 - Text luminance level should be somewhat different from
              the secondary
            </span>
          </div>
        }
        side="bottom"
      >
        <RuleItem $valid={checkThemeRules('text', themeType)}>text</RuleItem>
      </Tooltip>
    </RulesWrapper>
  );
};

export default ThemeEditorPage;
