import { memo } from 'react';
import { clsx } from 'clsx';

import { ArticleView } from '../../model/types/Article';

import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import classes from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view,
  } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={clsx(classes.item, [className, classes[view]])}>
        <Card>
          <div className={classes.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton className={classes.username} width={150} height={16} />
            <Skeleton className={classes.date} width={150} height={16} />
          </div>
          <Skeleton className={classes.title} width={250} height={24} />
          <Skeleton className={classes.img} height={200} />

          <div className={classes.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx(classes.item, [className, classes[view]])}>
      <Card>
        <div className={classes.imageWrapper}>
          <Skeleton className={classes.img} width={200} height={200} />
        </div>
        <div className={classes.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton className={classes.title} width={150} height={16} />
      </Card>
    </div>
  );
});
