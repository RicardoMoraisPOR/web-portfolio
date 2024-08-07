import type { SVGProps } from 'react';

const SvgLottieFilesLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 160 160" {...props}>
      <defs>
        <mask id="hole-mask">
          <rect width="100%" height="100%" fill="white" />
          <path
            fill="black"
            d="M119.052 30.826c4.285.634 7.243 4.628 6.61 8.918-.632 4.292-4.618 7.26-8.905 6.624-7.591-1.124-18.963 10.697-31.695 35.003-16.254 31.03-31.382 45.815-47.31 44.635-4.32-.32-7.562-4.088-7.243-8.413s4.079-7.576 8.4-7.256c7.865.583 19.418-11.742 32.264-36.266 16.357-31.229 31.691-45.644 47.879-43.245"
          />
        </mask>
      </defs>
      <g fillRule="evenodd" transform="translate(39.608 43.766)">
        <rect
          width={156.235}
          height={156.644}
          fillRule="nonzero"
          rx={12.688}
          mask="url(#hole-mask)"
        />
      </g>
    </svg>
  );
};

export default SvgLottieFilesLogo;
