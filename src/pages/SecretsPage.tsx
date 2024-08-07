import styled, { CSSObject } from 'styled-components';
import GlowEffect from '../components/GlowEffect';
import FlareCard from '../components/FlareCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCallback, useRef } from 'react';
import { useSecretContext } from '../hooks/useSecret';
import { SecretType } from '../contexts/SecretsContext';
import PinField from 'react-pin-field';
import { alphaHexConverter } from '../theme/AppThemeUtils';
import { useToast } from '../hooks/useToast';

const PageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '80vh',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.max.tablet]: {
    minHeight: '100%',
  },
}));

const SecretsPageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.max.desktop]: {
    margin: '100px 0px',
    gap: '40px',
    padding: '20px 20px',
  },
  [theme.breakpoints.max.mobile]: {
    gap: '60px',
  },
}));

const SecretItem = styled('div')({
  minHeight: '200px',
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const SecretEmoji = styled('span')<{ $revealed?: boolean }>(
  ({ theme, $revealed }) => {
    const bluredStyle: CSSObject = {
      filter: theme.isDarkTheme
        ? 'brightness(100) saturate(0) blur(5px)'
        : 'brightness(0) saturate(0) blur(5px)',
    };

    return {
      userSelect: $revealed ? 'auto' : 'none',
      fontSize: '50px',
      transition: $revealed
        ? `filter ${theme.transitions.normal}ms ease, opacity ${theme.transitions.normal}ms ease`
        : 'none',
      opacity: $revealed ? 1 : 0.4,
      ...(!$revealed
        ? bluredStyle
        : { filter: 'brightness(1) saturate(1) blur(0px)' }),
    };
  }
);

const SecretTitle = styled('span')({
  margin: '10px 0px',
  fontSize: '12px',
  fontWeight: 900,
});

const RevealText = styled('button')({
  background: 'none',
  border: 'none',
  padding: '0',
  color: 'inherit',
  font: 'inherit',
  cursor: 'pointer',
  fontSize: '12px',
  margin: '10px 0px',
  textDecoration: 'underline',
  '&:focus': {
    outline: 'none',
  },
});

const PinFieldContainer = styled('div')({
  position: 'absolute',
  top: '82%',
  display: 'grid',
  gridAutoColumns: 'max-content',
  gridAutoFlow: 'column',
  justifyContent: 'center',
  gap: '4px',
});

const StyledPinField = styled(PinField)(({ theme }) => ({
  '@keyframes shake': {
    '0%': {
      transform: 'translateX(5%)',
    },
    '25%': {
      transform: 'translateX(-5%)',
    },
    '50%': {
      transform: 'translateX(5%)',
    },
    '75%': {
      transform: 'translateX(-5%)',
    },
    '100%': {
      transform: 'translateX(5%)',
    },
  },
  width: '40px',
  height: '20px',
  background: 'none',
  textAlign: 'center',
  border: '1px solid',
  fontSize: '14px',
  outline: 'none',
  color: theme.palette.text,
  borderRadius: '4px',
  textTransform: 'uppercase',
  borderColor: alphaHexConverter(theme.palette.primary, 60),
  '&:hover': {
    borderColor: theme.palette.primary,
  },
  '&:focus-visible': {
    outline: `1px dashed ${alphaHexConverter(theme.palette.primary, 30)}`,
    outlineOffset: '2px',
    borderColor: theme.palette.primary,
  },

  '&.invalid': {
    animation: `shake ${theme.transitions.fast}ms linear`,
    borderColor: `red`,
    boxShadow: `0 0 0.25rem red`,
  },
}));

const SecretsPage = () => {
  const secretsRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const { revealTitle, secrets, setFoundSecret } = useSecretContext();
  const pinRef = useRef<HTMLInputElement[]>([]);

  useGSAP(() => {
    if (secretsRef.current) {
      const items = secretsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const onTitleReveal = useCallback(
    (type: SecretType) => () => {
      revealTitle(type);
    },
    [revealTitle]
  );

  const onPinChange = useCallback(() => {
    pinRef.current.forEach((input) => input.classList.remove('invalid'));
  }, []);

  const onPinComplete = useCallback(
    (code: string) => {
      if (code === 'P1N') {
        const items = pinRef.current;
        gsap.fromTo(
          items,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: 10,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            onComplete: () => {
              setFoundSecret('secretPin');
              toast({
                title: '🔦 Hidden in plain sight!',
                message: 'You have found a secret!',
              });
            },
          }
        );
      } else {
        pinRef.current.forEach((input) => input.classList.add('invalid'));
      }
    },
    [setFoundSecret, toast]
  );

  return (
    <PageContainer>
      <SecretsPageContainer ref={secretsRef}>
        <div>
          <GlowEffect $transparency={10}>
            <FlareCard $intensity={50} $borderRadius={8} $disableTouch>
              <SecretItem>
                <SecretEmoji $revealed={secrets.secretMoon.hasFoundSecret}>
                  🚀
                </SecretEmoji>
                {secrets.secretMoon.hasFoundSecret ||
                secrets.secretMoon.hasRevealedTitle ? (
                  <SecretTitle>To the moon!</SecretTitle>
                ) : (
                  <RevealText onClick={onTitleReveal('secretMoon')}>
                    Reveal Title Hint
                  </RevealText>
                )}
              </SecretItem>
            </FlareCard>
          </GlowEffect>
        </div>
        <div>
          <GlowEffect $transparency={10}>
            <FlareCard $intensity={50} $borderRadius={8} $disableTouch>
              <SecretItem>
                <SecretEmoji $revealed={secrets.secretCookie.hasFoundSecret}>
                  🍪
                </SecretEmoji>
                {secrets.secretCookie.hasFoundSecret ||
                secrets.secretCookie.hasRevealedTitle ? (
                  <SecretTitle>Not a clicker game!</SecretTitle>
                ) : (
                  <RevealText onClick={onTitleReveal('secretCookie')}>
                    Reveal Title Hint
                  </RevealText>
                )}
              </SecretItem>
            </FlareCard>
          </GlowEffect>
        </div>
        <div>
          <GlowEffect $transparency={10}>
            <FlareCard $intensity={50} $borderRadius={8} $disableTouch>
              <SecretItem>
                <SecretEmoji $revealed={secrets.secretBug.hasFoundSecret}>
                  🪲
                </SecretEmoji>
                {secrets.secretBug.hasFoundSecret ||
                secrets.secretBug.hasRevealedTitle ? (
                  <SecretTitle>Lost, but found!</SecretTitle>
                ) : (
                  <RevealText onClick={onTitleReveal('secretBug')}>
                    Reveal Title Hint
                  </RevealText>
                )}
              </SecretItem>
            </FlareCard>
          </GlowEffect>
        </div>
        <div>
          <GlowEffect $transparency={10}>
            <FlareCard $intensity={50} $borderRadius={8} $disableTouch>
              <SecretItem>
                <SecretEmoji $revealed={secrets.secretPin.hasFoundSecret}>
                  🔦
                </SecretEmoji>
                {secrets.secretPin.hasFoundSecret ||
                secrets.secretPin.hasRevealedTitle ? (
                  <SecretTitle>Hidden in plain sight!</SecretTitle>
                ) : (
                  <RevealText onClick={onTitleReveal('secretPin')}>
                    Reveal Title Hint
                  </RevealText>
                )}
                {!secrets.secretPin.hasFoundSecret && (
                  <PinFieldContainer>
                    <StyledPinField
                      ref={pinRef}
                      length={3}
                      format={(c) => c.toUpperCase()}
                      onChange={onPinChange}
                      onComplete={onPinComplete}
                    />
                  </PinFieldContainer>
                )}
              </SecretItem>
            </FlareCard>
          </GlowEffect>
        </div>
        <div>
          <GlowEffect $transparency={10}>
            <FlareCard $intensity={50} $borderRadius={8} $disableTouch>
              <SecretItem>
                <SecretEmoji $revealed={secrets.secretPixel.hasFoundSecret}>
                  📐
                </SecretEmoji>
                {secrets.secretPixel.hasFoundSecret ||
                secrets.secretPixel.hasRevealedTitle ? (
                  <SecretTitle>Pixel perfectionist!</SecretTitle>
                ) : (
                  <RevealText onClick={onTitleReveal('secretPixel')}>
                    Reveal Title Hint
                  </RevealText>
                )}
              </SecretItem>
            </FlareCard>
          </GlowEffect>
        </div>
      </SecretsPageContainer>
    </PageContainer>
  );
};

export default SecretsPage;
