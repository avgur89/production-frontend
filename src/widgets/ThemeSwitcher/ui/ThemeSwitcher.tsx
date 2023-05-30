import { memo } from 'react';
import { clsx } from 'clsx';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={clsx(classes.themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
