import { CSSProperties, useMemo } from 'react';
import { clsx } from 'clsx';

import { Mods } from 'shared/lib/classNames/classNames';

import classes from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt,
  } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      className={clsx(classes.avatar, mods, [className])}
      alt={alt}
    />
  );
};
