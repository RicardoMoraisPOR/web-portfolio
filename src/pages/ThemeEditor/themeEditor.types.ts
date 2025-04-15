import { getLuminanceLevel, isColorLight } from '@theme/appThemeUtils';
import { DefaultTheme } from 'styled-components';

export const checkThemeRulesAreMet = (rules: Array<boolean>) => {
  return !rules.some((value) => value === false);
};

export const getThemeRules = (
  rule: keyof DefaultTheme['palette'],
  theme: DefaultTheme['palette']
): Array<boolean> => {
  const { primary, secondary, accent, text, background } = theme;

  // Check if the colors are light or dark
  const isPrimaryLight = isColorLight(primary);
  const isTextLight = isColorLight(text);
  const isBackgroundLight = isColorLight(background);

  // Calculate luminance level for accent
  const primaryLuminance = getLuminanceLevel(primary);
  const secondaryLuminance = getLuminanceLevel(secondary);
  const accentLuminance = getLuminanceLevel(accent);
  const backgroundLuminance = getLuminanceLevel(background);
  const textLuminance = getLuminanceLevel(text);

  switch (rule) {
    case 'primary':
      return [
        isPrimaryLight !== isBackgroundLight, // Rule 1: Different luminance type from background
        primaryLuminance > 15 && primaryLuminance < 235, // Rule 2: Avoid extreme luminance values
      ];

    case 'secondary':
      return [
        Math.abs(secondaryLuminance - primaryLuminance) >= 15, // Rule 1: Slightly different luminance from primary
        secondaryLuminance > 15 && secondaryLuminance < 235, // Rule 2: Avoid extreme luminance values
      ];

    case 'accent':
      return [
        accentLuminance > 100 && accentLuminance < 200, // Rule 1: Mid to slightly high luminance values
        Math.abs(accentLuminance - secondaryLuminance) >= 15 &&
          Math.abs(accentLuminance - primaryLuminance) >= 15, // Rule 2: Slightly different from secondary
      ];

    case 'background':
      return [
        isBackgroundLight !== isTextLight, // Rule 1: Different luminance type from text
        backgroundLuminance < 50 || backgroundLuminance > 220, // Rule 2: Towards high or low luminance values
      ];

    case 'text':
      return [
        isBackgroundLight !== isTextLight, // Rule 1: Different luminance type from background
        textLuminance < 50 || textLuminance > 220, // Rule 2: Towards high or low luminance values
        Math.abs(textLuminance - secondaryLuminance) >= 15, // Rule 3: Different enough from secondary
      ];

    default:
      return [false];
  }
};
