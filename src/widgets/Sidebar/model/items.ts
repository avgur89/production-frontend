import React from 'react';

import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string,
  text: string,
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Головна сторінка',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.about,
    text: 'Про сайт',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профіль',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статті',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
