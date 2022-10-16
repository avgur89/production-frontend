import { useState } from 'react';
import { clsx } from 'clsx';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={clsx(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
      <div className={classes.row}>
        <Button
          data-testid="sidebar-toggle"
          className={classes.collapsedBtn}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          onClick={onToggle}
          size={ButtonSize.L}
          square
        >
          {collapsed ? '>' : '<'}
        </Button>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.themeSwitcher} />
        <LangSwitcher className={classes.langSwitcher} />
      </div>
    </div>
  );
};
