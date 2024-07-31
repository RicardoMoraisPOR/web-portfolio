import type { SVGProps } from 'react';

const SvgStitches = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={35}
      viewBox="0 0 35 34"
      {...props}
      fill="none"
    >
      <circle cx={17.5} cy={17.5} r={14.5} stroke={fill} strokeWidth={2} />
      <path stroke={fill} d="m12.818 31.322 19.053-11M3.318 14.867l19.053-11" />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.653 29.108 17.32-10"
      />
      <path stroke={fill} strokeLinecap="round" d="m9.216 16.081 17.32-10" />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m13.233 14.23 9.277 6.878m-5.813-8.878 9.277 6.878M9.216 16.081l9.83 7.027"
      />
    </svg>
  );
};
export default SvgStitches;
