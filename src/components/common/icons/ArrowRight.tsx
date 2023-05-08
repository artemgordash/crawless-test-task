interface IArrowRightIconProps {
	onClick?: () => void;
	className?: string;
}

const ArrowRightIcon = ({ onClick, className }: IArrowRightIconProps) => {

  return (
    <svg
      width={48}
      height={48}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      className={className}
      onClick={onClick}
      transform={'rotate(180)'}
    >
      <g clipPath={'url(#prefix__clip0_7878_188573)'}>
        <mask
          id={'prefix__a'}
          style={{
            maskType: 'alpha',
          }}
          maskUnits={'userSpaceOnUse'}
          x={8}
          y={8}
          width={32}
          height={32}
        >
          <path
            d={'M21.29 10.047L33.968 23l-12.68 12.945-1.437-1.39L31.172 23l-11.32-11.547 1.437-1.406z'}
            fill={'#A3A3B1'}
          />
        </mask>
        <g mask={'url(#prefix__a)'}>
          <path
            fill={'#A3A3B1'}
            d={'M8 8h32v32H8z'} 
          />
        </g>
      </g>
      <defs>
        <clipPath id={'prefix__clip0_7878_188573'}>
          <path
            fill={'#fff'}
            transform={'translate(8 8)'}
            d={'M0 0h32v32H0z'} 
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowRightIcon;