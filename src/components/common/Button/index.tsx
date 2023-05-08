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
  disableBorderRadius?: boolean;
  to?: string;
	active?: boolean;
	Component?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
  endIcon?: JSX.Element;
}

const Button = <TCustomTagProps,>({ 
  children,
  className,
  icon,
  variant,
  disableBorderRadius,
  weight,
  active,
  endIcon,
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
        'button--disable-border-radius': disableBorderRadius,
        'button--with-end-icon': !!endIcon,
      })}
      {...otherProps}
    >
      {icon}
      <Typography weight={weight}>
        {children}
      </Typography>
      {endIcon}
    </Component>
  );
};

export default Button;