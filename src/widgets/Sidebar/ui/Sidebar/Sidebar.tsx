import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={clsx(classes.sidebar, { [classes.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={classes.row}>
        <Button data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>
          {t('Переключити')}
        </Button>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.lang} />
      </div>
    </div>
  );
};
