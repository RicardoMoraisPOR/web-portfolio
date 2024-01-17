import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

export type TransitionsContextProps = {
  completed: boolean;
  toggleCompleted?: (completed?: boolean) => void;
};

export const PageTransitionContext = createContext<TransitionsContextProps>({
  completed: false,
});

export const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = useCallback<
    NonNullable<TransitionsContextProps['toggleCompleted']>
  >((completed) => {
    setCompleted(Boolean(completed));
  }, []);

  const contextValue = useMemo<TransitionsContextProps>(() => {
    return { completed, toggleCompleted };
  }, [completed, toggleCompleted]);

  return (
    <PageTransitionContext.Provider value={contextValue}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;
