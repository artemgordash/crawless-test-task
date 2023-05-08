import Typography from '@/components/common/Typography';
import { FontWeight } from '@/components/common/Typography/types';
import { cl } from '@/utils/generateClasses';
import React, { PropsWithChildren } from 'react';
import './index.less';

export type IButtonProps<TCustomTagProps = {}> =  PropsWithChildren & TCustomTagProps & {
  className?: string;
	icon?: JSX.Element;
	variant?: 'outlined' | 'text';
	weight?: FontWeight;
	href?: string;
  to?: string;
	active?: boolean;
	Component?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
}

const Button = <TCustomTagProps,>({ 
  children,
  className,
  icon,
  variant,
  weight,
  active,
  Component = 'button',
  ...otherProps
}: IButtonProps<TCustomTagProps>) => {

  return (
    <Component
      className={cl({
        className,
        'button': true,
        [`button--variant-${variant}`]: variant,
        [`button--variant-${variant}--state-active`]: active,
        'button--with-icon': !!icon,
      })}
      {...otherProps}
    >
      {icon}
      <Typography weight={weight}>
        {children}
      </Typography>
    </Component>
  );
};

export default Button;