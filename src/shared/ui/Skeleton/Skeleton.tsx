import { CSSProperties, memo } from 'react';
import { clsx } from 'clsx';

import classes from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={clsx(classes.skeleton, [className])}
      style={styles}
    />
  );
});
