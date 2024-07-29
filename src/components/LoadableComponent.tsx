import { ComponentType, Suspense } from 'react';

const LoadableComponent =
  <T extends Record<string, unknown>>(Component: ComponentType<T>) =>
  (props: T) => {
    return (
      <Suspense>
        <Component {...props} />
      </Suspense>
    );
  };

export default LoadableComponent;
