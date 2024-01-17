import { useContext } from 'react';
import { PageTransitionContext } from '../pages/PageTransition/PageTransitionContext';

export const usePageTransition = () => useContext(PageTransitionContext);
