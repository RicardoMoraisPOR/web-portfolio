import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { FC, PropsWithChildren, useRef } from 'react';

const TransitionComponent: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        nodeRef={nodeRef}
        onEnter={() => {
          gsap.set(nodeRef.current, {
            y: 20,
            opacity: 0,
          });
          gsap
            .timeline({
              paused: true,
            })
            .to(nodeRef.current, { y: 0, opacity: 1, duration: 0.2 })
            .play();
        }}
        onExit={() => {
          gsap
            .timeline({ paused: true })
            .to(nodeRef.current, { y: 20, opacity: 0, duration: 0.2 })
            .play();
        }}
      >
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
