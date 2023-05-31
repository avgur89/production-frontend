import { memo } from 'react';
import { clsx } from 'clsx';

import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => (
  <div className={clsx(classes.articleDetailsPage, [className])} />
);
export default memo(ArticleDetailsPage);
