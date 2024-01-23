import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FC, PropsWithChildren } from 'react';

const TransitionComponent: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node: gsap.TweenTarget) => {
          gsap.set(node, {
            scale: 0.8,
            opacity: 0,
          });
          gsap
            .timeline({
              paused: true,
            })
            .to(node, { scale: 1, opacity: 1, duration: 0.2 })
            .play();
        }}
        onExit={(node) => {
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.8, opacity: 0, duration: 0.2 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
