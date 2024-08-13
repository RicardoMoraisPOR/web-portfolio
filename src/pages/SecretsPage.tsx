import styled, { CSSObject } from 'styled-components';
import GlowEffect from '../components/GlowEffect';
import FlareCard from '../components/FlareCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSecretContext } from '../hooks/useSecret';
import { SecretType } from '../contexts/SecretsContext';
import PinField from 'react-pin-field';
import { alphaHexConverter } from '../theme/AppThemeUtils';
import useToast from '../hooks/useSonnerToast';
import ConfettiEffect from '../components/ConfettiEffect';
import { Link } from 'react-router-dom';
import MetaTag from '../components/MetaTag';

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

const SecretsPageContainer = styled('div')<{ $foundAll: boolean }>(
  ({ theme, $foundAll }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.max.desktop]: {
      margin: $foundAll ? '20px 0px' : '100px 0px',
      gap: '40px',
      padding: '20px 20px',
    },
    [theme.breakpoints.max.mobile]: {
      gap: '60px',
    },
  })
);

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

const RevealText = styled('button')(({ theme }) => ({
  fontSize: '12px !important',
  background: 'none',
  border: 'none',
  padding: '5px',
  margin: '15px',
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
    bottom: '4px', // Adjust this value to move the underline lower
    height: '1px', // Adjust the thickness of the underline
    backgroundColor: 'currentColor', // Use the text color for the underline
  },
}));

const ThankYouNote = styled('div')(({ theme }) => ({
  maxWidth: '50vw',
  margin: '50px 0px',
  textAlign: 'center',

  [theme.breakpoints.max.tablet]: {
    maxWidth: '80vw',
  },
  [theme.breakpoints.max.mobile]: {
    maxWidth: '100%',
  },
}));

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
  const { callToast, confetti } = useToast();
  const secretsRef = useRef<HTMLDivElement>(null);
  const { revealTitle, secrets, setFoundSecret, foundAll } = useSecretContext();
  const pinRef = useRef<HTMLInputElement[]>([]);
  const thankYouRef = useRef<HTMLDivElement>(null);
  const founAllEffectInterval = useRef<NodeJS.Timeout>();

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

  useGSAP(() => {
    if (pinRef.current && !secrets.secretPin.hasFoundSecret) {
      gsap.fromTo(
        pinRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 1,
        }
      );
    }
  }, []);

  useGSAP(() => {
    if (foundAll) {
      gsap.fromTo(
        thankYouRef.current,
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
  }, [foundAll]);

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
              callToast('🔦 Hidden in plain sight!', {
                description: 'You have found a secret!',
              });
            },
          }
        );
      } else {
        pinRef.current.forEach((input) => input.classList.add('invalid'));
      }
    },
    [callToast, setFoundSecret]
  );

  const [confettiKey, setConfettiKey] = useState(0);

  useEffect(() => {
    if (foundAll) {
      founAllEffectInterval.current = setInterval(() => {
        setConfettiKey((prevKey) => prevKey + 1);
      }, 2500);

      return () => clearInterval(founAllEffectInterval.current); // Cleanup interval on component unmount
    }
  }, [foundAll]);

  return (
    <PageContainer>
      <MetaTag />
      {confetti}
      {foundAll && (
        <>
          <ConfettiEffect key={confettiKey} />
          <ThankYouNote ref={thankYouRef}>
            Thank you for your effort in uncovering all the secrets! I hope you
            enjoyed the hunt as much as I enjoyed hiding them. As a reward, you
            now have access to the <Link to="/theme">theme editor page</Link> to
            customize the website theme, have fun!.
          </ThankYouNote>
        </>
      )}
      <SecretsPageContainer $foundAll={foundAll} ref={secretsRef}>
        <div>
          <GlowEffect $transparency={10}>
            <FlareCard $intensity={50} $borderRadius={8} $disableTouch>
              <SecretItem>
                <SecretEmoji $revealed={secrets.secretRecursion.hasFoundSecret}>
                  🔄
                </SecretEmoji>
                {secrets.secretRecursion.hasFoundSecret ||
                secrets.secretRecursion.hasRevealedTitle ? (
                  <SecretTitle>Did you mean "recursion"?</SecretTitle>
                ) : (
                  <RevealText onClick={onTitleReveal('secretRecursion')}>
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
                <PinFieldContainer>
                  {!secrets.secretPin.hasFoundSecret && (
                    <StyledPinField
                      ref={pinRef}
                      length={3}
                      format={(c) => c.toUpperCase()}
                      onChange={onPinChange}
                      onComplete={onPinComplete}
                    />
                  )}
                </PinFieldContainer>
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
                  <SecretTitle>Pixel perfect!</SecretTitle>
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
