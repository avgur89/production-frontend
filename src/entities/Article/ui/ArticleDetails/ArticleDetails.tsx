import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/Article';
import {
  ArticleCodeBlockComponent,
} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';

import classes from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const articleData = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block?.id}
          className={classes.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block?.id}
          className={classes.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block?.id}
          className={classes.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
        <Skeleton className={classes.title} width={300} height={32} />
        <Skeleton className={classes.skeleton} width={600} height={24} />
        <Skeleton className={classes.skeleton} width="100%" height={200} />
        <Skeleton className={classes.skeleton} width="100%" height={200} />
      </>
    );
  }

  if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Виникла помилка при завантаженні сатті')}
      />
    );
  }

  if (articleData) {
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Avatar
            className={classes.avatar}
            size={200}
            src={articleData?.img}
          />
        </div>
        <Text
          className={classes.title}
          title={articleData?.title}
          text={articleData?.subtitle}
          size={TextSize.L}
        />
        <div className={classes.articleInfo}>
          <Icon Svg={EyeIcon} className={classes.icon} />
          <Text text={String(articleData?.views)} />
        </div>
        <div className={classes.articleInfo}>
          <Icon Svg={CalendarIcon} className={classes.icon} />
          <Text text={articleData?.createdAt} />
        </div>
        {articleData?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={clsx(classes.articleDetails, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
