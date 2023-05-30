import { memo, useMemo, useState } from 'react';
import { clsx } from 'clsx';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={clsx(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
    >
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

      <div className={classes.links}>
        {itemsList}
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.themeSwitcher} />
        <LangSwitcher className={classes.langSwitcher} />
      </div>
    </div>
  );
});
