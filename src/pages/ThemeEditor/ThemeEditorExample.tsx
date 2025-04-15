import FlareCard from '@components/FlareCard/FlareCard';
import GlowEffect from '@components/GlowEffect/GlowEffect';
import { SiReact } from '@icons-pack/react-simple-icons';
import { DefaultTheme } from 'styled-components';
import {
  ThemeExample,
  ThemeExampleCard,
  ThemeExampleText,
} from './themeEditor.styles';

const ThemeEditorExample = ({
  themeType,
}: {
  themeType: DefaultTheme['palette'];
}) => {
  return (
    <ThemeExample>
      <ThemeExampleText>
        <SiReact fill={themeType.accent} />
        Lorem ipsum dolor sit amet
      </ThemeExampleText>
      <GlowEffect $transparency={20}>
        <FlareCard $borderRadius={4} $intensity={40}>
          <ThemeExampleCard>
            <SiReact fill={themeType.primary} />
            Hover me to see the flare
          </ThemeExampleCard>
        </FlareCard>
      </GlowEffect>
    </ThemeExample>
  );
};

export default ThemeEditorExample;
