import { Breakpoints, BreakpointTypes } from '@theme/appTheme.types';
import { useEffect, useState } from 'react';
import { DefaultTheme, useTheme } from 'styled-components';

const extractMediaQuery = (fullQuery: string): string | null => {
  const match = fullQuery.match(/\(([^)]+)\)/);
  return match ? `(${match[1]})` : null;
};

const getMediaQuery = (
  theme: DefaultTheme,
  type: keyof BreakpointTypes,
  breakpoint: keyof Breakpoints
) => {
  const query = extractMediaQuery(theme.breakpoints[type][breakpoint]);
  if (query) {
    return window.matchMedia(query);
  }
  return null;
};

// Hook to check if the current breakpoint is met
const useMediaQuery = (
  type: keyof BreakpointTypes,
  breakpoint: keyof Breakpoints
) => {
  const theme = useTheme();
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };

    const mediaQueryList = getMediaQuery(theme, type, breakpoint);

    if (mediaQueryList) {
      // Update the state based on the initial value
      setIsMatch(mediaQueryList.matches);

      // Listener to update state on change
      mediaQueryList.addListener(handleChange);
    }

    // Cleanup function to remove listener
    return () => {
      mediaQueryList?.removeListener(handleChange);
    };
  }, [breakpoint, theme, type]);

  return isMatch;
};

export default useMediaQuery;
