import { useLottie } from 'lottie-react';
import Animation404 from '../assets/404.json';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCallback, useRef } from 'react';
import gsap from 'gsap';
import { useSecretContext } from '../hooks/useSecret';
import useToast from '../hooks/useSonnerToast';

const AnimationContainer = styled('div')(({ theme }) => ({
  height: 'calc(80vh)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& div': {
    [theme.breakpoints.max.mobile]: {
      width: '100% !important',
      height: '60% !important',
    },
  },
}));

const UnstyledButton = styled('button')({
  position: 'absolute',
  left: '30%',
  top: '30%',
  background: 'none',
  border: 'none',
  padding: '0',
  margin: '0',
  color: 'inherit',
  font: 'inherit',
  cursor: 'pointer',
  fontSize: '30px',
  transform: 'rotate(0.1turn)',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
});

const Page404 = () => {
  const { callToast, confetti } = useToast();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const animationStart = useRef(false);
  const { secrets, setFoundSecret } = useSecretContext();

  const onBugClick = useCallback(() => {
    if (buttonRef.current && !animationStart.current) {
      animationStart.current = true;
      gsap.to(buttonRef.current, {
        duration: 2,
        x: '20',
        y: '-50vh',
        scale: 4,
        rotation: 20,
        ease: 'power2.inOut',
        onComplete: () => {
          setFoundSecret('secretBug');
          callToast('🪲 Lost, but found!', {
            description: 'You have found a secret! check your progress!',

            action: {
              label: 'View',
              onClick: () => navigate('/secrets'),
            },
          });
        },
      });
    }
  }, [callToast, navigate, setFoundSecret]);

  const { View } = useLottie({
    id: '404AnimationId',
    className: '404-animation-class',
    animationData: Animation404,
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    style: {
      height: '80%',
      width: '80%',
    },
  });

  return (
    <AnimationContainer>
      {confetti}
      {View}
      <span>How did you end up here?</span>
      {!secrets.secretBug.hasFoundSecret && (
        <UnstyledButton ref={buttonRef} onClick={onBugClick}>
          🪲
        </UnstyledButton>
      )}
    </AnimationContainer>
  );
};

export default Page404;
