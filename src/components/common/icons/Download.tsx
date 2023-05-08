import { SVGProps } from 'react';

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={24}
      height={24}
      fill={'none'}
      {...props}
    >
      <mask
        id={'a'}
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits={'userSpaceOnUse'}
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          d={'M10.5 1.5v12.492l-3.422-3.281-1.031 1.078 5.203 4.998 5.203-4.998-1.031-1.078L12 13.992V1.5h-1.5ZM1.5 15v3.75A2.258 2.258 0 0 0 3.75 21h15A2.258 2.258 0 0 0 21 18.75V15h-1.5v3.75a.74.74 0 0 1-.75.75h-15a.74.74 0 0 1-.75-.75V15H1.5Z'}
        />
      </mask>
      <g mask={'url(#a)'}>
        <path
          d={'M0 0h24v24H0z'} 
        />
      </g>
    </svg>
  );
};

export default DownloadIcon;
