import type { SVGProps } from 'react';
import { CSSObject } from 'styled-components';

type HatLogoProps = SVGProps<SVGSVGElement> & {
  secondaryfill: CSSObject['fill'];
};

const HatLogo = (props: HatLogoProps) => {
  const { secondaryfill, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={120}
      height={86}
      viewBox="0 0 120 86"
      {...props}
      fill="none"
    >
      <path
        fill={fill}
        fillOpacity={0.5}
        d="M92.525 70.2V9.561a3.99 3.99 0 0 0-2.756-3.8C85.38 4.333 75.664 1.931 60 1.931s-25.38 2.4-29.769 3.828a3.99 3.99 0 0 0-2.757 3.8V70.2S37.722 75.055 60 75.055 92.525 70.2 92.525 70.2"
      />
      <path
        fill={fill}
        fillOpacity={0.5}
        d="M4.106 71.632C10.919 66.888 27.632 60.44 60 75.055c-32.367 14.614-49.08 8.167-55.893 3.423a4.157 4.157 0 0 1-.001-6.846"
      />
      <path
        fill={secondaryfill}
        fillOpacity={0.5}
        d="M27.474 70.2S37.722 75.055 60 75.055 92.525 70.2 92.525 70.2v-14S82.278 61.055 60 61.055 27.474 56.2 27.474 56.2z"
      />
      <path
        fill={fill}
        fillOpacity={0.5}
        d="M115.894 71.632C109.081 66.888 92.368 60.44 60 75.055c32.367 14.614 49.08 8.167 55.893 3.423a4.15 4.15 0 0 0 1.8-3.423 4.16 4.16 0 0 0-1.799-3.423"
      />
    </svg>
  );
};

export default HatLogo;
