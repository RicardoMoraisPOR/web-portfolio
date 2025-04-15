import MetaTag from '@components/MetaTag';
import { useGSAP } from '@gsap/react';
import { useCustomThemeContext } from '@hooks/useCustomTheme';
import { lightTheme as defaultLight } from '@theme/themes';
import { isColorLight } from '@theme/themeUtils';
import gsap from 'gsap';
import isEqual from 'lodash/isEqual';
import { useCallback, useMemo, useRef, useState } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import {
  ApplyButton,
  PageContainer,
  ThemeDisplayOptions,
  ThemeDisplayTitleWrapper,
  ThemeDisplayWrapper,
} from './themeEditor.styles';
import { checkThemeRulesAreMet, getThemeRules } from './themeEditor.types';
import ThemeEditorColorsAndRules from './ThemeEditorColorsAndRules';
import ThemeEditorExample from './ThemeEditorExample';

const ThemeEditorPage = () => {
  const theme = useTheme();
  const pageRef = useRef<HTMLDivElement | null>(null);
  const { customTheme, setCustomTheme, deleteCustomTheme } =
    useCustomThemeContext();

  useGSAP(() => {
    if (pageRef.current) {
      const sections = pageRef.current.children;
      gsap.fromTo(
        sections,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: 'sine.inOut',
        }
      );
    }
  }, []);

  const customThemeDisplay = useMemo(() => {
    return customTheme ?? defaultLight.palette;
  }, [customTheme]);

  const [themeColorsDisplay, setThemeColorsDisplay] =
    useState<DefaultTheme['palette']>(customThemeDisplay);

  const onColorChange = useCallback(
    (key: keyof DefaultTheme['palette']) => (color: string) => {
      setThemeColorsDisplay((palette) => {
        if (palette !== undefined) {
          return {
            ...palette,
            [key]: color,
          };
        }
        return palette;
      });
    },
    []
  );

  const canChangeTheme = useCallback(
    (newTheme: DefaultTheme['palette'], oldTheme: DefaultTheme['palette']) => {
      return (
        !isEqual(newTheme, oldTheme) &&
        checkThemeRulesAreMet(getThemeRules('accent', newTheme)) &&
        checkThemeRulesAreMet(getThemeRules('background', newTheme)) &&
        checkThemeRulesAreMet(getThemeRules('primary', newTheme)) &&
        checkThemeRulesAreMet(getThemeRules('secondary', newTheme)) &&
        checkThemeRulesAreMet(getThemeRules('text', newTheme))
      );
    },
    []
  );

  const changeTheme = useCallback(
    (theme: DefaultTheme['palette']) => () => {
      setCustomTheme(theme);
    },
    [setCustomTheme]
  );

  return (
    <PageContainer ref={pageRef}>
      <MetaTag />
      <ThemeDisplayWrapper>
        <h3>Create your custom theme to be applied on the whole portfolio</h3>
        <ThemeDisplayTitleWrapper>
          <ThemeDisplayOptions>
            {canChangeTheme(themeColorsDisplay, customThemeDisplay) && (
              <ApplyButton onClick={changeTheme(themeColorsDisplay)}>
                Apply Theme
              </ApplyButton>
            )}
            {customTheme !== undefined && (
              <ApplyButton onClick={deleteCustomTheme}>
                Delete Custom Theme
              </ApplyButton>
            )}
          </ThemeDisplayOptions>
        </ThemeDisplayTitleWrapper>
        <ThemeProvider
          theme={{
            ...theme,
            palette: themeColorsDisplay,
            isDarkTheme: !isColorLight(themeColorsDisplay.background),
          }}
        >
          <ThemeEditorExample themeType={themeColorsDisplay} />
        </ThemeProvider>
      </ThemeDisplayWrapper>
      <div>
        <ThemeEditorColorsAndRules
          onColorChange={onColorChange}
          themeType={themeColorsDisplay}
        />
      </div>
    </PageContainer>
  );
};

export default ThemeEditorPage;
