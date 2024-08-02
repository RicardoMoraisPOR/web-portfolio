import type { SVGProps } from 'react';
import { useTheme } from 'styled-components';

const SvgVite = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="m31.412 5.05-14.428 26.1a.78.78 0 0 1-1.366.005L.905 5.052c-.33-.585.164-1.293.819-1.174L16.167 6.49a.8.8 0 0 0 .278 0l14.141-2.608c.653-.12 1.149.582.826 1.167" />
      <path
        fill={theme.palette.accent}
        d="M23.047.452 12.37 2.57a.39.39 0 0 0-.316.365l-.657 11.222a.4.4 0 0 0 .139.327.39.39 0 0 0 .34.083l2.973-.694a.394.394 0 0 1 .473.466l-.883 4.375a.394.394 0 0 0 .498.46l1.836-.565a.394.394 0 0 1 .497.46l-1.403 6.872c-.088.43.477.664.713.296l.158-.246 8.7-17.566a.395.395 0 0 0-.425-.567l-3.06.598a.395.395 0 0 1-.451-.5L23.499.951a.395.395 0 0 0-.452-.499"
      />
    </svg>
  );
};
export default SvgVite;
