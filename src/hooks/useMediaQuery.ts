import { useEffect, useMemo, useState } from 'react';

const getMatches = (query: string): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

const useMediaQuery = (rawQuery: string) => {
  const query = useMemo(() => rawQuery.replace('@media ', ''), [rawQuery]);
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query));
    }

    const matchMedia = window.matchMedia(query);

    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;

// modified version of https://usehooks-ts.com/react-hook/use-media-query
