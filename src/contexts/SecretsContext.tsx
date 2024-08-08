import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

export type SecretType =
  | 'secretRecursion'
  | 'secretCookie'
  | 'secretBug'
  | 'secretPin'
  | 'secretPixel';

interface SecretContextProps {
  secrets: Record<
    SecretType,
    { hasFoundSecret: boolean; hasRevealedTitle: boolean }
  >;
  setFoundSecret: (secretKey: SecretType) => void;
  revealTitle: (secretKey: SecretType) => void;
  foundAll: boolean;
}

const SecretContext = createContext<SecretContextProps | undefined>(undefined);

export const SecretProvider: FC<PropsWithChildren> = ({ children }) => {
  const [secrets, setSecrets] = useState<
    Record<SecretType, { hasFoundSecret: boolean; hasRevealedTitle: boolean }>
  >({
    secretRecursion: { hasFoundSecret: false, hasRevealedTitle: false },
    secretCookie: { hasFoundSecret: false, hasRevealedTitle: false },
    secretBug: { hasFoundSecret: false, hasRevealedTitle: false },
    secretPin: { hasFoundSecret: false, hasRevealedTitle: false },
    secretPixel: { hasFoundSecret: false, hasRevealedTitle: false },
  });

  useEffect(() => {
    (Object.keys(secrets) as SecretType[]).forEach((secretKey) => {
      const jsonValue = localStorage.getItem(secretKey);
      const jsonTitleValue = localStorage.getItem(`${secretKey}-title-reveal`);

      let foundSecret = false;
      if (jsonValue) {
        foundSecret = JSON.parse(jsonValue) === 'found';
      }

      let revealedTitle = false;
      if (jsonTitleValue) {
        revealedTitle = JSON.parse(jsonTitleValue) === 'yes';
      }

      setSecrets((prevSecrets) => ({
        ...prevSecrets,
        [secretKey]: {
          hasFoundSecret: foundSecret,
          hasRevealedTitle: revealedTitle,
        },
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFoundSecret = useCallback((secretKey: SecretType) => {
    setSecrets((prevSecrets) => ({
      ...prevSecrets,
      [secretKey]: { ...prevSecrets[secretKey], hasFoundSecret: true },
    }));
    localStorage.setItem(secretKey, JSON.stringify('found'));
  }, []);

  const revealTitle = useCallback((secretKey: SecretType) => {
    setSecrets((prevSecrets) => ({
      ...prevSecrets,
      [secretKey]: { ...prevSecrets[secretKey], hasRevealedTitle: true },
    }));
    localStorage.setItem(`${secretKey}-title-reveal`, JSON.stringify('yes'));
  }, []);

  const foundAll = Boolean(
    secrets.secretRecursion.hasFoundSecret &&
      secrets.secretPixel.hasFoundSecret &&
      secrets.secretPin.hasFoundSecret &&
      secrets.secretCookie.hasFoundSecret &&
      secrets.secretBug.hasFoundSecret
  );

  return (
    <SecretContext.Provider
      value={{ secrets, setFoundSecret, revealTitle, foundAll }}
    >
      {children}
    </SecretContext.Provider>
  );
};

export default SecretContext;
