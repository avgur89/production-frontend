import { HTMLAttributes, memo, ReactNode } from 'react';
import { clsx } from 'clsx';

import classes from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    ...otherProps
  } = props;

  return (
    <div className={clsx(classes.card, [className])} {...otherProps}>
      {children}
    </div>
  );
});
