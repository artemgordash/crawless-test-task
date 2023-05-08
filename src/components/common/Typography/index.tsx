import { FontWeight, TypographyVariant } from '@/components/common/Typography/types';
import { cl } from '@/utils/generateClasses';
import { PropsWithChildren } from 'react';
import './index.less';

interface IProps extends PropsWithChildren {
  variant?: TypographyVariant;
  weight?: FontWeight;
  className?: string;
  Component?: keyof JSX.IntrinsicElements;
  noWrap?: boolean;
}

const Typography = ({ variant, weight, children, className, Component = 'span', noWrap }: IProps) => {

  return (
    <Component
      className={cl({
        className,
        'typography': true,
        [`typography--variant-${variant}`]: variant,
        [`typography--weight-${weight}`]: weight,
        ['typography--no-wrap']: noWrap,
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;