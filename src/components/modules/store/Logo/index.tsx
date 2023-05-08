import './index.less';

interface IStoreLogoProps {
	className?: string;
}

const StoreLogo = ({ className }: IStoreLogoProps) => {

  return (
    <div className={`store-logo ${className}`}>
      <div />
    </div>
  );
};

export default StoreLogo;