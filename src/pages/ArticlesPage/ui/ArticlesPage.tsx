import { memo } from 'react';
import { clsx } from 'clsx';

import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
  <div className={clsx(classes.articlesPage, [className])} />
);

export default memo(ArticlesPage);
