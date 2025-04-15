import { CSSObject } from 'styled-components';

export interface ScrollableContentProps {
  /**
   * the parent container height
   * @default "100%"
   */
  parentHeight?: CSSObject['height'];

  /**
   * if the children should be rendered inside a flex column container
   * @default true
   */
  withFlexColumnContainer?: boolean;
}
