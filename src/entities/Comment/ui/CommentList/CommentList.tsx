import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

import { Comment } from '../..';
import { CommentItem } from '../CommentItem/CommentItem';

import { Text } from 'shared/ui/Text/Text';

import classes from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation('article-details');
  const {
    className,
    comments,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={clsx(classes.list, [className])}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </div>
    );
  }

  return (
    <div className={clsx(classes.list, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentItem
            key={comment.id}
            isLoading={isLoading}
            className={classes.comment}
            comment={comment}
          />
        ))
        : <Text text={t('Коментарі відсутні')} />}
    </div>
  );
});
