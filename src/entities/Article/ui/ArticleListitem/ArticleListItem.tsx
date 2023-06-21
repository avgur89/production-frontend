import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';

import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/Article';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';

import classes from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    className,
    article,
    view,
  } = props;

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text className={classes.types} text={article.type.join(', ')} />;
  const views = (
    <>
      <Text className={classes.views} text={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;
    return (
      <div className={clsx(classes.item, [className, classes[view]])}>
        <Card>
          <div className={classes.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={classes.username} text={article.user.username} />
            <Text className={classes.date} text={article.createdAt} />
          </div>
          <Text className={classes.title} title={article.title} />
          {types}
          <img
            className={classes.img}
            src={article.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent className={classes.textBlock} block={textBlock} />
          )}
          <div className={classes.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('Читати далі')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx(classes.item, [className, classes[view]])}>
      <Card onClick={onOpenArticle}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.img}
            src={article.img}
            alt={article.title}
          />
          <Text className={classes.date} text={article.createdAt} />
        </div>
        <div className={classes.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={classes.title} text={article.title} />
      </Card>
    </div>
  );
});
