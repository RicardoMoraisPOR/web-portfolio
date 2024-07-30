import type { SVGProps } from 'react';

const SvgTypescript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <mask id="mask0" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <path
          d="M15.383 11.966h1.492v2.576H12.84v11.462l-.107.03c-.146.039-2.066.039-2.479-.005l-.33-.03V14.543H5.889v-2.576l1.278-.015c.7-.01 2.499-.01 3.996 0 1.498.01 3.393.014 4.22.014m11.39 12.823c-.594.627-1.23.977-2.29 1.264-.462.126-.54.131-1.58.126-1.04-.004-1.123-.005-1.629-.136-1.307-.335-2.362-.991-3.082-1.92-.204-.262-.54-.807-.54-.875 0-.02.05-.063.113-.092.063-.03.194-.112.301-.175s.301-.18.433-.248c.13-.068.51-.292.84-.491.331-.2.633-.36.667-.36s.097.068.145.15c.292.492.973 1.119 1.454 1.333.296.126.953.267 1.269.267.291 0 .826-.126 1.113-.257.306-.141.462-.282.646-.564.127-.2.141-.253.137-.632 0-.35-.02-.447-.117-.608-.272-.447-.642-.68-2.14-1.342-1.545-.685-2.24-1.093-2.804-1.643-.418-.408-.5-.52-.763-1.03-.34-.656-.384-.87-.389-1.847-.005-.686.01-.91.083-1.143.102-.35.432-1.026.583-1.196.311-.364.423-.476.642-.656.66-.544 1.691-.904 2.678-.938.112 0 .481.02.826.044.992.082 1.668.325 2.32.845.49.39 1.234 1.303 1.161 1.425-.049.073-1.988 1.366-2.115 1.405-.077.024-.13-.005-.238-.132-.66-.792-.928-.962-1.57-1-.457-.03-.7.023-1.006.228-.32.213-.476.54-.476.991.004.661.257.972 1.19 1.434.603.297 1.118.54 1.157.54.059 0 1.308.622 1.634.816 1.516.89 2.134 1.804 2.294 3.379.117 1.186-.218 2.27-.948 3.038"
          fill="black"
        />
      </mask>
    </defs>
    <rect
      x="0"
      y="0"
      width="32"
      height="32"
      fill={props.fill}
      mask="url(#mask0)"
    />
  </svg>
);
export default SvgTypescript;
