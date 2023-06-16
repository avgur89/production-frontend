import { memo } from 'react';
import { clsx } from 'clsx';

import { Comment } from '../..';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import classes from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={clsx(classes.item, [className, classes.loading])}>
        <div className={classes.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={classes.username} width={100} height={16} />
        </div>
        <Skeleton className={classes.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={clsx(classes.item, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={classes.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={classes.username} title={comment.user.username} />
      </AppLink>
      <Text className={classes.text} text={comment.text} />
    </div>
  );
});
