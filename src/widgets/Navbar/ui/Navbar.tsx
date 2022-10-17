import { clsx } from 'clsx';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={clsx(classes.navbar, [className])}>
    <div className={classes.links}>
      /
    </div>
  </div>
);
