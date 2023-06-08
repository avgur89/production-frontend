import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { clsx } from 'clsx';

import { ArticleDetails } from 'entities/Article';

import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article-details');

  if (!id) {
    return (
      <div className={clsx(classes.articleDetailsPage, [className])}>
        {t('Стаття не знайдена')}
      </div>
    );
  }

  return (
    <div className={clsx(classes.articleDetailsPage, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
