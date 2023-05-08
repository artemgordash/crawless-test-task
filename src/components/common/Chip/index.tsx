import Typography from '@/components/common/Typography';
import { FontWeight, TypographyVariant } from '@/components/common/Typography/types';
import { cl } from '@/utils/generateClasses';
import { PropsWithChildren } from 'react';
import './index.less';

interface IChipProps extends PropsWithChildren {
  className?: string;
  variant?: 'outlined' | 'filled';
  icon?: JSX.Element;
  typographyVariant?: TypographyVariant;
  weight?: FontWeight;
}

const Chip = ({ children, variant = 'outlined', icon, typographyVariant, weight }: IChipProps) => {

  return (
    <div
      className={cl({
        'chip': true,
        ['chip--variant-filled']: variant === 'filled',
        ['chip--with-icon']: icon,
      })}
    >
      {icon}
      <Typography
        variant={typographyVariant}
        weight={weight}
      >
        {children}
      </Typography>
    </div>
  );
};

export default Chip;