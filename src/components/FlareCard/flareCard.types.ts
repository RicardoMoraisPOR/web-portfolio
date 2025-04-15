import { CSSObject } from 'styled-components';
import { IntRange } from 'type-fest';

export interface FlareCardCoordinatesProps {
  $x?: number;
  $y?: number;
  $intensity: IntRange<0, 101>;
  $borderRadius?: CSSObject['borderRadius'];
  $isTouching?: boolean;
  $disableTouch?: boolean;
}

export type FlareCardProps = Omit<
  FlareCardCoordinatesProps,
  '$x' | '$y' | '$isTouching'
>;
