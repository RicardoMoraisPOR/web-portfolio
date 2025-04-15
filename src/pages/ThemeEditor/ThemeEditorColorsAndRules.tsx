import SvgAlertError from '@assets/Icons/AlertError';
import SvgCheckmark from '@assets/Icons/Checkmark';
import ColorPicker from '@components/ColorPicker/ColorPicker';
import useMediaQuery from '@hooks/useMediaQuery';
import { lightTheme as defaultLight } from '@theme/themes';
import { useCallback } from 'react';
import { DefaultTheme } from 'styled-components';
import {
  ColorsAndRulesWrapper,
  ColorsWrapper,
  RuleItem,
  RuleItemWrapper,
  RulesWrapper,
} from './themeEditor.styles';
import { getThemeRules } from './themeEditor.types';

const ThemeEditorColorsAndRules = ({
  themeType,
  onColorChange,
}: {
  themeType: DefaultTheme['palette'];
  onColorChange: (
    key: keyof DefaultTheme['palette']
  ) => (color: string) => void;
}) => {
  const side = useMediaQuery('max', 'mobile') ? 'top' : 'left';

  const primaryRules = getThemeRules('primary', themeType);
  const secondaryRules = getThemeRules('secondary', themeType);
  const accentRules = getThemeRules('accent', themeType);
  const backgroundRules = getThemeRules('background', themeType);
  const textRules = getThemeRules('text', themeType);

  const getIcon = useCallback((isMet: boolean) => {
    return isMet ? <SvgCheckmark /> : <SvgAlertError />;
  }, []);

  return (
    <ColorsWrapper>
      <ColorsAndRulesWrapper>
        <ColorPicker
          title="Primary"
          side={side}
          color={themeType?.primary}
          defaultColor={defaultLight.palette.primary}
          onColorChange={onColorChange('primary')}
        />
        <RulesWrapper>
          <RuleItemWrapper $valid={primaryRules?.[0]}>
            {getIcon(primaryRules?.[0])}{' '}
            <RuleItem>
              Should have different luminance type (light/dark) from the
              background
            </RuleItem>
          </RuleItemWrapper>
          <RuleItemWrapper $valid={primaryRules?.[1]}>
            {getIcon(primaryRules?.[1])}{' '}
            <RuleItem>Luminance should not reach extreme values</RuleItem>
          </RuleItemWrapper>
        </RulesWrapper>
      </ColorsAndRulesWrapper>
      <ColorsAndRulesWrapper>
        <ColorPicker
          title="Secondary"
          side={side}
          color={themeType?.secondary}
          defaultColor={defaultLight.palette.secondary}
          onColorChange={onColorChange('secondary')}
        />
        <RulesWrapper>
          <RuleItemWrapper $valid={secondaryRules?.[0]}>
            {getIcon(secondaryRules?.[0])}{' '}
            <RuleItem>
              Should have slightly different luminance level from the primary
            </RuleItem>
          </RuleItemWrapper>
          <RuleItemWrapper $valid={secondaryRules?.[1]}>
            {getIcon(secondaryRules?.[1])}{' '}
            <RuleItem>
              Luminance should not reach extreme values and less than primary
            </RuleItem>
          </RuleItemWrapper>
        </RulesWrapper>
      </ColorsAndRulesWrapper>
      <ColorsAndRulesWrapper>
        <ColorPicker
          title="Accent"
          side={side}
          color={themeType?.accent}
          defaultColor={defaultLight.palette.accent}
          onColorChange={onColorChange('accent')}
        />
        <RulesWrapper>
          <RuleItemWrapper $valid={accentRules?.[0]}>
            {getIcon(accentRules?.[0])}{' '}
            <RuleItem>
              Luminance level should be towards mid to slightly high values
            </RuleItem>
          </RuleItemWrapper>
          <RuleItemWrapper $valid={accentRules?.[1]}>
            {getIcon(accentRules?.[1])}{' '}
            <RuleItem>
              Should have slightly different luminance level from the secondary
              and primary
            </RuleItem>
          </RuleItemWrapper>
        </RulesWrapper>
      </ColorsAndRulesWrapper>
      <ColorsAndRulesWrapper>
        <ColorPicker
          title="Background"
          side={side}
          color={themeType?.background}
          defaultColor={defaultLight.palette.background}
          onColorChange={onColorChange('background')}
        />
        <RulesWrapper>
          <RuleItemWrapper $valid={backgroundRules?.[0]}>
            {getIcon(backgroundRules?.[0])}{' '}
            <RuleItem>
              Luminance type (light/dark) should be different from the text
            </RuleItem>
          </RuleItemWrapper>
          <RuleItemWrapper $valid={backgroundRules?.[1]}>
            {getIcon(backgroundRules?.[1])}{' '}
            <RuleItem>
              Luminance level should be towards the high/low values
            </RuleItem>
          </RuleItemWrapper>
        </RulesWrapper>
      </ColorsAndRulesWrapper>
      <ColorsAndRulesWrapper>
        <ColorPicker
          side={side}
          title="Text"
          color={themeType?.text}
          defaultColor={defaultLight.palette.text}
          onColorChange={onColorChange('text')}
        />
        <RulesWrapper>
          <RuleItemWrapper $valid={textRules?.[0]}>
            {getIcon(textRules?.[0])}{' '}
            <RuleItem>
              Luminance type (light/dark) should be different from the
              background
            </RuleItem>
          </RuleItemWrapper>
          <RuleItemWrapper $valid={textRules?.[1]}>
            {getIcon(textRules?.[1])}{' '}
            <RuleItem>
              Luminance level should be towards the high/low values
            </RuleItem>
          </RuleItemWrapper>
          <RuleItemWrapper $valid={textRules?.[2]}>
            {getIcon(textRules?.[2])}{' '}
            <RuleItem>
              Should have a somewhat different luminance level from the
              secondary
            </RuleItem>
          </RuleItemWrapper>
        </RulesWrapper>
      </ColorsAndRulesWrapper>
    </ColorsWrapper>
  );
};

export default ThemeEditorColorsAndRules;
