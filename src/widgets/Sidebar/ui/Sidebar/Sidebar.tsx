import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => setCollapsed((prev) => !prev);

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
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={classes.linkWrapper}
        >
          <HomeIcon className={classes.linkIcon} />
          <span className={classes.link}>{t('Головна сторінка')}</span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={classes.linkWrapper}

        >
          <AboutIcon className={classes.linkIcon} />
          <span className={classes.link}>{t('Про сайт')}</span>
        </AppLink>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.themeSwitcher} />
        <LangSwitcher className={classes.langSwitcher} />
      </div>
    </div>
  );
};
