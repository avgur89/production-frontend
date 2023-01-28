import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { SidebarItemType } from '../../model/items';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType,
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const { path, text, Icon } = item;

  return (
    <AppLink
      to={path}
      theme={AppLinkTheme.SECONDARY}
      className={clsx(classes.item, { [classes.collapsed]: collapsed })}
    >
      <Icon className={classes.icon} />
      <span className={classes.link}>{t(text)}</span>
    </AppLink>
  );
});
