import { cl } from '@/utils/generateClasses';
import { PropsWithChildren } from 'react';
import './index.less';

interface IIconButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const IconButton = ({ className, onClick, children }: IIconButtonProps) => {

  return (
    <div
      className={cl({
        'icon-button': true,
        className,
      })} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default IconButton;