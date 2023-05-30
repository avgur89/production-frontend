import { memo } from 'react';
import { clsx } from 'clsx';

import { Mods } from 'shared/lib/classNames/classNames';

import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  const mods: Mods = {
    [classes[theme]]: true,
    [classes[align]]: true,
  };

  return (
    <div className={clsx(classes.wrapper, mods, [className, classes[theme]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
