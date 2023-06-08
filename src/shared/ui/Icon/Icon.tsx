import React, { memo } from 'react';
import { clsx } from 'clsx';

import classes from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={clsx(classes.icon, [className])} />
  );
});
