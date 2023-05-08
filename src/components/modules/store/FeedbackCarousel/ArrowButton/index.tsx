import { PropsWithChildren } from 'react';
import './index.less';
import { cl } from '@/utils/generateClasses';

interface IArrowButtonProps extends PropsWithChildren {
  active?: boolean;
  onClick?: () => void;
}

const ArrowButton = ({ children, active, onClick }: IArrowButtonProps) => {

  return (
    <div
      onClick={onClick}
      className={cl({
        'arrow-button': true,
        'arrow-button--active': active,
      })}
    >
      {children}
    </div>
  );
};

export default ArrowButton;