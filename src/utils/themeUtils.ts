import { IntRange } from './typeUtils';

/**
 * applies transparency to a given color
 * @param color         color to be processed
 * @param transparency  transparency to apply. values from 0 to 100
 * @returns             color transformed
 */
export const alphaHexConverter = (
  color: string,
  transparency: IntRange<0, 101>
) => {
  let parsedColor = color;

  if (parsedColor.length === 9) {
    parsedColor = parsedColor.substring(0, 7);
  }

  if (parsedColor.length !== 7 || parsedColor[0] !== '#') {
    throw `Invalid hexadecimal color: ${color}`;
  }

  const roundedTransparency = transparency / 100;

  if (roundedTransparency < 0 || roundedTransparency > 1) {
    throw `Invalid transparency value: ${roundedTransparency}`;
  }

  // Calculate transparency value as a two-digit hexadecimal
  const parsedTransparency = Math.round(roundedTransparency * 255)
    .toString(16)
    .toUpperCase()
    .padStart(2, '0');

  return `${parsedColor}${parsedTransparency}`;
};
