import SvgCustomTheme from '@assets/Icons/CustomTheme';
import { useGSAP } from '@gsap/react';
import useAppThemeContext from '@hooks/useAppThemeContext';
import { useCustomThemeContext } from '@hooks/useCustomTheme';
import useTouching from '@hooks/useIsTouching';
import useMediaQuery from '@hooks/useMediaQuery';
import { useWindowSize } from '@uidotdev/usehooks';
import gsap from 'gsap';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import DropdownMenuComponent from '../DropdownMenu/DropdownMenu';
import GlowEffect from '../GlowEffect/GlowEffect';
import Logo from '../Logo';
import ThemeToggleAnimation from '../ThemeToggleAnimation';
import {
  ChipMenuWrapper,
  CustomThemeLink,
  Highlight,
  LogoLink,
  Option,
  OptionTheme,
  StyledSection,
  ThemeOptionsWrapper,
  ThemeToggleButton,
} from './floatingMenu.styles';

const FloatingMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleTheme } = useAppThemeContext();
  const { customTheme } = useCustomThemeContext();
  const { isTouching, handleTouch } = useTouching();
  const isMobile = useMediaQuery('max', 'mobile');
  const size = useWindowSize();
  const debounceTimeout = useRef<NodeJS.Timeout>();
  const [debounceSize, setDebounceSize] = useState<{
    width: number | null;
    height: number | null;
  }>();
  const theme = useTheme();

  const onThemeToggle = useCallback(() => {
    toggleTheme?.();
  }, [toggleTheme]);

  const options = useMemo<
    Array<{
      url: string;
      name: string;
      options?: Record<string, unknown>;
    }>
  >(() => {
    const defaultOptions = [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
      { name: 'Projects', url: '/projects' },
      { name: 'Uses', url: '/uses' },
    ] as Array<{
      url: string;
      name: string;
      options?: Record<string, unknown>;
    }>;

    if (isMobile) {
      defaultOptions.push({
        name: 'Theme',
        url: '/theme-editor',
        options: {
          isCustomTheme: customTheme === undefined,
        },
      });
    }

    return defaultOptions;
  }, [customTheme, isMobile]);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [firstAnimation, setFirstAnimation] = useState(true);
  const optionsRef = useRef<HTMLDivElement[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const index = options.findIndex((option) => option.url === currentPath);
    setSelectedOption(index !== -1 ? index : null);
  }, [location.pathname, options]);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebounceSize(size);
    }, 500);
  }, [size]);

  useGSAP(() => {
    if (selectedOption !== null && optionsRef.current[selectedOption]) {
      const { offsetWidth, offsetLeft, offsetHeight } =
        optionsRef.current[selectedOption];

      if (firstAnimation) {
        setFirstAnimation(false);
        gsap.set(highlightRef.current, {
          width: offsetWidth + 12,
          height: offsetHeight + 6,
          x: offsetLeft - 31,
          y: -3,
          opacity: 1,
        });
      } else {
        gsap.to(highlightRef.current, {
          width: offsetWidth + 12,
          height: offsetHeight + 6,
          x: offsetLeft - 31,
          y: -3,
          duration: 0.5,
          ease: 'power1.inOut',
          opacity: 1,
        });
      }
    } else if (selectedOption === null) {
      if (firstAnimation) {
        setFirstAnimation(false);
        gsap.set(highlightRef.current, {
          opacity: 0,
        });
      } else {
        gsap.to(highlightRef.current, {
          opacity: 0,
        });
      }
    }
  }, [selectedOption, debounceSize, firstAnimation]);

  return (
    <ChipMenuWrapper>
      {!isMobile && (
        <LogoLink
          to="/"
          $isTouching={isTouching}
          $transparency={30}
          aria-label="Homepage"
          onTouchStart={handleTouch(true)}
          onTouchEnd={handleTouch(false)}
          onTouchCancel={handleTouch(false)}
        >
          <Logo $height="clamp(3rem, 3vw, 4rem)" />
        </LogoLink>
      )}
      <StyledSection>
        {options.map((option, index) => {
          if (option.options?.isCustomTheme) {
            return (
              <div key={index} ref={(el) => (optionsRef.current[index] = el!)}>
                <DropdownMenuComponent
                  options={[
                    {
                      label: 'Dark',
                      onSelect: () => {
                        toggleTheme?.(true);
                      },
                    },
                    {
                      label: 'Light',
                      onSelect: () => {
                        toggleTheme?.(false);
                      },
                    },
                    {
                      label: 'Custom',
                      onSelect: () => {
                        navigate('/theme-editor');
                      },
                    },
                  ]}
                >
                  <OptionTheme $selected={selectedOption === index}>
                    {option.name}
                  </OptionTheme>
                </DropdownMenuComponent>
              </div>
            );
          }

          return (
            <div key={index} ref={(el) => (optionsRef.current[index] = el!)}>
              <Option $selected={selectedOption === index} to={option.url}>
                {option.name}
              </Option>
            </div>
          );
        })}
        <Highlight ref={highlightRef} />
      </StyledSection>
      {!isMobile && (
        <ThemeOptionsWrapper>
          {customTheme === undefined && (
            <ThemeToggleButton
              type="button"
              aria-label="Theme Toggle"
              $isTouching={isTouching}
              onTouchStart={handleTouch(true)}
              onTouchEnd={handleTouch(false)}
              onTouchCancel={handleTouch(false)}
              onClick={onThemeToggle}
            >
              <ThemeToggleAnimation />
            </ThemeToggleButton>
          )}
          <GlowEffect $transparency={30}>
            <CustomThemeLink
              title="Custom Theme"
              to={'/theme-editor'}
              $transparency={60}
            >
              <SvgCustomTheme
                fill={theme.palette.accent}
                height="clamp(1rem, 2vw, 1.5rem)"
                width="clamp(1rem, 2vw, 1.5rem)"
              />
            </CustomThemeLink>
          </GlowEffect>
        </ThemeOptionsWrapper>
      )}
    </ChipMenuWrapper>
  );
};

export default FloatingMenu;
