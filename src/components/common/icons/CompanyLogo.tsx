const CompanyLogo = () => {

  return (
    <svg
      width={16}
      height={16}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={'M1 9v5h5V9H1z'}
        fill={'#85A5FF'} 
      />
      <path
        d={'M11.5 8L8 11.5l3.5 3.536L15 11.5 11.5 8z'}
        fill={'#FF8979'} 
      />
      <path
        fill={'#FF8979'}
        d={'M11 7h1v3h-1z'} 
      />
      <path
        fill={'#FA541C'}
        d={'M3 5h1v3H3z'} 
      />
      <path
        fill={'#FF85C0'}
        d={'M10 3v1H7V3z'} 
      />
      <circle
        cx={11.5}
        cy={3.5}
        r={2.5}
        fill={'#FF85C0'} 
      />
      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={'M3.5 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'}
        fill={'#FA541C'}
      />
    </svg>
  );
};

export default CompanyLogo;
