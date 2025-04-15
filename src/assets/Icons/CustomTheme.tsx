import type { SVGProps } from 'react';

const SvgCustomTheme = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M11 21L11 15L13 15L13 17L21 17L21 19L13 19L13 21L11 21M3 19L3 17L9 17L9 19L3 19M7 15L7 13L3 13L3 11L7 11L7 9L9 9L9 15L7 15M11 13L11 11L21 11L21 13L11 13M15 9L15 3L17 3L17 5L21 5L21 7L17 7L17 9L15 9M3 7L3 5L13 5L13 7L3 7" />
  </svg>
);

export default SvgCustomTheme;
