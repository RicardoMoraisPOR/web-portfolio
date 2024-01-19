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

/**
 * interpolate between two hexadecimal values by converting them to decimal, calculating the intermediate values, and then converting them back to hexadecimal.
 * @param hexFrom      hex color from
 * @param hexTo        hex color to
 * @param steps        number of intermediate hex values
 * @returns            array of intermediate hex values
 */
export const interpolateHexColors = (
  hexFrom: string,
  hexTo: string,
  steps: IntRange<0, 20>
) => {
  // Convert the hexadecimal values to decimal
  const decimal1 = parseInt(hexFrom.slice(1), 16);
  const decimal2 = parseInt(hexTo.slice(1), 16);

  // Calculate the step size for each color channel
  const stepR = (decimal2 >> 16) - (decimal1 >> 16);
  const stepG = ((decimal2 >> 8) & 0xff) - ((decimal1 >> 8) & 0xff);
  const stepB = (decimal2 & 0xff) - (decimal1 & 0xff);

  // Initialize an array to store the intermediate colors
  const intermediateColors = [];

  // Calculate and store the intermediate colors
  for (let i = 0; i <= steps; i++) {
    const r = ((decimal1 >> 16) + i * (stepR / steps)) & 0xff;
    const g = (((decimal1 >> 8) & 0xff) + i * (stepG / steps)) & 0xff;
    const b = ((decimal1 & 0xff) + i * (stepB / steps)) & 0xff;

    // Convert the decimal values back to hexadecimal
    const interpolatedHex = `#${((r << 16) | (g << 8) | b)
      .toString(16)
      .padStart(6, '0')}`;

    intermediateColors.push(interpolatedHex);
  }

  return intermediateColors;
};

/**
 * transforms the hex color into RGBA in the lottie format.
 * @param hexColor     hex color to be converted
 * @returns            array of RGBA values from hex
 */
export const hexToLottieRGBA = (hexColor: string) => {
  // Remove the hash at the start if it's there
  if (hexColor.startsWith('#')) {
    hexColor = hexColor.slice(1);
  }

  // Split the hex color into RGB components
  const redHex = hexColor.substring(0, 2);
  const greenHex = hexColor.substring(2, 4);
  const blueHex = hexColor.substring(4, 6);

  // Convert hex values to decimal
  const redDecimal = parseInt(redHex, 16);
  const greenDecimal = parseInt(greenHex, 16);
  const blueDecimal = parseInt(blueHex, 16);

  // Normalize the values to be between 0 and 1
  const redNormalized = redDecimal / 255;
  const greenNormalized = greenDecimal / 255;
  const blueNormalized = blueDecimal / 255;

  // Alpha value (1 for fully opaque)
  const alphaValue = 1;

  // Return the RGBA array
  return [redNormalized, greenNormalized, blueNormalized, alphaValue];
};
