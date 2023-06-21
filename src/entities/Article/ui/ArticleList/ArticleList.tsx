import { memo } from 'react';
import { clsx } from 'clsx';

import { Article, ArticleView } from '../..';
import { ArticleListItem } from '../ArticleListitem/ArticleListItem';

import {
  ArticleListItemSkeleton,
} from 'entities/Article/ui/ArticleListitem/ArticleListItemSkeleton';

import classes from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton className={classes.card} key={index} view={view} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.PLATE,
  } = props;

  if (isLoading) {
    return (
      <div className={clsx([className, classes[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      className={classes.card}
      key={article.id}
      article={article}
      view={view}
    />
  );

  return (
    <div className={clsx([className, classes[view]])}>
      {
        articles.length > 0
          ? articles.map((article: Article) => renderArticle(article))
          : null
      }
    </div>
  );
});
